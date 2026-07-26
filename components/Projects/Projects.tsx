"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import BorderGlow from "../BorderGlow";
import "./Projects.css";

const projects = [
  {
    title: "Hotel Booking Platform",
    image: "/hotel.png",
    description: "BookingLK is a modern full-stack hotel booking web application that enables users to explore and book hotels across Sri Lanka. The platform features hotel search, detailed property listings, real-time booking, and email confirmation for reservations. Built with Next.js, React, and TypeScript, the application uses MongoDB Atlas as the database and Next.js API Routes for backend services. The interface is designed with Tailwind CSS, CSS Modules, and Framer Motion to provide a responsive and engaging user experience.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    github: "https://github.com/Zashiyh/bookinglkapi",
    demo: "https://hotel-booking-demo.vercel.app"
  },
  {
    title: "Traveler App",
    image: "/traveler.png",
    description: "Traveler is a modern travel social media mobile application developed using Android Studio and Jetpack Compose. The app allows users to share travel experiences, upload photos, explore destinations, and interact with other travelers. It features Firebase Authentication, Firebase Realtime Database, image uploading, user profiles, and a clean Material Design interface, providing a seamless and engaging travel community experience.",
    tech: ["Android", "Jetpack Compose", "Firebase", "Kotlin"],
    github: "https://github.com/Zashiyh/Traveler1",
    demo: "https://traveler-demo.vercel.app"
  },
  {
    title: "IntelliChat AI",
    image: "/chatbot.png",
    description: "IntelliChat AI is an intelligent AI-powered chatbot web application developed using React, TypeScript, Tailwind CSS, FastAPI, Python, and MongoDB. The application enables users to interact with an AI assistant through a modern chat interface, supporting real-time conversations, file attachments, and secure message storage. It provides a fast, responsive, and user-friendly experience for AI-powered communication.",
    tech: ["React", "FastAPI", "MongoDB", "Gemini AI"],
    github: "https://github.com/Zashiyh/ChatBot",
    demo: "https://intellichat-demo.vercel.app"
  },
  {
    title: "Gamer Zone",
    image: "/gamerzone.png",
    description: "GamerZone is a responsive game selling web application developed using HTML, CSS, PHP, and MySQL. The platform allows users to browse and purchase games through an intuitive interface, while administrators can manage game listings, categories, and customer orders. The system provides a secure and user-friendly online game store experience.",
    tech: ["HTML", "php", "CSS", "MYSQL"],
    github: "https://github.com/your-username/gamer-zone",
    demo: "https://gamerzone-demo.vercel.app"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.div
        className="projects-container"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My <span>Projects</span>
        </motion.h2>

        <div className="project-grid">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <BorderGlow
                edgeSensitivity={35}
                glowColor="40 80 80"
                backgroundColor="rgba(255,255,255,0.05)"
                borderRadius={24}
                glowRadius={50}
                glowIntensity={1.2}
                coneSpread={25}
                animated={false}
                colors={['#4cc9f0', '#2563eb', '#f72585']}
                fillOpacity={0.3}
                glassEffect={true}
                glassBlur={20}
                glassOpacity={0.10}
              >
                <div className={`project-card ${index % 2 === 1 ? 'project-card-reverse' : ''}`}>
                  {/* Image Section - Left */}
                  <div className="project-image-wrapper">
                    <div className="project-image">
                      <img
                        src={project.image}
                        alt={project.title}
                        onError={(e) => {
                          e.currentTarget.src = `https://via.placeholder.com/600x400/0a0a1a/4cc9f0?text=${project.title}`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Content Section - Right */}
                  <div className="project-content-wrapper">
                    <div className="project-content">
                      <div className="project-number">0{index + 1}</div>
                      <h3>{project.title}</h3>
                      <p>{project.description}</p>

                      <div className="tech">
                        {project.tech.map((item, i) => (
                          <span key={i}>{item}</span>
                        ))}
                      </div>

                      <div className="project-links">
                        <a 
                          href={project.github} 
                          className="github-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaGithub /> Code
                        </a>
                        <a 
                          href={project.demo} 
                          className="demo-link"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <FaExternalLinkAlt /> Live Demo
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}