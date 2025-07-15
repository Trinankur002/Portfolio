export interface Skill {
  name: string;
  level: number; // 1-5 scale
  icon?: string; // SVG icon string or path
  category: 'frontend' | 'backend' | 'mobile' | 'database' | 'devops' | 'tools' | 'languages';
}

export const SkillsData: Skill[] = [
  // Frontend Skills
  {
    name: 'React',
    level: 4,
    category: 'frontend',
  },
  {
    name: 'JavaScript',
    level: 5,
    category: 'frontend',
  },
  {
    name: 'TypeScript',
    level: 4,
    category: 'frontend',
  },
  {
    name: 'HTML/CSS',
    level: 4,
    category: 'frontend',
  },
  {
    name: 'Tailwind CSS',
    level: 4,
    category: 'frontend',
  },
  {
    name: 'Vite',
    level: 3,
    category: 'frontend',
  },

  // Backend Skills (Your Specialty!)
  {
    name: 'Node.js',
    level: 5,
    category: 'backend',
  },
  {
    name: 'Express.js',
    level: 5,
    category: 'backend',
  },
  {
    name: 'RESTful APIs',
    level: 5,
    category: 'backend',
  },
  {
    name: 'Authentication',
    level: 4,
    category: 'backend',
  },
  {
    name: 'JWT',
    level: 4,
    category: 'backend',
  },
  {
    name: 'API Design',
    level: 4,
    category: 'backend',
  },

  // Mobile Development
  {
    name: 'React Native',
    level: 4,
    category: 'mobile',
  },
  {
    name: 'Kotlin',
    level: 4,
    category: 'mobile',
  },
  {
    name: 'Android Development',
    level: 4,
    category: 'mobile',
  },
  {
    name: 'Jetpack Compose',
    level: 3,
    category: 'mobile',
  },
  {
    name: 'Cross-Platform',
    level: 4,
    category: 'mobile',
  },

  // Database
  {
    name: 'MongoDB',
    level: 5,
    category: 'database',
  },
  {
    name: 'SQL',
    level: 3,
    category: 'database',
  },
  {
    name: 'Database Design',
    level: 4,
    category: 'database',
  },
  {
    name: 'Data Modeling',
    level: 4,
    category: 'database',
  },

  // DevOps & Tools
  {
    name: 'Git',
    level: 4,
    category: 'devops',
  },
  {
    name: 'GitHub',
    level: 4,
    category: 'devops',
  },
  {
    name: 'Version Control',
    level: 4,
    category: 'devops',
  },

  // Development Tools
  {
    name: 'VS Code',
    level: 5,
    category: 'tools',
  },
  {
    name: 'Postman',
    level: 4,
    category: 'tools',
  },
  {
    name: 'Android Studio',
    level: 4,
    category: 'tools',
  },
  {
    name: 'NPM/Yarn',
    level: 4,
    category: 'tools',
  },

  // Programming Languages
  {
    name: 'JavaScript',
    level: 5,
    category: 'languages',
  },
  {
    name: 'TypeScript',
    level: 4,
    category: 'languages',
  },
  {
    name: 'Kotlin',
    level: 4,
    category: 'languages',
  },
  {
    name: 'Java',
    level: 3,
    category: 'languages',
  },
];

export const SkillCategories = [
  {
    id: 'frontend',
    name: 'Frontend',
    description: 'Building responsive and interactive user interfaces',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
  },
  {
    id: 'backend',
    name: 'Backend',
    description: 'Developing server-side logic and APIs',
    icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
  },
  {
    id: 'mobile',
    name: 'Mobile',
    description: 'Creating native and cross-platform mobile applications',
    icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
  },
  {
    id: 'database',
    name: 'Database',
    description: 'Managing and optimizing data storage solutions',
    icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4',
  },
  {
    id: 'devops',
    name: 'DevOps',
    description: 'Streamlining development and deployment processes',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
  },
  {
    id: 'tools',
    name: 'Tools',
    description: 'Utilizing development tools and platforms',
    icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z',
  },
  {
    id: 'languages',
    name: 'Languages',
    description: 'Programming languages I work with',
    icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
  },
];
