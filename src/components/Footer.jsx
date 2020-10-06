import React, { useCallback } from 'react'
import className from 'classnames'
import { navigate, Link } from 'gatsby'

import wbbLogo from '../assets/images/wbb-logo-square-no-bg.svg'

import styles from '../assets/scss/footer.module.scss'

export default function Footer() {
  const copyrightMarkup = (
    <p className="copyright">
      We Build Black &copy; {`${new Date().getFullYear()}`}
    </p>
  )

  const iconMarkup = (
    <ul className="icons">
      <li>
        <a
          href="https://instagram.com/webuildblack"
          className="icon fa-instagram"
          target="_blank"
          rel="noreferrer"
        >
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a
          href="https://youtube.com/webuildblack"
          className="icon fa-youtube"
          target="_blank"
          rel="noreferrer"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://linkedin.com/company/we-build-black"
          className="icon fa-linkedin"
          target="_blank"
          rel="noreferrer"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/webuildblack"
          className="icon alt fa-twitter"
          target="_blank"
          rel="noreferrer"
        >
          <span className="label">Twitter</span>
        </a>
      </li>
      <li>
        <a
          href="https://facebook.com/WeBuildBlackOfficial"
          className="icon fa-facebook"
          target="_blank"
          rel="noreferrer"
        >
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/WeBuildBlack"
          className="icon fa-github"
          target="_blank"
          rel="noreferrer"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
  )

  const footerLeftMarkup = (
    <div className="footer-left">
      <div className="footer-left-content">
        <h3>Make an impact</h3>
        <ul className="footer-links">
          <li className={styles.DonateListItem}>
            <form
              className={styles.DonateForm}
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="cmd" value="_s-xclick" />
              <input
                type="hidden"
                name="hosted_button_id"
                value="RZWPA5VWQSV3U"
              />
              <button className={styles.DonateButton} type="submit">
                Donate
              </button>
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </li>
          <li>
            <Link to="/make-an-impact/hire" target="_blank" rel="noreferrer">
              Hire
            </Link>
          </li>
          <li>
            <Link to="/make-an-impact/partner">Partner</Link>
          </li>
          <li>
            <a
              href="/make-an-impact/volunteer"
              target="_blank"
              rel="noreferrer"
            >
              Volunteer
            </a>
          </li>
        </ul>
      </div>
      <div className="footer-logo">
        <img src={wbbLogo} alt="" />
      </div>
    </div>
  )

  const subscribeButtonClassName = className(
    'button fit special',
    styles.SubscribeButton
  )

  const handleSubscribe = useCallback(() => {
    navigate('/subscribe')
  })

  const footerRightMarkup = (
    <div className="footer-right">
      <h3>Get in touch</h3>
      <p className="p-condensed">We Build Black</p>
      <p className="p-condensed">147 Front Street</p>
      <p>Brooklyn, NY 11201</p>
      <p>info@webuildblack.com</p>
      <h3>Stay in the loop</h3>
      <p>
        Be first to know about the latest community news, events, and job
        opportunities.
      </p>
      <div className="field half">
        <button
          type="button"
          className={subscribeButtonClassName}
          onClick={handleSubscribe}
        >
          Subscribe
        </button>
      </div>
    </div>
  )

  return (
    <footer id="footer">
      <div className="footer-main">
        {footerLeftMarkup}
        {footerRightMarkup}
      </div>
      <div className="footer-end">
        {iconMarkup}
        {copyrightMarkup}
      </div>
    </footer>
  )
}
