// QCE General Mathematics — Queensland Curriculum and Assessment Authority (QCAA)
// Syllabus: General Mathematics General senior syllabus (2025) v1.3, for
// implementation with students who will complete their study in 2026 or beyond.
// Awarding body: Queensland Curriculum and Assessment Authority (QCAA).
// Official source: https://www.qcaa.qld.edu.au/senior/senior-subjects/syllabuses/mathematics/general-mathematics
// PDF reference: https://www.qcaa.qld.edu.au/downloads/senior-qce/syllabuses/snr_maths_general_25_syll.pdf
// The 2025 syllabus organises General Mathematics around four Units of
// compulsory study. Each Unit is named on the official syllabus cover. The
// major domains (Number and algebra, Measurement and geometry, Statistics and
// probability) are the cross-cutting strands assessed across all Units. NESA
// does not publish per-Unit assessment weightings, so no weight field is set
// on any row. The 4 Units + 3 major domains gives 7 topics, satisfying the
// 6-topic minimum.

import type { Subject } from '../../types';

export const qceGeneralMathematics: Subject = {
  id: 'qce-general-mathematics',
  name: 'General Mathematics',
  color: '#2563eb',
  topics: [
    {
      id: 'qcegen-001',
      name: 'Unit 1: Money, Measurement, Algebra and Linear Equations',
      description: 'Consumer arithmetic, percentages and finance; measurement and error; algebra and linear equations with applications to practical contexts. First Unit of General Mathematics in the four-Unit course sequence.'
    },
    {
      id: 'qcegen-002',
      name: 'Unit 2: Applications of Linear Equations and Trigonometry, Matrices and Univariate Data Analysis',
      description: 'Linear equations in two variables; trigonometry in right-angled triangles and the sine/cosine rules; matrix arithmetic and applications; univariate data, summary statistics and the standard normal distribution. Second Unit of the four-Unit sequence.'
    },
    {
      id: 'qcegen-003',
      name: 'Unit 3: Bivariate Data and Sequences and Change, and Earth Geometry',
      description: 'Bivariate data, correlation and regression; sequences and series (arithmetic and geometric), recurrence relations and change; Earth geometry including great circle distances, time zones and latitude/longitude problems. Third Unit of the four-Unit sequence.'
    },
    {
      id: 'qcegen-004',
      name: 'Unit 4: Interest and Depreciation, Statistics and Inference',
      description: 'Compound interest, depreciation and amortisation; statistical inference, confidence intervals and hypothesis testing; the chi-squared test; time series and forecasting. Fourth Unit of the four-Unit sequence and the externally assessed summative Unit in the General Mathematics course.'
    },
    {
      id: 'qcegen-005',
      name: 'Major Domain: Number and Algebra',
      description: 'Consumer arithmetic, rates and ratios, algebraic manipulation, indices, logarithms, sequences and recurrence. Cross-cutting domain assessed across Units 1-4 of the General Mathematics course.'
    },
    {
      id: 'qcegen-006',
      name: 'Major Domain: Measurement and Geometry',
      description: 'Length, area and volume; trigonometry in two and three dimensions; Earth geometry (great circles, time zones, latitude/longitude); vectors in the plane. Cross-cutting domain assessed across Units 1-4 of the General Mathematics course.'
    },
    {
      id: 'qcegen-007',
      name: 'Major Domain: Statistics and Probability',
      description: 'Univariate and bivariate data, summary statistics, correlation, regression, the normal distribution, time series analysis and statistical inference. Cross-cutting domain assessed across Units 1-4 of the General Mathematics course.'
    }
  ]
};