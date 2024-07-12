import { LocationPageData } from '@/lib/data/interfaces/location'

export const locationPageData: LocationPageData = {
  HeroSectionSecondary: {
    title: 'Getting to the Modular Summit'
  },
  LocationSection: {
    title: 'Brussels, Belgium',
    address: 'SILO, Rue de Meudon 54, 1120 Bruxelles',
    mapLink: 'https://maps.app.goo.gl/7jBkwr7a5iD1ZgAc7',
    mapLinkText: 'Open in Google Maps'
  },
  BusSchedule: {
    title: 'Bus Schedule',
    description: `There are daily shuttle buses that take all attendees from Downtown Brussels to the SILO, where the Modular Summit is held. Ensure you have your QR code handy at all times, even if you have a bracelet. Shuttle buses are free. In the evening, they depart from Modular Summit back to Downtown Brussels. Pick up location in the morning is Quai des Péniches 51000 Bruxelles, Belgium. We recommend using the buses or the shuttle boats (see the schedule on next section, a few minutes away from bus stop) to arrive on time as Ubers might be scarce in the city during the week.`,
    mapLink: 'https://maps.app.goo.gl/45hwpX8eCMKTjUEJ8',
    mapLinkText: 'Open in Google Maps'
  },
  BusSchedule1: {
    title: 'Downtown (Quai des péniches 5) to Modular Summit (SILO)',
    date: 'Day 11 & 12 & 13 July 2024',
    departureLocation: 'Departure from Quai des péniches 5',
    arrivalLocation: 'Arrival at SILO',
    rows: [
      { departureTime: '08:30 AM', arrivalTime: '09:00 AM' },
      { departureTime: '09:00 AM', arrivalTime: '09:30 AM' },
      { departureTime: '09:30 AM', arrivalTime: '10:00 AM' },
      { departureTime: '10:00 AM', arrivalTime: '10:30 AM' },
      { departureTime: '10:30 AM', arrivalTime: '11:00 AM' },
      { departureTime: '11:00 AM', arrivalTime: '11:30 AM' },
      { departureTime: '11:30 AM', arrivalTime: '12:00 PM' }
    ]
  },
  BusSchedule2: {
    title: 'Modular Summit (SILO) back to Downtown (Quai des péniches 5)',
    date: 'Day 11 & 12 & 13 July 2024',
    departureLocation: 'Departure from SILO',
    arrivalLocation: 'Arrival at Quai des péniches 5',
    rows: [
      { departureTime: '18:00 PM', arrivalTime: '18:30 PM' },
      { departureTime: '18:15 PM', arrivalTime: '18:45 PM' },
      { departureTime: '18:30 PM', arrivalTime: '19:00 PM' },
      { departureTime: '18:45 PM', arrivalTime: '19:15 PM' },
      { departureTime: '19:00 PM', arrivalTime: '19:30 PM' },
      { departureTime: '19:15 PM', arrivalTime: '19:45 PM' },
      { departureTime: '19:30 PM', arrivalTime: '20:00 PM' },
      { departureTime: '19:45 PM', arrivalTime: '20:15 PM' },
      { departureTime: '20:00 PM', arrivalTime: '20:30 PM' },
      { departureTime: '20:15 PM', arrivalTime: '20:45 PM' },
      { departureTime: '20:30 PM', arrivalTime: '21:00 PM' },
      { departureTime: '20:45 PM', arrivalTime: '21:15 PM' },
      { departureTime: '21:00 PM', arrivalTime: '21:30 PM' },
      { departureTime: '21:15 PM', arrivalTime: '21:45 PM' },
      { departureTime: '21:30 PM', arrivalTime: '22:00 PM' }
    ]
  },
  BusSchedule3: {
    title: 'Modular Summit (SILO) back to Downtown (Quai des péniches 5)',
    date: 'Day 13 July 2024',
    departureLocation: 'Departure from SILO',
    arrivalLocation: 'Arrival at Quai des péniches 5',
    rows: [
      { departureTimes: ['18:00 PM', '21:45 PM', '01:30 AM'], arrivalTimes: ['18:30 PM', '22:15 PM', '02:00 AM'] },
      { departureTimes: ['18:15 PM', '22:00 PM', '01:45 AM'], arrivalTimes: ['18:45 PM', '22:30 PM', '02:15 AM'] },
      { departureTimes: ['18:30 PM', '22:15 PM', '02:00 AM'], arrivalTimes: ['19:00 PM', '22:45 PM', '02:30 AM'] },
      { departureTimes: ['18:45 PM', '22:30 PM', '02:15 AM'], arrivalTimes: ['19:15 PM', '23:00 PM', '02:45 AM'] },
      { departureTimes: ['19:00 PM', '22:45 PM', '02:30 AM'], arrivalTimes: ['19:30 PM', '23:15 PM', '03:00 AM'] },
      { departureTimes: ['19:15 PM', '23:00 PM', ''], arrivalTimes: ['19:45 PM', '23:30 PM', ''] },
      { departureTimes: ['19:30 PM', '23:15 PM', ''], arrivalTimes: ['20:00 PM', '23:45 PM', ''] },
      { departureTimes: ['19:45 PM', '23:30 PM', ''], arrivalTimes: ['20:15 PM', '00:00 AM', ''] },
      { departureTimes: ['20:00 PM', '23:45 PM', ''], arrivalTimes: ['20:30 PM', '00:15 AM', ''] },
      { departureTimes: ['20:15 PM', '00:00 AM', ''], arrivalTimes: ['20:45 PM', '00:30 AM', ''] },
      { departureTimes: ['20:30 PM', '00:15 AM', ''], arrivalTimes: ['21:00 PM', '00:45 AM', ''] },
      { departureTimes: ['20:45 PM', '00:30 AM', ''], arrivalTimes: ['21:15 PM', '01:00 AM', ''] },
      { departureTimes: ['21:00 PM', '00:45 AM', ''], arrivalTimes: ['21:30 PM', '01:15 AM', ''] },
      { departureTimes: ['21:15 PM', '01:00 AM', ''], arrivalTimes: ['21:45 PM', '01:30 AM', ''] },
      { departureTimes: ['21:30 PM', '01:15 AM', ''], arrivalTimes: ['22:00 PM', '01:45 AM', ''] },
      { departureTimes: ['21:45 PM', '01:30 AM', ''], arrivalTimes: ['22:15 PM', '02:00 AM', ''] },
      { departureTimes: ['22:00 PM', '01:45 AM', ''], arrivalTimes: ['22:30 PM', '02:15 AM', ''] },
      { departureTimes: ['22:15 PM', '02:00 AM', ''], arrivalTimes: ['22:45 PM', '02:30 AM', ''] }
    ]
  },
  BoatSchedule: {
    title: 'Boat Schedule',
    mapLink: 'https://maps.app.goo.gl/DMN99vib6nzUjkuM9',
    mapLinkText: 'Open in Google Maps',
    description: `There are daily shuttle boats that take all attendees from Downtown Brussels to the SILO, where the Modular Summit is held. Ensure you have your QR code handy at all times, even if you have a bracelet. Shuttle buses are free. In the evening, they depart from Modular Summit back to Downtown Brussels. Pick up location in the morning is  Avenue du Port 6, 1080, Bruxelles, Belgium. We recommend using the boats or the shuttle buses (see the schedule above, a few minutes away from boat port) to arrive on time as Ubers might be scarce in the city during the week.`
  },
  BoatSchedule1: {
    date: 'Day 11 & 12 July 2024',
    rows: [
      {
        waitingTime: '',
        departureFromAuPort: '08:30 AM',
        travelTime: '0:30',
        arrivalAtSILO: '09:00 AM',
        waitingTime2: '00:05',
        departureFromSILO: '09:05 AM',
        travelTime2: '00:30',
        departureFromAuPort2: '09:35 AM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '09:50 AM',
        travelTime: '00:30',
        arrivalAtSILO: '10:20 AM',
        waitingTime2: '00:05',
        departureFromSILO: '10:25 AM',
        travelTime2: '00:30',
        departureFromAuPort2: '10:55 AM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '11:10 AM',
        travelTime: '00:30',
        arrivalAtSILO: '11:40 AM',
        waitingTime2: '00:05',
        departureFromSILO: '11:45 AM',
        travelTime2: '00:30',
        departureFromAuPort2: '12:15 PM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '12:30 PM',
        travelTime: '00:30',
        arrivalAtSILO: '13:00 PM',
        waitingTime2: '00:10',
        departureFromSILO: '13:10 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '13:40 PM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '13:55 PM',
        travelTime: '00:30',
        arrivalAtSILO: '14:25 PM',
        waitingTime2: '00:10',
        departureFromSILO: '14:35 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '15:05 PM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '15:20 PM',
        travelTime: '00:30',
        arrivalAtSILO: '15:50 PM',
        waitingTime2: '00:10',
        departureFromSILO: '16:00 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '16:30 PM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '16:45 PM',
        travelTime: '00:30',
        arrivalAtSILO: '17:15 PM',
        waitingTime2: '00:10',
        departureFromSILO: '17:25 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '17:55 PM'
      },
      {
        waitingTime: '00:10',
        departureFromAuPort: '18:05 PM',
        travelTime: '00:30',
        arrivalAtSILO: '18:35 PM',
        waitingTime2: '00:10',
        departureFromSILO: '18:45 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '19:15 PM'
      },
      {
        waitingTime: '00:10',
        departureFromAuPort: '19:25 PM',
        travelTime: '00:30',
        arrivalAtSILO: '19:55 PM',
        waitingTime2: '00:10',
        departureFromSILO: '20:05 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '20:35 PM'
      },
      {
        waitingTime: '00:05',
        departureFromAuPort: '20:40 PM',
        travelTime: '00:30',
        arrivalAtSILO: '21:10 PM',
        waitingTime2: '00:10',
        departureFromSILO: '21:20 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '21:50 PM'
      }
    ]
  },
  BoatSchedule2: {
    date: 'Day 13 July 2024',
    rows: [
      {
        waitingTime: '',
        departureFromAuPort: '08:30 AM',
        travelTime: '0:30',
        arrivalAtSILO: '09:00 AM',
        waitingTime2: '00:05',
        departureFromSILO: '09:05 AM',
        travelTime2: '00:30',
        departureFromAuPort2: '09:35 AM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '09:50 AM',
        travelTime: '00:30',
        arrivalAtSILO: '10:20 AM',
        waitingTime2: '00:05',
        departureFromSILO: '10:25 AM',
        travelTime2: '00:30',
        departureFromAuPort2: '10:55 AM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '11:10 AM',
        travelTime: '00:30',
        arrivalAtSILO: '11:40 AM',
        waitingTime2: '00:05',
        departureFromSILO: '11:45 AM',
        travelTime2: '00:30',
        departureFromAuPort2: '12:15 PM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '12:30 PM',
        travelTime: '00:30',
        arrivalAtSILO: '13:00 PM',
        waitingTime2: '00:10',
        departureFromSILO: '13:10 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '13:40 PM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '13:55 PM',
        travelTime: '00:30',
        arrivalAtSILO: '14:25 PM',
        waitingTime2: '00:10',
        departureFromSILO: '14:35 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '15:05 PM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '15:20 PM',
        travelTime: '00:30',
        arrivalAtSILO: '15:50 PM',
        waitingTime2: '00:10',
        departureFromSILO: '16:00 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '16:30 PM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '16:45 PM',
        travelTime: '00:30',
        arrivalAtSILO: '17:15 PM',
        waitingTime2: '00:10',
        departureFromSILO: '17:25 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '17:55 PM'
      },
      {
        waitingTime: '00:10',
        departureFromAuPort: '18:05 PM',
        travelTime: '00:30',
        arrivalAtSILO: '18:35 PM',
        waitingTime2: '00:10',
        departureFromSILO: '18:45 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '19:15 PM'
      },
      {
        waitingTime: '00:10',
        departureFromAuPort: '19:25 PM',
        travelTime: '00:30',
        arrivalAtSILO: '19:55 PM',
        waitingTime2: '00:10',
        departureFromSILO: '20:05 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '20:35 PM'
      },
      {
        waitingTime: '00:10',
        departureFromAuPort: '20:45 PM',
        travelTime: '00:30',
        arrivalAtSILO: '21:15 PM',
        waitingTime2: '00:10',
        departureFromSILO: '21:25 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '21:55 PM'
      },
      {
        waitingTime: '00:10',
        departureFromAuPort: '22:05 PM',
        travelTime: '00:30',
        arrivalAtSILO: '22:35 PM',
        waitingTime2: '00:10',
        departureFromSILO: '22:45 PM',
        travelTime2: '00:30',
        departureFromAuPort2: '23:15 PM'
      },
      {
        waitingTime: '00:15',
        departureFromAuPort: '23:30 PM',
        travelTime: '00:30',
        arrivalAtSILO: '00:00 AM',
        waitingTime2: '00:10',
        departureFromSILO: '00:10 AM',
        travelTime2: '00:30',
        departureFromAuPort2: '01:40 AM'
      }
    ]
  }
}
