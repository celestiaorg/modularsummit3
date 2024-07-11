'use client'
import React, { useEffect, useRef, useState } from 'react'
import layer1 from '../images/hero-top.png'
import layer2 from '../images/hero-bottom.png'
import layerMobile from '../images/hero-mobile.png'
import { gsap } from 'gsap'

const HeroSectionSecondary = ({ title }: { title: string }) => {
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
    <section className={'hero-section relative w-full overflow-hidden border-white lg:border-x-[16px] lg:border-b-0'}>
      <div className={'h-[90vh] max-h-[1100px] w-full sm:h-[5vw] sm:min-h-[450px] md:h-[30vw] md:min-h-[450px] xl:min-h-[580px] 2xl:h-[700px]'}>
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
        <div className={'relative z-[2] flex h-full flex-col justify-end'}>
          <div className={'basis-auto'}>
            <div className={'flex flex-wrap items-end justify-between px-[16px] pb-[40px] pt-[16px] sm:p-[50px]'}>
              <div className={'basis-full text-center lg:text-left'}>
                <h1 className={'mb-20 text-[54px] font-bold leading-[1.1em] tracking-[-3.84px] text-white will-change-transform sm:mb-10 sm:text-[80px] sm:leading-[0.85em]'}>
                  {title}
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSectionSecondary
