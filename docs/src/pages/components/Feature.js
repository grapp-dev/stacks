import React from 'react'

import styles from './Feature.module.css'

const Feature = props => {
  const { children, fontSize } = props

  return (
    <span
      className={styles.feature}
      style={{
        fontSize: fontSize ? `${fontSize}rem` : undefined,
      }}
    >
      {children}
    </span>
  )
}

export default Feature
