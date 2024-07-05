'use client'
import React, { useState, useRef, useEffect, forwardRef, useCallback } from 'react'
import { Calendar, Search, ChevronDown, ChevronUp, Filter, X } from 'lucide-react'
import { AgendaItemProps, DayButtonProps, StageButtonProps, SearchResultProps, Event } from '@/lib/data/interfaces/agenda'
import { stages, EventsList, dayDescriptions, videoStreamingConfig, tracks } from '@/lib/data/agenda'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const getTrackColor = (track: string) => {
  return tracks[track] || { bg: '#718096', text: '#718096' }
}

const TrackLabel: React.FC<{ track: string; className?: string }> = ({ track, className }) => {
  const { bg, text } = getTrackColor(track)
  return (
    <div className={`absolute bottom-0 left-0 top-0 -ml-12 flex w-10 items-center justify-center ${className}`}>
      <div className="absolute bottom-0 right-0 top-0 w-0.5" style={{ backgroundColor: bg }}></div>
      <span className="-rotate-90 transform whitespace-nowrap text-sm font-semibold" style={{ color: text }}>
        {track}
      </span>
    </div>
  )
}

const AgendaItem = forwardRef<HTMLDivElement, AgendaItemProps & { className?: string; isHighlighted?: boolean }>(({ title, time, speakers, className, isHighlighted }, ref) => {
  return (
    <div
      ref={ref}
      className={`mb-4 rounded-lg shadow-sm transition-colors duration-1000 ${className}`}
      style={{
        backgroundColor: isHighlighted ? '#fefcbf' : '#ffffff'
      }}
    >
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-gray-600">{time}</p>
        <p className="text-sm text-gray-600">Speakers: {speakers}</p>
      </div>
    </div>
  )
})

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
  const [highlightedEvent, setHighlightedEvent] = useState<string | null>(null)
  const [selectedTracks, setSelectedTracks] = useState<string[]>([])
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const [isSearchActive, setIsSearchActive] = useState(false)
  const filterRef = useRef<HTMLDivElement>(null)
  const eventRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})
  const searchInputRef = useRef<HTMLInputElement>(null)
  const searchResultsRef = useRef<HTMLDivElement>(null)
  const agendaContainerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<gsap.Context | null>(null)

  useEffect(() => {
    // Reset and re-run animation when activeDay or activeStage changes
    if (agendaContainerRef.current) {
      // Kill previous animation if it exists
      if (animationRef.current) {
        animationRef.current.revert()
      }

      // Create a new GSAP context
      animationRef.current = gsap.context(() => {
        const elements = gsap.utils.toArray('.animate-stagger')
        gsap.fromTo(
          elements,
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.05,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: agendaContainerRef.current,
              start: 'top bottom-=100',
              toggleActions: 'play none none reverse'
            }
          }
        )
      }, agendaContainerRef)
    }

    // Cleanup function
    return () => {
      if (animationRef.current) {
        animationRef.current.revert()
      }
    }
  }, [activeDay, activeStage])

  useEffect(() => {
    if (selectedEvent) {
      setActiveDay(selectedEvent.day)
      setActiveStage(selectedEvent.stage)
      const eventKey = `${selectedEvent.day}-${selectedEvent.stage}-${selectedEvent.title}`
      setTimeout(() => {
        const ref = eventRefs.current[eventKey]
        if (ref) {
          ref.scrollIntoView({ behavior: 'smooth', block: 'center' })
          // Delay highlighting until the event is in view
          const observer = new IntersectionObserver(
            (entries) => {
              if (entries[0].isIntersecting) {
                setHighlightedEvent(eventKey)
                setTimeout(() => {
                  setHighlightedEvent(null)
                }, 1000) // Changed from 400 to 1000 for 1 second highlighting
                observer.disconnect()
              }
            },
            { threshold: 0.5 }
          )
          observer.observe(ref)
        }
      }, 100)
    }
  }, [selectedEvent])

  useEffect(() => {
    eventRefs.current = {}
  }, [])

  useEffect(() => {
    if (activeSearchIndex >= 0 && searchResultsRef.current) {
      const activeElement = searchResultsRef.current.children[activeSearchIndex] as HTMLElement
      if (activeElement) {
        activeElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' })
      }
    }
  }, [activeSearchIndex])

  const closeFilter = () => {
    setIsFilterOpen(false)
  }

  const closeSearch = () => {
    setSearchResults([])
    setActiveSearchIndex(-1)
    setIsSearchOpen(false)
    setIsSearchActive(false)
    setSearchTerm('') // Clear the search term
    searchInputRef.current?.blur()
  }

  const closeAll = () => {
    closeFilter()
    closeSearch()
  }

  const handleSearch = useCallback(
    (term: string) => {
      setSearchTerm(term)
      setActiveSearchIndex(-1)
      if (term.length > 2) {
        const results: Array<Event & { day: number; stage: string }> = []
        Object.entries(EventsList).forEach(([day, stages]) => {
          Object.entries(stages).forEach(([stage, events]) => {
            ;(events as Event[]).forEach((event) => {
              if (
                (event.title.toLowerCase().includes(term.toLowerCase()) || event.speakers.toLowerCase().includes(term.toLowerCase())) &&
                (selectedTracks.length === 0 || selectedTracks.includes(event.track))
              ) {
                results.push({ ...event, day: parseInt(day), stage })
              }
            })
          })
        })
        setSearchResults(results)
        setIsSearchOpen(true)
        setIsSearchActive(true)
      } else {
        setSearchResults([])
        setIsSearchOpen(false)
        setIsSearchActive(false)
      }
    },
    [selectedTracks]
  )

  useEffect(() => {
    handleSearch(searchTerm)
  }, [selectedTracks, handleSearch, searchTerm])

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
    setIsSearchOpen(false)
    setIsSearchActive(false)
  }

  const toggleStagesAccordion = () => {
    setIsStagesAccordionOpen(!isStagesAccordionOpen)
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      e.preventDefault()
      if (isFilterOpen) {
        closeFilter()
      } else if (isSearchOpen) {
        closeSearch()
      }
    } else if (searchResults.length > 0) {
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
        default:
          break
      }
    }
  }

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (isFilterOpen) {
          closeFilter()
        } else if (isSearchOpen) {
          closeSearch()
        }
      }
    }

    document.addEventListener('keydown', handleGlobalKeyDown)
    return () => {
      document.removeEventListener('keydown', handleGlobalKeyDown)
    }
  }, [isFilterOpen, isSearchOpen])

  const isLivestreamVisible = activeStage === 'Stage 1' || activeStage === 'Stage 2'
  const currentStreamingLink = videoStreamingConfig[activeDay]?.[activeStage]?.youtubeLink

  const toggleFilter = () => {
    setIsFilterOpen(!isFilterOpen)
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
        setIsFilterOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  const handleTrackFilter = (track: string) => {
    setSelectedTracks((prev) => (prev.includes(track) ? prev.filter((t) => t !== track) : [...prev, track]))
  }

  const availableTracks = React.useMemo(() => {
    const allTracks = new Set<string>()
    Object.values(EventsList).forEach((dayEvents) => {
      Object.values(dayEvents).forEach((stageEvents) => {
        ;(stageEvents as Event[]).forEach((event) => {
          allTracks.add(event.track)
        })
      })
    })
    return Array.from(allTracks).sort()
  }, [])

  const filteredEvents = React.useMemo(() => {
    return selectedTracks.length > 0 ? EventsList[activeDay][activeStage].filter((event) => selectedTracks.includes(event.track)) : EventsList[activeDay][activeStage]
  }, [activeDay, activeStage, selectedTracks])

  const clearFilters = () => {
    setSelectedTracks([])
  }

  return (
    <div className="mx-auto max-w-4xl bg-gray-100 p-4">
      <div className="mb-4 flex flex-col-reverse gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex flex-wrap gap-2">
          {Object.keys(EventsList).map((day) => (
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
        <div className="relative flex flex-grow items-center gap-2 sm:max-w-md">
          <div className="relative z-30 flex flex-grow items-center rounded-lg bg-white shadow-sm">
            <Search className="ml-2 text-gray-400" size={20} />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search events..."
              className="w-full rounded-lg p-2 focus:outline-none"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsSearchActive(true)}
            />
          </div>
          <div className="relative z-30" ref={filterRef}>
            <button onClick={toggleFilter} className="flex items-center rounded-lg bg-blue-500 p-2 text-white">
              <Filter size={20} />
              {selectedTracks.length > 0 && (
                <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">{selectedTracks.length}</span>
              )}
            </button>
            {isFilterOpen && (
              <div className="absolute right-0 z-40 mt-2 w-48 rounded-lg bg-white p-2 shadow-lg">
                <div className="mb-2 flex items-center justify-between">
                  <h3 className="font-semibold">Filter by Track:</h3>
                  {selectedTracks.length > 0 && (
                    <button onClick={clearFilters} className="flex items-center text-sm text-blue-500 hover:text-blue-700">
                      <X size={16} className="mr-1" />
                      Clear
                    </button>
                  )}
                </div>
                {availableTracks.map((track) => (
                  <div key={track} className="flex items-center">
                    <input type="checkbox" id={track} checked={selectedTracks.includes(track)} onChange={() => handleTrackFilter(track)} className="mr-2" />
                    <label htmlFor={track}>{track}</label>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className={`fixed inset-0 z-20 bg-black bg-opacity-50 transition-opacity ${isSearchActive ? 'z-20 opacity-100' : 'z-[-999] opacity-0'}`} onClick={closeAll}></div>
          {isSearchActive && (
            <div ref={searchResultsRef} className="absolute top-12 z-20 mt-1 max-h-60 w-full overflow-y-auto rounded-lg bg-white shadow-lg">
              {searchResults.length > 0 ? (
                searchResults.map((result, index) => (
                  <SearchResult key={index} result={result} onClick={() => handleSearchResultClick(result)} isActive={index === activeSearchIndex} />
                ))
              ) : (
                <div className="p-2 text-gray-500">No results found</div>
              )}
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
          {isLivestreamVisible && currentStreamingLink ? (
            <div className="mb-4 flex flex-col items-center justify-between rounded-lg bg-green-800 p-4 text-yellow-300 sm:flex-row">
              <span className="mb-2 sm:mb-0">Watch our livestream on Youtube</span>
              <a href={currentStreamingLink} target="_blank" rel="noopener noreferrer" className="flex items-center rounded bg-yellow-300 px-3 py-1 text-green-800">
                <Calendar className="mr-2" size={16} />
                Watch Now
              </a>
            </div>
          ) : (
            <div className="mb-4 flex items-center justify-center rounded-lg bg-gray-200 p-5 text-gray-600">
              <span>No livestream available for this stage</span>
            </div>
          )}
          <div ref={agendaContainerRef} className="relative pl-12">
            {Object.entries(groupEventsByTrack(filteredEvents)).map(([track, events]) => (
              <div key={track} className="relative mb-4">
                <TrackLabel track={track} className="animate-stagger" />
                {events.map((item, index) => (
                  <AgendaItem
                    key={`${track}-${index}`}
                    {...item}
                    className="animate-stagger"
                    isHighlighted={highlightedEvent === `${activeDay}-${activeStage}-${item.title}`}
                    ref={(el) => {
                      if (el) {
                        eventRefs.current[`${activeDay}-${activeStage}-${item.title}`] = el
                      }
                    }}
                  />
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
