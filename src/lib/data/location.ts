import { LocationPageData } from '@/lib/data/interfaces/location'

export const locationPageData: LocationPageData = {
  HeroSectionSecondary: {
    title: 'Getting to the Modular Summit'
  },
  LocationSection: {
    title: 'Brussels, Belgium',
    address: 'Avenue du Port 6, 1080 Bruxelles SILO, Rue de Meudon 54, 1120 Bruxelles',
    mapLink: 'https://maps.app.goo.gl/7jBkwr7a5iD1ZgAc7',
    mapLinkText: 'Open in Google Maps'
  },
  BusSchedule: {
    title: 'Bus Schedule',
    description: `The podcast focuses on innovative modular blockchain projects and their latest collaborations rebuilding crypto from first principles. Stay tuned for this year's interviews hosted by Anna Rose, Hart Lambur, Chjango Unchained, and Laura Shin.`
  },
  BusSchedule1: {
    title: 'Quai des péniches 5 à SILO',
    date: 'Day 11 & 12 & 13 July 2024',
    departureLocation: 'Departure from Quai des péniches 5',
    arrivalLocation: 'Arrival at SILO',
    rows: [
      { departureTime: '08:00 AM', arrivalTime: '08:30 AM' },
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
    title: 'SILO à Quai des péniches 5',
    date: 'Day 11 & 12 & 13 July 2024',
    departureLocation: 'Departure from SILO',
    arrivalLocation: 'Arrival at Quai des péniches 5',
    rows: [
      { departureTime: '08:00 AM', arrivalTime: '08:30 AM' },
      { departureTime: '08:30 AM', arrivalTime: '09:00 AM' },
      { departureTime: '09:00 AM', arrivalTime: '09:30 AM' },
      { departureTime: '09:30 AM', arrivalTime: '10:00 AM' },
      { departureTime: '10:00 AM', arrivalTime: '10:30 AM' },
      { departureTime: '10:30 AM', arrivalTime: '11:00 AM' },
      { departureTime: '11:00 AM', arrivalTime: '11:30 AM' },
      { departureTime: '11:30 AM', arrivalTime: '12:00 PM' }
    ]
  },
  BusSchedule3: {
    title: 'SILO à Quai des péniches 5',
    date: 'Day 13 July 2024',
    departureLocation: 'Departure from SILO',
    arrivalLocation: 'Arrival at Quai des péniches 5',
    rows: [
      { departureTimes: ['08:00 AM', '08:30 AM', '08:30 AM'], arrivalTimes: ['08:30 AM', '08:30 AM', '08:30 AM'] },
      { departureTimes: ['08:30 AM', '08:30 AM', '08:30 AM'], arrivalTimes: ['08:30 AM', '08:30 AM', '09:00 AM'] },
      { departureTimes: ['09:00 AM', '09:00 AM', '09:00 AM'], arrivalTimes: ['09:00 AM', '09:00 AM', '09:30 AM'] },
      { departureTimes: ['09:30 AM', '09:30 AM', '09:30 AM'], arrivalTimes: ['09:30 AM', '09:30 AM', '10:00 AM'] },
      { departureTimes: ['10:00 AM', '10:00 AM', '10:00 AM'], arrivalTimes: ['10:00 AM', '10:00 AM', '10:30 AM'] },
      { departureTimes: ['10:30 AM', '10:30 AM', '10:30 AM'], arrivalTimes: ['10:30 AM', '10:30 AM', '11:00 AM'] },
      { departureTimes: ['11:00 AM', '11:00 AM', '11:00 AM'], arrivalTimes: ['11:00 AM', '11:00 AM', '11:30 AM'] },
      { departureTimes: ['11:30 AM', '11:30 AM', '11:30 AM'], arrivalTimes: ['11:30 AM', '11:30 AM', '12:00 AM'] }
    ]
  },
  BoatSchedule: {
    title: 'Boat Schedule',
    description: `The podcast focuses on innovative modular blockchain projects and their latest collaborations rebuilding crypto from first principles. Stay tuned for this year's interviews hosted by Anna Rose, Hart Lambur, Chjango Unchained, and Laura Shin.`
  },
  BoatSchedule1: {
    date: 'Day 11 & 12 July 2024',
    rows: [
      {
        waitingTime: '08:00 AM',
        departureFromAuPort: '08:30 AM',
        travelTime: '08:30 AM',
        arrivalAtSILO: '08:30 AM',
        waitingTime2: '08:30 AM',
        departureFromSILO: '08:30 AM',
        travelTime2: '08:30 AM',
        departureFromAuPort2: '08:30 AM'
      },
      {
        waitingTime: '08:30 AM',
        departureFromAuPort: '08:30 AM',
        travelTime: '08:30 AM',
        arrivalAtSILO: '08:30 AM',
        waitingTime2: '08:30 AM',
        departureFromSILO: '09:00 AM',
        travelTime2: '09:00 AM',
        departureFromAuPort2: '09:00 AM'
      },
      {
        waitingTime: '09:00 AM',
        departureFromAuPort: '09:00 AM',
        travelTime: '09:00 AM',
        arrivalAtSILO: '09:00 AM',
        waitingTime2: '09:00 AM',
        departureFromSILO: '09:30 AM',
        travelTime2: '09:30 AM',
        departureFromAuPort2: '09:30 AM'
      },
      {
        waitingTime: '09:30 AM',
        departureFromAuPort: '09:30 AM',
        travelTime: '09:30 AM',
        arrivalAtSILO: '09:30 AM',
        waitingTime2: '09:30 AM',
        departureFromSILO: '10:00 AM',
        travelTime2: '10:00 AM',
        departureFromAuPort2: '10:00 AM'
      },
      {
        waitingTime: '10:00 AM',
        departureFromAuPort: '10:00 AM',
        travelTime: '10:00 AM',
        arrivalAtSILO: '10:00 AM',
        waitingTime2: '10:00 AM',
        departureFromSILO: '10:30 AM',
        travelTime2: '10:30 AM',
        departureFromAuPort2: '10:30 AM'
      },
      {
        waitingTime: '10:30 AM',
        departureFromAuPort: '10:30 AM',
        travelTime: '10:30 AM',
        arrivalAtSILO: '10:30 AM',
        waitingTime2: '10:30 AM',
        departureFromSILO: '11:00 AM',
        travelTime2: '11:00 AM',
        departureFromAuPort2: '11:00 AM'
      },
      {
        waitingTime: '11:00 AM',
        departureFromAuPort: '11:00 AM',
        travelTime: '11:00 AM',
        arrivalAtSILO: '11:00 AM',
        waitingTime2: '11:00 AM',
        departureFromSILO: '11:30 AM',
        travelTime2: '11:30 AM',
        departureFromAuPort2: '11:30 AM'
      },
      {
        waitingTime: '11:30 AM',
        departureFromAuPort: '11:30 AM',
        travelTime: '11:30 AM',
        arrivalAtSILO: '11:30 AM',
        waitingTime2: '11:30 AM',
        departureFromSILO: '12:00 AM',
        travelTime2: '12:00 AM',
        departureFromAuPort2: '12:00 AM'
      }
    ]
  },
  BoatSchedule2: {
    date: 'Day 13 July 2024',
    rows: [
      {
        waitingTime: '08:00 AM',
        departureFromAuPort: '08:30 AM',
        travelTime: '08:30 AM',
        arrivalAtSILO: '08:30 AM',
        waitingTime2: '08:30 AM',
        departureFromSILO: '08:30 AM',
        travelTime2: '08:30 AM',
        departureFromAuPort2: '08:30 AM'
      },
      {
        waitingTime: '08:30 AM',
        departureFromAuPort: '08:30 AM',
        travelTime: '08:30 AM',
        arrivalAtSILO: '08:30 AM',
        waitingTime2: '08:30 AM',
        departureFromSILO: '09:00 AM',
        travelTime2: '09:00 AM',
        departureFromAuPort2: '09:00 AM'
      },
      {
        waitingTime: '09:00 AM',
        departureFromAuPort: '09:00 AM',
        travelTime: '09:00 AM',
        arrivalAtSILO: '09:00 AM',
        waitingTime2: '09:00 AM',
        departureFromSILO: '09:30 AM',
        travelTime2: '09:30 AM',
        departureFromAuPort2: '09:30 AM'
      },
      {
        waitingTime: '09:30 AM',
        departureFromAuPort: '09:30 AM',
        travelTime: '09:30 AM',
        arrivalAtSILO: '09:30 AM',
        waitingTime2: '09:30 AM',
        departureFromSILO: '10:00 AM',
        travelTime2: '10:00 AM',
        departureFromAuPort2: '10:00 AM'
      },
      {
        waitingTime: '10:00 AM',
        departureFromAuPort: '10:00 AM',
        travelTime: '10:00 AM',
        arrivalAtSILO: '10:00 AM',
        waitingTime2: '10:00 AM',
        departureFromSILO: '10:30 AM',
        travelTime2: '10:30 AM',
        departureFromAuPort2: '10:30 AM'
      },
      {
        waitingTime: '10:30 AM',
        departureFromAuPort: '10:30 AM',
        travelTime: '10:30 AM',
        arrivalAtSILO: '10:30 AM',
        waitingTime2: '10:30 AM',
        departureFromSILO: '11:00 AM',
        travelTime2: '11:00 AM',
        departureFromAuPort2: '11:00 AM'
      },
      {
        waitingTime: '11:00 AM',
        departureFromAuPort: '11:00 AM',
        travelTime: '11:00 AM',
        arrivalAtSILO: '11:00 AM',
        waitingTime2: '11:00 AM',
        departureFromSILO: '11:30 AM',
        travelTime2: '11:30 AM',
        departureFromAuPort2: '11:30 AM'
      },
      {
        waitingTime: '11:30 AM',
        departureFromAuPort: '11:30 AM',
        travelTime: '11:30 AM',
        arrivalAtSILO: '11:30 AM',
        waitingTime2: '11:30 AM',
        departureFromSILO: '12:00 AM',
        travelTime2: '12:00 AM',
        departureFromAuPort2: '12:00 AM'
      }
    ]
  }
}
