import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa'
import clsx from 'clsx'
import styles from './ScrollToTop.module.css'

export const ScrollToTop = () => {
  const [showScrollButton, setShowScrollButton] = useState(false)

  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScrollButton(true)
    } else {
      setShowScrollButton(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={clsx(styles.scrollButton, showScrollButton && styles.visible)}
      onClick={handleClick}
    >
      <FaArrowUp />
    </button>
  )
}
