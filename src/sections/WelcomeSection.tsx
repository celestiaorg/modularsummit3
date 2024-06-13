import React from 'react'
import { pageData } from '@/lib/data/home'

const WelcomeSection = () => {
  return (
    <section className={'w-full'}>
      <div className={'w-full'}>
        <div className={'px-7 py-7 lg:py-[120px] bg-[#E4F2FD]'}>
          <div className={'grid grid-cols-1 md:grid-cols-2 max-w-[1280px] mx-auto gap-7 lg:gap-20'}>
            <div
              className={
                'text-black font-bold text-2xl tracking-[-0.48px] lg:text-[28px] lg:tracking-[-0.56px] leading-[1.25em]'
              }
            >
              {pageData.WelcomeSection.lead}
            </div>
            <div
              className={
                'grid grid-cols-1 md:grid-cols-2 text-medium text-base text-black leading-[1.3em] tracking-[-0.32px] gap-6 lg:gap-10'
              }
            >
              <p>{pageData.WelcomeSection.text1}</p>
              <p>{pageData.WelcomeSection.text2}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
