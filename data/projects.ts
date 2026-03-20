import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "smart-irrigation-system",
    title: "Fire fighter robot",
    category: "Engineering",
    grade: "Grade 11",
    team: ["Ahmed Ali", "Mariam Tarek", "Youssef Samy"],
    supervisor: "Mr. Hassan",
    shortDescription: "A robot can detect and extinguish fire .",
    fullDescription:
      "This project aims to reduce water waste by monitoring soil moisture and automatically controlling irrigation based on real-time data.",
    image: "/projects/project-1.png",
    tags: ["Sensors", "Sustainability"],
    featured: true,
  },
  {
    id: "2",
    slug: "ai-sign-language-assistant",
    title: "Smart light system",
    category: "Engineering",
    grade: "Grade 12",
    team: ["Salma Adel", "Omar Khaled"],
    supervisor: "Ms. Dina",
    shortDescription: "Smart light system to save the power.",
    fullDescription:
      "The project uses computer vision and machine learning to recognize sign language gestures and convert them into readable text.",
    image: "/projects/project-2.png",
    tags: ["Energy", "Sensors", "Sustainability"],
  },
  {
    id: "3",
    slug: "renewable-energy-monitor",
    title: "Rain alarm",
    category: "Science",
    grade: "Grade 10",
    team: ["Nour Hossam", "Ali Mostafa"],
    shortDescription: "A project for detcting the rain.",
    fullDescription:
      "This project analyzes the performance of renewable energy sources and visualizes the collected data for easier decision-making.",
    image: "/projects/project-3.png",
    tags: ["Energy", "Data", "Environment"],
  },
  {
    id: "4",
    slug: "smart-campus-app",
    title: "Smart Home",
    category: "Software",
    grade: "Grade 11",
    team: ["Laila Ahmed", "Seif Emad"],
    shortDescription: "A smart home comtains sensors and iot control.",
    fullDescription:
      "The app helps students navigate school services, announcements, and schedules through a unified digital platform.",
    image: "/projects/project-4.png",
    tags: ["App", "UX", "Productivity"],
  },
];