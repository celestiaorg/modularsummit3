import React from 'react'
import { pageData } from '@/lib/data/home'

const WhatsNewSection = () => {
  return (
    <section className={'whats-new-section w-full'}>
      <div className={'w-full'}>
        <div className={'py-20 md:py-[130px]'}>
          <h2 className={'mb-16 text-center text-[32px] font-bold leading-none tracking-[-0.96px] text-black sm:mb-5 md:mb-[50px] lg:text-[68px] lg:tracking-[-2.04px]'}>
            {pageData.WhatsNewSection.title}
          </h2>
          <div className={'mx-auto grid max-w-[1280px] grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3'}>
            {pageData.WhatsNewSection.elements.map(function (element: any, key: number) {
              return (
                <div key={key} className={'bg-[#F1F2DB] px-4 py-8 text-center md:px-6 md:py-12'}>
                  <img className={'mx-auto mb-3'} src={element.icon} alt={element.title} />
                  <div className={'mb-3 text-[18px] font-bold leading-[1.6em] tracking-[-0.32px] md:text-[22px] md:tracking-[-0.44px]'}>{element.title}</div>
                  <div className={'text-base font-medium leading-[1.3em] tracking-[-0.32px] text-black'}>{element.text}</div>
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
