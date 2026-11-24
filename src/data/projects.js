import foodshareImg from "../images/food.png";
import chatappImg from "../images/chat.png";
import aiImg from "../images/ai.png";
import festImg from "../images/fest.png";
import flightImg from "../images/hosp.png";
import portfolioImg from "../images/port.png";

export const projects = [
  {
    id: 1,
    Img: foodshareImg,
    Title: "Food Share — Food Wastage Management Platform",
    Description:
      "A full-stack platform connecting food donors, NGOs and volunteers with real-time updates and admin dashboard management.",
    LongDescription:
      "Food Share connects food donors with NGOs and volunteers to reduce food wastage. It ships role-based dashboards, real-time status updates and an admin view for managing donations, requests and distribution — built end to end with React, Node.js and MongoDB.",
    Highlights: [
      "JWT-based authentication with role-based access control for donors, volunteers and administrators.",
      "Real-time updates and a management dashboard for tracking donations end to end.",
      "REST API layer with Express and MongoDB for donors, NGOs and delivery requests.",
    ],
    Link: "https://github.com/Harshadsshinde/Food-Bridge-",
    LiveDemo: "https://food-bridge-ashen.vercel.app/",
    Tags: ["Full-stack", "React", "Node.js"],
    Technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT"],
    Year: 2025,
  },
  {
    id: 2,
    Featured: true,
    Img: chatappImg,
    Title: "Real-Time Chat Application",
    Description:
      "Private messaging app with real-time bidirectional communication via Socket.IO, JWT authentication and a responsive UI.",
    LongDescription:
      "A chat application built for real-time conversation. Messages are delivered instantly over Socket.IO, sessions are secured with JWT, and the interface is fully responsive with React and Tailwind CSS.",
    Highlights: [
      "Real-time bidirectional messaging with Socket.IO.",
      "JWT authentication and persistent message history.",
      "Responsive UI built with React and Tailwind CSS.",
    ],
    Link: "https://github.com/Harshadsshinde/chat-app-",
    LiveDemo: "https://chat-app-n2n9.vercel.app/",
    Tags: ["Real-time", "React", "Node.js"],
    Technologies: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "JWT",
      "Tailwind CSS",
    ],
    Year: 2025,
  },
  {
    id: 3,
    Img: aiImg,
    Title: "AI Mock Interview Platform",
    Description:
      "A full-stack AI-powered mock interview system with separate frontend and backend services simulating real interview workflows.",
    LongDescription:
      "An AI mock interview platform with independent frontend and backend services. It generates interview questions and processes responses through REST APIs, giving users a structured way to practise and prepare.",
    Highlights: [
      "AI-powered question generation and response processing via REST APIs.",
      "Separate frontend and backend services for a clean, scalable architecture.",
      "End-to-end interview workflow simulation with React and Node.js.",
    ],
    Link: "https://github.com/Harshadsshinde/ai-mock-interview-",
    LiveDemo: null,
    Tags: ["AI", "Full-stack"],
    Technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "REST APIs"],
    Year: 2025,
  },
  {
    id: 4,
    Img: festImg,
    Title: "Feastables 3D Models Showcase",
    Description:
      "An interactive 3D product showcase and ecommerce interface with Framer Motion animations and fully responsive layouts.",
    LongDescription:
      "An immersive 3D product showcase built with React and Vite. Products are presented with smooth Framer Motion transitions across a responsive, ecommerce-style interface.",
    Highlights: [
      "Interactive 3D product presentation with Framer Motion.",
      "Fully responsive ecommerce-style layout.",
      "Built with React and Vite for a fast dev and build experience.",
    ],
    Link: "https://github.com/Harshadsshinde/Feastables-3D-Models-Showcase",
    LiveDemo: "https://feastables-3-d-models-showcase-zeta.vercel.app/",
    Tags: ["3D", "Interactive", "React"],
    Technologies: ["React.js", "Vite", "Tailwind CSS", "Framer Motion"],
    Year: 2025,
  },
  {
    id: 5,
    Img: flightImg,
    Title: "ZeeCare — Healthcare Appointment System",
    Description:
      "A healthcare appointment platform for booking by department and doctor, with responsive patient-facing forms.",
    LongDescription:
      "ZeeCare is a web-based healthcare appointment system. Patients browse by department and doctor and book appointments through clean, responsive forms, with media handled through Cloudinary.",
    Highlights: [
      "Appointment booking by department and doctor.",
      "Responsive, patient-facing forms with a clear booking flow.",
      "Media uploads and management integrated with Cloudinary.",
    ],
    Link: "https://github.com/Harshadsshinde/hospital-management-system-",
    LiveDemo: null,
    Tags: ["Healthcare", "Full-stack", "UI/UX"],
    Technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Cloudinary"],
    Year: 2025,
  },
  {
    id: 6,
    Img: portfolioImg,
    Title: "Personal Portfolio Website",
    Description:
      "A responsive portfolio with smooth scrolling, animated transitions and a clean design system.",
    LongDescription:
      "My portfolio, designed and built from scratch. It features interactive project displays, scroll-driven animations and a consistent design system — focused on performance and motion that guides rather than decorates.",
    Highlights: [
      "Scroll-driven animations and page transitions with Framer Motion.",
      "Responsive layout and a reusable design system.",
      "Built with React, Tailwind CSS and Vite.",
    ],
    Link: "https://github.com/Harshadsshinde/Portfolio-",
    LiveDemo: "https://portfolio-hhv9.vercel.app/",
    Tags: ["UI/UX", "React", "Animation"],
    Technologies: ["React.js", "Tailwind CSS", "Framer Motion", "Vite"],
    Year: 2025,
  },
];
