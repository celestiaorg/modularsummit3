'use client'
import React, { useEffect, useRef, useState } from 'react'
import layer1 from '../images/hero-top.png'
import layer2 from '../images/hero-bottom.png'
import layerMobile from '../images/hero-mobile.png'
import { gsap } from 'gsap'
import { pageData } from '@/lib/data/home'
import Countdown from 'react-countdown'
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

  const renderer = ({ days, hours, minutes, seconds, completed }: { days: number; hours: number; minutes: number; seconds: number; completed: boolean }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />
    } else {
      // Render a countdown
      return (
        <div className={'flex items-center gap-[30px] 2xl:gap-[50px]'}>
          <div suppressHydrationWarning>
            <span className={'block text-center text-[40px] font-bold leading-none tracking-[-1.6px] text-white lg:text-[60px] lg:tracking-[-3.24px] xl:text-[80px]'}>{days}</span>
            <span className={'block text-center text-base font-semibold leading-none tracking-[-1.35px] text-white lg:text-[24px] xl:text-[32px]'}>Days</span>
          </div>
          <div suppressHydrationWarning>
            <span className={'block text-center text-[40px] font-bold leading-none tracking-[-1.6px] text-white lg:text-[60px] lg:tracking-[-3.24px] xl:text-[80px]'}>{hours}</span>
            <span className={'block text-center text-base font-semibold leading-none tracking-[-1.35px] text-white lg:text-[24px] xl:text-[32px]'}>Hour</span>
          </div>
          <div suppressHydrationWarning>
            <span className={'block text-center text-[40px] font-bold leading-none tracking-[-1.6px] text-white lg:text-[60px] lg:tracking-[-3.24px] xl:text-[80px]'}>
              {minutes}
            </span>
            <span className={'block text-center text-base font-semibold leading-none tracking-[-1.35px] text-white lg:text-[24px] xl:text-[32px]'}>Minutes</span>
          </div>
          <div suppressHydrationWarning>
            <span className={'block text-center text-[40px] font-bold leading-none tracking-[-1.6px] text-white lg:text-[60px] lg:tracking-[-3.24px] xl:text-[80px]'}>
              {seconds}
            </span>
            <span className={'block text-center text-base font-semibold leading-none tracking-[-1.35px] text-white lg:text-[24px] xl:text-[32px]'}>Seconds</span>
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
    <section className={'hero-section relative w-full overflow-hidden border-white lg:border-x-[16px] lg:border-b-0'}>
      <div className={'h-[calc(100vh-40px)] w-full md:max-h-[600px] md:min-h-[600px] lg:min-h-[700px] xl:h-[calc(100vh-(90px+16px))] xl:max-h-[1300px]'}>
        <div className={'absolute left-0 top-0 z-[1] h-full w-full bg-black opacity-20'} />
        <div className={'absolute left-0 top-0 z-[0] h-full w-full bg-cover bg-center bg-no-repeat md:hidden'} style={{ backgroundImage: `url(${layerMobile.src})` }} />

        <div className={'absolute left-0 top-0 z-0 hidden h-full w-full md:block'}>
          {lowPowerMode ? (
            <div className={'layer-1 absolute -bottom-20 -left-10 -right-10 z-0'}>
              <img alt={'Modular Summit'} src={layer1.src} className={'object-cover'} ref={layer1Ref} />
            </div>
          ) : (
            <div className={'layer-1 absolute -left-10 -right-10 top-[-10%] z-0 lg:top-[-5%]'}>
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
        <div className={'relative z-[2] flex h-full flex-col justify-end'}>
          <div className={'basis-auto'}>
            <div className={'flex flex-wrap items-end justify-between px-[16px] pb-[40px] pt-[16px] sm:p-[50px]'}>
              <div className={'basis-full text-center lg:basis-1/2 lg:text-left'}>
                <h1
                  className={
                    'mb-8 text-balance text-[64px] font-bold leading-[0.95em] tracking-[-3.84px] text-white will-change-transform sm:text-[120px] sm:leading-[0.85em] lg:max-w-[650px]'
                  }
                >
                  {pageData.HeroSection.title}
                </h1>

                <div
                  className={
                    'mt-[20px] flex flex-wrap justify-center gap-2 text-[24px] font-bold leading-none tracking-[-0.96px] text-white md:gap-0 lg:justify-start lg:text-[26px] lg:tracking-[-1.24px] xl:tracking-[-1.6px] 2xl:text-[40px]'
                  }
                >
                  <div className={'basis-full md:basis-auto md:pr-[30px]'}>{pageData.HeroSection.date}</div>
                  <div className={'basis-full border-white md:basis-auto md:border-l md:pl-[30px]'}>{pageData.HeroSection.location}</div>
                </div>
              </div>
              <div className={'basis-full lg:basis-1/2'}>
                <div className={'flex flex-wrap items-center justify-center md:mt-10 lg:mt-0 lg:justify-end'}>
                  <div className={'order-2 basis-full pt-[30px] md:order-1 md:basis-auto md:pr-10 md:pt-0 lg:basis-full lg:pr-0'}>
                    <div className={'flex flex-wrap justify-center md:justify-end'}>
                      <div className={'hidden basis-auto md:block'}>
                        {pageData.HeroSection.countDownDate && (
                          <AddToCalendarButton
                            name={pageData.HeroSection.calendarButton.addToCalendarProps.name}
                            description={pageData.HeroSection.calendarButton.addToCalendarProps.description}
                            startDate={pageData.HeroSection.calendarButton.addToCalendarProps.startDate}
                            startTime={pageData.HeroSection.calendarButton.addToCalendarProps.startTime}
                            endDate={pageData.HeroSection.calendarButton.addToCalendarProps.endDate}
                            endTime={pageData.HeroSection.calendarButton.addToCalendarProps.endTime}
                            timeZone={pageData.HeroSection.calendarButton.addToCalendarProps.timeZone}
                            location={pageData.HeroSection.calendarButton.addToCalendarProps.location}
                            options={pageData.HeroSection.calendarButton.addToCalendarProps.options}
                            buttonStyle="round"
                            trigger="click"
                            listStyle="dropup-static"
                            size="10"
                            hideCheckmark
                            styleLight=" --btn-background: #FFEA72; --btn-text: #000; --btn-border: transparent; --btn-font-weight: 500;"
                          ></AddToCalendarButton>
                        )}
                      </div>
                      <div className="block basis-auto md:hidden">
                        <a
                          className="flex w-fit items-center rounded-full bg-brand-blue px-[28px] py-[14px] transition-colors hover:bg-[#4e8ec2] max-sm:ml-5"
                          href={pageData.HeroSection.tickets}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <svg className="mr-4 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M13 5V7M13 17V19M13 11V13M2 9C2.79565 9 3.55871 9.31607 4.12132 9.87868C4.68393 10.4413 5 11.2044 5 12C5 12.7956 4.68393 13.5587 4.12132 14.1213C3.55871 14.6839 2.79565 15 2 15V17C2 17.5304 2.21071 18.0391 2.58579 18.4142C2.96086 18.7893 3.46957 19 4 19H20C20.5304 19 21.0391 18.7893 21.4142 18.4142C21.7893 18.0391 22 17.5304 22 17V15C21.2044 15 20.4413 14.6839 19.8787 14.1213C19.3161 13.5587 19 12.7956 19 12C19 11.2044 19.3161 10.4413 19.8787 9.87868C20.4413 9.31607 21.2044 9 22 9V7C22 6.46957 21.7893 5.96086 21.4142 5.58579C21.0391 5.21071 20.5304 5 20 5H4C3.46957 5 2.96086 5.21071 2.58579 5.58579C2.21071 5.96086 2 6.46957 2 7V9Z"
                              stroke="black"
                              strokeWidth={2}
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                          <span className="text-[20px] font-normal">{pageData.HeroSection.ticketButton.title}</span>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className={'order-1 basis-full md:order-2 md:basis-auto lg:basis-full'}>
                    <div className={'mt-[30px] flex flex-wrap justify-center md:mt-0 md:justify-end md:pl-10 lg:mt-10 lg:pl-0'}>
                      <div className={'flex basis-auto items-end'}>
                        {pageData.HeroSection.countDownDate && <Countdown date={pageData.HeroSection.countDownDate} renderer={renderer} />}
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
