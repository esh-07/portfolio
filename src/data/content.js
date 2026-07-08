export const RESUME_URL = `${import.meta.env.BASE_URL}resume.pdf`;

export const LINKS = {
  github: 'https://github.com/esh-07',
  linkedin: 'https://www.linkedin.com/in/eshaan-chaturvedi-9718851a1',
  email: 'eshaanchaturvedi@gmail.com',
};

export const HERO = {
  eyebrow: 'Eshaan Chaturvedi · Portfolio 2026',
  location: 'Madison, WI',
  status: 'Incoming @ Meta, Summer 2026',
  tagline:
    'I build ML systems and infrastructure that hold up under real load, from LLM inference pipelines at Cohere to release automation at PlayStation.',
};

export const COMPANIES = ['Meta', 'Cohere', 'PlayStation', 'RIPPLR', 'Infosys'];

export const EXPERIENCE = [
  {
    company: 'Meta',
    role: 'SWE Intern (PE)',
    period: 'Summer 2026',
    status: 'Incoming',
    summary: 'Production engineering: infrastructure reliability and performance at global scale.',
    details: [
      'Production engineering: the discipline of keeping infrastructure reliable, fast, and efficient at global scale',
      'Focus areas: infrastructure, reliability, performance',
      'Starts Summer 2026; team placement to be confirmed',
    ],
    tags: ['Infrastructure', 'Reliability', 'Performance'],
  },
  {
    company: 'Cohere',
    role: 'Software Engineer Intern',
    period: '2025-2026',
    summary:
      'Foundational LLM inference team. Built benchmarking infrastructure measuring latency and throughput across major LLM providers, with automated deployment pipelines and statistical regression monitoring.',
    details: [
      'Foundational LLM inference team',
      'Built benchmarking infrastructure measuring inference latency and throughput across major LLM providers',
      'Thousands of benchmark requests weekly, with cache-hit detection to keep results honest',
      'Automated deployment pipelines for the benchmarking stack',
      'Statistical regression monitoring: rolling-median anomaly detection to catch performance drift',
    ],
    tags: ['Python', 'AWS', 'LLM Inference', 'CI/CD'],
  },
  {
    company: 'PlayStation',
    role: 'Software Engineer Intern',
    period: 'Summer 2025',
    summary:
      'Developer infrastructure at Sony Interactive Entertainment. Shipped automated release pipelines (conventional commits, Docker builds, Helm deploys) across hundreds of production repositories used by thousands of engineers.',
    details: [
      'Developer infrastructure at Sony Interactive Entertainment',
      'Shipped end-to-end automated release pipelines: version numbers derived from conventional commits, Docker image builds, Helm chart deployments',
      'Rolled out across hundreds of production repositories used by thousands of engineers',
      'Cut deploy times for teams across the organization',
    ],
    tags: ['Docker', 'GitHub Actions', 'Python'],
  },
  {
    company: 'RIPPLR',
    role: 'Software Engineer Intern',
    period: '2024',
    summary:
      'Real-time dashboards and high-performance backend systems focused on low-latency data processing.',
    details: [
      'Built real-time dashboards over live operational data',
      'High-performance backend systems focused on low-latency data processing',
      'React and Node.js across the stack',
    ],
    tags: ['React', 'Node.js', 'Real-time Systems'],
  },
  {
    company: 'Infosys',
    role: 'Software Engineer Intern',
    period: '2023',
    summary: 'Web applications and REST APIs for fintech use cases.',
    details: [
      'Web applications and REST APIs for fintech use cases',
      'Java-based services and integrations',
    ],
    tags: ['Java', 'REST APIs', 'Fintech'],
  },
];

export const PROJECTS = [
  {
    title: 'QuantFlow',
    kind: 'Systems / Quant',
    description:
      'Real-time options pricing and risk engine in C++: Black-Scholes and Monte Carlo models computing Greeks across large position sets with parallel processing, built for sub-microsecond hot paths.',
    details: [
      'Real-time options pricing and risk engine written in C++',
      'Black-Scholes and Monte Carlo pricing models computing Greeks across large position sets',
      'Parallel processing, built for sub-microsecond hot paths',
      'Python tooling around the core engine',
    ],
    tags: ['C++', 'Python', 'Monte Carlo', 'Low Latency'],
    link: 'https://github.com/esh-07',
    linkLabel: 'GitHub',
  },
  {
    title: 'AstroClassifier',
    kind: 'Machine Learning',
    description:
      'Deep learning system predicting space debris trajectories from live NASA orbital data, with a distributed inference pipeline for low-latency collision detection. Presented at the national round of Regeneron ISEF and published in IJSHR.',
    details: [
      'Deep learning system predicting space debris trajectories from live NASA orbital data',
      'Distributed inference pipeline for low-latency collision detection',
      'Presented at the national round of Regeneron ISEF; published in IJSHR',
    ],
    tags: ['TensorFlow', 'Python', 'NASA APIs', 'Distributed Inference'],
    link: 'https://github.com/esh-07',
    linkLabel: 'GitHub',
  },
  {
    title: 'LLM Inference Benchmarking',
    kind: 'ML Infrastructure · built at Cohere',
    description:
      'Automated benchmarking system measuring inference latency and throughput across major LLM providers: thousands of requests weekly, cache-hit detection, and rolling-median regression monitoring for anomaly detection.',
    details: [
      'Automated benchmarking measuring inference latency and throughput across major LLM providers',
      'Thousands of requests weekly, with cache-hit detection',
      'Rolling-median regression monitoring for anomaly detection',
      'Built at Cohere on Python, AWS, GitHub Actions, and GCS',
    ],
    tags: ['Python', 'AWS', 'GitHub Actions', 'GCS'],
  },
  {
    title: 'Release Automation at Scale',
    kind: 'Developer Infrastructure · built at PlayStation',
    description:
      'End-to-end automated release pipelines (versioning from conventional commits, Docker image builds, and Helm chart deployments) rolled out across hundreds of production repositories, cutting deploy times for thousands of engineers.',
    details: [
      'End-to-end automated release pipelines: conventional-commit versioning, Docker image builds, Helm chart deployments',
      'Rolled out across hundreds of production repositories',
      'Cut deploy times for thousands of engineers',
      'Built at PlayStation',
    ],
    tags: ['Docker', 'GitHub Actions', 'Helm', 'Python'],
  },
  {
    title: 'PixelForge',
    kind: 'Full-Stack · Co-founder',
    description:
      'Co-founded and built a data-driven platform from zero: real-time features over WebRTC, a TensorFlow-powered personalization engine, and a backend handling tens of thousands of concurrent sessions at sub-50ms latency.',
    details: [
      'Co-founded and built a data-driven platform from zero',
      'Real-time features over WebRTC',
      'TensorFlow-powered personalization engine',
      'Backend handling tens of thousands of concurrent sessions at sub-50ms latency',
    ],
    tags: ['React', 'Node.js', 'TensorFlow', 'MongoDB', 'AWS'],
    link: 'https://github.com/esh-07',
    linkLabel: 'GitHub',
  },
];

export const SKILLS = [
  {
    label: 'Languages',
    items: ['C++', 'Python', 'Java', 'TypeScript', 'JavaScript', 'SQL', 'Go', 'R'],
  },
  {
    label: 'ML & Data',
    items: ['PyTorch', 'TensorFlow', 'NumPy', 'Pandas', 'SciPy'],
  },
  {
    label: 'Infrastructure',
    items: ['AWS', 'Docker', 'GitHub Actions', 'PostgreSQL', 'MongoDB', 'Redis'],
  },
  {
    label: 'Web & Systems',
    items: ['React', 'Node.js', 'REST APIs', 'WebRTC', 'Linux'],
  },
];

export const FACTS = [
  { value: 5, label: 'internships' },
  { value: 3.9, decimals: 1, suffix: ' / 4.0', label: 'GPA at UW-Madison' },
  { value: 2, suffix: 'x', label: 'big tech teams' },
  { value: 2027, plain: true, label: 'graduating May' },
];

export const EDUCATION = {
  school: 'University of Wisconsin-Madison',
  degree: 'B.S. Computer Science & Data Science',
  period: 'Expected May 2027',
  detail:
    'Coursework: Machine Learning, Artificial Intelligence, Computer Systems, Data Structures & Algorithms, Linear Algebra, Advanced Statistics.',
};
