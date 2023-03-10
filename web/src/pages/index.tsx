import * as React from 'react'
import { Inter } from 'next/font/google'
import { ScrollToTop } from '@mikqi/scroll-to-top'
import { Expander } from '@mikqi/expander'

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
          <Expander>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            dolor excepturi maxime, odit atque aspernatur cumque quia unde
            deleniti in adipisci esse officia dolores eos vitae culpa. Nam,
            adipisci voluptates! ipsum dolor sit amet consectetur adipisicing
            elit. Eaque aperiam ex deleniti optio aliquid earum voluptatibus
            sit, dicta voluptatem consequatur tenetur, obcaecati necessitatibus
            expedita distinctio! Aut unde in commodi rem? ipsum dolor sit amet
            consectetur adipisicing elit. Consequatur magni velit laboriosam
            consequuntur facilis similique alias? Impedit dolores velit non
            soluta vel pariatur quas distinctio magni praesentium nam. Eos,
            consequuntur. ipsum dolor sit amet, consectetur adipisicing elit.
            Eum in impedit suscipit, quia rerum maiores nam nesciunt? Iure,
            corrupti maxime facilis, consectetur dolorum aliquam exercitationem
            inventore sit placeat hic nihil?
          </Expander>
          <ScrollToTop />
        </div>
      </main>
    </>
  )
}
