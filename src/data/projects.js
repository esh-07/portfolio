const projects = [
  {
    id: 1,
    title: "AI-Powered Study Planner",
    shortDescription: "A smart study scheduler that uses ML to optimize your study sessions based on learning patterns.",
    fullDescription: "Built a full-stack study planner that analyzes student learning patterns using machine learning models. The app tracks study habits, predicts optimal study times, and generates personalized schedules. Features include spaced repetition integration, progress tracking dashboards, and collaborative study group management.",
    techStack: ["Python", "React", "Flask", "TensorFlow", "PostgreSQL"],
    category: "ML",
    github: "https://github.com/esh-07",
    liveDemo: "",
    images: [
      "https://placehold.co/800x450/2563eb/ffffff?text=Study+Planner+Dashboard",
      "https://placehold.co/800x450/7c3aed/ffffff?text=Analytics+View"
    ]
  },
  {
    id: 2,
    title: "Real-Time Chat Application",
    shortDescription: "A WebSocket-based chat app with rooms, typing indicators, and message reactions.",
    fullDescription: "Developed a real-time messaging platform using WebSockets. Users can create and join chat rooms, see typing indicators, react to messages with emojis, and share files. The app features end-to-end message delivery confirmation, user presence tracking, and a responsive mobile-first design.",
    techStack: ["React", "Node.js", "Socket.io", "MongoDB"],
    category: "Frontend",
    github: "https://github.com/esh-07",
    liveDemo: "https://esh-07.github.io",
    images: [
      "https://placehold.co/800x450/059669/ffffff?text=Chat+Interface",
      "https://placehold.co/800x450/0891b2/ffffff?text=Room+Selection"
    ]
  },
  {
    id: 3,
    title: "Unix Shell Implementation",
    shortDescription: "A custom Unix shell built from scratch in C with piping, redirection, and job control.",
    fullDescription: "Implemented a fully functional Unix shell in C that supports command execution, piping between processes, I/O redirection, environment variable management, and basic job control (foreground/background processes). The shell handles signal management, built-in commands (cd, exit, history), and wildcard expansion.",
    techStack: ["C", "Linux", "Make"],
    category: "Systems",
    github: "https://github.com/esh-07",
    liveDemo: "",
    images: [
      "https://placehold.co/800x450/dc2626/ffffff?text=Shell+Demo",
      "https://placehold.co/800x450/ea580c/ffffff?text=Piping+Example"
    ]
  },
  {
    id: 4,
    title: "E-Commerce REST API",
    shortDescription: "A scalable RESTful API for an e-commerce platform with auth, payments, and inventory management.",
    fullDescription: "Designed and built a RESTful API for an e-commerce platform. Features include JWT-based authentication, role-based access control, Stripe payment integration, inventory management with real-time stock updates, order processing pipeline, and comprehensive API documentation with Swagger. Includes rate limiting and request validation middleware.",
    techStack: ["Node.js", "Express", "PostgreSQL", "Redis", "Docker"],
    category: "Backend",
    github: "https://github.com/esh-07",
    liveDemo: "",
    images: [
      "https://placehold.co/800x450/7c3aed/ffffff?text=API+Documentation",
      "https://placehold.co/800x450/6d28d9/ffffff?text=Architecture+Diagram"
    ]
  },
  {
    id: 5,
    title: "Sentiment Analysis Dashboard",
    shortDescription: "NLP-powered dashboard that analyzes sentiment from social media posts and reviews.",
    fullDescription: "Created a sentiment analysis tool that processes text data from social media APIs and product reviews. Uses natural language processing to classify sentiment as positive, negative, or neutral with confidence scores. The dashboard visualizes trends over time, generates word clouds, and supports batch processing of CSV uploads.",
    techStack: ["Python", "scikit-learn", "Flask", "D3.js", "NLTK"],
    category: "ML",
    github: "https://github.com/esh-07",
    liveDemo: "",
    images: [
      "https://placehold.co/800x450/be185d/ffffff?text=Sentiment+Dashboard",
      "https://placehold.co/800x450/9d174d/ffffff?text=Word+Cloud"
    ]
  },
  {
    id: 6,
    title: "Task Management Board",
    shortDescription: "A Kanban-style project board with drag-and-drop, labels, and team collaboration.",
    fullDescription: "Built a project management application inspired by Trello. Features include drag-and-drop card organization across customizable columns, label and priority tagging, due date tracking with reminders, team member assignment, activity logs, and board-level analytics. Supports multiple boards per user with archiving capabilities.",
    techStack: ["React", "Java", "Spring Boot", "MySQL"],
    category: "Frontend",
    github: "https://github.com/esh-07",
    liveDemo: "https://esh-07.github.io",
    images: [
      "https://placehold.co/800x450/0284c7/ffffff?text=Kanban+Board",
      "https://placehold.co/800x450/0369a1/ffffff?text=Card+Detail+View"
    ]
  },
  {
    id: 7,
    title: "Memory Allocator",
    shortDescription: "A custom heap memory allocator implementing malloc, free, and realloc in C.",
    fullDescription: "Implemented a dynamic memory allocator as part of a systems programming course. The allocator uses a segregated free list strategy with immediate coalescing for reduced fragmentation. Supports malloc, calloc, realloc, and free operations. Achieved high throughput and memory utilization scores on benchmark tests. Includes debugging utilities for heap consistency checking.",
    techStack: ["C", "Linux", "GDB", "Make"],
    category: "Systems",
    github: "https://github.com/esh-07",
    liveDemo: "",
    images: [
      "https://placehold.co/800x450/b91c1c/ffffff?text=Memory+Layout",
      "https://placehold.co/800x450/991b1b/ffffff?text=Benchmark+Results"
    ]
  },
  {
    id: 8,
    title: "Weather Forecast App",
    shortDescription: "A weather app with 7-day forecasts, location search, and interactive radar maps.",
    fullDescription: "Developed a weather application that fetches real-time data from the OpenWeatherMap API. Features include current conditions display, 7-day forecasts with hourly breakdowns, location search with autocomplete, interactive radar maps, severe weather alerts, and the ability to save favorite locations. The app supports geolocation for automatic local weather detection.",
    techStack: ["React", "CSS", "REST API"],
    category: "Frontend",
    github: "https://github.com/esh-07",
    liveDemo: "https://esh-07.github.io",
    images: [
      "https://placehold.co/800x450/0ea5e9/ffffff?text=Weather+Dashboard",
      "https://placehold.co/800x450/06b6d4/ffffff?text=Radar+Map"
    ]
  }
];

export const categories = ["All", "Frontend", "Backend", "ML", "Systems"];

export const allTechStacks = [
  ...new Set(projects.flatMap((p) => p.techStack))
].sort();

export default projects;
