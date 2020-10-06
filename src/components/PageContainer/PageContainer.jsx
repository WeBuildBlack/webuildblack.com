import React from 'react'

import { Nav, Footer } from '..'

import styles from './PageContainer.module.scss'

export default function PageContainer({ children }) {
  return (
    <div className={styles.PageContainer}>
      <Nav />
      <div className={styles.PageContent}>
        {children}
        <Footer />
      </div>
    </div>
  )
}
