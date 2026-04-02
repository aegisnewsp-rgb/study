import type { Subject } from '../types';

const economics: Subject = {
  id: 'economics', name: 'None', color: '#059669',
  topics: [
    { id: 'econom-001', name: 'Introduction to Economics', weight: 3 as const, description: 'Basic concepts of economics, micro vs macro economics, and economic problem of scarcity and choice.' },
    { id: 'econom-002', name: 'Demand and Supply', weight: 3 as const, description: 'Law of demand and supply, equilibrium price, elasticity of demand, and market clearing mechanisms.' },
    { id: 'econom-003', name: 'Elasticity', weight: 3 as const, description: 'Price, income, and cross elasticity of demand — frequently asked in RBI Grade B and banking exams.' },
    { id: 'econom-004', name: 'Consumer Behaviour', weight: 3 as const, description: 'Utility analysis, indifference curves, budget line, consumer equilibrium, and demand forecasting.' },
    { id: 'econom-005', name: 'Theory of Production', weight: 3 as const, description: 'Production function, law of variable proportions, returns to scale, and isoquant analysis.' },
    { id: 'econom-006', name: 'Cost Theory', weight: 3 as const, description: 'Fixed and variable costs, short-run and long-run cost curves, and economic vs accounting costs.' },
    { id: 'econom-007', name: 'Market Structures', weight: 3 as const, description: 'Perfect competition, monopoly, oligopoly, monopolistic competition, and game theory basics.' },
    { id: 'econom-008', name: 'Factor Markets', weight: 3 as const, description: 'Labor market, wage determination, rent, interest, and profit in factor pricing.' },
    { id: 'econom-009', name: 'National Income', weight: 3 as const, description: 'GDP, GNP, NI, disposable income concepts, and methods of measuring national income in India.' },
    { id: 'econom-010', name: 'Money and Banking', weight: 3 as const, description: 'Money supply, RBI functions, monetary policy, inflation, and digital payment systems.' },
  ]
};

export { economics };