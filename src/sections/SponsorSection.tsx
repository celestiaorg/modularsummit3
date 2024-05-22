import React from 'react'
import { pageData } from '@/lib/home'

const SponsorSection = () => {
  return (
    <section className={'w-full sponsor-section'}>
      <div className={'w-full'}>
        <div className={'py-10 md:py-20'}>
          <h2
            className={
              'text-black mb-5 md:mb-[50px] text-center font-bold text-[32px] tracking-[-0.96px] lg:tracking-[-2.04px] lg:text-[68px] leading-none'
            }
          >
            {pageData.SponsorSection.title}
          </h2>
          <div
            className={
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1280px] mx-auto gap-3'
            }
          >
            {pageData.SponsorSection.sponsors.map(function (sponsor: any, key: number) {
              return <div key={key} className={''}></div>
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SponsorSection
