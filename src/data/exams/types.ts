export interface Topic { id: string; name: string; weight: 1|2|3|4|5; }
export interface Subject { id: string; name: string; topics: Topic[]; color: string; }
export interface DailyTopicItem extends Topic { subject: string; }
export interface RoadmapTemplate { duration: string; totalDays: number; dailyTopics: DailyTopicItem[]; description: string; }
export interface RescueFocusArea { subject: string; topics: string[]; }
export interface RescueTemplate {
  name: string;
  description?: string;
  duration: string;
  focusAreas: RescueFocusArea[];
  strategy: string;
}
export interface ExamTemplate {
  examId: string;
  examName: string;
  country: 'india' | 'pakistan' | 'nigeria';
  description?: string;
  examPattern?: string;
  eligibility?: string;
  subjects: Subject[];
  durations: Record<string, RoadmapTemplate>;
  rescueMode?: RescueTemplate;
  lastUpdated?: string;
  officialSource?: string;
}
