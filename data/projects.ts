import { Project } from "@/types/project";

export const projects: Project[] = [
  {
    id: "1",
    slug: "smart-irrigation-system",
    team: ["Ahmed Ali", "Tarek Fayek"],
    teamAr: ["أحمد علي", "طارق فايق"],

    supervisor: "Mr. Hassan",
    supervisorAr: "أ. حسن",
    image: "/projects/project-1.png",
    featured: true,
    en: {
      title: "Fire fighter robot",
      category: "Engineering",
      grade: "Grade 11",
      shortDescription: "A robot can detect and extinguish fire.",
      fullDescription:
        "This project focuses on building a robot that can detect fire and help extinguish it efficiently in dangerous situations.",
      tags: ["Sensors", "Sustainability"],
    },
    ar: {
      title: "روبوت مكافحة الحرائق",
      category: "الهندسة",
      grade: "الصف الحادي عشر",
      shortDescription: "روبوت يستطيع اكتشاف الحريق والمساعدة في إطفائه.",
      fullDescription:
        "يركز هذا المشروع على تصميم روبوت يستطيع اكتشاف الحرائق والمساعدة في إخمادها بكفاءة في المواقف الخطرة.",
      tags: ["حساسات", "استدامة"],
    },
  },
  {
    id: "2",
    slug: "ai-sign-language-assistant",
    team: ["Youssef Samy", "Omar Khaled"],
    teamAr: ["يوسف سامي", "عمر خالد"],

    supervisor: "Mr. Adel",
    supervisorAr: "أ. عادل",
    image: "/projects/project-2.png",
    featured: true,
    en: {
      title: "Smart light system",
      category: "Engineering",
      grade: "Grade 12",
      shortDescription: "Smart light system to save power.",
      fullDescription:
        "This project presents a smart lighting system that reduces electricity consumption by controlling lights efficiently.",
      tags: ["Energy", "Sensors", "Sustainability"],
    },
    ar: {
      title: "نظام إضاءة ذكي",
      category: "الهندسة",
      grade: "الصف الثاني عشر",
      shortDescription: "نظام إضاءة ذكي لتوفير الطاقة.",
      fullDescription:
        "يقدم هذا المشروع نظام إضاءة ذكي يهدف إلى تقليل استهلاك الكهرباء من خلال التحكم الفعال في الإضاءة.",
      tags: ["طاقة", "حساسات", "استدامة"],
    },
  },
  {
    id: "3",
    slug: "renewable-energy-monitor",
    team: ["Nour Hossam", "Ali Mostafa"],
    teamAr: ["نور حسام", "علي مصطفي"],

    supervisor: "Mr. Mohamed",
    supervisorAr: "أ. محمد",
    image: "/projects/project-3.png",
    featured: true,
    en: {
      title: "Rain alarm",
      category: "Science",
      grade: "Grade 10",
      shortDescription: "A project for detecting rain.",
      fullDescription:
        "This project is designed to detect rainfall and alert users quickly to help protect outdoor spaces and equipment.",
      tags: ["Energy", "Data", "Environment"],
    },
    ar: {
      title: "منبّه المطر",
      category: "العلوم",
      grade: "الصف العاشر",
      shortDescription: "مشروع لاكتشاف سقوط المطر.",
      fullDescription:
        "تم تصميم هذا المشروع لاكتشاف هطول الأمطار وتنبيه المستخدمين بسرعة للمساعدة في حماية المساحات والمعدات الخارجية.",
      tags: ["طاقة", "بيانات", "بيئة"],
    },
  },
  {
    id: "4",
    slug: "smart-campus-app",
    team: ["Ahmed yousef", "Seif Emad"],
    teamAr: ["أحمد يوسف", "سيف عماد"],  

    supervisor: "Mr. Ali",
    supervisorAr: "أ. علي",
    image: "/projects/project-4.png",
    en: {
      title: "Smart Home",
      category: "Software",
      grade: "Grade 11",
      shortDescription: "A smart home with sensors and IoT control.",
      fullDescription:
        "This project demonstrates a smart home model that uses sensors and IoT technology for monitoring and control.",
      tags: ["App", "UX", "Productivity"],
    },
    ar: {
      title: "المنزل الذكي",
      category: "البرمجيات",
      grade: "الصف الحادي عشر",
      shortDescription: "منزل ذكي يحتوي على حساسات وتحكم عبر إنترنت الأشياء.",
      fullDescription:
        "يعرض هذا المشروع نموذجًا لمنزل ذكي يستخدم الحساسات وتقنيات إنترنت الأشياء للمراقبة والتحكم.",
      tags: ["تطبيق", "تجربة مستخدم", "إنتاجية"],
    },
  },
];