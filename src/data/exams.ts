// Re-export all exam data from the canonical index
export {
  ALL_EXAMS,
  getExamById,
  getExamsByCountry,
  getCountryFlag,
  COUNTRY_FLAGS,
  ALL_DURATIONS,
  DURATION_GROUPS,
  parseDuration,
  type ExamTemplate,
  type DailyTopicItem,
  type RoadmapTemplate,
  type DurationKey,
  type RescueTemplate,
  type Subject,
  type Topic,
} from './exams/index';
