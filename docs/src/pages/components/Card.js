import React from 'react'

import BrowserOnly from '@docusaurus/BrowserOnly'

import Link from '@docusaurus/Link'
import useBaseUrl from '@docusaurus/useBaseUrl'

import styles from './Card.module.css'

const Card = props => {
  const { children, title, to } = props
  const link = useBaseUrl(to)

  return (
    <Link to={link} className={styles.card}>
      <div className={styles.title}>{title}</div>
      <div className={styles.body}>
        <div className={styles.placeholderContainer}>
          <BrowserOnly>
            {() => {
              return children
            }}
          </BrowserOnly>
        </div>
      </div>
    </Link>
  )
}

export default Card
