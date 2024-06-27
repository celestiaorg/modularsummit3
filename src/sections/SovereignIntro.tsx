import React from 'react'
import { sovereignPageData } from '@/lib/data/sovereign'

const WelcomeSection = () => {
  return (
    <section className={'w-full p-4 pb-4 lg:pb-0'}>
      <div className={'w-full'}>
        <div className={'bg-[#E4F2FD] px-7 py-14 lg:py-[120px]'}>
          <div className={'mx-auto max-w-[1280px]'}>
            <h2
              className={'mb-7 text-[26px] font-semibold leading-[1.2em] tracking-[-0.05em] text-black sm:mb-8 sm:text-[36px] lg:text-[44px] [&_span]:text-[#423ABB]'}
              dangerouslySetInnerHTML={{ __html: sovereignPageData.IntroData.title }}
            />
            <p
              className={'text-[18px] font-normal leading-[125%] tracking-[-0.02em] text-black sm:text-[20px] lg:text-[24px] [&_a]:text-[#423ABB] hover:[&_a]:underline'}
              dangerouslySetInnerHTML={{ __html: sovereignPageData.IntroData.text }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WelcomeSection
