import React from 'react'
import Helmet from 'react-helmet'
import className from 'classnames'
import { PageContainer } from '../components'
import Collapse, { Panel as CollapsePanel } from 'rc-collapse';
import 'rc-collapse/assets/index.css';
import styles from '../assets/scss/fast-track.module.scss'

import googleCerts from '../assets/images/google-certificates.png'
import calendar from '../assets/images/fast-track-calendar.jpg'
import microsoft from '../assets/images/microsoft.png'
import shopify from '../assets/images/shopify.png'
import google from '../assets/images/google-logo.png'
import macbookIphone from '../assets/images/macbook-iphone.jpeg'
import mentor from '../assets/images/Mentor1.jpg'
import womanCoding from '../assets/images/woman-coding.jpg'

export default function FastTrack({ data }) {
  return (
    <PageContainer>
      <Helmet title="FAST TRACK | We Build Black" />
      <main className={styles.FastTrack}>
        <div className={styles.HeroImage} />
        <section className={styles.IntroSection}>
          <div className={styles.SectionHeadingWrapper}>
            <h1 className={styles.SectionHeading}>What is FAST TRACK?</h1>
          </div>

          <div className={styles.IntroContentWrapper}>
            <div className={styles.IntroTextWrapper}>
              <p className={styles.IntroBody}>
                {`FAST TRACK is the #1 tech workforce development program in the nation. We take Black women and those under the poverty line from techie-in-training to employed junior technologists in one year or less! That means education, dedicated mentors, resume assistance, and internships! Keep reading to learn more or click on one the button below to get involved.`}
              </p>
            </div>
          </div>

          <div className={styles.ButtonsContainer} data-sal="slide-up" data-sal-duration="1200" data-sal-easeing="ease-in-out">
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
            <button
              type="button"
              className={className('button special', styles.Button)}
            >
              Become a Mentor
            </button>
          </div>
        </section>

        <section className={styles.Section}>
          <div className={styles.SectionHeadingWrapper}>
            <h2 className={styles.SectionHeading}>
              Android Engineer, UX/UI Designer, Data Scientist! Which do you want to be?
            </h2>
          </div>
          <div className={styles.SectionContent}>
            <img
              src={googleCerts}
              alt="Google Certs"
              className={styles.SectionImage}
              data-sal="slide-up"
              data-sal-duration="1200"
              data-sal-easeing="ease-in-out"
            />
            <div className={styles.SectionText}>
              <p>{`Google has partnered with us to give our students scholarships to their online courses. They have training in Android Engineering, UX/UI Design, and Data Analysis. Google is so sure of their courses that they view a certificate from them as the equivalent to a college degree! So program participants can leave this course knowing they can shoot for a job at Google and be taken seriously.`}</p>
            </div>
          </div>
        </section>

        <section className={styles.Section}>
          <div className={styles.SectionHeadingWrapper}>
            <h2 className={styles.SectionHeading}>Free Macbook, iPhone, and learning stipends</h2>
          </div>
          <div className={styles.SectionContent}>
            <img
              src={macbookIphone}
              alt="MacBook iPhone"
              className={className(styles.SectionImage, 'image-right')}
              data-sal="slide-up"
              data-sal-duration="1200"
              data-sal-easeing="ease-in-out"
            />
            <div className={styles.SectionText}>
              <p>{`Our program is targeting Black women and those under the poverty line. That being said, we understand the financial barriers that come with committing time to learning something for free. In response to these challenges, our program is an earn-to-learn program where students will earn $1000 for every course milestone they achieve ($6000 total).`}</p>
              <p>{`We’re also aware that not everyone has access to a computer or phone. To address this, every student in our program gets a new Macbook and iPhone.`}</p>
            </div>
          </div>
        </section>

        <section className={styles.Section}>
          <div className={styles.SectionHeadingWrapper}>
            <h2 className={styles.SectionHeading}>A mentor employed in your field of study</h2>
          </div>
          <div className={styles.SectionContent}>
            <img
              src={mentor}
              alt="Mentor"
              className={styles.SectionImage}
              data-sal="slide-up"
              data-sal-duration="1200"
              data-sal-easeing="ease-in-out"
            />
            <div className={styles.SectionText}>
              <p>{`Data shows that only 5% of people finish their online courses. This is because when you get stuck, searching online can only take you so far. You need a real live person who’s been there and can hold your hand to the next step. Every program participant receives a dedicated mentor that is employed in their field of study at reputable tech companies.`}</p>
            </div>
          </div>
        </section>

        <section className={styles.Section}>
          <div className={styles.SectionHeadingWrapper}>
            <h2 className={styles.SectionHeading}>Full-time Internships</h2>
          </div>
          <div className={styles.SectionContent}>
            <img
              src={womanCoding}
              alt="Woman Coding"
              className={className(styles.SectionImage, 'image-right')}
              data-sal="slide-up"
              data-sal-duration="1200"
              data-sal-easeing="ease-in-out"
            />
            <div className={styles.SectionText}>
              <p>{`A fast track into the industry isn’t complete without on-the-job training. We’ve partnered with Shopify to give internships to our students in data, design, and development. Their internships are full-time, well paid and as long as you perform well there’s a high chance you’ll be hired.`}</p>
              <p>{`In the event that you don’t receive the job from Shopify, we’ve partnered with CareerCircle to give all of our students resume assistance and interview connections. CareerCircle’s whole business model is to get diverse people like you into interviews at top tech companies.`}</p>
            </div>
          </div>
        </section>
        <section className={styles.Section}>
          <div className={styles.SectionHeadingWrapper}>
            <h2 className={styles.SectionHeading}>Program Calendar</h2>
          </div>
          <div className={styles.ButtonsContainer}>
            <img src={calendar} alt="Calendar" className={className(styles.SectionImage)} />
          </div>
        </section>
        <section className={styles.Section}>
          <div className={styles.SectionHeadingWrapper}>
            <h2 className={styles.SectionHeading}>Our Partners</h2>
          </div>
          <div className={styles.ButtonsContainer}>
            <img src={shopify} alt="Shopfiy" className={className(styles.SectionImage)} />
            <img src={google} alt="Google" className={className(styles.SectionImage)} />
            <img src={microsoft} alt="Microsoft" className={className(styles.SectionImage)} />
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
            <button
              type="button"
              className={className('button special', styles.Button)}
            >
              Become a Mentor
            </button>
          </div>
        </section>
        <section className={styles.Section}>
          <div className={styles.SectionHeadingWrapper}>
            <h2 className={styles.SectionHeading}>Frequently Asked Questions</h2>
          </div>
          <div className={styles.SectionContent}>
            <Collapse accordion={true} className={styles.FaqAccordion}>
              <CollapsePanel header="Why did you choose to go to the moon?" headerClass="FaqHeader">
                <p>We choose to go to the moon in this decade and do the other things, not because they are easy, but because they are hard, because that goal will serve to organize and measure the best of our energies and skills, because that challenge is one that we are willing to accept, one we are unwilling to postpone, and one which we intend to win.</p>
              </CollapsePanel>
              <CollapsePanel header="Has science mastered prophecy?">
                <p>Science has not yet mastered prophecy. We predict too much for the next year and yet far too little for the next 10.</p>
              </CollapsePanel>
            </Collapse>
          </div>
        </section>
      </main>
    </PageContainer>
  )
}
