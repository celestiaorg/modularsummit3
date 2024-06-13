import React from 'react'
import { pageData } from '@/lib/data/home'

const SponsorSection = () => {
  return (
    <section className={'w-full sponsor-section'}>
      <div className="pseudo" />
      <div className={'w-full'}>
        <div className={'p-4 py-10 md:py-20'}>
          <h2
            className={
              'text-black mb-1 md:mb-5 text-center font-bold text-[32px] tracking-[-0.96px] lg:tracking-[-2.04px] lg:text-[68px] leading-none'
            }
          >
            {pageData.SponsorSection.title}
          </h2>
          <h4
            className={'text-black mb-5 md:mb-[50px] text-center font-medium text-lg leading-none'}
          >
            {pageData.SponsorSection.subtitle}
          </h4>
          <div className={'pseudo-anchor max-w-[1280px] mx-auto'}>
            {pageData.SponsorSection.sponsors.map(function (sponsor: any, key: number) {
              return (
                <div
                  key={key}
                  className={`flex flex-wrap mx-auto justify-items-center justify-center items-center mb-${sponsor.gap * 4}`}
                >
                  {sponsor.elements.map(function (element: any, index: number) {
                    return (
                      <div
                        key={index}
                        className={`basis-full sm:basis-${sponsor.span}/${sponsor.grid} p-${sponsor.gap}`}
                      >
                        <a href={element.url} target={'_blank'}>
                          <div className={'border border-[#DFDFDF] bg-white'}>
                            <img
                              src={element.logo}
                              alt={element.title}
                              className={`mx-auto`}
                              style={{ height: `${sponsor.size}px`, objectFit: 'contain' }}
                            ></img>
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
