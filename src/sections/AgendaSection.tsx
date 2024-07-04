'use client'
import React, { useState, useRef, useEffect } from 'react'
import { Calendar, Search, ChevronDown, ChevronUp } from 'lucide-react'
import { AgendaItemProps, DayButtonProps, StageButtonProps, SearchResultProps, Event } from '@/lib/data/interfaces/agenda'
import { stages, mockEvents, dayDescriptions, videoStreamingConfig } from '@/lib/data/agenda'

const getTrackColor = (track: string) => {
  const colors: { [key: string]: { bg: string; text: string } } = {
    'Track 1': { bg: 'bg-blue-500', text: 'text-blue-500' },
    'Track 2': { bg: 'bg-green-500', text: 'text-green-500' },
    'Track 3': { bg: 'bg-yellow-500', text: 'text-yellow-500' },
    'Track 4': { bg: 'bg-red-500', text: 'text-red-500' }
  }
  return colors[track] || { bg: 'bg-gray-500', text: 'text-gray-500' }
}

const TrackLabel: React.FC<{ track: string }> = ({ track }) => {
  const { bg, text } = getTrackColor(track)
  return (
    <div className="absolute bottom-0 left-0 top-0 -ml-12 flex w-10 items-center justify-center">
      <div className={`absolute bottom-0 right-0 top-0 w-0.5 ${bg}`}></div>
      <span className={`whitespace-nowrap text-sm font-semibold ${text} -rotate-90 transform`}>{track}</span>
    </div>
  )
}

const AgendaItem: React.FC<AgendaItemProps> = ({ title, time, speakers }) => (
  <div className="mb-4 rounded-lg bg-white shadow-sm">
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{time}</p>
      <p className="text-sm text-gray-600">Speakers: {speakers}</p>
    </div>
  </div>
)

AgendaItem.displayName = 'AgendaItem'

const DayButton: React.FC<DayButtonProps> = ({ day, isActive, onClick }) => (
  <button className={`rounded-lg px-4 py-2 ${isActive ? 'bg-orange-400 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={onClick}>
    DAY {day}
  </button>
)

const StageButton: React.FC<StageButtonProps> = ({ stage, isActive, onClick }) => (
  <button className={`w-full rounded p-2 text-left ${isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`} onClick={onClick}>
    {stage}
  </button>
)

const SearchResult: React.FC<SearchResultProps> = ({ result, onClick, isActive }) => (
  <div className={`cursor-pointer p-2 ${isActive ? 'bg-blue-100' : 'hover:bg-gray-100'}`} onClick={onClick}>
    <p className="font-semibold">{result.title}</p>
    <p className="text-sm text-gray-600">
      Day {result.day} - {result.stage}
    </p>
  </div>
)

const ModularSummitAgenda: React.FC = () => {
  const [activeDay, setActiveDay] = useState<number>(1)
  const [activeStage, setActiveStage] = useState<string>(stages[0])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResults, setSearchResults] = useState<Array<Event & { day: number; stage: string }>>([])
  const [selectedEvent, setSelectedEvent] = useState<(Event & { day: number; stage: string }) | null>(null)
  const [activeSearchIndex, setActiveSearchIndex] = useState<number>(-1)
  const [isStagesAccordionOpen, setIsStagesAccordionOpen] = useState(false)
  const eventRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const searchInputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    if (selectedEvent) {
      setActiveDay(selectedEvent.day)
      setActiveStage(selectedEvent.stage)
      setTimeout(() => {
        const ref = eventRefs.current[`${selectedEvent.day}-${selectedEvent.stage}-${selectedEvent.title}`]
        if (ref) {
          ref.scrollIntoView({ behavior: 'smooth', block: 'center' })
        }
      }, 100)
    }
  }, [selectedEvent])

  useEffect(() => {
    eventRefs.current = {}
  }, [])

  const handleSearch = (term: string) => {
    setSearchTerm(term)
    setActiveSearchIndex(-1)
    if (term.length > 2) {
      const results: Array<Event & { day: number; stage: string }> = []
      Object.entries(mockEvents).forEach(([day, stages]) => {
        Object.entries(stages).forEach(([stage, events]) => {
          ;(events as Event[]).forEach((event) => {
            if (event.title.toLowerCase().includes(term.toLowerCase()) || event.speakers.toLowerCase().includes(term.toLowerCase())) {
              results.push({ ...event, day: parseInt(day), stage })
            }
          })
        })
      })
      setSearchResults(results)
    } else {
      setSearchResults([])
    }
  }

  const groupEventsByTrack = (events: Event[]) => {
    return events.reduce(
      (acc, event) => {
        if (!acc[event.track]) {
          acc[event.track] = []
        }
        acc[event.track].push(event)
        return acc
      },
      {} as Record<string, Event[]>
    )
  }

  const handleSearchResultClick = (result: Event & { day: number; stage: string }) => {
    setSelectedEvent(result)
    setSearchTerm('')
    setSearchResults([])
    setActiveSearchIndex(-1)
  }

  const toggleStagesAccordion = () => {
    setIsStagesAccordionOpen(!isStagesAccordionOpen)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (searchResults.length === 0) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setActiveSearchIndex((prevIndex) => (prevIndex < searchResults.length - 1 ? prevIndex + 1 : prevIndex))
        break
      case 'ArrowUp':
        e.preventDefault()
        setActiveSearchIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0))
        break
      case 'Enter':
        e.preventDefault()
        if (activeSearchIndex >= 0 && activeSearchIndex < searchResults.length) {
          handleSearchResultClick(searchResults[activeSearchIndex])
        }
        break
      case 'Escape':
        e.preventDefault()
        setSearchResults([])
        setActiveSearchIndex(-1)
        searchInputRef.current?.blur()
        break
      default:
        break
    }
  }

  const isLivestreamVisible = activeStage === 'Stage 1' || activeStage === 'Stage 2'
  const currentStreamingLink = videoStreamingConfig[activeDay]?.[activeStage]?.youtubeLink

  return (
    <div className="mx-auto max-w-4xl bg-gray-100 p-4">
      <div className="mb-4 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {Object.keys(mockEvents).map((day) => (
            <DayButton
              key={day}
              day={parseInt(day)}
              isActive={activeDay === parseInt(day)}
              onClick={() => {
                setActiveDay(parseInt(day))
                setActiveStage(stages[0])
              }}
            />
          ))}
        </div>
        <div className="relative flex-grow sm:max-w-md">
          <div className="flex items-center rounded-lg bg-white shadow-sm">
            <Search className="ml-2 text-gray-400" size={20} />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search events..."
              className="w-full rounded-lg p-2 focus:outline-none"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleKeyDown}
            />
          </div>
          {searchResults.length > 0 && (
            <div className="absolute z-10 mt-1 max-h-60 w-full overflow-y-auto rounded-lg bg-white shadow-lg">
              {searchResults.map((result, index) => (
                <SearchResult key={index} result={result} onClick={() => handleSearchResultClick(result)} isActive={index === activeSearchIndex} />
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex flex-col md:flex-row">
        <div className="mb-4 w-full md:mb-0 md:w-1/3 md:pr-4">
          <h2 className="mb-4 text-3xl font-bold text-orange-400">DAY {activeDay}</h2>
          <p className="mb-4 text-sm text-gray-600">{dayDescriptions[activeDay]}</p>
          <div className="flex flex-wrap gap-2 md:flex-col md:space-y-2">
            {/* Mobile Accordion */}
            <div className="w-full md:hidden">
              <button onClick={toggleStagesAccordion} className="flex w-full items-center justify-between rounded bg-blue-500 p-2 text-white">
                <span>{activeStage}</span>
                {isStagesAccordionOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              {isStagesAccordionOpen && (
                <div className="mt-2 space-y-2">
                  {stages.map((stage) => (
                    <StageButton
                      key={stage}
                      stage={stage}
                      isActive={activeStage === stage}
                      onClick={() => {
                        setActiveStage(stage)
                        setIsStagesAccordionOpen(false)
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
            {/* Desktop Stages */}
            <div className="hidden md:flex md:flex-col md:space-y-2">
              {stages.map((stage) => (
                <StageButton key={stage} stage={stage} isActive={activeStage === stage} onClick={() => setActiveStage(stage)} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/3">
          {isLivestreamVisible && currentStreamingLink && (
            <div className="mb-4 flex flex-col items-center justify-between rounded-lg bg-green-800 p-4 text-yellow-300 sm:flex-row">
              <span className="mb-2 sm:mb-0">Watch our livestream on Youtube</span>
              <a href={currentStreamingLink} target="_blank" rel="noopener noreferrer" className="flex items-center rounded bg-yellow-300 px-3 py-1 text-green-800">
                <Calendar className="mr-2" size={16} />
                Watch Now
              </a>
            </div>
          )}
          <div className="relative pl-12">
            {Object.entries(groupEventsByTrack(mockEvents[activeDay][activeStage])).map(([track, events]) => (
              <div key={track} className="relative mb-4">
                <TrackLabel track={track} />
                {events.map((item, index) => (
                  <AgendaItem key={`${track}-${index}`} {...item} />
                ))}
              </div>
            ))}
          </div>
          <button className="mt-4 w-full rounded-lg bg-blue-500 p-3 text-white">Tickets</button>
        </div>
      </div>
    </div>
  )
}

export default ModularSummitAgenda
