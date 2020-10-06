import React, { useCallback, useState, useRef, useEffect } from 'react'
import { Link, navigate } from 'gatsby'
import classNames from 'classnames'

import wbbWordmark from '../../assets/images/wbb-wordmark-white-no-bg.svg'

import styles from './Nav.module.scss'

export default function Nav() {
  const aboutRef = useRef(null)
  const getInvolvedRef = useRef(null)
  const makeAnImpactRef = useRef(null)
  const donateRef = useRef(null)
  const mavensRef = useRef(null)
  const meetupsRef = useRef(null)
  const bountyBoardRef = useRef(null)
  const slackRef = useRef(null)
  const hireRef = useRef(null)
  const partnerRef = useRef(null)
  const volunteerRef = useRef(null)
  const navItemRefs = [aboutRef, getInvolvedRef, makeAnImpactRef, donateRef]
  const getInvolvedRefs = [mavensRef, meetupsRef, bountyBoardRef, slackRef]
  const makeAnImpactRefs = [hireRef, partnerRef, volunteerRef]
  const [activeMenuItemIndex, setActiveMenuItemIndex] = useState(null)
  const [activeSubMenuItemIndex, setActiveSubMenuItemIndex] = useState(null)

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(mobileMenuOpen => !mobileMenuOpen)
  })

  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState('')

  const handleFocusMenuItem = useCallback(
    event => {
      const index = event.target.getAttribute('data-index')
      setActiveMenuItemIndex(Number(index))
    },
    [setActiveMenuItemIndex, activeMenuItemIndex]
  )

  const getInvolvedClassName = classNames(
    styles.DropdownItem,
    activeDropdown === 'Get involved' && dropdownOpen && styles.active
  )

  const makeAnImpactClassName = classNames(
    styles.DropdownItem,
    activeDropdown === 'Make an impact' && dropdownOpen && styles.active
  )

  const menuClassName = classNames(styles.Menu, mobileMenuOpen && styles.open)
  const mobileMenuButtonClassName = classNames(
    styles.MobileMenuToggle,
    styles.NavButton,
    'button'
  )
  const donateButtonClassName = classNames(
    styles.NavButton,
    styles.DonateButton,
    'button'
  )

  const closeButtonClassName = classNames(
    styles.NavButton,
    styles.CloseButton,
    'button'
  )

  const isDropdown = useCallback(
    name => name === 'Get involved' || name === 'Make an impact',
    []
  )

  const getIndexToFocus = useCallback(
    (direction, lastIndex) => (direction === 'up' ? lastIndex : 0),
    []
  )

  const focusNextSubMenuItem = useCallback(
    (name, direction) => {
      const refList =
        name === 'Get involved' ? getInvolvedRefs : makeAnImpactRefs

      const lastIndex = refList.length - 1
      let nextItemIndex = activeSubMenuItemIndex

      if (nextItemIndex === null) {
        nextItemIndex = getIndexToFocus(direction, lastIndex)
      } else if (direction === 'up') {
        nextItemIndex = nextItemIndex === 0 ? lastIndex : nextItemIndex - 1
      } else if (direction === 'down') {
        nextItemIndex = nextItemIndex === lastIndex ? 0 : nextItemIndex + 1
      }

      const nextItem = refList[nextItemIndex]
      setActiveSubMenuItemIndex(nextItemIndex)

      if (nextItem && nextItem.current) {
        nextItem.current.focus()
      }
    },
    [
      activeSubMenuItemIndex,
      dropdownOpen,
      activeDropdown,
      setActiveSubMenuItemIndex,
    ]
  )

  const closeDropdown = useCallback(() => {
    setActiveDropdown('')
    setActiveSubMenuItemIndex(null)
    setDropdownOpen(false)
  })
  const openDropdown = useCallback(name => {
    setActiveDropdown(name)
    setDropdownOpen(true)
  })

  const toggleDropdownMenu = useCallback(
    name => {
      if (activeDropdown === name) {
        return closeDropdown()
      }
      if (activeDropdown !== name) {
        return openDropdown(name)
      }
    },
    [dropdownOpen, activeDropdown]
  )

  const handleClickDropdown = useCallback(event => {
    const name = event.target.getAttribute('data-navItem')
    toggleDropdownMenu(name)
  })

  useEffect(() => {
    if (dropdownOpen && activeSubMenuItemIndex) {
      const refList =
        activeDropdown === 'Get involved' ? getInvolvedRefs : makeAnImpactRefs

      const menuItem = refList[activeSubMenuItemIndex]

      if (menuItem && menuItem.current) menuItem.current.focus()
    }
  }, [activeSubMenuItemIndex, activeDropdown, dropdownOpen])

  const handleDropdownKeyPress = useCallback(
    event => {
      const navItem = event.target.getAttribute('data-navItem')

      switch (event.key) {
        case 'Enter':
        case 'Space':
          return

        case 'ArrowDown':
          event.stopPropagation()
          event.preventDefault()
          if (!dropdownOpen) {
            openDropdown(navItem)
          }

          focusNextSubMenuItem(navItem, 'down')
          break

        case 'ArrowUp':
          event.stopPropagation()
          event.preventDefault()
          if (!dropdownOpen) {
            openDropdown(navItem)
          }

          focusNextSubMenuItem(navItem, 'up')
          break

        default:
          break
      }
    },
    [dropdownOpen, activeSubMenuItemIndex, activeDropdown]
  )

  const focusNextMenuItem = useCallback(
    direction => {
      let nextItemIndex = activeMenuItemIndex

      if (direction === 'left') {
        nextItemIndex =
          activeMenuItemIndex === 0
            ? navItemRefs.length - 1
            : activeMenuItemIndex - 1
      } else if (direction === 'right') {
        nextItemIndex =
          activeMenuItemIndex === navItemRefs.length - 1
            ? 0
            : activeMenuItemIndex + 1
      }

      const nextItem = navItemRefs[nextItemIndex]
      const nextItemName = nextItem.current.getAttribute('data-navItem')
      setActiveMenuItemIndex(nextItemIndex)

      if (nextItem && nextItem.current) {
        if (dropdownOpen && !isDropdown(nextItemName)) {
          closeDropdown()
        } else if (dropdownOpen && isDropdown(nextItemName)) {
          closeDropdown()
          openDropdown(nextItemName)
        }

        nextItem.current.focus()
      }
    },
    [activeMenuItemIndex, dropdownOpen]
  )

  const handleMenuKeyPress = useCallback(event => {
    const navItem = event.target.getAttribute('data-navItem')

    switch (event.key) {
      case 'Tab':
        // Because only the first nav item, 'About' in this case, has a tabindex, we know if we didn't tab to 'About' we've tabbed outside of the menu and should close any open dropdown.
        if (navItem !== 'About') return closeDropdown()
        return

      case 'Escape':
        return closeDropdown()

      case 'ArrowLeft':
        event.preventDefault()
        return focusNextMenuItem('left')

      case 'ArrowRight':
        event.preventDefault()
        return focusNextMenuItem('right')

      default:
        break
    }
  })

  const handleNavigate = useCallback(event => {
    const url = event.target.getAttribute('data-href')
    navigate(url)
  })

  const menuOpenTrigger = !mobileMenuOpen ? (
    <button className={mobileMenuButtonClassName} onClick={toggleMobileMenu}>
      Menu
    </button>
  ) : null

  const menuCloseTrigger = mobileMenuOpen ? (
    <button className={closeButtonClassName} onClick={toggleMobileMenu}>
      <span className="fa fa-2x fa-close" />
    </button>
  ) : null

  const menuMarkup = (
    <ul
      className={menuClassName}
      role="menubar"
      aria-label="We Build Black Site navigation"
    >
      <li role="none" className={styles.MenuItem}>
        <button
          type="button"
          className={styles.MenuLink}
          data-navItem="About"
          data-index={0}
          data-href="/about"
          role="menuitem"
          tabIndex={0}
          onClick={handleNavigate}
          onTouchStart={handleNavigate}
          onFocus={handleFocusMenuItem}
          ref={aboutRef}
        >
          About
        </button>
      </li>
      <li role="none" className={getInvolvedClassName}>
        <div
          className={styles.DropdownWrapper}
          onKeyDown={handleDropdownKeyPress}
          // onMouseEnter={handleMouseOver}
          // onMouseLeave={handleMouseLeave}
        >
          <button
            role="menuitem"
            type="button"
            tabIndex={-1}
            data-navItem="Get involved"
            data-index={1}
            className={styles.DropdownButton}
            aria-controls="get-involved-dropdown"
            aria-expanded={activeDropdown === 'Get involved' && dropdownOpen}
            onFocus={handleFocusMenuItem}
            onClick={handleClickDropdown}
            ref={getInvolvedRef}
          >
            Get involved
          </button>
          <ul
            className={styles.DropdownMenu}
            id="get-involved-dropdown"
            role="menu"
          >
            <li role="none" className={styles.DropdownMenuItem}>
              <Link
                role="menuitem"
                className={styles.DropdownMenuButton}
                data-navItem="Get involved"
                data-index={0}
                tabIndex={-1}
                ref={mavensRef}
                data-href="/get-involved/events/mavens-conference"
                to="/get-involved/events/mavens-conference"
              >
                Mavens I/O
              </Link>
            </li>
            <li role="none" className={styles.DropdownMenuItem}>
              <Link
                role="menuitem"
                className={styles.DropdownMenuButton}
                data-navItem="Get involved"
                data-index={1}
                tabIndex={-1}
                ref={meetupsRef}
                data-href="/get-involved/events/meetups"
                to="/get-involved/events/meetups"
              >
                Meetups
              </Link>
            </li>
            <li role="none" className={styles.DropdownMenuItem}>
              <a
                role="menuitem"
                className={styles.DropdownMenuButton}
                data-navItem="Get involved"
                data-index={2}
                tabIndex={-1}
                ref={bountyBoardRef}
                data-href="/get-involved/programs/bounty-board"
                href="/get-involved/programs/bounty-board"
                onClick={handleNavigate}
                target="_blank"
                rel="noreferrer"
              >
                Bounty Board
              </a>
            </li>
            <li role="none" className={styles.DropdownMenuItem}>
              <a
                role="menuitem"
                className={styles.DropdownMenuButton}
                data-navItem="Get involved"
                data-href="/get-involved/slack"
                href="/get-involved/slack"
                target="_blank"
                rel="noreferrer"
                data-index={3}
                ref={slackRef}
                tabIndex={-1}
                onClick={handleNavigate}
              >
                Slack
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li role="none" className={makeAnImpactClassName}>
        <div
          className={styles.DropdownWrapper}
          onKeyUp={handleDropdownKeyPress}
        >
          <button
            type="button"
            role="menuitem"
            data-navItem="Make an impact"
            data-index={2}
            className={styles.DropdownButton}
            aria-controls="make-an-impact-dropdown"
            aria-expanded={activeDropdown === 'Make an impact' && dropdownOpen}
            onFocus={handleFocusMenuItem}
            onClick={handleClickDropdown}
            ref={makeAnImpactRef}
            tabIndex={-1}
          >
            Make an impact
          </button>
          <ul
            className={styles.DropdownMenu}
            id="make-an-impact-dropdown"
            role="menu"
          >
            <li role="none" className={styles.DropdownMenuItem}>
              <a
                className={styles.DropdownMenuButton}
                tabIndex={-1}
                role="menuitem"
                ref={hireRef}
                data-href="/make-an-impact/hire"
                data-navItem="Make an impact"
                data-menuItem="Hire"
                data-index={0}
                href="/make-an-impact/hire"
                target="_blank"
                rel="noreferrer"
              >
                Hire
              </a>
            </li>
            <li role="none" className={styles.DropdownMenuItem}>
              <Link
                className={styles.DropdownMenuButton}
                tabIndex={-1}
                role="menuitem"
                ref={partnerRef}
                data-navItem="Make an impact"
                data-menuItem="Partner"
                data-href="/make-an-impact/partner"
                data-index={1}
                to="/make-an-impact/partner"
              >
                Partner
              </Link>
            </li>
            <li role="none" className={styles.DropdownMenuItem}>
              <a
                className={styles.DropdownMenuButton}
                tabIndex={-1}
                role="menuitem"
                ref={volunteerRef}
                data-navItem="Make an impact"
                data-menuItem="Volunteer"
                data-href="/make-an-impact/volunteer"
                data-index={2}
                href="/make-an-impact/volunteer"
                target="_blank"
                rel="noreferrer"
              >
                Volunteer
              </a>
            </li>
          </ul>
        </div>
      </li>
      <li className={styles.MenuItem} role="none">
        <form
          className={styles.DonateForm}
          action="https://www.paypal.com/cgi-bin/webscr"
          method="post"
          target="_blank"
        >
          <input type="hidden" name="cmd" value="_s-xclick" />
          <input type="hidden" name="hosted_button_id" value="RZWPA5VWQSV3U" />
          <button
            type="submit"
            className={donateButtonClassName}
            data-navItem="Donate"
            data-index={3}
            ref={donateRef}
            onFocus={handleFocusMenuItem}
            tabIndex={-1}
            role="menuitem"
          >
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
    </ul>
  )

  return (
    <nav className={styles.Nav} aria-label="We Build Black Site navigation">
      <div className={styles.BrandWrapper}>
        <Link to="/" className={styles.BrandLink} data-navItem="Home">
          <img className={styles.Logo} src={wbbWordmark} alt="We Build Black" />
        </Link>
        {menuOpenTrigger}
        {menuCloseTrigger}
      </div>
      <div onKeyDown={handleMenuKeyPress}>{menuMarkup}</div>
    </nav>
  )
}
