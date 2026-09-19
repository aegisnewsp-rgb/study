import type { Subject } from '../types';

export const business_and_economics: Subject = {
  id: 'business-and-economics', name: 'Business and Economics', color: '#ef4444',
  topics: [
    { id: 'cmat-be-001', name: 'Forms of Business Organisation', weight: 5 as const, description: 'Sole proprietorship, partnership, joint stock company, cooperative and public enterprise - their features, merits, limitations and suitability for different scales of business.' },
    { id: 'cmat-be-002', name: 'Management Functions and Organisational Behaviour', weight: 4 as const, description: 'Planning, organising, staffing, directing and controlling; plus motivation, leadership, group behaviour and the basics of organisational structure.' },
    { id: 'cmat-be-003', name: 'Business Environment and Contemporary Issues', weight: 4 as const, description: 'Economic, political, legal, social and technological dimensions of the business environment, and current issues such as globalisation, privatisation and liberalisation.' },
    { id: 'cmat-be-004', name: 'Accounting and Financial Statements', weight: 4 as const, description: 'Book-keeping and accounting concepts, the accounting equation, journal to trial balance, and how to read a balance sheet and profit and loss account.' },
    { id: 'cmat-be-005', name: 'Demand, Supply and Market Equilibrium', weight: 4 as const, description: 'Law of demand and supply, elasticity of demand and supply, determinants of demand, and how price is set where demand and supply meet.' },
    { id: 'cmat-be-006', name: 'Production, Cost and Market Structures', weight: 3 as const, description: 'Factors of production, production function, fixed and variable cost, short-run and long-run cost curves, and the features of perfect competition, monopoly and monopolistic competition.' },
    { id: 'cmat-be-007', name: 'Marketing Management', weight: 3 as const, description: 'Marketing mix, product and pricing decisions, distribution channels, promotion, market segmentation and the basics of consumer behaviour.' },
    { id: 'cmat-be-008', name: 'Money, Banking and Public Finance', weight: 3 as const, description: 'Functions of money, commercial and central banking, credit creation, inflation and deflation, plus public revenue, public expenditure and taxation principles.' },
    { id: 'cmat-be-009', name: 'National Income and Economic Indicators', weight: 3 as const, description: 'Concepts of GDP, GNP, NNP and per capita income, methods of measuring national income, and the main indicators used to describe Nepal\'s economy.' },
    { id: 'cmat-be-010', name: 'Government, Business and Economic Policy in Nepal', weight: 2 as const, description: 'The role of government in business, industrial and trade policy, the annual budget, and how Nepal\'s development plans and economic reforms affect business decisions.' }
  ]
};
