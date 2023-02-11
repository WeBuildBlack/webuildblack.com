import React from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage } from "gatsby-plugin-image";
import Helmet from 'react-helmet'

import { PageContainer, Hero } from '../components'

import wbbLogo from '../assets/images/wbb-logo-square-no-bg.svg'

import styles from '../assets/scss/home.module.scss'

export default function Home({ data }) {
  const logoCircle = (
    <div className={styles.LogoCircle}>
      <img className={styles.LogoImage} src={wbbLogo} alt="" />
    </div>
  )

  const heroImage = data.allFile.nodes.find(node =>
    node.childImageSharp.gatsbyImageData.src.includes('codenmix')
  )

  const calloutImageOne = data.allFile.nodes.find(node =>
    node.childImageSharp.gatsbyImageData.src.includes('callout-one')
  )

  const calloutImageTwo = data.allFile.nodes.find(node =>
    node.childImageSharp.gatsbyImageData.src.includes('callout-two')
  )

  const gridImageOne = data.allFile.nodes.find(node =>
    node.childImageSharp.gatsbyImageData.src.includes('mavens')
  )

  const gridImageTwo = data.allFile.nodes.find(node =>
    node.childImageSharp.gatsbyImageData.src.includes('meetups')
  )

  const gridImageFour = data.allFile.nodes.find(node =>
    node.childImageSharp.gatsbyImageData.src.includes('slack')
  )

  return (
    <PageContainer>
      <Helmet title="Home | We Build Black" />

      <main className={styles.Main}>
        <Hero
          imageSrc={heroImage.childImageSharp.gatsbyImageData}
          content="We're building the equitable tech industry we wish to see"
        />
        <section className={styles.Intro}>
          {logoCircle}
          <div className={styles.SectionContent}>
            <h1 className={styles.IntroHeading}>We Build Black</h1>
            <p className={styles.SectionSubheading}>
              Educate. Empower. Employ.
            </p>
            <p className={styles.SectionBody}>
              {`Our mission is to empower the Black community to achieve
                socio-economic change through technical education and
                professional development. We Build Black creates opportunities
                for Black technologists to network, share skills, give and receive mentorship, 
                and discover their next employer. By nurturing the existing community of Black technologists and
                creating pathways into tech, we're building a
                more equitable tech industry for ourselves and the next
                generation.`}
            </p>
          </div>
        </section>
        <section className={styles.CalloutGrid}>
          <div className={styles.CalloutContentOne}>
            <p className={styles.TextLarge}>
              {`Making the tech industry OUR industry.`}
            </p>
          </div>
          <div className={styles.CalloutImageOne}>
            <GatsbyImage
              image={calloutImageOne.childImageSharp.gatsbyImageData}
              className={styles.CalloutImage}
              alt="Candid photo of Mavens I/O 2018 panelists with arms crossed in Wakanda pose" />
          </div>

          <div className={styles.CalloutContentTwo}>
            <p className={styles.TextMedium}>
              We Build Black is on a journey to redefine what it means to belong
              in the tech industry. The path forward is uncharted, but we don’t
              shy away from uncertainty.
            </p>
          </div>
          <div className={styles.CalloutImageTwo}>
            <GatsbyImage
              image={calloutImageTwo.childImageSharp.gatsbyImageData}
              className={styles.CalloutImage}
              alt="Candid photo of Co-founder Jerome Moore pairing with kids in after school coding program pilot, Ingenious Thought." />
          </div>
        </section>
        <section className={styles.Separator}>
          <h2 className={styles.GetInvolvedHeading}>Get involved</h2>
        </section>
        <section className={styles.Grid}>
          <div className={styles.GridImageWrapper}>
            <Link to="/get-involved/events/mavens-conference">
              <div className={styles.GridImageOverlay}>Mavens I/O</div>
              <GatsbyImage
                image={gridImageOne.childImageSharp.gatsbyImageData}
                className={styles.GridImage}
                alt="" />
            </Link>
          </div>
          <div className={styles.GridImageWrapper}>
            <Link to="/get-involved/events/meetups">
              <div className={styles.GridImageOverlay}>Meetups</div>
              <GatsbyImage
                image={gridImageTwo.childImageSharp.gatsbyImageData}
                className={styles.GridImage}
                alt="" />
            </Link>
          </div>
          <div className={styles.GridImageWrapper}>
            <a href="/get-involved/slack" target="_blank" rel="noreferrer">
              <div className={styles.GridImageOverlay}>Slack</div>
              <GatsbyImage
                image={gridImageFour.childImageSharp.gatsbyImageData}
                className={styles.GridImage}
                alt="" />
            </a>
          </div>
        </section>
      </main>
    </PageContainer>
  );
}

export const query = graphql`query Home {
  allFile(filter: {relativeDirectory: {eq: "home"}}) {
    nodes {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
}`
