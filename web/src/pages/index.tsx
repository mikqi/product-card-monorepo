import * as React from 'react'
import { Inter } from 'next/font/google'
import { ScrollToTop } from '@mikqi/scroll-to-top'

import clsx from 'clsx'
import { ProductLists } from '@/app/Homepage/ProductLists'

const inter = Inter({
  variable: '--inter-font',
  subsets: ['latin'],
})

export default function Home() {
  return (
    <>
      <main className={clsx(inter.variable, 'max-w-7xl lg:mx-auto')}>
        <div className="py-16 sm:py-24 lg:mx-auto lg:max-w-7xl lg:px-8">
          <ProductLists />
          <ProductLists />
          <ProductLists />
          <ProductLists />
          <ProductLists />

          <ScrollToTop />
        </div>
      </main>
    </>
  )
}
