'use client'
import React, { useEffect, useRef } from 'react'
import Image from 'next/image'

import logo from '../images/modular-summit-logo.svg'
import layer1 from '../images/hero-top.png'
import layer2 from '../images/hero-bottom.png'
import { gsap } from 'gsap'
import Link from 'next/link'
import { pageData } from '@/lib/home'
import Countdown from 'react-countdown'

const HeroSection = () => {
  const layer1Ref = useRef(null)
  const layer2Ref = useRef(null)
  const titleRef = useRef(null)

  useEffect(() => {
    const layer1 = layer1Ref.current
    const layer2 = layer2Ref.current
    const title = titleRef.current

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
      gsap.to(title, {
        duration: 2,
        x: (event.pageX - window.innerWidth / 2) / 50,
        y: (event.pageY - window.innerHeight / 2) / 50,
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
        <div className={'flex items-center gap-[50px]'}>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[80px] text-white font-bold tracking-[-3.24px] block text-center leading-none'
              }
            >
              {days}
            </span>
            <span
              className={
                'text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
              }
            >
              Days
            </span>
          </div>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[80px] text-white font-bold tracking-[-3.24px] block text-center leading-none'
              }
            >
              {hours}
            </span>
            <span
              className={
                'text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
              }
            >
              Hour
            </span>
          </div>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[80px] text-white font-bold tracking-[-3.24px] block text-center leading-none'
              }
            >
              {minutes}
            </span>
            <span
              className={
                'text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
              }
            >
              Minutes
            </span>
          </div>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[80px] text-white font-bold tracking-[-3.24px] block text-center leading-none'
              }
            >
              {seconds}
            </span>
            <span
              className={
                'text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
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
      <div className={'w-full p-4 min-h-[1100px]'}>
        <div className={'absolute left-0 top-0 w-full h-full bg-yellow-200'}>
          <div className={'layer-1 absolute -left-10 -bottom-10 -right-10 z-0'}>
            <img src={layer1.src} className={'object-cover'} ref={layer1Ref} />
          </div>
          <div className={'layer-2 absolute -left-10 -bottom-10 -right-10  z-1'} ref={layer2Ref}>
            <img src={layer2.src} />
          </div>
        </div>
        <div className={'flex flex-wrap items-stretch p-[80px] h-[1000px] z-2 relative'}>
          <div className={'basis-full'}>
            <Image src={logo} alt={'Modular Summit'} width={344} height={86} />
          </div>
          <div className={'basis-full self-end'}>
            <div className={'flex items-end justify-between'}>
              <div className={'basis-full lg:basis-1/2'}>
                <h1
                  className={
                    'lg:text-[120px] lg:leading-[0.85em] lg:tracking-[-7.2px] text-white font-bold will-change-transform'
                  }
                  ref={titleRef}
                >
                  Modular Summit 3.0
                </h1>

                <div
                  className={
                    'flex text-white font-bold leading-none lg:text-[40px] lg:tracking-[-1.6px] mt-[30px]'
                  }
                >
                  <div className={'basis-auto pr-[30px]'}>11-13 July, 2024</div>
                  <div className={'basis-auto border-l border-white pl-[30px]'}>
                    Brussels, Belgium
                  </div>
                </div>
              </div>
              <div className={'basis-full lg:basis-1/2'}>
                <div className={'flex flex-wrap justify-end'}>
                  <div className={'basis-auto'}>
                    <Link href={'/'}>
                      <button
                        className={
                          'flex items-center text-[20px] text-black font-semibold lg:tracking-[-0.4px] px-10 py-6 bg-[#FFEA72] rounded-full hover:bg-yellow-300 transition-all'
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
                <div className={'flex flex-wrap justify-end mt-10'}>
                  <div className={'basis-auto flex items-end'}>
                    <Countdown date={pageData.HeroSection.countDownDate} renderer={renderer} />,
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
