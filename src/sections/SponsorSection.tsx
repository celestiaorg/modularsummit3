import React from 'react'
import { pageData } from '@/lib/data/home'

const SponsorSection = () => {
  return (
    <section className={'sponsor-section w-full'}>
      <div className="pseudo" />
      <div className={'w-full'}>
        <div className={'px-4 pb-10 pt-20 md:pb-[60px] md:pt-[130px]'}>
          <h2 className={'smmd:mb-5 mb-1 text-center text-[32px] font-bold leading-none tracking-[-0.96px] text-black lg:text-[68px] lg:tracking-[-2.04px]'}>
            {pageData.SponsorSection.title}
          </h2>
          <h4 className={'mb-10 text-center text-lg font-medium leading-none text-black sm:mb-5 md:mb-[50px]'}>{pageData.SponsorSection.subtitle}</h4>
          <div className={'pseudo-anchor mx-auto max-w-[1280px]'}>
            {pageData.SponsorSection.sponsors.map(function (sponsor: any, key: number) {
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

export default SponsorSection
