import React from 'react'
import { StyleSheet } from 'react-native'
import BrowserOnly from '@docusaurus/BrowserOnly'
import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'

import Card from './components/Card'
import Hero from './components/Hero'
import Row from './components/Row'
import Columns from './components/Columns'
import Column from './components/Column'
import Features from './components/Features'
import Feature from './components/Feature'
import Title from './components/Title'
import Page from './components/Page'
import Button from './components/Button'

import * as RN from '../../..'

const styles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(97, 0, 255, 0.06)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(97, 0, 255, 0.1)',
  },
})

const Placeholder = props => {
  const { width, height = 18, borderRadius = 0 } = props

  return <RN.Box style={[styles.root, { width, height, borderRadius }]} />
}

const FluidPlaceholder = () => {
  return <RN.Box flex="fluid" style={styles.root} />
}

const Hook = props => {
  const { name, to } = props
  return (
    <Feature>
      <Link to={useBaseUrl(`api/hooks/${to}`)}>{name}</Link>
    </Feature>
  )
}

const Home = () => {
  React.useLayoutEffect(() => {
    localStorage.setItem('theme', 'light')
    document.querySelector('.navbar__brand').style = 'display: none;'
  }, [])

  return (
    <RN.StacksProvider>
      <Page>
        <Row alignX="center" marginBottom={3}>
          <Hero logo="img/hero-logo.png" api="api/components/box" />
        </Row>
        <Row alignX="center" marginBottom={3}>
          <Features>
            <Feature>
              👨‍🎨 think like a designer, get rid of margins* and distribute your content evenly
            </Feature>
            <Feature>✨ supports TypeScript and Flow</Feature>
            <Feature>
              👀 use a <Link to={useBaseUrl('api/other/stacks-provider#debug')}>debug mode</Link>{' '}
              and a <Link to={useBaseUrl('api/other/grid')}>design grid</Link> to quickly
              investigate visual issues
            </Feature>
            <Feature>
              🚀 compatible with React Native and{' '}
              <Link to={useBaseUrl('docs/getting-started/react-native-web')}>React Native Web</Link>{' '}
              (TypeScript, Flow and ReScript)
            </Feature>
          </Features>
        </Row>
        <Row marginBottom={3}>
          <Row marginBottom={2} alignX="center">
            <Title>Components</Title>
          </Row>
          <Row paddingX={1}>
            <Columns space={1} marginBottom={1}>
              <Column>
                <Card title="Stack" to="api/components/stack">
                  <RN.Stack space={1}>
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                  </RN.Stack>
                </Card>
              </Column>
              <Column>
                <Card title="Columns" to="api/components/columns">
                  <RN.Stack space={1}>
                    <RN.Columns space={1}>
                      <Placeholder />
                      <Placeholder />
                      <Placeholder />
                    </RN.Columns>
                    <RN.Columns space={1}>
                      <Placeholder />
                      <Placeholder />
                    </RN.Columns>
                    <RN.Columns space={1} alignX="between">
                      <RN.Column width="content">
                        <Placeholder width={40} />
                      </RN.Column>
                      <RN.Column width="content">
                        <Placeholder width={80} />
                      </RN.Column>
                      <RN.Column width="content">
                        <Placeholder width={40} />
                      </RN.Column>
                    </RN.Columns>
                  </RN.Stack>
                </Card>
              </Column>
              <Column>
                <Card title="Rows" to="api/components/rows">
                  <RN.Rows space={1}>
                    <RN.Row height="content">
                      <Placeholder />
                    </RN.Row>
                    <FluidPlaceholder />
                    <RN.Row height="content">
                      <Placeholder />
                    </RN.Row>
                  </RN.Rows>
                </Card>
              </Column>
            </Columns>
          </Row>
          <Row paddingX={1}>
            <Columns space={1} marginBottom={1}>
              <Column>
                <Card title="Tiles" to="api/components/tiles">
                  <RN.Tiles space={1} columns={3}>
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                    <Placeholder />
                  </RN.Tiles>
                </Card>
              </Column>
              <Column>
                <Card title="Inline" to="api/components/inline">
                  <RN.Inline space={1}>
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
                  </RN.Inline>
                </Card>
              </Column>
              <Column>
                <Card title="Box" to="api/components/box">
                  <RN.Stack space={1}>
                    <RN.Box flex="fluid">
                      <Placeholder />
                    </RN.Box>
                    <RN.Box direction="row">
                      <RN.Box flex="1/2">
                        <Placeholder />
                      </RN.Box>
                    </RN.Box>
                    <RN.Box direction="row">
                      <RN.Box flex="1/4">
                        <Placeholder />
                      </RN.Box>
                    </RN.Box>
                  </RN.Stack>
                </Card>
              </Column>
            </Columns>
          </Row>
          <Row paddingX={1}>
            <Columns space={1} marginBottom={1}>
              <Column>
                <Card title="Inset" to="api/components/inset">
                  <RN.Stack space={1}>
                    <Placeholder />
                    <RN.Inset horizontal={6}>
                      <Placeholder />
                    </RN.Inset>
                    <Placeholder />
                  </RN.Stack>
                </Card>
              </Column>
              <Column>
                <Card title="Bleed" to="api/components/bleed">
                  <RN.Stack space={1}>
                    <Placeholder />
                    <RN.Bleed horizontal={3}>
                      <Placeholder />
                    </RN.Bleed>
                    <Placeholder />
                  </RN.Stack>
                </Card>
              </Column>
              <Column>
                <Card title="FillView" to="api/components/fill-view">
                  <RN.FillView alignX="center" alignY="center">
                    <Placeholder height={32} width={32} borderRadius={16} />
                  </RN.FillView>
                </Card>
              </Column>
            </Columns>
          </Row>
        </Row>
        <Row alignX="center" paddingX={1} marginBottom={3}>
          <Row marginBottom={2} alignX="center">
            <Title>Hooks</Title>
          </Row>
          <Columns space={4} alignX="center" paddingX={2}>
            <Column>
              <Hook name="useCurrentBreakpoint" to="use-current-breakpoint" />
              <Hook name="useDebugStyle" to="use-debug-style" />
            </Column>
            <Column>
              <Hook name="useResponsiveProp" to="use-responsive-prop" />
              <Hook name="useWindowDimensions" to="use-window-dimensions" />
            </Column>
            <Column>
              <Hook name="useSpacing" to="use-spacing" />
              <Hook name="useSpacingHelpers" to="use-spacing-helpers" />
            </Column>
          </Columns>
        </Row>
        <Row alignX="center" paddingX={1}>
          <Feature>
            <strong>*</strong>Read an excellent{' '}
            <Link to="https://mxstbr.com/thoughts/margin">article</Link> by{' '}
            <Link to="https://github.com/mxstbr">Max Stoiber</Link> about why margins are considered
            harmful.
          </Feature>
        </Row>
      </Page>
    </RN.StacksProvider>
  )
}

export default Home
