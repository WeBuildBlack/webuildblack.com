/* eslint-disable react/jsx-one-expression-per-line */
import React, { useCallback } from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql, Link } from 'gatsby'
import classNames from 'classnames'

import { PageContainer } from '../../../components'

import styles from '../../../assets/scss/meetups.module.scss'

export default function Meetups({ data }) {
  const heroImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('hero')
  )

  const sbbImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('SBB')
  )

  const bseImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('BSE')
  )

  const meetupButtonClassName = classNames(
    styles.MeetupButton,
    'button',
    'special'
  )

  return (
    <PageContainer>
      <Helmet title="Mavens I/O Black Women in Tech Conference | We Build Black" />
      <header className={styles.Hero}>
        <div className={styles.HeroContentBlock}>
          <h1 className={styles.HeroHeading}>Find your people</h1>
          <p className={styles.HeroText}>
            {`Looking for someone to pair with, a co-founder, a mentor, or some techie friends? Bring your whole authentic self and connect with the We Build Black community at a meetup event.`}
          </p>
        </div>
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
        <div className={styles.MeetupSection}>
          <h2 className={styles.SectionHeading}>WBB Meetups</h2>
          <p className={styles.SectionIntro}>
            {`For many years, Black people have fought for a seat at the table in their respective industries, but being the only Black techie in the office or at a meetup is still the norm. The lack of representation has left many Black technologists without mentors or support systems to help them grow. We Build Black started in 2016 as a small meetup group to bring Black technologists together and the community has since grown into a network of thousands. `}
          </p>

          <div className={styles.Meetup}>
            <div className={styles.MeetupImageWrapper}>
              <Img
                className={styles.MeetupImage}
                fluid={sbbImage.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className={styles.MeetupContent}>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.meetup.com/She-Builds-Black"
                  className={styles.MeetupContentHighlight}
                >
                  She Builds Black
                </a>{' '}
                {`(SBB) is a network of Black women technologists who come together to grow their careers by learning from and supporting their peers. The goal of SBB is to educate, inspire, mentor, foster deep connections, and empower women to embrace the current tech industry as creators and builders. Volunteers from SBB organize the annual`}{' '}
                <Link to="/get-involved/events/mavens-conference">
                  Mavens I/O
                </Link>{' '}
                conference.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.meetup.com/She-Builds-Black"
                className={meetupButtonClassName}
              >
                Join SBB
              </a>
            </div>
          </div>

          <div className={styles.Meetup}>
            <div className={styles.MeetupImageWrapper}>
              <Img
                className={styles.MeetupImage}
                fluid={bseImage.childImageSharp.fluid}
                alt=""
              />
            </div>
            <div className={styles.MeetupContent}>
              <p>
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.meetup.com/black-software-engineers-of-nyc"
                  className={styles.MeetupContentHighlight}
                >
                  Black Software Engineers of NYC
                </a>{' '}
                (BSENYC) is a space to mix ideas, work on code, get help on
                projects, and discuss the industry. Anyone is welcome, but the
                aim and hope of this group is to facilitate the growth of Black
                developers.
              </p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.meetup.com/black-software-engineers-of-nyc"
                className={meetupButtonClassName}
              >
                Join BSENYC
              </a>
            </div>
          </div>
        </div>
      </main>
    </PageContainer>
  )
}

export const query = graphql`
  query Meetups {
    allFile(filter: { relativeDirectory: { eq: "meetups" } }) {
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
