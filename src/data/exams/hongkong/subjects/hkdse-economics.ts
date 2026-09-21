// HKDSE Economics — Awarding body: Hong Kong Examinations and Assessment
// Authority (HKEAA). Source: 2026 HKDSE Economics Assessment Framework,
//   https://www.hkeaa.edu.hk/DocLibrary/HKDSE/Subject_Information/econ/2026hkdse-e-econ.pdf
// and the CDC/HKEAA Economics Curriculum and Assessment Guide (Secondary
// 4 - 6) with updates in 2025,
//   https://www.edb.gov.hk/attachment/en/curriculum-development/kla/pshe/Econ_C&A_Guide_E_with_updates_in_2025.pdf
// The Compulsory Part covers ten published topics (A-J): basic economic
// concepts; firms and production; market and price; competition and market
// structure; efficiency, equity and the role of government; measurement of
// economic performance; national income determination and price level;
// money and banking; macroeconomic problems and policies; international
// trade and finance. The Elective Part offers two options (candidates
// choose one): Elective 1 — Monopoly Pricing, Anti-competitive Behaviours
// and Competition Policy; Elective 2 — Extension of Trade Theory, Economic
// Growth and Development. Assessment: Paper 1 (MCQ, compulsory part),
// Paper 2 (Section A short questions + Section B structured/essay/data
// response questions, compulsory part), Paper 2 Section C (structured/essay
// questions on the chosen elective). Re-check the live assessment
// framework on hkeaa.edu.hk before committing a revision plan.

import type { Subject } from '../../types';

export const hkdseEconomics: Subject = {
  id: 'hkdse-economics',
  name: 'Economics',
  color: '#ef4444',
  topics: [
    { id: 'hkdse-econ-001', name: 'A. Basic Economic Concepts', weight: 3 as const, description: 'Scarcity and choice; opportunity cost; the production possibilities frontier; demand and supply (market demand, individual demand, market supply, individual supply, equilibrium, shifts of demand and supply curves); elasticity of demand and supply (price elasticity, income elasticity, cross elasticity).' },
    { id: 'hkdse-econ-002', name: 'B. Firms and Production', weight: 3 as const, description: 'The firm and its objectives (profit maximisation, alternative objectives); production (total, average and marginal product); costs in the short run and the long run (fixed, variable, average and marginal cost); revenue and profit (total, average and marginal revenue).' },
    { id: 'hkdse-econ-003', name: 'C. Market and Price', weight: 4 as const, description: 'Perfect competition (short-run and long-run equilibrium, shut-down condition); the firm as a price taker; consumer surplus and producer surplus; market efficiency; the effects of taxation and subsidies on equilibrium output and welfare; price controls (price ceilings and price floors).' },
    { id: 'hkdse-econ-004', name: 'D. Competition and Market Structure', weight: 4 as const, description: 'Imperfect competition (monopoly, monopolistic competition, oligopoly); barriers to entry; price discrimination; product differentiation; collusive behaviour and cartels; game theory basics (dominant strategy, Nash equilibrium).' },
    { id: 'hkdse-econ-005', name: 'E. Efficiency, Equity and the Role of Government', weight: 3 as const, description: 'Market failure (externalities, public goods, merit goods, demerit goods, information failure); the role of government (Pigouvian taxes and subsidies, tradable permits, regulation, provision of public goods); equity versus efficiency in policy choice.' },
    { id: 'hkdse-econ-006', name: 'F. Measurement of Economic Performance', weight: 3 as const, description: 'National income accounting (GDP at market prices, GNP, NDP, NNp; the income, output and expenditure approaches); real versus nominal GDP; the limitations of GDP as a measure of welfare; the standard of living and economic growth.' },
    { id: 'hkdse-econ-007', name: 'G. National Income Determination and Price Level', weight: 4 as const, description: 'The simple Keynesian model (aggregate demand, equilibrium national income, the multiplier); the AD-AS model (aggregate demand, short-run aggregate supply, long-run aggregate supply); fiscal and monetary policy in the AD-AS framework; the relationship between inflation and unemployment (the Phillips curve).' },
    { id: 'hkdse-econ-008', name: 'H. Money and Banking', weight: 3 as const, description: 'The functions of money; the banking system (commercial banks, fractional reserve banking, the money multiplier); the central bank (Hong Kong\'s three-issuing-bank system, the role of the Hong Kong Monetary Authority); monetary policy tools and transmission mechanisms.' },
    { id: 'hkdse-econ-009', name: 'I. Macroeconomic Problems and Policies', weight: 4 as const, description: 'Inflation (types, causes, measurement, costs); unemployment (types, causes, the natural rate); economic growth and the business cycle; fiscal policy (budget deficit, public debt, balanced budget); monetary policy (interest rates, money supply, exchange-rate considerations in Hong Kong).' },
    { id: 'hkdse-econ-010', name: 'J. International Trade and Finance', weight: 4 as const, description: 'Comparative advantage and the gains from trade; trade protection (tariffs, quotas, subsidies); the World Trade Organization and regional trade agreements; the balance of payments (current account, capital and financial account); exchange rates (floating, fixed, managed); the Linked Exchange Rate system in Hong Kong.' },
    { id: 'hkdse-econ-011', name: 'Elective 1 — Monopoly Pricing, Anti-competitive Behaviours and Competition Policy', weight: 2 as const, description: 'Sources of monopoly power; price discrimination (first, second and third degree); predatory pricing and limit pricing; mergers and anti-competitive agreements; the Hong Kong Competition Ordinance and the role of the Competition Commission.' },
    { id: 'hkdse-econ-012', name: 'Elective 2 — Extension of Trade Theory, Economic Growth and Development', weight: 2 as const, description: 'Extension of trade theory (the Leontief paradox, intra-industry trade, strategic trade policy); economic growth (sources of growth, the Solow growth model, endogenous growth theory); economic development (measures of development, the role of institutions, foreign aid, sustainable development goals).' }
  ]
};