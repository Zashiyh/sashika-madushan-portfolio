"use client";

import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import BorderGlow from "../BorderGlow";
import "./Projects.css";

const projects = [
  {
    title: "Hotel Booking Platform",
    image: "/hotel.png",
    description: "BookingLK is a full-stack hotel booking platform for discovering and reserving hotels across Sri Lanka. It is built using Next.js, React, and TypeScript, with MongoDB Atlas for data storage, Next.js API Routes for backend functionality, and Nodemailer for automated booking confirmation emails. The UI is fully responsive and enhanced with Tailwind CSS, CSS Modules, and Framer Motion.",
    tech: ["Next.js", "TypeScript", "MongoDB", "Tailwind"],
    github: "#",
    demo: "#"
  },
  {
    title: "Traveler App",
    image: "/traveler.png",
    description: "A travel social media application where users can share travel experiences and photos.",
    tech: ["Android", "Jetpack Compose", "Firebase", "Kotlin"],
    github: "#",
    demo: "#"
  },
  {
    title: "IntelliChat AI",
    image: "/chatbot.png",
    description: "AI chatbot application with modern chat interface and backend API integration.",
    tech: ["React", "FastAPI", "MongoDB", "Gemini AI"],
    github: "#",
    demo: "#"
  },
  {
    title: "Gamer Zone",
    image: "/gamerzone.png",
    description: "game selling website ubisoft, rockstar and EA games",
    tech: ["HTML", "php", "CSS", "MYSQL"],
    github: "#",
    demo: "#"
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
                        <a href={project.github} className="github-link">
                          <FaGithub /> Code
                        </a>
                        <a href={project.demo} className="demo-link">
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