import styles from './Placeholder.module.css';

import * as React from 'react';

import { Box } from '@grapp/stacks';

import { useTheme } from 'nextra-theme-docs';

type Props = {
  readonly width?: number;
  readonly height?: number;
  readonly label?: string;
  readonly flex?: 'fluid' | 'content';
};

export const Placeholder = (props: Props) => {
  const { label, width, height = 46, flex } = props;

  const theme = useTheme();

  return (
    <Box
      height={flex ? undefined : height}
      width={width}
      flex={flex}
      alignX="center"
      alignY="center"
      backgroundColor={
        theme.resolvedTheme === 'dark' ? 'rgba(255, 137, 175, 0.18)' : 'rgba(11, 15, 26, 0.14)'
      }
    >
      {label && <span className={styles.label}>{label}</span>}
    </Box>
  );
};

Placeholder.displayName = 'Placeholder';
