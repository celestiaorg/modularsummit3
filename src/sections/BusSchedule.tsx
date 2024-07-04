import React from 'react'
import { locationPageData } from '@/lib/data/location'

const BusSchedule = () => {
  return (
    <section className="bus-schedule w-full pb-4 pt-24 lg:pb-0">
      <div className="mx-auto max-w-[1280px]">
        {/* Bus Schedule */}
        <div className="intro mb-12 grid grid-cols-1 gap-4 max-2xl:px-7 md:mb-16 md:grid-cols-2">
          <h2>{locationPageData.BusSchedule.title}</h2>
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
                  <h3 className="mb-2 text-xl font-semibold">{locationPageData.BusSchedule3.title}</h3>
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
