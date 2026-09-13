import React, { useState, useEffect, useMemo } from 'react';

interface TopicItem {
  id: string;
  name: string;
  weight?: number;
}

interface SubjectGroup {
  id: string;
  name: string;
  topics: TopicItem[];
}

interface ExamReadinessIslandProps {
  examId: string;
  examName: string;
  targetDateIso?: string;
  subjects?: SubjectGroup[];
}

export default function ExamReadinessIsland({
  examId,
  examName,
  targetDateIso = '2026-05-03T09:00:00Z',
  subjects = [],
}: ExamReadinessIslandProps) {
  // 1. Countdown state
  const [targetDate, setTargetDate] = useState(targetDateIso);
  const [timeLeft, setTimeLeft] = useState<{ days: number; hours: number; minutes: number; seconds: number; isPast: boolean }>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isPast: false,
  });

  // 2. Completion checklist state
  const [completedMap, setCompletedMap] = useState<Record<string, boolean>>({});
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [streakCount, setStreakCount] = useState<number>(1);
  const [isEditingDate, setIsEditingDate] = useState<boolean>(false);

  // Load persistence from localStorage
  useEffect(() => {
    try {
      const savedDate = localStorage.getItem(`sr_target_date_${examId}`);
      if (savedDate) setTargetDate(savedDate);

      const savedCompleted = localStorage.getItem(`sr_completed_${examId}`);
      if (savedCompleted) {
        setCompletedMap(JSON.parse(savedCompleted));
      }

      const savedStreak = localStorage.getItem(`sr_streak_${examId}`);
      if (savedStreak) {
        setStreakCount(parseInt(savedStreak, 10) || 1);
      }
    } catch {
      // Ignore localStorage errors in SSR or restricted environments
    }
  }, [examId]);

  // Tick countdown timer
  useEffect(() => {
    const updateCountdown = () => {
      const targetTime = new Date(targetDate).getTime();
      const now = Date.now();
      const diff = targetTime - now;

      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
        return;
      }

      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((diff / 1000 / 60) % 60);
      const seconds = Math.floor((diff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, isPast: false });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  // Toggle topic completion
  const handleToggleTopic = (topicId: string) => {
    setCompletedMap((prev) => {
      const next = { ...prev, [topicId]: !prev[topicId] };
      try {
        localStorage.setItem(`sr_completed_${examId}`, JSON.stringify(next));

        // Update streak logic
        const today = new Date().toISOString().slice(0, 10);
        const lastCheckin = localStorage.getItem(`sr_last_checkin_${examId}`);
        if (lastCheckin !== today) {
          const newStreak = (parseInt(localStorage.getItem(`sr_streak_${examId}`) || '0', 10) || 0) + 1;
          setStreakCount(newStreak);
          localStorage.setItem(`sr_streak_${examId}`, String(newStreak));
          localStorage.setItem(`sr_last_checkin_${examId}`, today);
        }
      } catch {
        // Fallback
      }
      return next;
    });
  };

  // Flattened topic calculations
  const allTopics = useMemo(() => {
    return subjects.flatMap((s) => s.topics.map((t) => ({ ...t, subjectId: s.id, subjectName: s.name })));
  }, [subjects]);

  const totalTopics = allTopics.length;
  const completedCount = useMemo(() => {
    return allTopics.filter((t) => completedMap[t.id]).length;
  }, [allTopics, completedMap]);

  const progressPercent = totalTopics > 0 ? Math.round((completedCount / totalTopics) * 100) : 0;

  // Filtered topics
  const displayedTopics = useMemo(() => {
    if (selectedSubject === 'all') return allTopics.slice(0, 12);
    return allTopics.filter((t) => t.subjectId === selectedSubject);
  }, [allTopics, selectedSubject]);

  const pad = (n: number) => String(n).padStart(2, '0');

  return (
    <div className="rounded-2xl border border-surface-200 dark:border-surface-800 bg-gradient-to-b from-surface-50 to-white dark:from-surface-900/60 dark:to-surface-950 p-6 sm:p-8 shadow-sm my-8">
      {/* Top Header & Streak Flame */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-surface-200 dark:border-surface-800">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 dark:bg-brand-900/30 dark:text-brand-300 mb-2">
            <span>⚡ Interactive Readiness Hub</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-bold text-surface-900 dark:text-white">
            {examName} Preparation Command Center
          </h2>
          <p className="text-sm text-surface-600 dark:text-surface-400 mt-1">
            Track your countdown, mark revised syllabus topics, and keep your daily momentum.
          </p>
        </div>

        {/* 7-Day Study Streak Counter */}
        <div className="flex items-center gap-3 bg-white dark:bg-surface-800 px-4 py-2.5 rounded-xl border border-surface-200 dark:border-surface-700 shadow-xs">
          <span className="text-2xl" aria-hidden="true">🔥</span>
          <div>
            <div className="text-sm font-bold text-surface-900 dark:text-white">
              {streakCount} Day{streakCount === 1 ? '' : 's'}
            </div>
            <div className="text-[11px] font-medium text-surface-500 dark:text-surface-400">
              Active Study Streak
            </div>
          </div>
        </div>
      </div>

      {/* Countdown Grid */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-xs font-semibold text-surface-500 dark:text-surface-400 uppercase tracking-wider mb-3">
          <span>{timeLeft.isPast ? 'Exam Cycle Concluded' : 'Target Exam Countdown'}</span>
          <button
            type="button"
            onClick={() => setIsEditingDate(!isEditingDate)}
            className="text-brand-600 dark:text-brand-400 hover:underline capitalize font-normal cursor-pointer"
          >
            {isEditingDate ? 'Done' : 'Change Date'}
          </button>
        </div>

        {isEditingDate && (
          <div className="mb-4 p-3 rounded-lg bg-surface-100 dark:bg-surface-800 flex items-center gap-3">
            <label htmlFor="target-date-input" className="text-xs text-surface-600 dark:text-surface-300 font-medium">
              Set Your Target Date:
            </label>
            <input
              id="target-date-input"
              type="date"
              value={targetDate.slice(0, 10)}
              onChange={(e) => {
                const newDate = `${e.target.value}T09:00:00Z`;
                setTargetDate(newDate);
                try {
                  localStorage.setItem(`sr_target_date_${examId}`, newDate);
                } catch {}
              }}
              className="px-2.5 py-1 text-xs rounded border border-surface-300 dark:border-surface-600 bg-white dark:bg-surface-900 text-surface-900 dark:text-white"
            />
          </div>
        )}

        <div className="grid grid-cols-4 gap-2 sm:gap-4 text-center">
          <div className="bg-white dark:bg-surface-800/80 p-3 sm:p-4 rounded-xl border border-surface-200 dark:border-surface-700">
            <span className="block font-mono text-2xl sm:text-4xl font-extrabold text-brand-600 dark:text-brand-400">
              {timeLeft.days}
            </span>
            <span className="text-[11px] sm:text-xs text-surface-500 dark:text-surface-400 font-medium uppercase mt-1 block">
              Days
            </span>
          </div>
          <div className="bg-white dark:bg-surface-800/80 p-3 sm:p-4 rounded-xl border border-surface-200 dark:border-surface-700">
            <span className="block font-mono text-2xl sm:text-4xl font-extrabold text-surface-800 dark:text-surface-200">
              {pad(timeLeft.hours)}
            </span>
            <span className="text-[11px] sm:text-xs text-surface-500 dark:text-surface-400 font-medium uppercase mt-1 block">
              Hours
            </span>
          </div>
          <div className="bg-white dark:bg-surface-800/80 p-3 sm:p-4 rounded-xl border border-surface-200 dark:border-surface-700">
            <span className="block font-mono text-2xl sm:text-4xl font-extrabold text-surface-800 dark:text-surface-200">
              {pad(timeLeft.minutes)}
            </span>
            <span className="text-[11px] sm:text-xs text-surface-500 dark:text-surface-400 font-medium uppercase mt-1 block">
              Minutes
            </span>
          </div>
          <div className="bg-white dark:bg-surface-800/80 p-3 sm:p-4 rounded-xl border border-surface-200 dark:border-surface-700">
            <span className="block font-mono text-2xl sm:text-4xl font-extrabold text-surface-800 dark:text-surface-200">
              {pad(timeLeft.seconds)}
            </span>
            <span className="text-[11px] sm:text-xs text-surface-500 dark:text-surface-400 font-medium uppercase mt-1 block">
              Seconds
            </span>
          </div>
        </div>
      </div>

      {/* Syllabus Progress Meter */}
      {totalTopics > 0 && (
        <div className="mt-8 pt-6 border-t border-surface-200 dark:border-surface-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-surface-900 dark:text-white">
              Syllabus Completion Meter
            </span>
            <span className="text-sm font-bold text-brand-600 dark:text-brand-400">
              {completedCount} of {totalTopics} Topics ({progressPercent}%)
            </span>
          </div>

          <div className="w-full bg-surface-200 dark:bg-surface-800 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-brand-600 to-emerald-500 h-full transition-all duration-300 ease-out rounded-full"
              style={{ width: `${progressPercent}%` }}
              role="progressbar"
              aria-valuenow={progressPercent}
              aria-valuemin={0}
              aria-valuemax={100}
            />
          </div>

          {/* Subject Filter Tabs */}
          {subjects.length > 1 && (
            <div className="flex flex-wrap items-center gap-2 mt-4">
              <button
                type="button"
                onClick={() => setSelectedSubject('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                  selectedSubject === 'all'
                    ? 'bg-brand-600 text-white'
                    : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 hover:bg-surface-200'
                }`}
              >
                All Subjects ({allTopics.length})
              </button>
              {subjects.map((sub) => (
                <button
                  key={sub.id}
                  type="button"
                  onClick={() => setSelectedSubject(sub.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors ${
                    selectedSubject === sub.id
                      ? 'bg-brand-600 text-white'
                      : 'bg-surface-100 dark:bg-surface-800 text-surface-600 dark:text-surface-300 hover:bg-surface-200'
                  }`}
                >
                  {sub.name} ({sub.topics.length})
                </button>
              ))}
            </div>
          )}

          {/* Checklist of topics */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-72 overflow-y-auto pr-1">
            {displayedTopics.map((topic) => {
              const checked = !!completedMap[topic.id];
              return (
                <label
                  key={topic.id}
                  className={`flex items-center gap-3 p-2.5 rounded-xl border transition-colors cursor-pointer ${
                    checked
                      ? 'bg-emerald-50/50 border-emerald-200 dark:bg-emerald-950/20 dark:border-emerald-800/40 text-surface-500 line-through'
                      : 'bg-white dark:bg-surface-800 border-surface-200 dark:border-surface-700 text-surface-800 dark:text-surface-200 hover:border-brand-300'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={() => handleToggleTopic(topic.id)}
                    className="w-4 h-4 rounded text-brand-600 focus:ring-brand-500 cursor-pointer"
                  />
                  <span className="text-xs font-medium truncate flex-1">{topic.name}</span>
                  {checked && <span className="text-emerald-600 text-xs font-bold shrink-0">✓ Done</span>}
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
