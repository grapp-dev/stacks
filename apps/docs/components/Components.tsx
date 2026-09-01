import styles from './Components.module.css';

import * as React from 'react';

import {
  Bleed,
  Box,
  Column,
  Columns,
  FloatBox,
  Inline,
  Inset,
  Row,
  Rows,
  Stack,
  Tiles,
} from '@grapp/stacks';

import { Link } from 'nextra-theme-docs';
import { Cards } from 'nextra/components';

type Props = {
  readonly num?: number;
};

type CardProps = {
  readonly title: string;
  readonly to: string;
};

const Card = (props: React.PropsWithChildren<CardProps>) => {
  const { children, title, to } = props;
  return (
    <Link href={to} className={styles.link}>
      <div
        className={`${styles.card} nextra-card nx-group nx-flex nx-flex-col nx-justify-start nx-overflow-hidden nx-rounded-lg nx-border nx-border-gray-200 nx-text-current nx-no-underline dark:nx-shadow-none hover:nx-shadow-gray-100 dark:hover:nx-shadow-none nx-shadow-gray-100 active:nx-shadow-sm active:nx-shadow-gray-200 nx-transition-all nx-duration-200 hover:nx-border-gray-300 nx-bg-transparent nx-shadow-sm dark:nx-border-neutral-800 hover:nx-bg-slate-50 hover:nx-shadow-md dark:hover:nx-border-neutral-700 dark:hover:nx-bg-neutral-900`}
      >
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{children}</div>
      </div>
    </Link>
  );
};

type PlaceholderProps = {
  readonly width?: number;
  readonly height?: number;
  readonly borderRadius?: number;
};

const Placeholder = (props: PlaceholderProps) => {
  const { width, height = 18, borderRadius = 0 } = props;

  return (
    <Box
      backgroundColor="rgba(102, 118, 129, 0.3)"
      width={width}
      height={height}
      borderRadius={borderRadius}
    />
  );
};

const FluidPlaceholder = () => {
  return <Box flex="fluid" backgroundColor="rgba(102, 118, 129, 0.3)" />;
};

export const Components = (props: Props) => {
  const { num } = props;
  return (
    <div className={styles.root}>
      <Cards num={num}>
        <Card title="Box" to="/docs/components/box">
          <Stack space={1}>
            <Box flex="fluid">
              <Placeholder />
            </Box>
            <Box direction="row">
              <Box flex="1/2">
                <Placeholder />
              </Box>
            </Box>
            <Box direction="row">
              <Box flex="1/4">
                <Placeholder />
              </Box>
            </Box>
          </Stack>
        </Card>
        <Card title="Bleed" to="/docs/components/bleed">
          <Stack space={1}>
            <Placeholder />
            <Bleed horizontal={3}>
              <Placeholder />
            </Bleed>
            <Placeholder />
          </Stack>
        </Card>
        <Card title="Columns" to="/docs/components/columns">
          <Stack space={1}>
            <Columns space={1}>
              <Placeholder />
              <Placeholder />
              <Placeholder />
            </Columns>
            <Columns space={1}>
              <Placeholder />
              <Placeholder />
            </Columns>
            <Columns space={1} alignX="between">
              <Column flex="content">
                <Placeholder width={40} />
              </Column>
              <Column flex="content">
                <Placeholder width={80} />
              </Column>
              <Column flex="content">
                <Placeholder width={40} />
              </Column>
            </Columns>
          </Stack>
        </Card>
        <Card title="FloatBox" to="/docs/components/float-box">
          <FloatBox alignX="center" alignY="center" offset={0}>
            <Placeholder height={32} width={32} borderRadius={16} />
          </FloatBox>
        </Card>
        <Card title="Inline" to="/docs/components/inline">
          <Inline space={1}>
            <Placeholder width={30} />
            <Placeholder width={90} />
            <Placeholder width={30} />
            <Placeholder width={60} />
            <Placeholder width={90} />
            <Placeholder width={60} />
            <Placeholder width={30} />
            <Placeholder width={60} />
            <Placeholder width={60} />
            <Placeholder width={30} />
          </Inline>
        </Card>
        <Card title="Inset" to="/docs/components/inset">
          <Stack space={1}>
            <Placeholder />
            <Inset horizontal={6}>
              <Placeholder />
            </Inset>
            <Placeholder />
          </Stack>
        </Card>
        <Card title="Rows" to="/docs/components/rows">
          <Rows space={1}>
            <Row flex="content">
              <Placeholder />
            </Row>
            <FluidPlaceholder />
            <Row flex="content">
              <Placeholder />
            </Row>
          </Rows>
        </Card>
        <Card title="Stack" to="/docs/components/stack">
          <Stack space={1}>
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </Stack>
        </Card>
        <Card title="Tiles" to="/docs/components/tiles">
          <Tiles space={1} columns={3}>
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
            <Placeholder />
          </Tiles>
        </Card>
      </Cards>
    </div>
  );
};
