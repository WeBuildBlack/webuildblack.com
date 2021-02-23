/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

import { PageContainer } from '../../../components'

import styles from '../../../assets/scss/mavens.module.scss'

export default function Showcase({ data }) {
  const heroImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('showcase2')
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
            {`We Build Black will be showcasing some of the coolest 
            projects made by people in their community. One of these 
            lucky contestants will win $1000! If you're a Black techie 
            building something you love and looking to get some funding,
             enter the WBB Community Showcase. To enter the competition 
             all you need to do is follow `}
             <a href="https://forms.gle/5LDeyRHsgP7hrwL69">@webuildblack on Instagram</a>
             {` and post a description of why you're project should win. 
             Also, if you're an engineer skilled in Front end 
             Javascript, Python (machine learning/ai), Java, or mobile 
             programming JP Morgan Chase is hiring! To enter your resume 
             click `}<a href="https://forms.gle/5LDeyRHsgP7hrwL69">here</a>
             {` to fill out the form.  This is a virtual event and will be streaming on We Build Black's
             YouTube Live channel `} <a href="https://www.youtube.com/watch?v=SKNdzY4xYTU&ab_channel=WeBuildBlack">here</a>.
          </p>
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
