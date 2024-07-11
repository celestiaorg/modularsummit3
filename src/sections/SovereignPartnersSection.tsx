import React from 'react'
import { sovereignPageData } from '@/lib/data/sovereign'

const SovereignPartnersSection = () => {
  return (
    <section className={'w-full'}>
      <div className={'w-full'}>
        <div className={'px-4 pt-5 md:pt-[40px]'}>
          <h2 className={'mb-1 text-center text-[32px] font-bold leading-none tracking-[-0.96px] text-black sm:mb-5 lg:text-[68px] lg:tracking-[-2.04px]'}>
            {sovereignPageData.PartnerSection.title}
          </h2>
          <h4 className={'mb-10 text-center text-lg font-medium leading-none text-black sm:mb-5 md:mb-[50px]'}>{sovereignPageData.PartnerSection.subtitle}</h4>
          <div className={'mx-auto max-w-[1280px]'}>
            {sovereignPageData.PartnerSection.partners.map(function (sponsor: any, key: number) {
              return (
                <div key={key} className={`mx-auto flex flex-wrap items-center justify-center justify-items-center mb-${sponsor.gap * 4}`}>
                  {sponsor.elements.map(function (element: any, index: number) {
                    return (
                      <div key={index} className={`basis-full sm:basis-${sponsor.span}/${sponsor.grid} p-${sponsor.gap}`}>
                        <a href={element.url} target={'_blank'}>
                          <div className={'border border-[#DFDFDF] bg-white'}>
                            <img src={element.logo} alt={element.title} className={`mx-auto`} style={{ height: `${sponsor.size}px`, objectFit: 'contain' }}></img>
                          </div>
                        </a>
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SovereignPartnersSection
