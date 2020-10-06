import React, { useCallback, useState } from 'react'

export default function Contact() {
  return (
    <section id="contact">
      <div className="inner">
        <section>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="6"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Send Message" className="special" />
              </li>
              <li>
                <input type="reset" value="Clear" />
              </li>
            </ul>
          </form>
        </section>
        <section className="split">
          <section>
            <div className="contact-method">
              <span className="icon alt fa-envelope"></span>
              <h3>Email</h3>
              <a href="#">info@webuildblack.com</a>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-phone"></span>
              <h3>Phone</h3>
              <span>(000) 000-0000 x12387</span>
            </div>
          </section>
          <section>
            <div className="contact-method">
              <span className="icon alt fa-home"></span>
              <h3>Address</h3>
              <span>
                147 Front Street
                <br />
                Brooklyn, NY 11201
              </span>
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}
