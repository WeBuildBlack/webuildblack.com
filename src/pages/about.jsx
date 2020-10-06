import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import className from 'classnames'

import { PageContainer } from '../components'

import styles from '../assets/scss/about.module.scss'

export default function About({ data }) {
  const fullWidthImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('group-pic')
  )

  const defaultHeadshot = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('man1')
  )

  const wwhSectionClassName = className(
    styles.Section,
    styles.WhereWereHeadedSection
  )

  const { teamMembers } = data.allMarkdownRemark.nodes[0].frontmatter
  const teamCardMarkup = teamMembers.map(({ name, role, bio, imageName }) => {
    const teamMemberHeadshot = data.allFile.nodes.find(node =>
      node.childImageSharp.fluid.src.includes(imageName)
    )

    const headshot =
      teamMemberHeadshot !== undefined
        ? teamMemberHeadshot.childImageSharp.fluid
        : defaultHeadshot.childImageSharp.fluid

    return (
      <li className={styles.TeamMember}>
        <div className={styles.HeadshotWrapper}>
          <Img
            className={styles.Headshot}
            fluid={headshot}
            alt={`Headshot of ${name}`}
          />
        </div>
        <div className={styles.Info}>
          <p className={styles.Name}>{name}</p>
          <p className={styles.Role}>{role}</p>
          <p className={styles.Bio}>{bio}</p>
        </div>
      </li>
    )
  })

  // Video will replace image in hero in v2

  // const videoPlayerMarkup = (
  //   <iframe
  //     className={styles.Video}
  //     src="https://www.youtube.com/embed/-aOPtTK6GlM"
  //     frameBorder="0"
  //     allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture; allowfullscreen"
  //   ></iframe>
  // )

  return (
    <PageContainer>
      <Helmet title="About | We Build Black" />
      <main className={styles.About}>
        <section className={styles.IntroSection}>
          <div className={styles.IntroHeadingWrapper}>
            <h1 className={styles.IntroHeading}>How it all started</h1>
            <div className={styles.VerticalLine} />
          </div>

          <div className={styles.IntroContentWrapper}>
            <div className={styles.IntroTextWrapper}>
              <p className={styles.IntroBody}>
                {`In the fall of 2016, Devin Jackson was feeling isolated as the only Black software engineer at his company. He scoured the web for a local community of other devs like him, but none existed yet. So he decided to create the Black Software Engineers of NYC Meetup and hosted the group every Saturday afternoon in his small office in Williamsburg. The group's numbers exploded quickly, hitting the 1,000 member mark in its first 6 months. Devin and a core crew of members became fast friends, and after a year of building community together they wanted to create something bigger.`}
              </p>
              <p className={styles.IntroBody}>
                {`We Build Black was founded as a 501(c)(3) non-profit organization in November 2017. Since then, WBB has created the Mavens I/O: Black Women in Tech Conference, taught coding programs in schools, piloted a recidivism program, and connected members to hiring opportunities. In the process, we’ve garnered sponsorship from Google, JP Morgan Chase, Birchbox, The New York Times, and more.`}
              </p>
            </div>
            <div className={styles.VideoContainer}>
              <Img
                className={styles.VideoThumbnail}
                fluid={fullWidthImage.childImageSharp.fluid}
              />
            </div>
          </div>
        </section>

        <section className={wwhSectionClassName}>
          <h2 className={styles.SectionHeading}>{`Where we're headed`}</h2>
          <p className={styles.WhereWereHeadedHeading}>
            {`We Build Black has explored many avenues for community empowerment through technology over the years. From startup acceleration to criminal justice reform. Our goal continues to be to solve the decades old problem of Black underrepresentation in tech by creating dedicated spaces that support Black technologists' economic advancement and career growth. `}
          </p>
          <p className={styles.WhereWereHeadedHeading}>
            {`As we adjust to a digital-first world, our NYC-based community is expanding to a global one and the scope of our focus is narrowing to career development and inclusion advocacy. Along with planning for`}{' '}
            <Link to="/get-involved/events/mavens-conference">
              Mavens I/O 2021
            </Link>{' '}
            {`, we're piloting an online coding program for NYC youth.`}
          </p>
        </section>

        <section className={styles.TeamSection}>
          <h2 className={styles.SectionHeading}>Meet the squad</h2>
          <ul className={styles.TeamList}>{teamCardMarkup}</ul>
        </section>

        <section className={styles.ActionSection}>
          <h2 className={styles.SectionHeading}>
            {`Want to help grow the community?`}
          </h2>
          <p className={styles.ActionContent}>
            {`We're a volunteer run organization and are always looking to grow the team. Get in touch today about`}{' '}
            <Link className={styles.Action} href="/make-an-impact/volunteer">
              volunteering
            </Link>
            !
          </p>
        </section>
      </main>
    </PageContainer>
  )
}

export const query = graphql`
  query About {
    allMarkdownRemark(filter: { frontmatter: { page: { eq: "about" } } }) {
      nodes {
        frontmatter {
          teamMembers {
            bio
            name
            role
            imageName
          }
        }
      }
    }
    allFile(filter: { relativeDirectory: { eq: "about" } }) {
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
