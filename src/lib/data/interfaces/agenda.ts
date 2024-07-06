export interface AgendaItemProps {
  title: string
  time: string
  speakers?: string
  track?: string
  className?: string
  isHighlighted?: boolean
  initialDay?: number
  initialStage?: string
}

export interface DayButtonProps {
  day: number
  isActive: boolean
  onClick: () => void
}

export interface StageButtonProps {
  stage: string
  isActive: boolean
  onClick: () => void
}

export interface SearchResultProps {
  result: {
    title: string
    day: number
    stage: string
  }
  onClick: () => void
  isActive: boolean
}

export interface Event {
  title: string
  time: string
  speakers?: string
  track?: string
}

export interface Stage {
  [key: string]: Event[]
}

export interface DayEvents {
  [key: number]: Stage
}

export interface VideoStreamingConfig {
  youtubeLink: string
}

export interface StageStreamingConfig {
  [key: string]: VideoStreamingConfig
}

export interface DayStreamingConfig {
  [key: number]: StageStreamingConfig
}

export interface AgendaPageData {
  AgendaSection: {
    title: string
  }
  AgendaItemProps: AgendaItemProps
  DayButtonProps: DayButtonProps
  StageButtonProps: StageButtonProps
  SearchResultProps: SearchResultProps
  Event: Event
  Stage: Stage
  DayEvents: DayEvents
  VideoStreamingConfig: VideoStreamingConfig
  StageStreamingConfig: StageStreamingConfig
  DayStreamingConfig: DayStreamingConfig
}
