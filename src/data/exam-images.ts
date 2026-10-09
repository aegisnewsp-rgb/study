/**
 * Exam hub hero images.
 *
 * One entry per exam slug that has a reviewed illustration shipped in
 * `public/img/exams/`. Slugs are exam ids (must match `examId` in
 * `src/data/exams/**`), because `src/pages/exams/[exam].astro` looks this map
 * up with the route slug.
 *
 * Generated from /data/ceo-sprint/images/staging/manifest.json (2026-10-09).
 * Hero sources are 1344x752 PNGs, converted to 1200px-wide WebP at quality 80
 * (every file is under the 80KB/page budget). Width/height below are read back
 * from the encoded files, not assumed.
 *
 * `og` is only set when the manifest marks that image as the exam's og:image.
 * It is intentionally unset for every slug here, so the og:image logic on the
 * exam hub page keeps falling back to the existing per-exam /og-notes JPG and
 * then to /og-notes/exam-default.jpg.
 */
export interface ExamHeroImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface ExamImageEntry extends ExamHeroImage {
  og?: { src: string; width: number; height: number; alt: string };
}

export const examImages: Record<string, ExamImageEntry> = {
  'cs-exec': {
    src: '/img/exams/cs-exec-hero.webp',
    width: 1200,
    height: 671,
    alt: 'Flat blue and amber illustration of a domed government building with a flag, and open books laid out like stepping stones toward a rising sun.',
  },
  'sbi-clerk': {
    src: '/img/exams/sbi-clerk-hero.webp',
    width: 1200,
    height: 671,
    alt: 'Flat blue and amber illustration of a stack of two books, a calculator, a ruled ledger sheet and a pencil.',
  },
  gaokao: {
    src: '/img/exams/gaokao-hero.webp',
    width: 1200,
    height: 671,
    alt: 'Flat blue and amber illustration of an unrolled scroll with a brush stroke, a brush and ink dish, a glowing lantern, a moon, an open notebook and a leafy branch.',
  },
  tnpsc: {
    src: '/img/exams/tnpsc-hero.webp',
    width: 1200,
    height: 671,
    alt: 'Flat blue and amber illustration of a South Indian temple tower at sunset, an open exam booklet with multiple-choice bubbles, a compass and a pencil.',
  },
  jeeupsee: {
    src: '/img/exams/jeeupsee-hero.webp',
    width: 1200,
    height: 671,
    alt: 'Flat blue and amber illustration of a winding road with three map pins on open books, leading to a flag on a hilltop.',
  },
  'ssc-cgl': {
    src: '/img/exams/ssc-cgl-hero.webp',
    width: 1200,
    height: 671,
    alt: 'Flat blue and amber illustration of two gears, a stack of study cards, a rising bar chart, two books and a pen.',
  },
  cat: {
    src: '/img/exams/cat-hero.webp',
    width: 1200,
    height: 671,
    alt: 'Flat blue and amber illustration of a stack of paper notes, a pencil, a globe and an open book.',
  },
};

export default examImages;