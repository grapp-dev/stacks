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
    imageUrl: 'img/feature-1.svg',
    description: <>Use Stacks components to distribute white space evenly between components.</>,
  },
  {
    title: <>Debug your layout</>,
    imageUrl: 'img/feature-2.svg',
    description: (
      <>
        With debug mode, you can investigate non-trivial visual issues, and with a design grid, you
        can inspect if your components are aligned properly.
      </>
    ),
  },
  {
    title: <>Compatible with RN and RNW</>,
    imageUrl: 'img/feature-3.svg',
    description: <>Stacks components can be used in React Native and React Native Web.</>,
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
    <Layout title="Stacks" description="⚡ Build React Native layouts quickly with ease and fun.">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames('button button--primary button--lg', styles.getStarted)}
              to={useBaseUrl('docs/getting-started')}
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
