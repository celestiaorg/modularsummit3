'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { pageData } from '@/lib/data/home'

const VideoSection = () => {
  const [activeVideo, setActiveVideo] = useState(0)
  const [videoId, setVideoId] = useState(pageData.VideoSection.videos[0].videoId)

  const changeVideo = (key: number, video: any) => {
    setActiveVideo(key)
    setVideoId(video.videoId)
  }
  return (
    <section className={'w-full'}>
      <div className={'w-full pb-4 lg:p-4 lg:pb-0'}>
        <div className={'bg-[#FBE5DB] px-4 py-10 lg:py-20'}>
          <div className={'mx-auto max-w-[1280px]'}>
            <div className={'flex flex-wrap items-center justify-between'}>
              <div className={'basis-full lg:basis-auto'}>
                <h2 className={'text-[32px] font-bold text-black lg:text-[42px]'}>{pageData.VideoSection.title}</h2>
              </div>
              <div className={'basis-full pt-[20px] lg:basis-auto lg:pt-0'}>
                <Link href={pageData.VideoSection.button.url} target={pageData.VideoSection.button.target}>
                  <button
                    className={'inline-flex items-center rounded-full bg-[#234735] px-6 py-4 text-sm font-semibold text-white transition-all hover:bg-black lg:tracking-[-0.28px]'}
                  >
                    <div className={'basis-auto'}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="19" viewBox="0 0 18 19" fill="none">
                        <path
                          d="M17.8207 5.89998C17.8207 5.89998 17.6449 4.65896 17.1035 4.11404C16.418 3.39685 15.6516 3.39333 15.3 3.35115C12.7828 3.16833 9.00352 3.16833 9.00352 3.16833H8.99648C8.99648 3.16833 5.21719 3.16833 2.7 3.35115C2.34844 3.39333 1.58203 3.39685 0.896484 4.11404C0.355078 4.65896 0.182812 5.89998 0.182812 5.89998C0.182812 5.89998 0 7.35896 0 8.81443V10.1785C0 11.634 0.179297 13.0929 0.179297 13.0929C0.179297 13.0929 0.355078 14.334 0.892969 14.8789C1.57852 15.5961 2.47852 15.5715 2.8793 15.6488C4.3207 15.7859 9 15.8281 9 15.8281C9 15.8281 12.7828 15.8211 15.3 15.6418C15.6516 15.5996 16.418 15.5961 17.1035 14.8789C17.6449 14.334 17.8207 13.0929 17.8207 13.0929C17.8207 13.0929 18 11.6375 18 10.1785V8.81443C18 7.35896 17.8207 5.89998 17.8207 5.89998ZM7.14023 11.8344V6.77537L12.0023 9.31365L7.14023 11.8344Z"
                          fill="white"
                        />
                      </svg>
                    </div>
                    <div className={'grow basis-auto pl-4'}>{pageData.VideoSection.button.title}</div>
                  </button>
                </Link>
              </div>
            </div>

            <div className={'mt-10 grid grid-cols-1 lg:mt-[50px] lg:grid-cols-2 lg:gap-[50px]'}>
              <div className={'h-[300px] lg:h-auto'}>
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?si=GmuTknDRzyiJkxrm`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div className={'pt-8 lg:pt-0'}>
                <div className={'flex flex-wrap'}>
                  {pageData.VideoSection.videos.map(function (video: any, key: number) {
                    return (
                      <div className={'basis-full cursor-pointer border-b border-[#E2E2E2] py-3'} key={key} onClick={() => changeVideo(key, video)}>
                        <div className={`${activeVideo === key ? 'text-[#EC9455]' : 'text-black'} text-[14px] font-bold leading-none lg:text-lg`}>{video.title}</div>
                        <div className={'text-[13px] font-medium text-[#959595]'}>{video.subtitle}</div>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default VideoSection
