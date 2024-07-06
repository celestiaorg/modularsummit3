'use client'
import React, { useState, useRef, useEffect, forwardRef, useCallback } from 'react'
import { Search, ChevronDown, ChevronUp, Filter, X, Ticket } from 'lucide-react'
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
    <div className={`absolute bottom-[8px] left-0 top-[-8px] -ml-12 flex w-10 items-center justify-center sm:-ml-16 ${className}`}>
      <div className="absolute bottom-0 right-0 top-0 w-0.5" style={{ backgroundColor: bg }}></div>
      <span className="-rotate-90 transform whitespace-nowrap text-sm font-semibold uppercase" style={{ color: text }}>
        {track}
      </span>
    </div>
  )
}

const AgendaItem = forwardRef<HTMLDivElement, AgendaItemProps & { className?: string; isHighlighted?: boolean }>(({ title, time, speakers, className, isHighlighted }, ref) => {
  return (
    <div
      ref={ref}
      className={`mb-4 border-b border-[#DFDFDF] transition-colors duration-1000 ${className}`}
      style={{
        backgroundColor: isHighlighted ? '#DCEFFD' : '#ffffff'
      }}
    >
      <div className="p-4">
        <h3 className="mb-2 text-2xl font-semibold leading-tight">{title}</h3>
        <p className="text-sm text-gray-600">{time}</p>
        {speakers && <p className="text-sm text-gray-600">Speakers: {speakers}</p>}
      </div>
    </div>
  )
})

AgendaItem.displayName = 'AgendaItem'

const DayButton: React.FC<DayButtonProps> = ({ day, isActive, onClick }) => (
  <button
    className={`basis-full text-nowrap border px-6 py-4 font-bold sm:basis-auto ${isActive ? 'border-brand-oil bg-brand-oil text-white' : 'border-[#DFDFDF] bg-white text-[#A9A9A9]'}`}
    onClick={onClick}
  >
    DAY {day}
  </button>
)

const StageButton: React.FC<StageButtonProps> = ({ stage, isActive, onClick }) => (
  <button
    className={`flex w-full border bg-brand-blue p-4 text-left text-xl font-medium transition-all duration-300 hover:-translate-x-1 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_#215FE5] sm:justify-center ${isActive ? 'border-brand-blue bg-brand-blue text-white' : 'border-[#DFDFDF] bg-white text-black'}`}
    onClick={onClick}
  >
    {stage}
  </button>
)

const SearchResult: React.FC<SearchResultProps> = ({ result, onClick, isActive }) => (
  <div className={`cursor-pointer px-4 py-3 ${isActive ? 'bg-blue-100' : 'hover:bg-gray-100'}`} onClick={onClick}>
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

  const groupedEvents = React.useMemo(() => {
    return filteredEvents.reduce(
      (acc, event, index) => {
        if (index === 0 || event.track !== filteredEvents[index - 1].track) {
          acc.push({ track: event.track, events: [event] })
        } else {
          acc[acc.length - 1].events.push(event)
        }
        return acc
      },
      [] as { track: string; events: typeof filteredEvents }[]
    )
  }, [filteredEvents])

  return (
    <div className="mx-auto max-w-[1280px] bg-white py-10 sm:py-20">
      <div className="mb-14 flex flex-col-reverse gap-5 px-4 sm:mb-[70px] sm:px-8 md:flex-row md:items-center md:justify-between lg:gap-32 xl:px-0">
        <div className="flex">
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
        <div className="relative flex flex-grow items-center gap-2">
          <div className="relative z-30 flex flex-grow items-center border border-[#DFDFDF] bg-white px-2 py-2">
            <Search className="ml-2 text-[#828282]" size={20} />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search events..."
              className="w-full rounded-lg p-2 italic placeholder:text-[#828282] focus:outline-none"
              value={searchTerm}
              onChange={(e) => handleSearch(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsSearchActive(true)}
            />
          </div>
          <div className="relative z-30" ref={filterRef}>
            <button onClick={toggleFilter} className="flex items-center bg-brand-blue px-4 py-[15px] text-white transition-colors hover:bg-brand-blue/90">
              <Filter size={20} className="mr-3" />
              <span className="text-xl">Filters</span>
              {selectedTracks.length > 0 && (
                <span className="ml-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-xs font-bold">{selectedTracks.length}</span>
              )}
            </button>
            {isFilterOpen && (
              <div className="absolute right-0 z-40 mt-2 w-48 bg-white p-4 shadow-xl">
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
            <div ref={searchResultsRef} className="absolute top-16 z-20 mt-1 max-h-60 w-full overflow-y-auto bg-white shadow-lg">
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
        <div className="mb-12 w-full px-4 sm:mb-12 sm:px-8 md:mb-0 md:w-1/3 xl:w-3/12 xl:px-12 xl:pl-0">
          <h2 className="mb-4 text-6xl font-bold text-orange-400 sm:mb-8 sm:text-7xl">DAY {activeDay}</h2>
          <p className="text-md mb-4 text-black sm:mb-10">{dayDescriptions[activeDay]}</p>
          <div className="flex flex-wrap gap-2 md:flex-col md:space-y-2">
            {/* Mobile Accordion */}
            <div className="w-full md:hidden">
              <button onClick={toggleStagesAccordion} className="flex w-full items-center justify-between bg-brand-blue px-4 py-3 text-white">
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
            <div className="hidden md:flex md:flex-col md:space-y-4">
              {stages.map((stage) => (
                <StageButton key={stage} stage={stage} isActive={activeStage === stage} onClick={() => setActiveStage(stage)} />
              ))}
            </div>
          </div>
        </div>
        <div className="w-full px-4 sm:px-8 md:w-2/3 lg:w-4/6 xl:w-9/12 xl:px-0">
          {isLivestreamVisible && currentStreamingLink ? (
            <div className="mb-6 flex flex-col justify-start text-balance bg-brand-green px-8 py-7 text-[24px] font-medium leading-tight text-white sm:mb-7 sm:flex-row sm:items-center sm:justify-between sm:space-x-10 sm:text-[28px]">
              <span className="mb-4 sm:mb-0">Watch our livestream on Youtube</span>
              <a
                href={currentStreamingLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center text-nowrap rounded py-1 text-xl text-[#FFEA72] transition-colors hover:text-yellow-400"
              >
                <svg className="mr-4 h-7 w-7 text-[#FFEA72] transition-colors group-hover:text-yellow-400" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.91643 19.8333C2.10142 15.9871 2.10142 12.0129 2.91643 8.16667C3.02352 7.77608 3.23042 7.42009 3.5168 7.13371C3.80319 6.84733 4.15917 6.64042 4.54976 6.53333C10.8071 5.4967 17.1924 5.4967 23.4498 6.53333C23.8404 6.64042 24.1963 6.84733 24.4827 7.13371C24.7691 7.42009 24.976 7.77608 25.0831 8.16667C25.8981 12.0129 25.8981 15.9871 25.0831 19.8333C24.976 20.2239 24.7691 20.5799 24.4827 20.8663C24.1963 21.1527 23.8404 21.3596 23.4498 21.4667C17.1924 22.5035 10.8071 22.5035 4.54976 21.4667C4.15917 21.3596 3.80319 21.1527 3.5168 20.8663C3.23042 20.5799 3.02352 20.2239 2.91643 19.8333Z"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M11.6664 17.5L17.4998 14L11.6664 10.5V17.5Z" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Watch Now
              </a>
            </div>
          ) : (
            <div className="mb-4 flex items-center justify-center bg-gray-100 px-8 py-7 text-gray-400">
              <span className="text-balance leading-tight">No livestream available for this stage</span>
            </div>
          )}
          <div ref={agendaContainerRef} className="relative pl-[36px] sm:pl-20">
            {groupedEvents.map((group, groupIndex) => (
              <div key={`group-${groupIndex}`} className="relative">
                <TrackLabel track={group.track} className="animate-stagger absolute bottom-0 top-0" />
                {group.events.map((item, index) => (
                  <AgendaItem
                    key={`${activeDay}-${activeStage}-${groupIndex}-${index}`}
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
          <button className="mt-12 flex w-full items-center justify-center space-x-4 bg-brand-blue p-3 text-2xl font-medium text-white transition-colors hover:bg-brand-blue/90 sm:mt-14 sm:text-4xl">
            <Ticket className="size-8 sm:size-10" />
            <span>Tickets</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ModularSummitAgenda
