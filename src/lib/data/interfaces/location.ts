interface HeroSectionSecondary {
  title: string
}

interface BusSchedule {
  title: string
  description: string
}

interface Location {
  title: string
  address: string
  mapLink: string
  mapLinkText: string
}

interface TimetableEntry {
  departureTime: string
  arrivalTime: string
}

interface BusSmallTimetable {
  title: string
  date: string
  departureLocation: string
  arrivalLocation: string
  rows: TimetableEntry[]
}

interface BusLargerTimetable {
  title: string
  date: string
  departureLocation: string
  arrivalLocation: string
  rows: {
    departureTimes: string[]
    arrivalTimes: string[]
  }[]
}

interface BoatLargeTimetable {
  date: string
  rows: {
    waitingTime: string
    departureFromAuPort: string
    travelTime: string
    arrivalAtSILO: string
    waitingTime2: string
    departureFromSILO: string
    travelTime2: string
    departureFromAuPort2: string
  }[]
}

export interface LocationPageData {
  HeroSectionSecondary: HeroSectionSecondary
  LocationSection: Location
  BusSchedule: BusSchedule
  BusSchedule1: BusSmallTimetable
  BusSchedule2: BusSmallTimetable
  BusSchedule3: BusLargerTimetable
  BoatSchedule: BusSchedule
  BoatSchedule1: BoatLargeTimetable
  BoatSchedule2: BoatLargeTimetable
}
