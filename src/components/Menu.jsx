import React from 'react'
import { Link } from 'gatsby'

export default function Menu({ onToggleMenu }) {
  return (
    <nav id="menu">
      <div className="inner">
        <ul className="links">
          <li>
            <Link onClick={onToggleMenu} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link onClick={onToggleMenu} to="/about">
              About
            </Link>
          </li>
          <li>
            <Link onClick={onToggleMenu} to="/programs">
              Progams
            </Link>
          </li>
          <li>
            <Link onClick={onToggleMenu} to="/events">
              Events
            </Link>
          </li>
          <li>
            <Link onClick={onToggleMenu} to="/contact-us">
              Contact
            </Link>
          </li>
        </ul>
        <ul className="actions vertical">
          <li>
            <a href="/donate" className="button special fit">
              Donate
            </a>
          </li>
        </ul>
      </div>
      <a className="close" onClick={onToggleMenu} href="#!">
        Close
      </a>
    </nav>
  )
}
