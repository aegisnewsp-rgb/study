export interface Topic { id: string; name: string; weight: 1|2|3|4|5; description?: string; }
export interface Subject { id: string; name: string; topics: Topic[]; color: string; }
export interface DailyTopicItem extends Topic { subject: string; }
export interface Phase { name: string; weeks: number; focus: string; deliverables: string[]; }
export interface RoadmapTemplate { duration: string; totalDays: number; dailyTopics: DailyTopicItem[]; description: string; phases?: Phase[]; }
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
  /** Longer hub essay: how to prepare, phase plan, resource approach (indexable unique prose). */
  prepOverview?: string;
  /** Short bullet mistakes students commonly make for this exam. */
  commonMistakes?: string[];
  subjects: Subject[];
  durations: Record<string, RoadmapTemplate>;
  rescueMode?: RescueTemplate;
  lastUpdated?: string;
  officialSource?: string;
}
