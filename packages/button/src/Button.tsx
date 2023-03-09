import * as React from 'react'
import clsx from 'clsx'
import styles from './Button.module.css'

/**
 * Represents the props for the Button component
 * @interface
 * @param {boolean} [disabled] - Determines whether the button is disabled or not. Defaults to false.
 * @param {boolean} [fullWidth] - Determines whether the button should be full width or not. Defaults to false.
 * @param {React.HTMLAttributes<HTMLButtonElement>} [props] - Additional props for the button element.
 */
interface ButtondProps extends React.HTMLAttributes<HTMLButtonElement> {
  /**
   * Determines whether the button is disabled or not. Defaults to false.
   */
  disabled?: boolean

  /**
   * Determines whether the button should be full width or not. Defaults to false.
   */
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
