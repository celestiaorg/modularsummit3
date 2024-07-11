import React from 'react'
import { locationPageData } from '@/lib/data/location'

const BusSchedule = () => {
  return (
    <section className="bus-schedule w-full pb-4 pt-24 lg:pb-0">
      <div className="mx-auto max-w-[1280px]">
        {/* Bus Schedule */}
        <div className="intro mb-12 grid grid-cols-1 gap-4 max-2xl:px-7 md:mb-16 md:grid-cols-2">
          <div>
            <h2>{locationPageData.BusSchedule.title}</h2>
            <a className="flex space-x-2 text-[#423ABB] underline" href={locationPageData.BusSchedule.mapLink} target="_blank">
              <span>{locationPageData.BusSchedule.mapLinkText} </span>
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
          <p>{locationPageData.BusSchedule.description}</p>
        </div>
        <div className="mb-12 grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-4">
          <div className="layer-1 lg:col-span-2" />
          <div className="">
            <div className="h-full w-full">
              <div className="mx-auto max-w-[1280px]">
                <h2 className="text-2xl font-bold leading-[1.25em] tracking-[-0.48px] text-black lg:text-[28px] lg:tracking-[-0.56px]"></h2>
                <div className="bg-[#234735] p-4 text-white">
                  <h3 className="mb-2 text-xl font-semibold">{locationPageData.BusSchedule1.title}</h3>
                  <p className="text-sm">{locationPageData.BusSchedule1.date}</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white">
                    <thead>
                      <tr className="bg-[#E4F2FD]">
                        <th className="h-20 w-1/2 border-b border-r px-3.5 py-4 text-center align-top text-[15px] font-semibold">
                          {locationPageData.BusSchedule1.departureLocation}
                        </th>
                        <th className="h-20 w-1/2 border-b px-3.5 py-4 text-center align-top text-[15px] font-semibold">{locationPageData.BusSchedule1.arrivalLocation}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {locationPageData.BusSchedule1.rows.map((entry, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                          <td className="w-1/2 text-nowrap border-b border-r px-3.5 py-4 text-center">{entry.departureTime}</td>
                          <td className="w-1/2 text-nowrap border-b px-3.5 py-4 text-center">{entry.arrivalTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-y-10 lg:grid-cols-3 lg:gap-x-4">
          <div className="md:col-span-1">
            <div className="h-full w-full">
              <div className="mx-auto max-w-[1280px]">
                <h2 className="text-2xl font-bold leading-[1.25em] tracking-[-0.48px] text-black lg:text-[28px] lg:tracking-[-0.56px]"></h2>
                <div className="bg-[#234735] p-4 text-white">
                  <h3 className="mb-2 text-xl font-semibold">{locationPageData.BusSchedule2.title}</h3>
                  <p className="text-sm">{locationPageData.BusSchedule2.date}</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white">
                    <thead>
                      <tr className="bg-[#E4F2FD]">
                        <th className="h-20 w-1/2 border-b border-r px-3.5 py-4 text-center align-top text-[15px] font-semibold">
                          {locationPageData.BusSchedule2.departureLocation}
                        </th>
                        <th className="h-20 w-1/2 border-b px-3.5 py-4 text-center align-top text-[15px] font-semibold">{locationPageData.BusSchedule2.arrivalLocation}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {locationPageData.BusSchedule2.rows.map((entry, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                          <td className="w-1/2 text-nowrap border-b border-r px-3.5 py-4 text-center">{entry.departureTime}</td>
                          <td className="w-1/2 text-nowrap border-b px-3.5 py-4 text-center">{entry.arrivalTime}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-2">
            <div className="h-full w-full">
              <div className="mx-auto max-w-[1280px]">
                <h2 className="text-2xl font-bold leading-[1.25em] tracking-[-0.48px] text-black lg:text-[28px] lg:tracking-[-0.56px]"></h2>
                <div className="bg-[#234735] p-4 text-white">
                  <h3 className="l:max-w-[350px] mb-2 text-xl font-semibold lg:max-w-[350px]">{locationPageData.BusSchedule3.title}</h3>
                  <p className="text-sm">{locationPageData.BusSchedule3.date}</p>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse bg-white">
                    <thead>
                      <tr className="bg-[#E4F2FD]">
                        {[...Array(3)].map((_, index) => (
                          <React.Fragment key={index}>
                            <th className="cell h-20 w-1/6 border-b border-r px-3.5 py-2 text-center align-top text-[15px] font-semibold last-of-type:border-r-0">
                              {locationPageData.BusSchedule3.departureLocation}
                            </th>
                            <th className="cell h-20 w-1/6 border-b px-3.5 py-2 text-center align-top text-[15px] font-semibold">
                              {locationPageData.BusSchedule3.arrivalLocation}
                            </th>
                          </React.Fragment>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {locationPageData.BusSchedule3.rows.map((entry, index) => (
                        <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : ''}`}>
                          {entry.departureTimes.map((time, timeIndex) => (
                            <React.Fragment key={timeIndex}>
                              <td className="cell w-1/6 text-nowrap border-b border-r px-3.5 py-4 text-center">{time}</td>
                              <td className="cell w-1/6 text-nowrap border-b px-3.5 py-4 text-center">{entry.arrivalTimes[timeIndex]}</td>
                            </React.Fragment>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BusSchedule
