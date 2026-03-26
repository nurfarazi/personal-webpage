/**
 * Tools & Methods Data
 * Centralized data source for skills, tools, and technologies
 * Following best practices with separated concerns and single source of truth
 */

export interface Skill {
  name: string;
  years?: string;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  title: string;
  description: string;
  color: string;
  icon: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend & UI",
    description: "Modern web interfaces and interactive experiences",
    color: "#00D9FF",
    icon: "⚛️",
    skills: [
      { name: "Angular", years: "8 yrs", highlight: true },
      { name: "RxJS", years: "4 yrs" },
      { name: "TypeScript", years: "6 yrs", highlight: true },
      { name: "Bootstrap" },
      { name: "SCSS" },
      { name: "HTML5" },
      { name: "Responsive Design" },
    ],
  },
  {
    id: "backend",
    title: "Backend",
    description: "Scalable server architecture and APIs",
    color: "#00B4DC",
    icon: "🔧",
    skills: [
      { name: ".NET Core", years: "8 yrs", highlight: true },
      { name: "Node.js", years: "8 yrs" },
      { name: "WebSocket" },
      { name: "SignalR" },
    ],
  },
  {
    id: "mobile",
    title: "Mobile",
    description: "Cross-platform mobile applications",
    color: "#10B981",
    icon: "📱",
    skills: [
      { name: "Flutter", years: "1 yr" },
      { name: "Ionic", years: "5 yrs" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    description: "Data storage and retrieval systems",
    color: "#F59E0B",
    icon: "🗄️",
    skills: [
      { name: "PostgreSQL", years: "6 yrs" },
      { name: "Redis", years: "6 yrs" },
      { name: "MongoDB", years: "4 yrs" },
      { name: "MySQL", years: "5 yrs" },
      { name: "DynamoDB", years: "1 yr" },
    ],
  },
  {
    id: "devops",
    title: "Cloud & DevOps",
    description: "Infrastructure and deployment automation",
    color: "#EF4444",
    icon: "☁️",
    skills: [
      { name: "AWS", years: "10 yrs", highlight: true },
      { name: "Lambda, EC2, SAM, Route 53, RDS" },
      { name: "Firebase", years: "7 yrs" },
      { name: "Docker" },
      { name: "CI/CD" },
    ],
  },
  {
    id: "architecture",
    title: "Architecture & Patterns",
    description: "Design principles and system patterns",
    color: "#8B5CF6",
    icon: "🏗️",
    skills: [
      { name: "Clean Architecture" },
      { name: "CQRS" },
      { name: "Hexagonal" },
      { name: "SOLID" },
      { name: "Microservices", highlight: true },
      { name: "gRPC" },
    ],
  },
  {
    id: "ai",
    title: "AI & Automation",
    description: "Intelligent systems and workflow automation",
    color: "#EC4899",
    icon: "🤖",
    skills: [
      { name: "ChatBot" },
      { name: "Invoice Automation" },
      { name: "Workflow Automation" },
    ],
  },
  {
    id: "collaboration",
    title: "Project & Collaboration",
    description: "Tools for team coordination and delivery",
    color: "#06B6D4",
    icon: "🤝",
    skills: [
      { name: "Jira" },
      { name: "YouTrack" },
      { name: "GitLab Board" },
      { name: "GitHub" },
      { name: "GitLab" },
      { name: "Figma" },
      { name: "Miro" },
    ],
  },
  {
    id: "agile",
    title: "Agile Practices",
    description: "Proven methodologies for delivery",
    color: "#14B8A6",
    icon: "⚡",
    skills: [
      { name: "Scrum" },
      { name: "Kanban" },
      { name: "Sprint Planning" },
      { name: "Backlog Grooming" },
    ],
  },
  {
    id: "other",
    title: "Other",
    description: "Additional specialized skills",
    color: "#A78BFA",
    icon: "✨",
    skills: [
      { name: "SignalR" },
      { name: "TDD" },
      { name: "Technical Writing" },
      { name: "Documentation Systems" },
    ],
  },
];

/**
 * Helper function to parse years from string
 * @param yearsStr - String like "8 yrs" or "4 yrs"
 * @returns Number of years or null
 */
export const parseYears = (yearsStr: string | undefined): number | null => {
  if (!yearsStr) return null;
  const match = yearsStr.match(/(\d+)/);
  return match ? parseInt(match[1], 10) : null;
};

/**
 * Get all unique years for statistics
 * @returns Array of unique year values
 */
export const getAllYears = (): number[] => {
  const years = new Set<number>();
  skillCategories.forEach((category) => {
    category.skills.forEach((skill) => {
      const year = parseYears(skill.years);
      if (year) years.add(year);
    });
  });
  return Array.from(years).sort((a, b) => b - a);
};

/**
 * Get category by ID
 * @param id - Category ID
 * @returns SkillCategory or undefined
 */
export const getCategoryById = (id: string): SkillCategory | undefined => {
  return skillCategories.find((cat) => cat.id === id);
};

/**
 * Get all highlighted skills across all categories
 * @returns Array of highlighted skills with their category color
 */
export const getHighlightedSkills = (): Array<Skill & { color: string }> => {
  const highlighted: Array<Skill & { color: string }> = [];
  skillCategories.forEach((category) => {
    category.skills.forEach((skill) => {
      if (skill.highlight) {
        highlighted.push({ ...skill, color: category.color });
      }
    });
  });
  return highlighted;
};
