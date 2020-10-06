import React from 'react'
import Helmet from 'react-helmet'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'
import className from 'classnames'

import { PageContainer } from '../../components'

import styles from '../../assets/scss/partner.module.scss'

export default function Partner({ data }) {
  const fullWidthImage = data.allFile.nodes.find(node =>
    node.childImageSharp.fluid.src.includes('swag')
  )

  const partnerLogos = data.allFile.nodes.filter(node =>
    node.childImageSharp.fluid.src.includes('logo')
  )

  const logoMarkup = partnerLogos
    .sort((a, b) => {
      const img1 = a.childImageSharp.fluid.originalName.toUpperCase()
      const img2 = b.childImageSharp.fluid.originalName.toUpperCase()

      if (img1 < img2) {
        return -1
      }
      if (img1 > img2) {
        return 1
      }

      // names must be equal
      return 0
    })
    .map(logo => (
      <div className={styles.LogoWrapper}>
        <Img
          className={styles.Logo}
          fluid={logo.childImageSharp.fluid}
          alt=""
        />
      </div>
    ))

  return (
    <PageContainer>
      <Helmet title="Partner | We Build Black" />
      <header className={styles.Hero}>
        <div className={styles.HeroContent}>
          <h1 className={styles.HeroHeading}>
            Partnership is key to reaching our destination.
          </h1>
          <p className={styles.HeroBody}>
            We believe that in order to build a tech industry that truly
            includes everyone, we need partners that seek to actively dismantle
            the status quo.
          </p>
        </div>
        <div className={styles.HeroImageWrapper}>
          <div className={styles.HeroImageOverlay} />
          <Img
            className={styles.HeroImage}
            fluid={fullWidthImage.childImageSharp.fluid}
            alt="Mavens I/O Black Women in Tech Conference Swag bags"
          />
        </div>
      </header>
      <main className={styles.Main}>
        <div className={styles.Body}>
          <div className={styles.BodyNav}>
            <ul className={styles.SectionList}>
              <li className={styles.SectionListItem}>
                <a href="#what-we-look-for">What we look for</a>
              </li>
              <li className={styles.SectionListItem}>
                <a href="#our-partners">Our partners</a>
              </li>
            </ul>
          </div>

          <div className={styles.BodyContent}>
            <div id="what-we-look-for" className={styles.SectionAnchor} />
            <section className={styles.BodySection}>
              <h2 className={styles.BodyHeading}>What we look for</h2>

              <p className={styles.BodyIntro}>
                {`Diversity isn't a nice-to-have, it's imperative. These benchmarks are signals that help us distinguish where companies are at on the path toward equity. Use them to identify opportunities to affect systemic change within your business.`}
              </p>

              <dl className={styles.BenchmarkList}>
                <dt className={styles.BenchmarkName}>
                  Employee Resource Group
                </dt>
                <dd className={styles.BenchmarkDescription}>
                  {`Having ERGs gives employees of targeted identities a safe space to be heard and take action on the change they would like to see in and out of the workplace and are key to creating a culture of belonging.`}
                </dd>

                <dt className={styles.BenchmarkName}>
                  Dedicated D&I Leadership
                </dt>
                <dd className={styles.BenchmarkDescription}>
                  {`No person should ever be paid for one job and have to do another on top of it. Having a dedicated D&I leader or team ensures that employees can focus on mastering their crafts. Inclusion isn't a side-of-desk task. It's important work that needs to have dedicated professionals pushing for progress.`}
                </dd>

                <dt className={styles.BenchmarkName}>Black Owned</dt>
                <dd className={styles.BenchmarkDescription}>
                  {`Building Black is at the core of our mission. We support Black businesses by hiring and highlighting them. Inclusion doesn't stop with recruitment. The vendors and services you use every day are also opportunities for change.`}
                </dd>

                <dt className={styles.BenchmarkName}>
                  Transparent Demographics
                </dt>
                <dd className={styles.BenchmarkDescription}>
                  {`Publishing diversity statistics is a signal that you recognize there is a problem. It lets the public know you're working toward a solution and have a reference for your progress.`}
                </dd>

                <dt className={styles.BenchmarkName}>
                  Transparent Salary Bands
                </dt>
                <dd className={styles.BenchmarkDescription}>
                  {`Wage inequality is a long-standing issue across industries, and tech is no exception. Black tech employees earn considerably less than the average salary across technical roles, and the gender pay gap compounds this disparity for Black women. Unless there is salary transparency, efforts to build a more representative workforce will only widen the gap.`}
                </dd>

                <dt className={styles.BenchmarkName}>External Activism</dt>
                <dd className={styles.BenchmarkDescription}>
                  {`Your commitment to inclusion shouldn't only be internal. Investment in community organizations is key to building a diverse pipeline.  Donate resources to organizations and schools that provide access to technical education. Support programs that broaden exposure to technical career paths.`}
                </dd>

                <dt className={styles.BenchmarkName}>Black Executives</dt>
                <dd className={styles.BenchmarkDescription}>
                  {`From executives to individual contributors, Black people need to have a seat at the table. A company's leadership is indicative of its broader diversity perspective. Diverse leadership lends itself to inclusive decision making.`}
                </dd>

                <dt className={styles.BenchmarkName}>
                  Internship/Apprenticeship Program
                </dt>
                <dd className={styles.BenchmarkDescription}>
                  {`A large number of the Black community coming into tech are coming in at the ground level. Historically, entry-level job opportunities have been reserved for those with a CS degree. Internships bridge the experience gap for less traditional candidates.`}
                </dd>
                <dt className={styles.BenchmarkName}>Mentorship Program</dt>
                <dd className={styles.BenchmarkDescription}>
                  {`A big aspect of D&I work is not only hiring but retaining that diverse talent. Structured mentorship programs give employees a guiding hand in navigating their careers. Successful mentorship leads to increased morale,  productivity, upward mobility.`}
                </dd>
              </dl>
            </section>
            <div id="our-partners" className={styles.SectionAnchor} />
            <section className={styles.BodySection}>
              <h2 className={styles.BodyHeading}>Our partners</h2>
              <div className={styles.SponsorList}>{logoMarkup}</div>
            </section>
          </div>
        </div>
        <div className={className(styles.BodySection, styles.ActionSection)}>
          <h2 className={styles.BodyHeading}>
            {`Let's make the tech industry better together`}
          </h2>
          <a
            className={className('button', styles.PartnerFormLink)}
            href="/make-an-impact/partner/apply"
            target="_blank"
            rel="noreferrer"
          >
            Learn more
          </a>
        </div>
      </main>
    </PageContainer>
  )
}

export const query = graphql`
  query Partner {
    allFile(filter: { relativeDirectory: { eq: "partner" } }) {
      nodes {
        childImageSharp {
          fluid {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
