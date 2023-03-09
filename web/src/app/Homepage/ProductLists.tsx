import * as React from 'react'

import { ProductCard } from '@mikqi/product-card'
import { Button } from '@mikqi/button'

import { PRODUCTS_DATA } from '@/data/product'

export const ProductLists = () => {
  const [scrollPosition, setScrollPosition] = React.useState(0)
  const listRef: React.RefObject<HTMLDivElement> = React.useRef(null)

  const handleNextClick = () => {
    if (listRef) {
      listRef?.current?.scrollBy({
        left: 200,
        behavior: 'smooth',
      })
      setScrollPosition((listRef?.current?.scrollLeft || 0) + 200)
    }
  }

  const handlePrevClick = () => {
    if (listRef) {
      listRef?.current?.scrollBy({
        left: -200,
        behavior: 'smooth',
      })
      setScrollPosition((listRef?.current?.scrollLeft || 0) - 200)
    }
  }
  return (
    <div className="relative mt-8 mb-8">
      <div
        className="relative -mb-6 w-full overflow-x-auto pb-6"
        id="product-list-container"
        ref={listRef}
      >
        <div
          role="list"
          className="mx-2 lg:mx-4 inline-flex space-x-4 lg:space-x-8"
        >
          {PRODUCTS_DATA.map((product, idx) => (
            <ProductCard
              key={product.name}
              name={product.name}
              price={product.price}
              discount={product.discount}
              active={product.stock > 0}
              src={`${product.image}?id=${idx}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-1/2 -left-10 transform -translate-y-1/2 flex">
        <Button
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300 mr-4"
          onClick={handlePrevClick}
          disabled={scrollPosition <= 0}
        >
          Prev
        </Button>
      </div>
      <div className="absolute top-1/2 -right-10 transform -translate-y-1/2 flex">
        <Button
          className="px-4 py-2 bg-gray-200 hover:bg-gray-300"
          onClick={handleNextClick}
          disabled={
            // @ts-expect-error
            listRef?.current?.scrollWidth -
              // @ts-expect-error
              listRef?.current?.clientWidth -
              50 <
            Math.abs(scrollPosition)
          }
        >
          Next
        </Button>
      </div>
    </div>
  )
}
