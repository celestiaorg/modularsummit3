import React from 'react'
import { locationPageData } from '@/lib/data/location'

const BoatSchedule = () => {
  return (
    <section className="boat-schedule w-full pb-4 pt-24 lg:pb-0">
      <div className="mx-auto max-w-[1280px]">
        {/* Bus Schedule */}
        <div className="intro mb-12 grid grid-cols-1 gap-4 max-2xl:px-7 md:mb-16 md:grid-cols-2">
          <h2>{locationPageData.BoatSchedule.title}</h2>
          <p>{locationPageData.BoatSchedule.description}</p>
        </div>
        <div className="layer-1 h-2050px] mb-12 md:h-[600px]" />
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
