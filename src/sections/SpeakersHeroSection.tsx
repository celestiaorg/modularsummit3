'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import logo from '../images/modular-summit-logo.svg'
import layer1 from '../images/hero-top.png'
import layer2 from '../images/hero-bottom.png'
import layerMobile from '../images/hero-mobile.png'
import { gsap } from 'gsap'
import { pageData } from '@/lib/data/home'
import { speakersPageData } from '@/lib/data/speakers'

const SpeakersHeroSection = () => {
  const layer1Ref = useRef(null)
  const layer2Ref = useRef(null)

  useEffect(() => {
    const layer1 = layer1Ref.current
    const layer2 = layer2Ref.current

    const onMouseMove = (event: any) => {
      gsap.to(layer1, {
        duration: 2,
        x: (event.pageX - window.innerWidth / 2) / 50,
        y: -(event.pageY - window.innerHeight / 2) / 50,
        ease: 'slow'
      })

      gsap.to(layer2, {
        duration: 2,
        x: -(event.pageX - window.innerWidth / 2) / 100,
        y: (event.pageY - window.innerHeight / 2) / 100,
        ease: 'slow'
      })
    }

    window.addEventListener('mousemove', onMouseMove)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  const [lowPowerMode, setLowPowerMode] = useState(false)

  const handleVideoLoad = () => {
    //@ts-ignore
    let videoElement: HTMLVideoElement = document.getElementById('video')
    //@ts-ignore
    let promise = videoElement?.play()

    if (promise !== undefined) {
      promise
        .catch((error) => {
          if (error.name === 'NotAllowedError') {
            setLowPowerMode(true)
          }
        })
        .then(() => {
          videoElement?.classList.remove('hidden')
        })
    }
  }

  useEffect(() => {
    handleVideoLoad()
  }, [])

  return (
    <section className={'hero-section relative w-full overflow-hidden border-white lg:border-[16px] lg:border-b-0'}>
      <div className={'h-[10vw] max-h-[1100px] w-full sm:h-[5vw] sm:min-h-[450px] md:h-[30vw] md:min-h-[450px] xl:min-h-[580px] 2xl:h-[700px]'}>
        <div className={'absolute left-0 top-0 z-[1] h-full w-full bg-black opacity-20'} />
        <div className={'absolute left-0 top-0 z-[0] h-full w-full bg-cover bg-center bg-no-repeat md:hidden'} style={{ backgroundImage: `url(${layerMobile.src})` }} />

        <div className={'absolute left-0 top-0 z-0 hidden h-full w-full md:block'}>
          {lowPowerMode ? (
            <div className={'layer-1 absolute -bottom-20 -left-10 -right-10 z-0'}>
              <img alt={'Modular Summit'} src={layer1.src} className={'object-cover'} ref={layer1Ref} />
            </div>
          ) : (
            <div className={'layer-1 absolute -left-10 -right-10 top-[-50%] z-0 lg:top-[-90%]'}>
              <video id={'video'} loop={false} playsInline={true} autoPlay={true} muted={true} className={'hidden h-full w-full'}>
                <source src={'/videos/Celestia_Modular_SUMMIT_bg_anim_crop_2100_25mbps.mp4'} type='video/mp4;codecs="hvc1"' />
                <source src={'/videos/Celestia_Modular_SUMMIT_bg_anim_crop_2100_25mbps-vp9-chrome.webm'} type="video/webm" />
              </video>
            </div>
          )}
          <div className={'layer-2 z-1 absolute -bottom-10 -left-10 -right-10'} ref={layer2Ref}>
            <img alt={'Modular Summit'} src={layer2.src} className={'object-cover'} />
          </div>
        </div>
        <div className={'relative z-[2] flex h-full flex-col justify-between'}>
          <div className={'flex basis-auto items-center justify-between bg-white px-3 pb-3 pt-[10px] sm:px-[32px] sm:pb-2.5 lg:pt-0 xl:pb-[16px]'}>
            <div className={'basis-auto'}>
              <div className="flex items-center space-x-5 md:space-x-10">
                <div className={'w-100% mx-auto lg:mx-0 xl:w-auto'}>
                  <Image src={logo} alt={pageData.HeroSection.title} width={173} height={44} className={'max-w-full'} />
                </div>

                <Link className="text-sm font-semibold sm:text-[16px]" href={'/'}>
                  Home
                </Link>
                <Link className="text-sm font-semibold sm:text-[16px]" href={'/speakers'}>
                  Speakers
                </Link>
              </div>
            </div>
            <div className={'basis-auto'}>
              <a
                className="flex w-fit items-center rounded-full bg-brand-blue px-5 py-2 transition-colors hover:bg-brand-blue/80 max-sm:ml-5 sm:px-[28px] sm:py-[14px]"
                href={pageData.HeroSection.tickets}
                target={'_blank'}
              >
                <svg className="w-5 sm:mr-4 md:w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13 5V7M13 17V19M13 11V13M2 9C2.79565 9 3.55871 9.31607 4.12132 9.87868C4.68393 10.4413 5 11.2044 5 12C5 12.7956 4.68393 13.5587 4.12132 14.1213C3.55871 14.6839 2.79565 15 2 15V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V15C21.2044 15 20.4413 14.6839 19.8787 14.1213C19.3161 13.5587 19 12.7956 19 12C19 11.2044 19.3161 10.4413 19.8787 9.87868C20.4413 9.31607 21.2044 9 22 9V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V9Z"
                    stroke="black"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="hidden text-[20px] font-normal sm:block">{pageData.HeroSection.ticketButton.title}</span>
              </a>
            </div>
          </div>
          <div className={'basis-auto'}>
            <div className={'flex flex-wrap items-end justify-between px-[16px] pb-[40px] pt-[16px] sm:p-[50px]'}>
              <div className={'basis-full text-center lg:basis-1/2 lg:text-left'}>
                <h1 className={'mb-8 max-w-[650px] text-[64px] font-bold leading-[0.95em] tracking-[-3.84px] text-white will-change-transform sm:text-[120px] sm:leading-[0.85em]'}>
                  {speakersPageData.SpeakersHeroSection.title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpeakersHeroSection
