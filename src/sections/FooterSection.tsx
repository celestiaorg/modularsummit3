import React from 'react'
import { pageData } from '@/lib/data/home'

import celestiaLogo from '../images/celestia-logo.png'
import maven11Logo from '../images/maven11-logo.png'
import modularLogo from '../images/modular-logo.png'

const FooterSection = () => {
  return (
    <section className={'w-full pt-10 lg:pb-[30px] lg:pt-14'}>
      <div className={'w-full px-7 py-4'}>
        <div className={''}>
          <div className={'mx-auto max-w-[1280px]'}>
            <div className={'flex justify-center'}>
              <div className={'basis-full md:basis-8/12 lg:basis-6/12'}>
                <div className={'flex items-center justify-center gap-6 border-b border-[#E5E5E5] pb-5 md:gap-10'}>
                  <div className={'basis-auto'}>
                    <a href={pageData.FooterSection.urls.celestia} target={'_blank'}>
                      <img src={celestiaLogo.src} alt="Celestia" className={'max-w-full'} />
                    </a>
                  </div>
                  <div className={'basis-auto'}>
                    <a href={pageData.FooterSection.urls.maven11} target={'_blank'}>
                      <img src={maven11Logo.src} alt="Maven11" className={'max-w-full'} />
                    </a>
                  </div>
                  <div className={'basis-auto'}>
                    <a href={pageData.FooterSection.urls.modular} target={'_blank'}>
                      <img src={modularLogo.src} alt="Modular" className={'max-w-full'} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className={'flex justify-center'}>
              <div className={'basis-auto pb-5 pt-4 text-center text-sm font-semibold text-black'}>{pageData.FooterSection.text}</div>
            </div>
            <div className={'flex justify-center'}>
              <div className={'basis-auto'}>
                <a href={pageData.FooterSection.socials.twitter} target={'_blank'}>
                  <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="0.5" y="0.761719" width="35" height="35" rx="17.5" stroke="#E5E5E5" />
                    <g clipPath="url(#clip0_6_422)">
                      <path
                        d="M19.238 17.2669L24.0784 11.7617H22.9318L18.7271 16.5409L15.3714 11.7617H11.5L16.5756 18.9893L11.5 24.7617H12.6466L17.0839 19.7137L20.6286 24.7617H24.5M13.0604 12.6077H14.8219L22.9309 23.9572H21.169"
                        fill="#3D3D3D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_6_422">
                        <rect width="13" height="13" fill="white" transform="translate(11.5 11.7617)" />
                      </clipPath>
                    </defs>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FooterSection
