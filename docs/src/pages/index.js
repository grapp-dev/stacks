import React from 'react'
import classnames from 'classnames'
import Layout from '@theme/Layout'
import Link from '@docusaurus/Link'
import useDocusaurusContext from '@docusaurus/useDocusaurusContext'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './styles.module.css'

const features = [
  {
    title: <>Think like a designer</>,
    // imageUrl: 'img/undraw_docusaurus_mountain.svg',
    description: <>Use Stacks components to distribute white space evenly between components.</>,
  },
  {
    title: <>Debug your layout</>,
    // imageUrl: 'img/undraw_docusaurus_tree.svg',
    description: <>With debug mode, you can investigate non-trivial visual issues.</>,
  },
  {
    title: <>Add design system grid</>,
    // imageUrl: 'img/undraw_docusaurus_react.svg',
    description: <>Use a customizable grid to ensure that your components are aligned properly.</>,
  },
]

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl)
  return (
    <div className={classnames('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

function Home() {
  const context = useDocusaurusContext()
  const { siteConfig = {} } = context
  return (
    <Layout title="Stacks" description="⚡ Build React Native views blazingly fast">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/motivation')}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main className="main-features">
        {features && features.length && (
          <section className={styles.features}>
            <div className="container main-features__container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  )
}

export default Home
