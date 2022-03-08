import React from 'react'
import { StyleSheet } from 'react-native'
import BrowserOnly from '@docusaurus/BrowserOnly'
import clsx from 'clsx'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'
import {
  Stack,
  Box,
  Columns,
  Column,
  Rows,
  Row,
  Tiles,
  Inline,
  Inset,
  Bleed,
  FillView,
  StacksProvider,
} from '../../..'

const rnStyles = StyleSheet.create({
  root: {
    backgroundColor: 'rgba(97, 0, 255, 0.06)',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(97, 0, 255, 0.1)',
  },
  placeholderContainer: {
    backgroundColor: 'rgba(97, 0, 255, 0.03)',
  },
})

const Placeholder = props => {
  const { width, height = 12, borderRadius = 0 } = props

  return <Box style={[rnStyles.root, { width, height, borderRadius }]} />
}

const FluidPlaceholder = () => {
  return <Box flex="fluid" style={rnStyles.root} />
}

const PlaceholderContainer = props => {
  const { children, height = 100 } = props

  return (
    <Box padding={3} style={[rnStyles.placeholderContainer, { height }]}>
      {children}
    </Box>
  )
}

const Card = props => {
  const { children, title, to, bodyHeight } = props
  const link = useBaseUrl(to)

  return (
    <Link to={link} className={styles.card}>
      <div className={styles.cardTitle}>{title}</div>
      <div className={styles.cardBody}>
        <PlaceholderContainer height={bodyHeight}>{children}</PlaceholderContainer>
      </div>
    </Link>
  )
}

const LinkToHook = props => {
  const { name, to, isDotVisible = true } = props
  return (
    <span className={styles.hookName}>
      <Link to={useBaseUrl(`api/hooks/${to}`)}>{name}</Link>
      {isDotVisible ? <span>·</span> : null}
    </span>
  )
}

const Home = () => {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context

  React.useLayoutEffect(() => {
    localStorage.setItem('theme', 'light')
    document.querySelector('.navbar__brand').style = 'display: none;'
  }, [])

  return (
    <StacksProvider>
      <Layout>
        <div className={styles.wrapper}>
          <header className={clsx('hero', styles.hero)}>
            <div className={styles.titleContainer}>
              <img
                className={styles.titleImage}
                src="img/hero-logo.png"
                alt={`Stacks - ${siteConfig.tagline}`}
              />
              <h1 className={styles.title}>{siteConfig.title}</h1>
            </div>
            <p className={styles.summary}>{siteConfig.tagline}</p>
            <div className={styles.buttons}>
              <Link
                className={clsx('button', styles.button, styles.buttonOutline)}
                to={useBaseUrl('docs')}
              >
                Getting started
              </Link>
              <Link
                className={clsx('button', styles.button, styles.buttonFull)}
                to={useBaseUrl('api/components/box')}
              >
                Go to API
              </Link>
            </div>
          </header>
          <div className={styles.featuresContainer}>
            👨‍🎨 think like a designer, get rid of margins* and distribute your content evenly{' '}
            <span>·</span> 👀 use a{' '}
            <Link to={useBaseUrl('api/other/stacks-provider#debug')}>debug mode</Link> and a{' '}
            <Link to={useBaseUrl('api/other/grid')}>design grid</Link> to quickly investigate visual
            issues <span>·</span> 🚀 use in TypeScript, Flow or ReScript (compatible with React
            Native and React Native Web)
          </div>
          <div className={styles.cardsContainer}>
            <h2 className={styles.cardsTitle}>Components</h2>
            <BrowserOnly>
              {() => {
                return (
                  <Stack space={4}>
                    <Columns collapseBelow="tablet" space={4}>
                      <Card title="Stack" to="api/components/stack">
                        <Stack space={1}>
                          <Placeholder />
                          <Placeholder />
                          <Placeholder />
                        </Stack>
                      </Card>
                      <Card title="Columns" to="api/components/columns">
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
                            <Column width="content">
                              <Placeholder width={30} />
                            </Column>
                            <Column width="content">
                              <Placeholder width={30} />
                            </Column>
                          </Columns>
                        </Stack>
                      </Card>
                      <Card title="Rows" to="api/components/rows">
                        <Rows space={1}>
                          <Row height="content">
                            <Placeholder />
                          </Row>
                          <FluidPlaceholder />
                          <Row height="content">
                            <Placeholder />
                          </Row>
                        </Rows>
                      </Card>
                    </Columns>
                    <Columns collapseBelow="tablet" space={4}>
                      <Card title="Tiles" to="api/components/tiles">
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
                      <Card title="Inline" to="api/components/inline">
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
                      <Card title="Box" to="api/components/box">
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
                    </Columns>
                    <Columns collapseBelow="tablet" space={4}>
                      <Card title="Inset" to="api/components/inset">
                        <Stack space={1}>
                          <Placeholder />
                          <Inset horizontal={6}>
                            <Placeholder />
                          </Inset>
                          <Placeholder />
                        </Stack>
                      </Card>
                      <Card title="Bleed" to="api/components/bleed">
                        <Stack space={1}>
                          <Placeholder />
                          <Bleed horizontal={6}>
                            <Placeholder />
                          </Bleed>
                          <Placeholder />
                        </Stack>
                      </Card>
                      <Card title="FillView" to="api/components/fill-view">
                        <FillView alignX="center" alignY="center">
                          <Placeholder height={32} width={32} borderRadius={16} />
                        </FillView>
                      </Card>
                    </Columns>
                  </Stack>
                )
              }}
            </BrowserOnly>
          </div>
          <div className={styles.hooksContainer}>
            <h2 className={styles.cardsTitle}>Hooks</h2>
            <div className={styles.hooks}>
              <LinkToHook name="useCurrentBreakpoint" to="use-current-breakpoint" />
              <LinkToHook name="useDebugStyle" to="use-debug-style" />
              <LinkToHook name="useResponsiveProp" to="use-responsive-prop" />
              <LinkToHook name="useWindowDimensions" to="use-window-dimensions" />
              <LinkToHook name="useSpacing" to="use-spacing" />
              <LinkToHook name="useSpacingHelpers" to="use-spacing-helpers" isDotVisible={false} />
            </div>
          </div>
          <div className={styles.disclaimerContainer}>
            <span className={styles.disclaimerDot}>*</span>Read an excellent{' '}
            <Link to="https://mxstbr.com/thoughts/margin">article</Link> by{' '}
            <Link to="https://github.com/mxstbr">Max Stoiber</Link> about why margins are considered
            harmful.
          </div>
        </div>
      </Layout>
    </StacksProvider>
  )
}

export default Home
