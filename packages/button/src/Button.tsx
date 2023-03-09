import * as React from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

interface ButtondProps extends React.HTMLAttributes<HTMLButtonElement> {
  disabled?: boolean
  fullWidth?: boolean
}
export const Button = (props: ButtondProps) => {
  const { children, disabled, fullWidth, className, onClick, ...buttonProps } =
    props

  const classes = clsx(styles.button, fullWidth && styles.fullWidth, className)

  function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
    if (disabled) {
      event.preventDefault()
      return
    }
    onClick && onClick(event)
  }

  return (
    <button
      type="button"
      className={classes}
      aria-disabled={disabled}
      onClick={handleClick}
      {...buttonProps}
    >
      {children}
    </button>
  )
}
