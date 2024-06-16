import React from 'react'
import Link from 'next/link'
import { speakersPageData } from '@/lib/data/speakers'

interface SpeakersSectionProps {
  featured?: boolean
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ featured = false }) => {
  const MAX_FEATURED = 11
  const speakers = featured ? speakersPageData.SpeakersSection.speakers.slice(0, MAX_FEATURED) : speakersPageData.SpeakersSection.speakers

  return (
    <section className={`speakers-section w-full ${featured ? 'featured' : 'speakers'}`}>
      <div className={'w-full'}>
        <div className={'min-h-[2200px] p-4 pb-20 pt-10 md:pb-[120px] md:pt-[120px]'}>
          {featured && (
            <h2 className={'mb-16 text-center text-[32px] font-bold leading-none tracking-[-0.96px] text-white lg:text-[68px] lg:tracking-[-2.04px]'}>
              {speakersPageData.SpeakersSection.title}
            </h2>
          )}
          <div className={'mx-auto max-w-[1280px]'}>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {speakers.map((speaker, key) => (
                <div
                  key={key}
                  className="col-span-1 bg-brand-blue p-[10vw] transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#215FE5] sm:p-10 md:p-[6vw] lg:p-[3vw] xl:p-10"
                >
                  <img src={speaker.image} alt={speaker.speaker} className="max-h-[70vw] w-full object-cover lg:max-h-[220px]" />
                  <div className="mt-3">
                    <h3 className="font-inter text-center text-2xl font-semibold leading-[160%] tracking-[-0.02em] text-white">{speaker.speaker}</h3>
                    <p className="font-inter text-center text-sm font-bold leading-[130%] tracking-[-0.02em] text-black">{speaker.role}</p>
                    <p className="font-inter mt-4 text-center text-sm font-normal leading-[130%] tracking-[-0.02em] text-white">{speaker.company}</p>
                  </div>
                </div>
              ))}

              {featured && (
                <Link
                  className="group col-span-1 transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[12px_12px_0px_0px_#215FE5]"
                  href={speakersPageData.SpeakersSection.navigation.url}
                  target={speakersPageData.SpeakersSection.navigation.target}
                >
                  <div className="flex h-full flex-col items-center justify-center bg-brand-blue p-[10vw] sm:p-10 md:p-[6vw] lg:p-[3vw] xl:p-10">
                    <span className="font-inter text-center text-[40px] font-semibold leading-[110%] tracking-[-0.02em] text-white">
                      {speakersPageData.SpeakersSection.navigation.title}
                    </span>
                    <svg
                      className="mt-4 transition-all duration-300 group-hover:scale-125"
                      width={64}
                      height={64}
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M32.0001 13.3334L50.6667 32.0001M50.6667 32.0001L32.0001 50.6667M50.6667 32.0001L13.3334 32.0001"
                        stroke="white"
                        strokeWidth={3}
                        strokeLinecap="square"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SpeakersSection
