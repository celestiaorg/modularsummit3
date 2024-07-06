import React from 'react'
import { locationPageData } from '@/lib/data/location'

const BoatSchedule = () => {
  return (
    <section className="boat-schedule w-full pb-4 pt-24 lg:pb-0">
      <div className="mx-auto max-w-[1280px]">
        {/* Bus Schedule */}
        <div className="intro mb-12 grid grid-cols-1 gap-4 max-2xl:px-7 md:mb-16 md:grid-cols-2">
          <div>
            <h2>{locationPageData.BoatSchedule.title}</h2>
            <a className="flex space-x-2 text-[#423ABB] underline" href={locationPageData.BoatSchedule.mapLink} target="_blank">
              <span>{locationPageData.BoatSchedule.mapLinkText} </span>
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

          <p>{locationPageData.BoatSchedule.description}</p>
        </div>
        <div className="layer-1 mb-12 h-[2050px]" />
        <div className="mb-12 h-full w-full">
          <div className="mx-auto max-w-[1280px]">
            <div className="bg-[#77BFF7] p-4 text-white">
              <h3 className="mb-2 text-xl font-semibold">{locationPageData.BoatSchedule1.date}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-[#E4F2FD]">
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">Waiting Time</th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">
                      Departure from
                      <br />
                      Av du Port 6.
                    </th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">Travel Time</th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">Arrival at SILO</th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">Waiting Time</th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">
                      Departure from
                      <br />
                      SILO
                    </th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">Travel Time</th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b px-3.5 py-4 text-center align-top font-semibold">
                      Arrival at
                      <br />
                      Av du Port 6.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {locationPageData.BoatSchedule1.rows.map((entry, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.waitingTime}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.departureFromAuPort}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.travelTime}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.arrivalAtSILO}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.waitingTime2}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.departureFromSILO}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.travelTime2}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b px-4 py-4 text-center">{entry.departureFromAuPort2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="h-20ll w-full">
          <div className="mx-auto max-w-[1280px]">
            <div className="bg-[#77BFF7] p-4 text-white">
              <h3 className="mb-2 text-xl font-semibold">{locationPageData.BoatSchedule2.date}</h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse bg-white">
                <thead>
                  <tr className="bg-[#E4F2FD]">
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">Waiting Time</th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b px-3.5 py-4 text-center align-top font-semibold">
                      Departure from
                      <br />
                      Av du Port 6.
                    </th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">Travel Time</th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">Arrival at SILO</th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">Waiting Time</th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b px-3.5 py-4 text-center align-top font-semibold">
                      Departure from
                      <br />
                      SILO
                    </th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b border-r px-3.5 py-4 text-center align-top font-semibold">Travel Time</th>
                    <th className="h-20 w-full min-w-[150px] text-nowrap border-b px-3.5 py-4 text-center align-top font-semibold">
                      Arrival at
                      <br />
                      Av du Port 6.
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {locationPageData.BoatSchedule2.rows.map((entry, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : ''}>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.waitingTime}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.departureFromAuPort}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.travelTime}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.arrivalAtSILO}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.waitingTime2}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.departureFromSILO}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b border-r px-4 py-4 text-center">{entry.travelTime2}</td>
                      <td className="w-full min-w-[150px] text-nowrap border-b px-4 py-4 text-center">{entry.departureFromAuPort2}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BoatSchedule
