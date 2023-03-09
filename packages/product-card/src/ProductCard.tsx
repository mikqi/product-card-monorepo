import * as React from 'react'
import clsx from 'clsx'
import styles from './ProductCard.module.css'

export const ProductCard = (props: { active: boolean }) => {
  return (
    <div className={clsx(styles.productCard, props.active && styles.active)}>
      Product Card
    </div>
  )
}
