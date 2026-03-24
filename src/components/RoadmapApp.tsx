'use client';
import { useState, useMemo } from 'react';
import type { ExamTemplate, DailyTopicItem, RoadmapTemplate } from '../data/exams';

interface Props {
  exams: ExamTemplate[];
}

const DURATION_OPTIONS = [
  { label: 'Last Minute (12 Hours)', value: '12h' },
  { label: '1 Hour',     value: '1h'  },
  { label: '2 Hours',    value: '2h'  },
  { label: '3 Hours',    value: '3h'  },
  { label: '5 Hours',    value: '5h'  },
  { label: '1 Day',      value: '1d'  },
  { label: '2 Days',     value: '2d'  },
  { label: '3 Days',     value: '3d'  },
  { label: '5 Days',     value: '5d'  },
  { label: '1 Week',     value: '7d'  },
  { label: '10 Days',   value: '10d' },
  { label: '2 Weeks',   value: '2w'  },
  { label: '1 Month',   value: '1mo' },
  { label: '2 Months',  value: '2mo' },
  { label: '3 Months',  value: '3mo' },
  { label: '6 Months',  value: '6mo' },
  { label: '1 Year',    value: '1yr' },
  { label: '2 Years',   value: '2yr' },
];

const COUNTRY_FLAGS: Record<string, string> = {
  india:    '🇮🇳',
  pakistan: '🇵🇰',
  nigeria:  '🇳🇬',
};

const SUBJECT_COLORS = [
  '#60a5fa', '#34d399', '#fb923c', '#a78bfa',
  '#f472b6', '#14b8a6', '#fbbf24', '#f87171',
];

function getSubjectColor(index: number) {
  return SUBJECT_COLORS[index % SUBJECT_COLORS.length];
}

function WeightStars({ weight }: { weight: number }) {
  const stars = Math.max(1, Math.min(5, Math.round(weight / 2)));
  return (
    <span className="text-amber-400 text-xs" aria-label={`${weight} out of 10`}>
      {'★'.repeat(stars)}{'☆'.repeat(5 - stars)}
    </span>
  );
}

function SubjectAccordion({
  subjectName,
  subjectId,
  topics,
  isOpen,
  onToggle,
  color,
  index,
}: {
  subjectName: string;
  subjectId: string;
  topics: DailyTopicItem[];
  isOpen: boolean;
  onToggle: () => void;
  color: string;
  index: number;
}) {
  const sorted = useMemo(() => [...topics].sort((a, b) => b.weight - a.weight), [topics]);
  const highPriority = sorted.filter(t => t.weight >= 7).length;

  return (
    <div className="border border-surface-200 dark:border-surface-700 rounded-xl overflow-hidden">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-4 py-3 bg-surface-50 dark:bg-surface-800/60 hover:bg-surface-100 dark:hover:bg-surface-800 transition-colors text-left"
        aria-expanded={isOpen}
      >
        <div className="flex items-center gap-3">
          <div className="w-3 h-3 rounded-full shrink-0" style={{ backgroundColor: color }} />
          <span className="font-semibold text-surface-900 dark:text-surface-50 text-sm">
            {subjectName}
          </span>
          <span className="text-xs text-surface-400 bg-surface-100 dark:bg-surface-700 px-2 py-0.5 rounded-full">
            {topics.length} topics
          </span>
        </div>
        <div className="flex items-center gap-2">
          {isOpen && (
            <span className="text-xs text-surface-400 hidden sm:block">
              {highPriority} high-priority
            </span>
          )}
          <svg
            className={`w-4 h-4 text-surface-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="p-3 grid gap-2 sm:grid-cols-2">
          {sorted.map((topic, i) => (
            <div
              key={topic.id}
              className="flex items-start gap-2.5 p-2.5 bg-white dark:bg-surface-900 rounded-lg border border-surface-100 dark:border-surface-800 hover:border-brand-200 dark:hover:border-brand-800 transition-colors"
            >
              <span className="text-xs text-surface-400 dark:text-surface-600 font-mono mt-0.5 shrink-0 w-5">
                {i + 1}.
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-medium text-surface-800 dark:text-surface-200 leading-snug">
                  {topic.name}
                </p>
                <span className="text-xs text-surface-400">{topic.subject}</span>
              </div>
              <WeightStars weight={topic.weight} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function ProgressOverview({
  examName,
  roadmap,
}: {
  examName: string;
  roadmap: RoadmapTemplate;
}) {
  const subjectCounts = useMemo(() => {
    const counts: Record<string, { count: number; avgWeight: number }> = {};
    for (const topic of roadmap.dailyTopics) {
      if (!counts[topic.subject]) counts[topic.subject] = { count: 0, avgWeight: 0 };
      counts[topic.subject].count++;
      counts[topic.subject].avgWeight += topic.weight;
    }
    for (const s of Object.keys(counts)) {
      counts[s].avgWeight = Math.round(counts[s].avgWeight / counts[s].count);
    }
    return counts;
  }, [roadmap]);

  const subjects = Object.entries(subjectCounts).sort((a, b) => b[1].count - a[1].count);

  return (
    <div className="card p-5">
      <h3 className="text-sm font-semibold text-surface-700 dark:text-surface-300 mb-3">
        Progress Overview — {examName}
      </h3>
      <div className="space-y-2">
        {subjects.map(([subject, data]) => {
          const barWidth = Math.round((data.count / roadmap.dailyTopics.length) * 100);
          const barColor = data.avgWeight >= 7
            ? 'bg-red-400'
            : data.avgWeight >= 4
            ? 'bg-amber-400'
            : 'bg-surface-300';
          return (
            <div key={subject}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-surface-700 dark:text-surface-300">{subject}</span>
                <span className="text-xs text-surface-500">{data.count} topics</span>
              </div>
              <div className="h-1.5 bg-surface-100 dark:bg-surface-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full ${barColor} transition-all duration-500`}
                  style={{ width: `${barWidth}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
      <div className="mt-3 pt-3 border-t border-surface-100 dark:border-surface-800 flex items-center justify-between">
        <span className="text-xs text-surface-500">Total topics</span>
        <span className="text-xs font-semibold text-surface-700 dark:text-surface-300">
          {roadmap.dailyTopics.length}
        </span>
      </div>
    </div>
  );
}

export default function RoadmapApp({ exams }: Props) {
  const [selectedExam, setSelectedExam] = useState<string>('');
  const [selectedDuration, setSelectedDuration] = useState<string>('');
  const [openSubjects, setOpenSubjects] = useState<Set<string>>(new Set());

  const roadmap = useMemo<RoadmapTemplate | null>(() => {
    if (!selectedExam || !selectedDuration) return null;
    return exams.find(e => e.examId === selectedExam)?.durations[selectedDuration] ?? null;
  }, [selectedExam, selectedDuration, exams]);

  const selectedExamData = useMemo(
    () => exams.find(e => e.examId === selectedExam) ?? null,
    [selectedExam, exams],
  );

  const groupedExams = useMemo(() => ({
    India:    exams.filter(e => e.country === 'india'),
    Pakistan: exams.filter(e => e.country === 'pakistan'),
    Nigeria:  exams.filter(e => e.country === 'nigeria'),
  }), [exams]);

  const toggleSubject = (subjectId: string) => {
    setOpenSubjects(prev => {
      const next = new Set(prev);
      if (next.has(subjectId)) next.delete(subjectId);
      else next.add(subjectId);
      return next;
    });
  };

  const examSubjects = useMemo(() => {
    if (!selectedExamData) return [];
    const seen = new Set<string>();
    const subjects: Array<{ name: string; id: string; color: string }> = [];
    for (const subj of selectedExamData.subjects ?? []) {
      if (!seen.has(subj.name)) {
        seen.add(subj.name);
        subjects.push({ name: subj.name, id: subj.id, color: subj.color });
      }
    }
    return subjects;
  }, [selectedExamData]);

  const topicsBySubject = useMemo(() => {
    if (!roadmap) return new Map<string, DailyTopicItem[]>();
    const map = new Map<string, DailyTopicItem[]>();
    for (const topic of roadmap.dailyTopics) {
      if (!map.has(topic.subject)) map.set(topic.subject, []);
      map.get(topic.subject)!.push(topic);
    }
    return map;
  }, [roadmap]);

  const handleExamChange = (examId: string) => {
    setSelectedExam(examId);
    setSelectedDuration('');
    setOpenSubjects(new Set());
  };

  const handleDurationChange = (dur: string) => {
    setSelectedDuration(dur);
    setOpenSubjects(new Set());
  };

  const durationLabel = DURATION_OPTIONS.find(d => d.value === roadmap?.duration)?.label ?? roadmap?.duration ?? '';

  return (
    <div className="min-h-screen">
      {/* Selector */}
      <section className="container-page py-8 sm:py-12">
        <div className="card p-5 sm:p-6 max-w-2xl mx-auto space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            {/* Exam selector */}
            <div className="space-y-1.5">
              <label htmlFor="exam-select" className="text-xs font-semibold uppercase tracking-widest text-surface-500">
                Select Exam
              </label>
              <div className="relative">
                <select
                  id="exam-select"
                  value={selectedExam}
                  onChange={e => handleExamChange(e.target.value)}
                  className="w-full appearance-none bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-50 text-sm font-medium rounded-xl px-4 py-2.5 pr-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                >
                  <option value="">— Choose an exam —</option>
                  <optgroup label="🇮🇳 India">
                    {groupedExams.India.map(e => (
                      <option key={e.examId} value={e.examId}>{e.examName}</option>
                    ))}
                  </optgroup>
                  <optgroup label="🇵🇰 Pakistan">
                    {groupedExams.Pakistan.map(e => (
                      <option key={e.examId} value={e.examId}>{e.examName}</option>
                    ))}
                  </optgroup>
                  <optgroup label="🇳🇬 Nigeria">
                    {groupedExams.Nigeria.map(e => (
                      <option key={e.examId} value={e.examId}>{e.examName}</option>
                    ))}
                  </optgroup>
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>

            {/* Duration selector */}
            <div className="space-y-1.5">
              <label htmlFor="duration-select" className="text-xs font-semibold uppercase tracking-widest text-surface-500">
                Study Duration
              </label>
              <div className="relative">
                <select
                  id="duration-select"
                  value={selectedDuration}
                  onChange={e => handleDurationChange(e.target.value)}
                  disabled={!selectedExam}
                  className="w-full appearance-none bg-surface-50 dark:bg-surface-800 border border-surface-200 dark:border-surface-700 text-surface-900 dark:text-surface-50 text-sm font-medium rounded-xl px-4 py-2.5 pr-10 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-brand-500 transition-colors"
                >
                  <option value="">— Choose duration —</option>
                  {DURATION_OPTIONS.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
                <svg className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-surface-400 pointer-events-none" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {(selectedExam || selectedDuration) && (
            <button
              onClick={() => { setSelectedExam(''); setSelectedDuration(''); setOpenSubjects(new Set()); }}
              className="text-xs text-surface-500 hover:text-surface-700 dark:hover:text-surface-300 transition-colors underline"
            >
              Clear selection
            </button>
          )}
        </div>
      </section>

      {/* Roadmap output */}
      {roadmap && selectedExamData && (
        <section className="container-page pb-14 space-y-6 max-w-4xl mx-auto">
          {/* Disclaimer */}
          <div className="flex items-start gap-2.5 p-3 bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-xl">
            <svg className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
            </svg>
            <p className="text-xs text-amber-700 dark:text-amber-300 leading-relaxed">
              <strong>Disclaimer:</strong> StudyRoadmap™ is a planning aid. Always verify with official exam sources before making decisions.
            </p>
          </div>

          {/* Roadmap header */}
          <div className="card p-5 sm:p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-brand-100 dark:bg-brand-900/40 flex items-center justify-center shrink-0 text-2xl">
                {COUNTRY_FLAGS[selectedExamData.country] ?? '🌍'}
              </div>
              <div>
                <h2 className="text-xl font-bold text-surface-900 dark:text-surface-50 mb-1">
                  {selectedExamData.examName}
                </h2>
                <p className="text-sm text-surface-500 mb-2">{roadmap.description}</p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 rounded-full">
                    ⏱️ {durationLabel}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 rounded-full">
                    📅 {roadmap.totalDays} {roadmap.totalDays === 1 ? 'day' : 'days'}
                  </span>
                  <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-400 rounded-full">
                    📚 {roadmap.dailyTopics.length} topics
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Progress overview */}
          <ProgressOverview examName={selectedExamData.examName} roadmap={roadmap} />

          {/* Subject accordions */}
          <div className="space-y-2">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-surface-500 px-1">
              Subject Breakdown
            </h3>
            {examSubjects.map((subj, idx) => {
              const topics = topicsBySubject.get(subj.name) ?? [];
              if (!topics.length) return null;
              return (
                <SubjectAccordion
                  key={subj.id}
                  subjectId={subj.id}
                  subjectName={subj.name}
                  topics={topics}
                  isOpen={openSubjects.has(subj.id)}
                  onToggle={() => toggleSubject(subj.id)}
                  color={subj.color}
                  index={idx}
                />
              );
            })}
          </div>

          {/* Duration switcher */}
          <div className="text-center pt-4">
            <p className="text-sm text-surface-500 mb-3">
              Adjust your timeline:
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              {DURATION_OPTIONS.filter(o => o.value !== selectedDuration).slice(0, 5).map(opt => (
                <button
                  key={opt.value}
                  onClick={() => handleDurationChange(opt.value)}
                  className="text-xs font-medium px-3 py-1.5 rounded-full border border-surface-200 dark:border-surface-700 text-surface-600 dark:text-surface-400 hover:border-brand-400 dark:hover:border-brand-600 hover:text-brand-600 dark:hover:text-brand-400 transition-colors"
                >
                  {opt.label} →
                </button>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state */}
      {!roadmap && (
        <section className="container-page pb-20">
          <div className="max-w-2xl mx-auto text-center py-16">
            <div className="w-16 h-16 rounded-2xl bg-surface-100 dark:bg-surface-800 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-surface-400" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-surface-700 dark:text-surface-300 mb-1">
              Select an Exam & Duration
            </h3>
            <p className="text-sm text-surface-500 max-w-xs mx-auto">
              Choose your exam from the dropdown, pick a study timeline, and get your personalised roadmap instantly.
            </p>
          </div>
        </section>
      )}
    </div>
  );
}
