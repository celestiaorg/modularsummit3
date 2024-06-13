import React from 'react'
import { pageData } from '@/lib/home'

const WhatsNewSection = () => {
  return (
    <section className={'w-full whats-new-section'}>
      <div className={'w-full'}>
        <div className={'py-10 md:py-[130px]'}>
          <h2
            className={
              'text-black mb-5 md:mb-[50px] text-center font-bold text-[32px] tracking-[-0.96px] lg:tracking-[-2.04px] lg:text-[68px] leading-none'
            }
          >
            {pageData.WhatsNewSection.title}
          </h2>
          <div
            className={
              'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-[1280px] mx-auto gap-3'
            }
          >
            {pageData.WhatsNewSection.elements.map(function (element: any, key: number) {
              return (
                <div key={key} className={'text-center bg-[#F1F2DB] px-4 py-8 md:py-12 md:px-6'}>
                  <img className={'mb-3 mx-auto'} src={element.icon} alt={element.title} />
                  <div
                    className={
                      'mb-3 text-[18px] md:text-[22px] font-bold tracking-[-0.32px] md:tracking-[-0.44px] leading-[1.6em]'
                    }
                  >
                    {element.title}
                  </div>
                  <div
                    className={
                      'text-base text-black leading-[1.3em] tracking-[-0.32px] font-medium'
                    }
                  >
                    {element.text}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhatsNewSection
