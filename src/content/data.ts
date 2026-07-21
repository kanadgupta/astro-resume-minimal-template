type Summary = {
  name: string;
  email: string;
  linkedin: string;
  github: string;
  location: {
    title: string;
    href: string;
  };
  phone: string;
  title: string;
};

type Education = {
  period: [string, string];
  institution: string;
  description: string;
};

const all = {
  summary: {
    name: 'Grace Hopper',
    email: 'grace@gracehopper.com',
    linkedin: 'gracehopper',
    github: 'gracehopper',
    location: { title: 'Arlington, VA', href: 'https://www.google.com/maps/place/Arlington,+VA/' },
    phone: '+17035550142',
    title: 'Compiler Pioneer & Rear Admiral, USN',
  },
  skills: [
    'Compiler Design',
    'A-0 System',
    'FLOW-MATIC',
    'COBOL',
    'Machine Code',
    'Assembly',
    'Symbolic Notation',
    'Subroutine Libraries',
    'Harvard Mark I',
    'Harvard Mark II',
    'UNIVAC I',
    'Punched Cards',
    'Magnetic Tape',
    'Data Processing',
    'Standardization (ANSI / DoD)',
    'Numerical Analysis',
    'Linear Algebra',
    'Calculus',
    'Differential Equations',
    'Probability',
    'Debugging',
    'Technical Writing',
    // 'Public Speaking',
    // 'Lecturing',
    // 'Naval Leadership',
  ],
  education: [
    {
      period: ['Sep 1924', 'Jun 1928'],
      institution: 'Vassar College',
      description: 'Bachelor of Arts, Mathematics and Physics',
    },
    {
      period: ['Sep 1930', 'Jun 1934'],
      institution: 'Yale University',
      description: 'Doctor of Philosophy, Mathematics',
    },
  ],
} as const satisfies {
  summary: Summary;
  skills: string[];
  education: Education[];
};

export default all;
