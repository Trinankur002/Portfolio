export interface WorkExperience {
  id: string;
  position: string;
  company: string;
  location: string;
  duration: string;
  startDate: string;
  endDate: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship' | 'volunteer';
  description: string[];
  technologies: string[];
  achievements?: string[];
  isRemote?: boolean;
}

export const CareerData: WorkExperience[] = [
  {
    id: 'omx-digital',
    position: 'Full Stack Developer',
    company: 'OMX Digital',
    location: 'Siliguri',
    duration: 'Apr 2025 - Present',
    startDate: '2025-04',
    endDate: 'present',
    type: 'full-time',
    description: [
      'Specialized in crafting robust web applications from conception to deployment.',
      'Developed dynamic front-end interfaces using React and built scalable back-end services with NestJS.',
      'Proficient in designing and managing relational databases, primarily PostgreSQL, to ensure efficient data storage and retrieval.',
      'Gained hands-on experience with Render for seamless backend deployment, ensuring applications are reliably hosted and accessible.'
    ],
    technologies: ['React', 'NestJS', 'PostgreSQL', 'Render', 'JavaScript', 'TypeScript'],
    achievements: [
      'Built scalable web applications from conception to deployment',
      'Implemented efficient database designs for optimal performance',
      'Ensured reliable application hosting and accessibility'
    ]
  },
  {
    id: 'galaxias-lab',
    position: 'Full Stack Developer',
    company: 'GalaxiasLab',
    location: 'Remote (Work from home)',
    duration: 'Mar 2024 - Feb 2025',
    startDate: '2024-03',
    endDate: '2025-02',
    type: 'full-time',
    isRemote: true,
    description: [
      'Instrumental in developing and maintaining diverse applications across the full stack.',
      'Leveraged technologies such as NestJS, ReactJS, React Native, and Java to build robust solutions.',
      'Demonstrated strong database proficiency in both SQL (PostgreSQL) and NoSQL (MongoDB).',
      'Actively contributed to UI/UX design processes using Figma, consistently delivering high-quality solutions within fast-paced project environments.'
    ],
    technologies: ['NestJS', 'ReactJS', 'React Native', 'Java', 'PostgreSQL', 'MongoDB', 'Figma'],
    achievements: [
      'Developed and maintained diverse full-stack applications',
      'Worked with both SQL and NoSQL databases effectively',
      'Contributed to UI/UX design processes',
      'Delivered high-quality solutions in fast-paced environments'
    ]
  },
  {
    id: 'google-dsc',
    position: 'Android Developer Executive',
    company: 'Google Developer Student Clubs SIT',
    location: 'Siliguri, India',
    duration: '2021 - 2022',
    startDate: '2021',
    endDate: '2022',
    type: 'volunteer',
    description: [
      'Fostered interest and knowledge in Android development among junior students, impacting a cohort of students through regular seminars.',
      'Conducted comprehensive introductions to Android development concepts, guiding juniors through practical application.',
      'Developed and demonstrated multiple projects using Kotlin, serving as hands-on examples to educate and inspire aspiring developers.'
    ],
    technologies: ['Android', 'Kotlin', 'Java', 'Android Studio'],
    achievements: [
      'Mentored junior students in Android development',
      'Conducted regular seminars and workshops',
      'Created educational projects to inspire aspiring developers',
      'Built a strong developer community within the college'
    ]
  }
];

// Helper functions for the career section
export const getCurrentPosition = (): WorkExperience | null => {
  return CareerData.find(exp => exp.endDate === 'present') || null;
};

export const getTotalExperience = (): string => {
  const startYear = Math.min(...CareerData.map(exp => parseInt(exp.startDate.split('-')[0])));
  const currentYear = new Date().getFullYear();
  const years = currentYear - startYear;
  return `${years}+ years`;
};

export const getAllTechnologies = (): string[] => {
  const allTechs = CareerData.flatMap(exp => exp.technologies);
  return [...new Set(allTechs)].sort();
};
