'use client'
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import logo from '../images/modular-summit-logo.svg'
import layer1 from '../images/hero-top.png'
import layer2 from '../images/hero-bottom.png'
import layerMobile from '../images/hero-mobile.png'
import { gsap } from 'gsap'
import { pageData } from '@/lib/home'
import Countdown from 'react-countdown'
import ticket from '../images/ticket.svg'
import { AddToCalendarButton } from 'add-to-calendar-button-react'

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
        <div className={'flex items-center gap-[30px] 2xl:gap-[50px]'}>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[40px] lg:text-[60px] xl:text-[80px] text-white font-bold tracking-[-1.6px] lg:tracking-[-3.24px] block text-center leading-none'
              }
            >
              {days}
            </span>
            <span
              className={
                'text-base lg:text-[24px] xl:text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
              }
            >
              Days
            </span>
          </div>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[40px] lg:text-[60px] xl:text-[80px] text-white font-bold tracking-[-1.6px] lg:tracking-[-3.24px] block text-center leading-none'
              }
            >
              {hours}
            </span>
            <span
              className={
                'text-base lg:text-[24px] xl:text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
              }
            >
              Hour
            </span>
          </div>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[40px] lg:text-[60px] xl:text-[80px] text-white font-bold tracking-[-1.6px] lg:tracking-[-3.24px] block text-center leading-none'
              }
            >
              {minutes}
            </span>
            <span
              className={
                'text-base lg:text-[24px] xl:text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
              }
            >
              Minutes
            </span>
          </div>
          <div suppressHydrationWarning>
            <span
              className={
                'text-[40px] lg:text-[60px] xl:text-[80px] text-white font-bold tracking-[-1.6px] lg:tracking-[-3.24px] block text-center leading-none'
              }
            >
              {seconds}
            </span>
            <span
              className={
                'text-base lg:text-[24px] xl:text-[32px] tracking-[-1.35px] font-semibold text-white block text-center leading-none'
              }
            >
              Seconds
            </span>
          </div>
        </div>
      )
    }
  }

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
    <section
      className={'w-full relative overflow-hidden lg:border-[16px] lg:border-b-0 border-white '}
    >
      <div
        className={
          'w-full p-4 max-h-[1100px] h-[140vw] md:h-[57vw] min-h-[800px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[700px]'
        }
      >
        <div className={'absolute top-0 left-0 w-full h-full bg-black opacity-20 z-[1]'} />
        <div
          className={
            'absolute top-0 left-0 w-full h-full z-[0] md:hidden bg-cover bg-center bg-no-repeat'
          }
          style={{ backgroundImage: `url(${layerMobile.src})` }}
        />

        <div className={'absolute left-0 top-0 w-full h-full z-0 hidden md:block'}>
          {lowPowerMode ? (
            <div className={'layer-1 absolute -left-10 -bottom-20 -right-10 z-0'}>
              <img
                alt={'Modular Summit'}
                src={layer1.src}
                className={'object-cover'}
                ref={layer1Ref}
              />
            </div>
          ) : (
            <div className={'layer-1 absolute -left-10 top-[-10%] lg:top-[-15%] -right-10 z-0'}>
              <video
                id={'video'}
                loop={false}
                playsInline={true}
                autoPlay={true}
                muted={true}
                className={'hidden h-full w-full'}
              >
                <source
                  src={'/videos/Celestia_Modular_SUMMIT_bg_anim_crop_2100_25mbps.mp4'}
                  type='video/mp4;codecs="hvc1"'
                />
                <source
                  src={'/videos/Celestia_Modular_SUMMIT_bg_anim_crop_2100_25mbps-vp9-chrome.webm'}
                  type="video/webm"
                />
              </video>
            </div>
          )}
          <div className={'layer-2 absolute -left-10 -bottom-10 -right-10  z-1'} ref={layer2Ref}>
            <img alt={'Modular Summit'} src={layer2.src} className={'object-cover'} />
          </div>
        </div>
        <div
          className={
            'flex flex-wrap items-stretch py-10 md:p-10 lg:p-10 xl:p-[80px] h-full relative z-[2]'
          }
        >
          <div className={'basis-full'}>
            <div className={'flex items-center justify-center md:justify-end'}>
              <div className={'basis-1/2 md:basis-auto'}>
                <div className={'w-72 md:w-[240px] xl:w-auto mx-auto lg:mx-0'}>
                  <Image
                    src={logo}
                    alt={pageData.HeroSection.title}
                    width={344}
                    height={86}
                    className={'max-w-full'}
                  />
                </div>
              </div>
            </div>
            <div className={'flex items-center justify-center md:justify-end pt-5 md:pt-0'}>
              <div className={'basis-1/2 md:basis-auto md:pr-2'}>
                <a href={pageData.HeroSection.tickets} target={'_blank'}>
                  <Image
                    src={ticket.src}
                    alt={'Ticket'}
                    width={171}
                    height={73}
                    className={'mx-auto md:mx-0'}
                  />
                </a>
              </div>
            </div>
          </div>
          <div className={'basis-full self-end'}>
            <div className={'flex flex-wrap items-end justify-between'}>
              <div className={'basis-full lg:basis-1/2 text-center lg:text-left'}>
                <h1
                  className={
                    'text-[64px] leading-[0.85em] tracking-[-3.84px] text-white font-bold will-change-transform'
                  }
                >
                  {pageData.HeroSection.title}
                </h1>

                <div
                  className={
                    'flex flex-wrap gap-2 md:gap-0 text-white font-bold leading-none text-[24px] tracking-[-0.96px] lg:text-[26px] 2xl:text-[40px] lg:tracking-[-1.24px] xl:tracking-[-1.6px] mt-[20px] justify-center lg:justify-start'
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
                <div
                  className={
                    'flex flex-wrap items-center md:mt-10 lg:mt-0 justify-center lg:justify-end'
                  }
                >
                  <div
                    className={
                      'basis-full md:basis-auto lg:basis-full order-2 md:order-1 pt-[30px] md:pt-0 md:pr-10 lg:pr-0'
                    }
                  >
                    <div className={'flex flex-wrap justify-center md:justify-end'}>
                      <div className={'basis-auto'}>
                        {pageData.HeroSection.countDownDate && (
                          <AddToCalendarButton
                            name="Modular Summit 3.0"
                            description="Join Us!"
                            startDate="2024-07-13"
                            startTime="10:00"
                            endDate="2024-07-16"
                            endTime="20:00"
                            timeZone="Europe/Brussels"
                            location="Brussels"
                            options="'Apple','Google','iCal','Outlook.com','Yahoo'"
                            buttonStyle="round"
                            trigger="click"
                            listStyle="dropup-static"
                            size="10"
                            hideCheckmark
                            styleLight="--btn-background: #FFEA72; --btn-text: #000; --btn-border: transparent; --btn-font-weight: 600;"
                          ></AddToCalendarButton>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className={'basis-full md:basis-auto lg:basis-full order-1 md:order-2'}>
                    <div
                      className={
                        'flex flex-wrap justify-center md:justify-end mt-[30px] md:mt-0 lg:mt-10 md:pl-10 lg:pl-0'
                      }
                    >
                      <div className={'basis-auto flex items-end'}>
                        {pageData.HeroSection.countDownDate && (
                          <Countdown
                            date={pageData.HeroSection.countDownDate}
                            renderer={renderer}
                          />
                        )}
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
