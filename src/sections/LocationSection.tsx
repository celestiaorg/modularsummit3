import React from 'react'
import { locationPageData } from '@/lib/data/location'

const LocationSection = () => {
  return (
    <section className="location w-full pb-4 pt-4 lg:p-4 lg:pb-0">
      {/* Image */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">
        <div className="layer-1 md:col-span-5" />
        <div className="layer-2 relative md:col-span-7">
          <div className="absolute bottom-0 right-0">
            <div className="m-5 max-w-[493px] bg-white p-7 md:p-[44px]">
              <h3>{locationPageData.LocationSection.title}</h3>
              <p>{locationPageData.LocationSection.address}</p>
              <a className="flex space-x-2 text-[#423ABB] underline" href={locationPageData.LocationSection.mapLink} target="_blank">
                <span>{locationPageData.LocationSection.mapLinkText} </span>
                <svg className="h-[20px] w-[20px] md:h-[23px] md:w-[23px]" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.375 2.875H20.125V8.625" stroke="#423ABB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M9.58301 13.4167L20.1247 2.875" stroke="#423ABB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                  <path
                    d="M17.25 12.4583V18.2083C17.25 18.7167 17.0481 19.2042 16.6886 19.5636C16.3292 19.9231 15.8417 20.125 15.3333 20.125H4.79167C4.28334 20.125 3.79582 19.9231 3.43638 19.5636C3.07693 19.2042 2.875 18.7167 2.875 18.2083V7.66667C2.875 7.15834 3.07693 6.67082 3.43638 6.31138C3.79582 5.95193 4.28334 5.75 4.79167 5.75H10.5417"
                    stroke="#423ABB"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LocationSection
