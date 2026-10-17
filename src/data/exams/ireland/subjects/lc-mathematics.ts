import type { Subject } from '../../types';

// Leaving Certificate Mathematics — NCCA syllabus for examinations from 2015
// onwards (current specification, applies to candidates sitting in 2026 and
// 2027 until the redevelopment rolls out in September 2027). Five strands are
// assessed at three levels — Foundation (1 paper), Ordinary (2 papers) and
// Higher (2 papers). The strand titles below are taken verbatim from the
// syllabus PDF (curriculumonline.ie/getmedia/.../SCSEC25_Maths_syllabus_*).
// The strand rows are kept as orientation rows; the numbered syllabus sections
// inside each strand (Statistics and Probability 1.1 to 1.6, Geometry and
// Trigonometry 2.1 to 2.5, Number 3.1 to 3.7, Algebra 4.1 to 4.6, Functions 5.1
// to 5.5) are added below as their own revision rows.
// Source: NCCA Leaving Certificate Mathematics syllabus, examination from
// 2015, https://curriculumonline.ie/getmedia/f6f2e822-2b0c-461e-bcd4-dfcde6decc0c/SCSEC25_Maths_syllabus_examination-2015_English.pdf
// (landing page: https://ncca.ie/en/resources/lc-mathematics-syllabus/)
// Verify the live paper pattern and any post-2027 specification changes on
// curriculumonline.ie before committing a revision plan to a student.
export const lcMathematics: Subject = {
  id: 'lc-mathematics',
  name: 'Mathematics',
  color: '#2563eb',
  topics: [
    { id: 'lc-math-001', name: 'Statistics and Probability', weight: 4 as const, description: 'Orientation row for strand 1, which moves from describing a dataset you already have through sampling and correlation to the probability rules and the two distributions examined in the paper. After this you can route any statistics or probability question to the right section below.' },
    { id: 'lc-math-002', name: 'Geometry and Trigonometry', weight: 4 as const, description: 'Orientation row for strand 2, which builds from synthetic geometry and constructions through the geometry of triangles to trigonometry applied in two and three dimensions. After this you can recognise which of the three sections a shape or angle question belongs to.' },
    { id: 'lc-math-003', name: 'Number', weight: 3 as const, description: 'Orientation row for strand 3, covering arithmetic, the real and complex number systems, indices, surds, financial mathematics and counting. After this you can decide whether a question is a manipulation, a finance context or a counting problem.' },
    { id: 'lc-math-004', name: 'Algebra', weight: 5 as const, description: 'Orientation row for strand 4, running from formulae and equations through quadratics and sequences to the binomial theorem and proof. Largest strand by marks at Higher level; after this you can place any algebra question in one of the three sections below.' },
    { id: 'lc-math-005', name: 'Functions', weight: 5 as const, description: 'Orientation row for strand 5, from polynomial, exponential and logarithmic graphs to trigonometric functions and calculus. Single largest Higher-level component; after this you can decide whether the task is sketching a graph, transforming one, or differentiating and integrating.' },

    { id: 'lc-math-006', name: 'Descriptive Statistics, Sampling and Correlation', weight: 3 as const, description: 'Sections 1.1 to 1.3. After revising this you can choose the right average and spread for a data set, judge whether a sample is biased, and calculate and interpret a line of best fit from a scatter diagram.' },
    { id: 'lc-math-007', name: 'Probability, Binomial and Normal Distributions', weight: 4 as const, description: 'Sections 1.4 to 1.6. After revising this you can apply the addition, multiplication and conditional rules to written scenarios and use the binomial and normal distributions to answer questions that give probabilities rather than raw counts.' },

    { id: 'lc-math-008', name: 'Synthetic Geometry and Constructions', weight: 3 as const, description: 'Sections 2.1 and 2.2. After revising this you can prove a result using the standard theorems on lines and circles and set out a full construction with its justification written alongside.' },
    { id: 'lc-math-009', name: 'Coordinate Geometry and the Geometry of Triangles', weight: 4 as const, description: 'Sections 2.3 and 2.4. After revising this you can write equations for and find intersections of lines, and use the sine rule, cosine rule and area formula to solve triangles where Pythagoras will not reach.' },
    { id: 'lc-math-010', name: 'Trigonometry in Two and Three Dimensions', weight: 3 as const, description: 'Section 2.5, Higher level. After revising this you can resolve a vector into components and use the cosine rule in three dimensions to find a length or angle that no flat diagram shows.' },

    { id: 'lc-math-011', name: 'Arithmetic, Indices and Surds', weight: 3 as const, description: 'Sections 3.1, 3.4 and 3.5. After revising this you can apply the index and surd laws without sign errors and rationalise a denominator that starts as an irrational expression.' },
    { id: 'lc-math-012', name: 'Real and Complex Numbers', weight: 3 as const, description: 'Sections 3.2 and 3.3. After revising this you can place a value in the real number system and explain why it belongs there, then carry out the four operations on complex numbers in Cartesian form.' },
    { id: 'lc-math-013', name: 'Financial Mathematics and Counting', weight: 3 as const, description: 'Sections 3.6 and 3.7. After revising this you can build and read an amortization schedule for compound interest, depreciation or a loan, and count arrangements where order matters and where it does not.' },

    { id: 'lc-math-014', name: 'Quadratics, Equations and Inequalities', weight: 4 as const, description: 'Sections 4.1 to 4.3. After revising this you can solve simultaneous equations algebraically and graphically, factorise and complete the square, and solve a quadratic inequality by testing the critical values.' },
    { id: 'lc-math-015', name: 'Sequences and Series', weight: 4 as const, description: 'Section 4.4. After revising this you can identify whether a sequence is arithmetic or geometric, derive its general term from the pattern, and sum a finite series in sigma notation.' },
    { id: 'lc-math-016', name: 'The Binomial Theorem and Algebraic Proofs', weight: 3 as const, description: 'Sections 4.5 and 4.6. After revising this you can expand a binomial power and extract a specified coefficient, then write a proof by induction, contradiction or counterexample that a stated identity holds.' },

    { id: 'lc-math-017', name: 'Polynomial, Exponential and Logarithmic Functions', weight: 4 as const, description: 'Sections 5.1 to 5.3. After revising this you can sketch and transform a polynomial, exponential or logarithmic graph, and solve an equation where a logarithm is the unknown.' },
    { id: 'lc-math-018', name: 'Trigonometric Functions and Calculus', weight: 5 as const, description: 'Sections 5.4 and 5.5, Higher level. After revising this you can differentiate a composite, exponential or logarithmic function and use the result to find a rate or a maximum, then integrate to find an area under a curve.' }
  ]
};
