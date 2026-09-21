// International Baccalaureate (IB) Diploma Programme — Mathematics: Analysis and Approaches (AA) at Standard Level and Higher Level.
//
// Awarding body: International Baccalaureate Organization (IB / IBO).
// The IB Diploma Programme is a two-year pre-university course studied
// in many international schools in Singapore alongside the local
// Singapore-Cambridge GCE A-Level. IB Mathematics AA is the more
// algebra-heavy of the two IB mathematics offerings (the other being
// Mathematics: Applications and Interpretation).
//
// The current IB Mathematics AA syllabus (first examinations 2021) is
// organised into five topics at Standard Level and the same five topics
// extended at Higher Level: Number and Algebra, Functions, Geometry and
// Trigonometry, Statistics and Probability, and Calculus. The Higher
// Level adds optional topics within each strand, plus the investigative,
// modelling and exploration paper. The topic list below uses the official
// topic headings from the IBO Mathematics AA subject brief and guide,
// with the sub-topic groupings an IB student in Singapore would recognise
// from the official syllabus document.
//
// Source: IBO DP Mathematics: Analysis and Approaches subject brief,
// https://ibo.org/contentassets/5895a05412144fe890312bad52b17044/subject-brief-dp-math-analysis-and-approaches-en.pdf
// Source: IBO DP curriculum page (Mathematics),
// https://ibo.org/programmes/diploma-programme/curriculum/mathematics/
import type { Subject } from '../../types';

export const ibMathematicsAA: Subject = {
  id: 'ib-mathematics-aa',
  name: 'Mathematics: Analysis and Approaches',
  color: '#7c3aed',
  topics: [
    { id: 'ibma-001', name: 'Number and Algebra', weight: 3 as const, description: 'Sequences, series, exponents, logarithms, financial maths, the binomial theorem, proof by induction, complex numbers (roots of polynomials, polar form, De Moivre), and counting principles. The first of five IB Math AA topics.' },
    { id: 'ibma-002', name: 'Functions', weight: 4 as const, description: 'Domain, range, composite and inverse functions; transformations; the modulus function; polynomial, exponential, logarithmic and rational functions; graphing and solving equations graphically. The most heavily weighted IB Math AA topic at SL by teaching hours.' },
    { id: 'ibma-003', name: 'Geometry and Trigonometry', weight: 4 as const, description: 'Coordinate geometry in 2D and 3D; trigonometry of right and non-right triangles; sine and cosine rules; identities and the general solution; vectors in 2D and 3D; vector equations of lines and planes; the cross product and its use in geometry. Together with Calculus, the heaviest HL section.' },
    { id: 'ibma-004', name: 'Statistics and Probability', weight: 4 as const, description: 'Sampling, presenting data, measures of central tendency and dispersion; linear regression; probability rules, conditional probability and Bayes\' theorem; binomial, normal and (HL) Poisson distributions; expectation and variance; the Central Limit Theorem and confidence intervals. Same scope at SL and HL but with more depth at HL.' },
    { id: 'ibma-005', name: 'Calculus', weight: 5 as const, description: 'Limits and continuity; differentiation of the standard functions and via the product, quotient and chain rules; implicit and parametric differentiation; higher derivatives; integration techniques (substitution, by parts, partial fractions); definite integrals and applications to area and volume; differential equations (separable and linear); Maclaurin series at HL. The single largest IB Math AA topic.' }
  ]
};
