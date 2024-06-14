import React from 'react'
import { pageData } from '@/lib/data/home'

const WelcomeSection = () => {
  return (
    <section className={'w-full pb-4 lg:p-4 lg:pb-0'}>
      <div className={'w-full'}>
        <div className={'bg-[#E4F2FD] px-7 py-7 lg:py-[120px]'}>
          <div className={'mx-auto grid max-w-[1280px] grid-cols-1 gap-7 md:grid-cols-2 lg:gap-20'}>
            <div className={'text-2xl font-bold leading-[1.25em] tracking-[-0.48px] text-black lg:text-[28px] lg:tracking-[-0.56px]'}>{pageData.WelcomeSection.lead}</div>
            <div className={'text-medium grid grid-cols-1 gap-6 text-base leading-[1.3em] tracking-[-0.32px] text-black md:grid-cols-2 lg:gap-10'}>
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
