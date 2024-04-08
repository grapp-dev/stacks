import styles from './Example.module.css';

import * as React from 'react';

import { NoSSR } from '@grapp/nextra-theme';

import { Code, Pre } from 'nextra/components';
import { useData } from 'nextra/data';
import reactElementToJSXString from 'react-element-to-jsx-string';
import {
  getHighlighter as getHighlighterShiki,
  type Highlighter,
  type Lang,
  type Theme,
} from 'shiki';

import { Device } from './Device';

const langs: Lang[] = ['tsx'];
const theme: Theme = 'css-variables';

const highlighterCache = new Map<string, Promise<Highlighter>>();

const getHighlighter = async () => {
  const key = [theme, ...langs].join('-');
  const highlighter = highlighterCache.get(key);
  if (highlighter) return await highlighter;

  const highlighterPromise = getHighlighterShiki({
    theme,
    langs,
  });

  highlighterCache.set(key, highlighterPromise);
  return await highlighterPromise;
};

const highlight = async (highlighter: Highlighter, code: string, lang: Lang) => {
  return highlighter.codeToHtml(code, { lang, theme });
};

const transformHtmlCode = (input: string) => {
  return (
    input
      // @ts-expect-error FIXME:
      .replaceAll('</code>', '')
      .replaceAll('<code>', '')
      .replace(/<pre [^>]*>/gi, '')
      .replace('</pre>', '')
      .replaceAll('<span class="line"></span>', '<span class="line"> </span>')
  );
};

type Props = {
  readonly title?: string;
  readonly example: string;
  readonly frame?: boolean;
  readonly expandable?: boolean;
};

export const Example = (props: Props) => {
  const { example, title, frame = true, expandable = true } = props;

  const [isExpanded, setExpanded] = React.useState(!expandable);
  const handleExpand = React.useCallback(() => setExpanded(value => !value), []);

  const { examples } = useData();
  const code = examples[example];

  const html = transformHtmlCode(code.html);

  const [component, setComponent] = React.useState(<></>);

  React.useEffect(() => {
    const importComponent = async () => {
      const mod = await import(`../examples/${example}.tsx`);
      const Component = mod.default;
      setComponent(<Component />);
    };

    importComponent();
  }, []);

  return (
    <div className={styles.root}>
      <div
        className={`${styles.header} nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400`}
      >
        <h4 className="nx-font-semibold nx-tracking-tight nx-text-slate-900 dark:nx-text-slate-100 nx-text-2xl nx-border-neutral-200/70">
          {title}
        </h4>
      </div>
      <div
        className={`${styles.body} nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400`}
      >
        {frame ? <Device>{component}</Device> : <NoSSR>{component}</NoSSR>}
      </div>
      <div
        className={`${isExpanded ? styles.codeExpanded : styles.code} nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400`}
      >
        <Pre data-theme="default" data-language="tsx" hasCopyCode={true}>
          <Code data-theme={theme} data-language="tsx" dangerouslySetInnerHTML={{ __html: html }} />
        </Pre>
      </div>
      {expandable ? (
        <div
          className={`${styles.expand} nx-border-neutral-200/70 contrast-more:nx-border-neutral-400 dark:nx-border-primary-100/10 contrast-more:dark:nx-border-neutral-400`}
        >
          <a
            onClick={handleExpand}
            className="nx-flex nx-rounded nx-px-2 nx-py-1.5 nx-text-sm nx-transition-colors [word-break:break-word] nx-cursor-pointer [-webkit-tap-highlight-color:transparent] [-webkit-touch-callout:none] contrast-more:nx-border nx-text-gray-500 hover:nx-bg-gray-100 hover:nx-text-gray-900 dark:nx-text-neutral-400 dark:hover:nx-bg-primary-100/5 dark:hover:nx-text-gray-50 contrast-more:nx-text-gray-900 contrast-more:dark:nx-text-gray-50 contrast-more:nx-border-transparent contrast-more:hover:nx-border-gray-900 contrast-more:dark:hover:nx-border-gray-50"
          >
            {isExpanded ? 'Collapse code' : 'Expand code'}
          </a>
        </div>
      ) : null}
    </div>
  );
};

export const getExamples = async (files: readonly string[]) => {
  const examples = {};
  const highlighter = await getHighlighter();

  for (const file of files) {
    const raw = await import(`../examples/${file}.tsx`);
    const html = await highlight(
      highlighter,
      reactElementToJSXString(raw.default(), {
        useBooleanShorthandSyntax: false,
        maxInlineAttributesLineLength: 120,
        sortProps: false,
      }),
      'tsx',
    );
    examples[file] = {
      html,
    };
  }

  return {
    props: {
      ssg: {
        examples,
      },
    },
  };
};
