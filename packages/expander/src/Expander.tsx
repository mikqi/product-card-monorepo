import * as React from 'react'
import clsx from 'clsx'
import { useDisclosure } from './useDisclosure'
import styles from './Expander.module.css'

interface ExpanderProps {
  defaultExpanded?: boolean
  maxLines?: number
  children?: React.ReactNode
}
export const Expander = ({
  defaultExpanded = false,
  maxLines = 2,
  children,
}: ExpanderProps) => {
  const [isExpanded, setIsExpanded] = React.useState(defaultExpanded)
  const { isOpen, onToggle } = useDisclosure({ isOpen: defaultExpanded })

  const toggleExpand = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <div className={styles.expander}>
      <div
        className={styles.expanderContent}
        style={{
          maxHeight: !isExpanded ? `${maxLines * 1.5}rem` : '100%',
        }}
      >
        {children}
      </div>
      <button
        className={styles.expanderToggle}
        onClick={() => {
          toggleExpand()
          onToggle()
        }}
      >
        {isOpen ? 'Show less' : 'Read more'}
        <ArrowIcon
          className={clsx(styles.expanderArrow, isOpen && styles.active)}
        />
      </button>
    </div>
  )
}

const ArrowIcon = (props: React.SVGAttributes<SVGElement>) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={props.className}
  >
    <path
      d="M7.41 8.58997L12 13.17L16.59 8.58997L18 9.99997L12 16L6 9.99997L7.41 8.58997Z"
      fill="currentColor"
    />
  </svg>
)
