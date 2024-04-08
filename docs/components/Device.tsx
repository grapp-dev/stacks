import styles from './Device.module.css';

import * as React from 'react';

type Props = React.PropsWithChildren<{
  readonly title?: string;
}>;

export const Device = (props: Props) => {
  const { children, title } = props;

  return (
    <div className={styles.root}>
      <div className={styles.iphoneX}>
        <div className={styles.camera} />
        <div className={styles.speaker} />
        <div className={styles.screen}>
          <div className={styles.content}>
            {title && (
              <h2
                className={`${styles.title} nx-font-semibold nx-tracking-tight nx-text-slate-900 nx-mb-10 nx-border-b nx-pb-1 nx-text-3xl nx-border-neutral-200/70 contrast-more:nx-border-neutral-400`}
              >
                {title}
              </h2>
            )}
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
