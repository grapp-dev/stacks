/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import * as React from 'react'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import clsx from 'clsx'
import Translate from '@docusaurus/Translate'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import BrowserOnly from '@docusaurus/BrowserOnly'
import usePrismTheme from '@theme/hooks/usePrismTheme'
import styles from './styles.module.css'
import useIsBrowser from '@docusaurus/useIsBrowser'

function Header({ children, onPress }) {
  return (
    <div className={clsx(styles.playgroundHeader)} onClick={onPress}>
      {children}
    </div>
  )
}

function LivePreviewLoader() {
  // Is it worth improving/translating?
  return <div>Loading...</div>
}

function ResultWithHeader() {
  return (
    <>
      {/* https://github.com/facebook/docusaurus/issues/5747 */}
      <div className={styles.playgroundPreview}>
        <BrowserOnly fallback={<LivePreviewLoader />}>
          {() => (
            <>
              <LivePreview />
              <LiveError />
            </>
          )}
        </BrowserOnly>
      </div>
    </>
  )
}

function ThemedLiveEditor(props) {
  const { isCodeVisible } = props
  const isBrowser = useIsBrowser()
  return (
    <LiveEditor
      // We force remount the editor on hydration,
      // otherwise dark prism theme is not applied
      key={isBrowser}
      className={clsx(styles.playgroundEditor, isCodeVisible && styles.playgroundEditorVisible)}
    />
  )
}

function EditorWithHeader(props) {
  const { onPress, isCodeVisible } = props
  return (
    <>
      <Header onPress={onPress}>
        <Translate
          id="theme.Playground.liveEditor"
          description="The live editor label of the live codeblocks"
        >
          {`${isCodeVisible ? 'Hide code' : 'Show code'} (Live Editor)`}
        </Translate>
      </Header>
      <ThemedLiveEditor isCodeVisible={isCodeVisible} />
    </>
  )
}

export default function Playground({ children, transformCode, ...props }) {
  const {
    siteConfig: {
      themeConfig: {
        liveCodeBlock: { playgroundPosition },
      },
    },
  } = useDocusaurusContext()
  const prismTheme = usePrismTheme()

  const [isCodeVisible, setCodeVisibility] = React.useState(props.showCode)

  const handleCodeVisibility = React.useCallback(() => {
    setCodeVisibility(v => !v)
  }, [])

  return (
    <div className={styles.playgroundContainer}>
      <LiveProvider
        code={children.replace(/\n$/, '')}
        transformCode={transformCode || (code => `${code};`)}
        theme={prismTheme}
        noInline={true}
        {...props}
      >
        {playgroundPosition === 'top' ? (
          <>
            <ResultWithHeader />
            <EditorWithHeader />
          </>
        ) : (
          <>
            <EditorWithHeader onPress={handleCodeVisibility} isCodeVisible={isCodeVisible} />
            <ResultWithHeader />
          </>
        )}
      </LiveProvider>
    </div>
  )
}
