/* eslint-disable react-native/no-raw-text */

/* eslint-disable import/no-default-export */
import { createStyleSheet, useStyles } from 'react-native-unistyles';

import { Stack } from '@grapp/stacks';

import { Link } from 'expo-router';

import { Screen } from './components/Screen';

const Page = () => {
  const { styles } = useStyles(stylesheet);
  return (
    <Screen space={4} paddingX={4}>
      <Screen.ScrollView>
        <Stack space={2}>
          <Link href="/bleed" style={styles.link}>
            Bleed
          </Link>
          <Link href="/columns" style={styles.link}>
            Columns
          </Link>
          <Link href="/float-box" style={styles.link}>
            FloatBox
          </Link>
          <Link href="/inline" style={styles.link}>
            Inline
          </Link>
          <Link href="/inset" style={styles.link}>
            Inset
          </Link>
          <Link href="/grid" style={styles.link}>
            Grid
          </Link>
          <Link href="/rows" style={styles.link}>
            Rows
          </Link>
          <Link href="/stack" style={styles.link}>
            Stack
          </Link>
          <Link href="/tiles" style={styles.link}>
            Tiles
          </Link>
          <Link href="/playground" style={styles.link}>
            Playground
          </Link>
        </Stack>
      </Screen.ScrollView>
    </Screen>
  );
};

const stylesheet = createStyleSheet({
  link: {
    color: '#0B0F1A',
  },
});

export default Page;
