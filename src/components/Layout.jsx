import React, { useCallback, useState } from 'react'
import classname from 'classnames'

import { Nav, Footer, Contact } from '../components'

import '../assets/scss/main.scss'

export default function Layout({
  children,
  footer = true,
  header = true,
  contact,
}) {
  const [menuVisible, setMenuVisible] = useState(false)
  const toggleMenu = useCallback(() =>
    setMenuVisible(menuVisible => !menuVisible)
  )

  const className = classname('body', menuVisible && 'is-menu-visible')
  const navMarkup = header ? <Nav /> : null
  const contactMarkup = contact ? <Contact /> : null
  const footerMarkup = footer ? <Footer /> : null

  return (
    <div className={className}>
      <div id="wrapper" className="bg-black-900">
        {navMarkup}
        <main>{children}</main>
        {contactMarkup}
        {footerMarkup}
      </div>
    </div>
  )
}
