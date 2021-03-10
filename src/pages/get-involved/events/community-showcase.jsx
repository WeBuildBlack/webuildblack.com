/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import { PageContainer } from '../../../components'

import styles from '../../../assets/scss/mavens.module.scss'

export default function Showcase({ data }) {
  const heroImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('showcase4')
  )

  return (
    <PageContainer>
      <Helmet title="Mavens I/O Black Women in Tech Conference | We Build Black" />
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
          <h2 className={styles.SectionHeading}>The Competition and How to Enter</h2>
          <p className={styles.IntroText}>
            We Build Black will be showcasing some of the coolest projects made by people in their community!
            If you're a Black techie building something you love and looking to get some funding, this is the perfect chance for you. Enter the WBB Community Showcase!⁠
This is a virtual event and we will be <a href={`https://www.youtube.com/watch?v=SKNdzY4xYTU&ab_channel=WeBuildBlack⁠`}>streaming on We Build Black's YouTube Live channel.</a>
To participate, just go to <a href={`https://www.eventbrite.com/e/the-we-build-black-community-showcase-tickets-142633445475`}>this link</a> and get yourself a ticket. You are in!⁠
 Don't miss this unique opportunity to be supported and recognized by our amazing community!
          </p>
          <p>Date And Time of the event: Thursday, March 25, 2021, 6:00 EST.⁠</p>
        </div>
      </main>
    </PageContainer>
  )
}

export const query = graphql`
  query Showcase {
    allFile(filter: { relativeDirectory: { eq: "showcase" } }) {
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
