import React from 'react'
import Link from 'next/link'
import { pageData } from '@/lib/data/speakers'

interface SpeakersSectionProps {
  featured?: boolean
}

const SpeakersSection: React.FC<SpeakersSectionProps> = ({ featured = false }) => {
  const MAX_FEATURED = 11
  const speakers = featured
    ? pageData.SpeakersSection.speakers.slice(0, MAX_FEATURED)
    : pageData.SpeakersSection.speakers

  return (
    <section className={`w-full speakers-section ${featured ? 'featured' : 'speakers'}`}>
      <div className={'w-full'}>
        <div className={'p-4 py-10 md:py-[120px]'}>
          <h2
            className={
              'text-black mb-5 text-center font-bold text-[32px] tracking-[-0.96px] lg:tracking-[-2.04px] lg:text-[68px] leading-none'
            }
          >
            {pageData.SpeakersSection.title}
          </h2>
          <div className={'max-w-[1280px] mx-auto mt-16'}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {speakers.map((speaker, key) => (
                <div
                  key={key}
                  className="col-span-1 bg-brand-blue p-[10vw] sm:p-10 md:p-[6vw] lg:p-[3vw] xl:p-10 hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[12px_12px_0px_0px_#215FE5]"
                >
                  <img
                    src={speaker.image}
                    alt={speaker.speaker}
                    className="w-full max-h-[70vw] lg:max-h-[220px] object-cover"
                  />
                  <div className="mt-3">
                    <h3 className="font-inter font-semibold text-2xl leading-[160%] text-center tracking-[-0.02em] text-white">
                      {speaker.speaker}
                    </h3>
                    <p className="font-inter font-bold text-sm leading-[130%] text-center tracking-[-0.02em] text-black">
                      {speaker.role}
                    </p>
                    <p className="font-inter font-normal text-sm leading-[130%] text-center tracking-[-0.02em] text-white mt-4">
                      {speaker.company}
                    </p>
                  </div>
                </div>
              ))}

              {featured && (
                <Link
                  className="col-span-1 group hover:-translate-x-1 hover:-translate-y-1 transition-all duration-300 hover:shadow-[12px_12px_0px_0px_#215FE5]"
                  href={pageData.SpeakersSection.navigation.url}
                  target={pageData.SpeakersSection.navigation.target}
                >
                  <div className="flex flex-col items-center justify-center h-full bg-brand-blue p-[10vw] sm:p-10 md:p-[6vw] lg:p-[3vw] xl:p-10">
                    <span className="font-inter font-semibold text-[40px] leading-[110%] text-center tracking-[-0.02em] text-white">
                      {pageData.SpeakersSection.navigation.title}
                    </span>
                    <svg
                      className="mt-4 group-hover:scale-125 transition-all duration-300"
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
