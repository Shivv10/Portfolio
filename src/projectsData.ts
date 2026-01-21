// src/projectsData.ts

export interface Project {
  id: number;
  title: string;
  desc: string;
  details: string;
  tags: string[];
  link: string;
  color: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "SmartSpend",
    desc: "AI-powered finance manager with Gemini receipt scanning.",
    details: "A modern expense tracker built with Next.js and Tailwind. It uses Google Gemini AI to extract data from receipt images automatically and Inngest workflows to generate financial insights and charts.",
    tags: ["Next.js", "TypeScript", "Inngest", "Tailwind", "Gemini AI"],
    link: "https://github.com/Shivv10/smartspend",
    color: "from-emerald-400 to-green-600"
  },
  {
    id: 2,
    title: "FitTrack Mobile",
    desc: "Android app for calorie tracking and exercise management.",
    details: "An Android application designed for health-conscious users to track nutrition and fitness. Features user authentication, unit/UI testing with Espresso, and a clean interface for daily logging.",
    tags: ["Android", "Java", "Espresso", "Gradle"],
    link: "https://github.com/Shivv10/Fittrack",
    color: "from-cyan-400 to-blue-500"
  },
  {
    id: 3,
    title: "Credit Fraud Detection",
    desc: "ML pipeline detecting fraud in imbalanced datasets.",
    details: "A complete machine learning pipeline using SMOTE for sampling and XGBoost/LightGBM for classification. Includes Monte Carlo cross-validation and extensive performance visualization (ROC/AUC, F1).",
    tags: ["Python", "ML", "XGBoost", "SMOTE"],
    link: "https://github.com/Shivv10/credit-card-fraud",
    color: "from-red-500 to-rose-600"
  },
  {
    id: 4,
    title: "Horizon SaaS",
    desc: "Banking platform connecting real accounts via Plaid.",
    details: "A financial SaaS connecting to multiple bank accounts using Plaid and Dwolla. Supports real-time transaction updates, funds transfer between users, and SSR authentication.",
    tags: ["Next.js", "TypeScript", "Plaid", "Appwrite"],
    link: "https://github.com/Shivv10/Banking-Self",
    color: "from-indigo-500 to-violet-600"
  },
  {
    id: 5,
    title: "Cloud & DevOps",
    desc: "Infrastructure automation with Docker and AWS.",
    details: "My workflow for deploying applications. I use Docker for containerization to ensure consistency and AWS (EC2, S3) for scalable hosting, managed via CI/CD pipelines.",
    tags: ["AWS", "Docker", "CI/CD", "DevOps"],
    link: "#",
    color: "from-orange-400 to-yellow-500"
  },
  {
    id: 6,
    title: "Winnipeg Transport DB",
    desc: "CLI tool for querying city transit data via SQL.",
    details: "A Java-based Controller interface interacting with a SQLite database. Features optimized queries for analyzing bus transit performance and traffic stats, reducing execution time by 40%.",
    tags: ["Java", "SQL", "CLI", "Optimization"],
    link: "https://github.com/Shivv10/Winnipeg-Transport-Database",
    color: "from-amber-400 to-orange-500"
  },
  {
    id: 7,
    title: "TreeDrive Server",
    desc: "Stateful file-sharing server operating over TCP.",
    details: "A custom file-sharing system that does not use HTTP. Handles multiple clients concurrently using 'select', supports PUSH/GET/LIST commands, and maintains persistent metadata.",
    tags: ["Python", "TCP/IP", "Systems", "Socket"],
    link: "https://github.com/Shivv10/File-Sharing-Server",
    color: "from-slate-400 to-gray-600"
  },
  {
    id: 8,
    title: "Event-Driven Sim",
    desc: "Supermarket queue simulation using priority queues.",
    details: "A C++ simulation modeling customer flow and cashier service times. Uses a priority queue to process chronological events dynamically rather than time-stepping.",
    tags: ["C++", "Algorithms", "Simulation", "OOD"],
    link: "https://github.com/Shivv10/Supermarket-Sim",
    color: "from-pink-500 to-rose-500"
  },
  {
    id: 9,
    title: "Stock Market Sim",
    desc: "Real-time trading simulation and trend analysis.",
    details: "Java application allowing users to trade stocks based on simulated price fluctuations. Includes tools for technical analysis like RSI and Moving Averages with persistent portfolio storage.",
    tags: ["Java", "Finance", "Analysis", "OOP"],
    link: "https://github.com/Shivv10/Stock-Market-Simulation",
    color: "from-teal-400 to-emerald-600"
  },
  {
    id: 10,
    title: "Luxury EVs UX/UI",
    desc: "HCI-focused e-commerce interface prototype.",
    details: "A vertical web prototype for a luxury electric vehicle brand. Developed based on user research, interviews, and low-fidelity storyboards to optimize Human-Computer Interaction.",
    tags: ["HCI", "UX Design", "HTML/CSS", "Research"],
    link: "https://github.com/Shivv10/Luxury-EVs-Interface",
    color: "from-fuchsia-500 to-purple-600"
  },
  {
    id: 11,
    title: "Terminal Chess",
    desc: "Playable chess engine running in the terminal.",
    details: "A simplified game of chess developed in Java. Features a built-in engine that calculates valid moves and game logic, all rendered via a text-based terminal interface.",
    tags: ["Java", "Game Dev", "Terminal", "Logic"],
    link: "https://github.com/Shivv10/ChessTerminal",
    color: "from-gray-500 to-slate-700"
  },
  {
    id: 12,
    title: "DSA Solutions",
    desc: "Collection of complex algorithmic problems in Java.",
    details: "A repository of coursework and challenges solving various Data Structures and Algorithms problems. Focuses on time complexity, memory efficiency, and clean code structure.",
    tags: ["Java", "DSA", "Algorithms", "CS"],
    link: "https://github.com/Shivv10/DSA-Java",
    color: "from-blue-400 to-indigo-500"
  }
];