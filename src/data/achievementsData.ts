export interface Achievement {
  id: string;
  title: string;
  company: string;
  role: string;
  challenge: string;
  solution: string;
  techStack: string[];
  outcomes: string[];
  priority?: number;
}

export const achievements: Achievement[] = [
  {
    id: 'evv-healthcare',
    title: 'EVV Healthcare Compliance SaaS Platform',
    company: 'Kaz Software',
    role: 'Technical Project Manager & Architect',
    challenge: 'Design multi-tenant SaaS platform meeting US healthcare compliance requirements within an aggressive 8 month timeline.',
    solution: 'Architected microservices-based system, led 12-person distributed team using Agile practices.',
    techStack: ['.NET Core', 'Angular', 'PostgreSQL', 'AWS (Lambda, RDS, EC2)', 'Docker', 'CI/CD'],
    outcomes: [
      'Delivered MVP in 2 months enabling $50K/year client expansion',
      'Reduced AWS costs by 40%',
      'Achieved 99.9% uptime'
    ],
    priority: 1
  },
  {
    id: 'cholpori-edtech',
    title: 'EdTech Digital Learning Platform',
    company: 'CholPori',
    role: 'Technical Lead & Project Manager',
    challenge: 'Rescue delayed project and deliver comprehensive kid-friendly education platform',
    solution: 'Restructured team workflows with defined roles and responsibilities, implemented daily standups with assigned accountability partners, designed real-time content delivery systems with shared success metrics.',
    techStack: ['.NET Core', 'Angular', 'Firebase', 'SignalR', 'AWS', 'Docker'],
    outcomes: [
      'Recovered 3-month delay',
      'Built drag-and-drop lesson builder reducing content creation time by 70%',
      'Real-time insights adopted by 100+ educators'
    ],
    priority: 2
  },
  {
    id: 'jeeon-healthcare',
    title: 'Healthcare Payments & Medicine Ordering System',
    company: 'Jeeon Bangladesh',
    role: 'Senior Software Engineer',
    challenge: 'Enable medicine ordering for users without reliable internet connectivity',
    solution: 'Designed SMS-based offline-first ordering system with automated payment integration',
    techStack: ['Node.js', '.NET Core', 'Kotlin', 'Angular', 'Firebase', 'Socket.IO'],
    outcomes: [
      'Reached 500+ active users within 2 months',
      'Increased DAU by 55%',
      'Established reputation as reliable eHealth solution provider'
    ],
    priority: 3
  }
];

export const getTopAchievements = (count: number = 3): Achievement[] => {
  return [...achievements]
    .sort((a, b) => (a.priority || 999) - (b.priority || 999))
    .slice(0, count);
};
