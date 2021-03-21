/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import { PageContainer } from '../../../components'

import styles from '../../../assets/scss/mavens.module.scss'

export default function Showcase({ data }) {
  const heroImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('70')
  )

  return (
    <PageContainer>
      <Helmet title="School Coding Program | We Build Black" />
      <header className={styles.Hero}>
        <div className={styles.HeroImageBlock}>
          <div className={styles.HeroImageOverlay} />
          <Img
            className={styles.HeroImage}
            fluid={heroImage.childImageSharp.fluid}
            alt=""
          />
        </div>
      </header>
      <main className={styles.Main}>
        <div className={styles.GoalSection}>
          <h2 className={styles.SectionHeading}>Crowns of Code: School Coding Program</h2>
          <p className={styles.IntroText}>
            Crowns of Code is our youth education program where we teach programming in 
            middle and high schools. Our students will learn to build tech from video games 
            to e-commerce websites. The best about all of this is it's absolutely free to the school!
            If you'd like to bring this program to your child's school reachnout to us at info@webuildblack.com
          </p>
        </div>
      </main>
    </PageContainer>
  )
}

export const query = graphql`
  query SchoolCoding {
    allFile(filter: { relativeDirectory: { eq: "schoolcoding" } }) {
      nodes {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
