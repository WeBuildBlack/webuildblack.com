import React from 'react'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import Helmet from 'react-helmet'
import className from 'classnames'
import { PageContainer } from '../components'
import styles from '../assets/scss/fast-track.module.scss'

export default function FastTrack({ data }) {
  

  return (
    <PageContainer>
      <Helmet title="FAST TRACK | We Build Black" />
      <main className={styles.FastTrack}>
        <div className={styles.HeroImage} />
        <section className={styles.IntroSection}>
          <div className={styles.SectionHeadingWrapper}>
            <h1 className={styles.SectionHeading}>What is FAST TRACK</h1>
          </div>

          <div className={styles.IntroContentWrapper}>
            <div className={styles.IntroTextWrapper}>
              <p className={styles.IntroBody}>
                {`“Every element of the program was in trouble and so were we. The simulators were not working, Mission Control was behind in virtually every area, and the flight and test procedures changed daily. Nothing we did had any shelf life. Not one of us stood up and said, ‘Dammit, stop!’ I don’t know what Thompson’s committee will find as the cause, but I know what I find. We are the cause! We were not ready! We did not do our job. We were rolling the dice, hoping that things would come together by launch day, when in our hearts we knew it would take a miracle. We were pushing the schedule and betting that the Cape would slip before we did.`}
              </p>
            </div>
          </div>

          <div className={styles.ButtonsContainer}>
            <button
              type="button"
              className={className('button special', styles.Button)}
            >
              Become a Corporate Partner
            </button>
            <button
              type="button"
              className={className('button special', styles.Button)}
            >
              Become a Student
            </button>
          </div>
        </section>

        <section className={styles.Section}>
          <div className={styles.SectionHeadingWrapper}>
            <h2 className={styles.SectionHeading}>Education</h2>
          </div>
          <div className={styles.SectionContent}>
            <img src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Education" className={styles.SectionImage} />
            <div className={styles.SectionText}>
              <p>{`When you leave this meeting today you will go to your office and the first thing you will do there is to write ‘Tough and Competent’ on your blackboards. It will never be erased. Each day when you enter the room these words will remind you of the price paid by Grissom, White, and Chaffee. These words are the price of admission to the ranks of Mission Control.`}</p>
            </div>
          </div>
        </section>

        <section className={styles.Section}>
          <div className={styles.SectionHeadingWrapper}>
            <h2 className={styles.SectionHeading}>Resources</h2>
          </div>
          <div className={styles.SectionContent}>
            <img src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Education" className={className(styles.SectionImage, 'image-right')} />
            <div className={styles.SectionText}>
              <p>{`We choose to go to the moon. We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win, and the others, too.`}</p>
              <p>{`It is for these reasons that I regard the decision last year to shift our efforts in space from low to high gear as among the most important decisions that will be made during my incumbency in the office of the Presidency.`}</p>
            </div>
          </div>
        </section>

        <section className={styles.Section}>
          <div className={styles.SectionHeadingWrapper}>
            <h2 className={styles.SectionHeading}>Mentorships</h2>
          </div>
          <div className={styles.SectionContent}>
            <img src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Education" className={styles.SectionImage} />
            <div className={styles.SectionText}>
              <p>{`“Every element of the program was in trouble and so were we. The simulators were not working, Mission Control was behind in virtually every area, and the flight and test procedures changed daily. Nothing we did had any shelf life. Not one of us stood up and said, ‘Dammit, stop!’ I don’t know what Thompson’s committee will find as the cause, but I know what I find. We are the cause! We were not ready! We did not do our job. We were rolling the dice, hoping that things would come together by launch day, when in our hearts we knew it would take a miracle. We were pushing the schedule and betting that the Cape would slip before we did.`}</p>
              <p>{`“From this day forward, Flight Control will be known by two words: ‘Tough’ and ‘Competent.’ Tough means we are forever accountable for what we do or what we fail to do. We will never again compromise our responsibilities. Every time we walk into Mission Control we will know what we stand for. Competent means we will never take anything for granted. We will never be found short in our knowledge and in our skills. Mission Control will be perfect.`}</p>
            </div>
          </div>
        </section>

        <section className={styles.Section}>
          <div className={styles.SectionHeadingWrapper}>
            <h2 className={styles.SectionHeading}>Internships</h2>
          </div>
          <div className={styles.SectionContent}>
            <img src="https://images.unsplash.com/photo-1463171379579-3fdfb86d6285?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80" alt="Education" className={className(styles.SectionImage, 'image-right')} />
            <div className={styles.SectionText}>
              <p>{`The view of the earth from the moon fascinated me - a small disk, 240,000 mniles away. It was hard to think that that little thing held so many problems, so many frustrations. Raging nationalistic interests, famines, wars, pestilence don't show from that distance. I'm convinced that some wayward stranger in a space-craft, coming from some other part of the heavens, could look at earth and never know that it was inhabited at all. But the samw wayward stranger would certainly know instinctively that if the earth were inhabited, then the destinies of all who lived on it must inevitably be interwoven and joined. We are one hunk of ground, water, air, clouds, floating around in space. From out there it really is 'one world'.`}</p>
            </div>
          </div>
        </section>

        <section className={styles.Section}>
          <div className={styles.ButtonsContainer}>
            <button
              type="button"
              className={className('button special', styles.Button)}
            >
              Become a Corporate Partner
            </button>
            <button
              type="button"
              className={className('button special', styles.Button)}
            >
              Become a Student
            </button>
          </div>
        </section>
      </main>
    </PageContainer>
  )
}

// export const query = graphql`
//   query FastTrack {
//     allMarkdownRemark(filter: { frontmatter: { page: { eq: "about" } } }) {
//       nodes {
//         frontmatter {
//           teamMembers {
//             bio
//             name
//             role
//             imageName
//           }
//         }
//       }
//     }
//     allFile(filter: { relativeDirectory: { eq: "about" } }) {
//       nodes {
//         childImageSharp {
//           fluid {
//             ...GatsbyImageSharpFluid
//           }
//         }
//       }
//     }
//   }
// `
