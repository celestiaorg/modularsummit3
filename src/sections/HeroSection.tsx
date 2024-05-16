'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import logo from '../images/modular-summit-logo.svg'
import layer1 from '../images/hero-top.png'
import layer2 from '../images/hero-bottom.png'
import layerMobile from '../images/hero-mobile.png'
import { gsap } from 'gsap'
import Link from 'next/link'
import { pageData } from '@/lib/home'
import Countdown from 'react-countdown'

const HeroSection = () => {
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

  const Completionist = () => <span>LIVE</span>

  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed
  }: {
    days: number
    hours: number
    minutes: number
    seconds: number
    completed: boolean
  }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <div className={'flex items-center gap-[30px] md:gap-[50px]'}>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[40px] md:text-[80px] text-white font-bold tracking-[-1.6px] md:tracking-[-3.24px] block text-center leading-none'
              }
            >
              {days}
            </span>
            <span
              className={
                'text-base md:text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
              }
            >
              Days
            </span>
          </div>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[40px] md:text-[80px] text-white font-bold tracking-[-1.6px] md:tracking-[-3.24px] block text-center leading-none'
              }
            >
              {hours}
            </span>
            <span
              className={
                'text-base md:text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
              }
            >
              Hour
            </span>
          </div>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[40px] md:text-[80px] text-white font-bold tracking-[-1.6px] md:tracking-[-3.24px] block text-center leading-none'
              }
            >
              {minutes}
            </span>
            <span
              className={
                'text-base md:text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
              }
            >
              Minutes
            </span>
          </div>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[40px] md:text-[80px] text-white font-bold tracking-[-1.6px] md:tracking-[-3.24px] block text-center leading-none'
              }
            >
              {seconds}
            </span>
            <span
              className={
                'text-base md:text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
              }
            >
              Seconds
            </span>
          </div>
        </div>
      )
    }
  }

  return (
    <section className={'w-full relative overflow-hidden'}>
      <div className={'w-full p-4 max-h-[1100px] h-[140vw] md:h-[57vw] min-h-[800px]'}>
        <div className={'absolute top-0 left-0 w-full h-full bg-black opacity-30 z-[1]'} />
        <div
          className={
            'absolute top-0 left-0 w-full h-full z-[0] md:hidden bg-cover bg-center bg-no-repeat'
          }
          style={{ backgroundImage: `url(${layerMobile.src})` }}
        />

        <div className={'absolute left-0 top-0 w-full h-full z-0 hidden md:block'}>
          <div className={'layer-1 absolute -left-10 -bottom-20 -right-10 z-0'}>
            <img src={layer1.src} className={'object-cover'} ref={layer1Ref} />
          </div>
          <div className={'layer-2 absolute -left-10 -bottom-10 -right-10  z-1'} ref={layer2Ref}>
            <img src={layer2.src} className={'object-cover'} />
          </div>
        </div>
        <div className={'flex flex-wrap items-stretch p-10 md:p-[80px] h-full z-2 relative z-[2]'}>
          <div className={'basis-full'}>
            <div className={'w-[240px] md:w-auto mx-auto md:mx-0'}>
              <Image
                src={logo}
                alt={pageData.HeroSection.title}
                width={344}
                height={86}
                className={'max-w-full'}
              />
            </div>
          </div>
          <div className={'basis-full self-end'}>
            <div className={'flex flex-wrap items-end justify-between'}>
              <div className={'basis-full lg:basis-1/2 text-center lg:text-left'}>
                <h1
                  className={
                    'text-[64px] md:text-[80px] lg:text-[120px] leading-[0.85em] tracking-[-3.84px] md:tracking-[-5px] lg:tracking-[-7.2px] text-white font-bold will-change-transform'
                  }
                >
                  {pageData.HeroSection.title}
                </h1>

                <div
                  className={
                    'flex flex-wrap gap-2 md:gap-0 text-white font-bold leading-none text-[24px] tracking-[-0.96px] lg:text-[40px] lg:tracking-[-1.6px] mt-[30px] justify-center md:justify-start'
                  }
                >
                  <div className={'basis-full md:basis-auto md:pr-[30px]'}>
                    {pageData.HeroSection.date}
                  </div>
                  <div className={'basis-full md:basis-auto md:border-l border-white md:pl-[30px]'}>
                    {pageData.HeroSection.location}
                  </div>
                </div>
              </div>
              <div className={'basis-full lg:basis-1/2'}>
                <div className={'flex flex-wrap'}>
                  <div className={'basis-full order-2 md:order-1 pt-[30px] md:pt-0'}>
                    <div className={'flex flex-wrap justify-center md:justify-end'}>
                      <div className={'basis-auto'}>
                        <Link
                          href={pageData.HeroSection.button.url}
                          target={pageData.HeroSection.button.target}
                        >
                          <button
                            className={
                              'flex items-center text-[20px] text-black font-semibold lg:tracking-[-0.4px] px-10 py-5 md:py-6 bg-[#FFEA72] rounded-full hover:bg-yellow-300 transition-all'
                            }
                          >
                            <div className={'basis-auto'}>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="28"
                                height="28"
                                viewBox="0 0 28 28"
                                fill="none"
                              >
                                <path
                                  d="M6.41667 10.4H22.75M8.52778 3.5V5.30021M20.4167 3.5V5.29999M20.4167 5.29999H8.75C6.817 5.29999 5.25 6.91176 5.25 8.89997V20.9C5.25 22.8882 6.817 24.5 8.75 24.5H20.4167C22.3497 24.5 23.9167 22.8882 23.9167 20.9L23.9167 8.89997C23.9167 6.91176 22.3497 5.29999 20.4167 5.29999ZM14.5833 14V17M14.5833 17V20M14.5833 17H17.5M14.5833 17H11.6667"
                                  stroke="black"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </div>
                            <div className={'basis-auto grow pl-4'}>
                              {pageData.HeroSection.button.title}
                            </div>
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className={'basis-full order-1 md:order-2'}>
                    <div
                      className={'flex flex-wrap justify-center md:justify-end mt-[30px] md:mt-10'}
                    >
                      <div className={'basis-auto flex items-end'}>
                        <Countdown date={pageData.HeroSection.countDownDate} renderer={renderer} />,
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
