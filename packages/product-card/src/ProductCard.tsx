import * as React from 'react'
import clsx from 'clsx'
import { Button } from '@mikqi/button'
import styles from './ProductCard.module.css'

interface ProductCardProps {
  /**
   * The name of the product.
   */
  name: string

  /**
   * The price of the product in IDR.
   */
  price: number

  /**
   * The URL of the product image.
   */
  src: string

  /**
   * The discount percentage for the product.
   * If not provided, the product is not on sale.
   */
  discount?: number

  /**
   * Whether the product is currently available for purchase.
   * If false, the "Add to Cart" button is disabled.
   */
  active?: boolean
  className?: string
}

/**
 * Formats a number or string as an IDR currency value.
 *
 * @param value The number or string to format.
 * @returns The formatted currency value.
 */
export const monify = (value: number | string) => {
  const strValue = typeof value === 'number' ? String(value) : value
  const [integerPart] = strValue.split('.')
  const reversedIntegers = integerPart.split('').reverse()
  const formattedIntegers = []

  for (let i = 0; i < reversedIntegers.length; i += 1) {
    if (i !== 0 && i % 3 === 0) {
      formattedIntegers.push('.')
    }
    formattedIntegers.push(reversedIntegers[i])
  }

  return `Rp${formattedIntegers.reverse().join('')}`
}

/**
 * A card displaying information about a product.
 */
export const ProductCard = ({
  name,
  price,
  discount,
  src,
  active = true,
  className,
}: ProductCardProps) => {
  const discountedPrice = discount ? price - (price * discount) / 100 : 0

  return (
    <div className={clsx(styles.productCard, className)}>
      <div className={styles.imageContainer}>
        <img className={styles.image} src={src} alt={name} />
      </div>
      <div className={styles.detailsContainer}>
        <div className={styles.metaContainer}>
          <div className={styles.name}>{name}</div>
          <div className={styles.price}>
            {discountedPrice ? monify(discountedPrice) : monify(price)}
          </div>
          {discount ? (
            <div className={styles.discountContainer}>
              <span className={styles.discount}>{monify(price)}</span>
              <div className={styles.discountBadge}>{discount}%</div>
            </div>
          ) : (
            <></>
          )}
        </div>
        <Button fullWidth className={styles.button} disabled={!active}>
          {active ? 'Add to Cart' : 'Out of stock'}
        </Button>
      </div>
    </div>
  )
}
