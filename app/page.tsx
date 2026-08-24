"use client";

import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    title: "Fintech Dashboard",
    description:
      "A data-driven dashboard designed for monitoring business and financial performance.",
    image: "/projects/dashboard.png",
    link: "https://example.com/dashboard",
    tag: "Data Analytics",
  },
  {
    title: "Data Pipeline Automation",
    description:
      "An automated data processing workflow for collecting, transforming and delivering reliable data.",
    image: "/projects/etl.png",
    link: "https://example.com/etl",
    tag: "Data Engineering",
  },
  {
    title: "Job & Scholarship Platform",
    description:
      "A web platform for publishing and discovering jobs and scholarship opportunities.",
    image: "/Image1.jpg",
    link: "https://example.com/chatbot",
    tag: "Web Development",
  },
];

export default function LandingPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-x-hidden selection:bg-[#1d9bf0] selection:text-white">

      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">

        {/* Subtle X-style blue glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(29,155,240,0.10),transparent_30%),radial-gradient(circle_at_80%_60%,rgba(29,155,240,0.06),transparent_30%)]" />

        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#ffffff 1px, transparent 1px), linear-gradient(90deg, #ffffff 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />

        {/* Animated blue glow 1 */}
        <motion.div
          animate={{
            x: [0, 40, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-[20%] left-[10%] w-72 h-72 rounded-full bg-[#1d9bf0]/10 blur-[120px]"
        />

        {/* Animated blue glow 2 */}
        <motion.div
          animate={{
            x: [0, -40, 0],
            y: [0, 30, 0],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-[15%] right-[10%] w-80 h-80 rounded-full bg-[#1d9bf0]/10 blur-[130px]"
        />
      </div>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section
        id="home"
        className="relative min-h-screen max-w-6xl mx-auto px-5 flex items-center py-24"
      >
        <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-16 items-center w-full">

          {/* HERO TEXT */}

          <motion.div
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.8,
            }}
          >

            {/* Available badge */}

            <motion.div
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
                duration: 0.5,
              }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-sm text-gray-400 mb-7"
            >
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

              Available for opportunities
            </motion.div>

            {/* Name */}

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-[-0.05em] leading-[1.02]">

              Samson Abidemi

              <span className="block text-[#1d9bf0]">
                Abolarin.
              </span>

            </h1>

              {/* Professional title */} 
              <motion.p 
                initial={{ 
                  opacity: 0, 
                }} 
                animate={{ 
                  opacity: 1, 
                }} 
                transition={{ 
                  delay: 0.45, 
                  duration: 0.6, 
                }} 
                className="mt-7 text-xl md:text-2xl text-gray-300 font-medium" 
              > 
                <span>Data Engineer</span> 
              
                <span className="text-[rgb(155,193,219)] mx-3 font-bold">
                  ||
                </span> 
              
                <span>Software Engineer</span>

                <span className="text-[rgb(155,193,219)] mx-3 font-bold">
                </span>

                
              </motion.p>
                            

            {/* Description */}

          {/* Description */}
            <p className="mt-6 max-w-2xl text-gray-400 text-base md:text-lg leading-8">
              Software Engineer with 5+ years of experience building scalable,
              data-driven solutions across data engineering and web development.
              I combine technology, data, and business intelligence to transform
              complex problems into reliable solutions that create real-world impact.
            </p>

            {/* BUTTONS */}

            <div className="flex flex-wrap gap-4 mt-9">

              {/* CV */}

              <a
                href="/Samson Abolarin.pdf"
                download
                className="group flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition duration-300"
              >
                Download CV

                <span className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                  ↗
                </span>
              </a>

              {/* GitHub */}

              <a
                href="https://github.com/Rhom01"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-white/15 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/30 transition duration-300"
              >
                <FaGithub />

                GitHub
              </a>

              {/* Projects */}

              <a
                href="#projects"
                className="flex items-center gap-2 px-6 py-3 rounded-full border border-[#1d9bf0]/40 text-[#1d9bf0] hover:bg-[#1d9bf0]/10 transition duration-300"
              >
                View Projects
              </a>

            </div>

            {/* SOCIAL ICONS */}

            <div className="flex items-center gap-6 mt-10 text-gray-500">

              <a
                href="https://linkedin.com/in/samson"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-white hover:scale-110 transition duration-300"
              >
                <FaLinkedin size={21} />
              </a>

              <a
                href="mailto:mercywaves22@gmail.com"
                aria-label="Email"
                className="hover:text-white hover:scale-110 transition duration-300"
              >
                <FaEnvelope size={21} />
              </a>

              <a
                href="tel:+2348160427720"
                aria-label="Phone"
                className="hover:text-white hover:scale-110 transition duration-300"
              >
                <FaPhone size={19} />
              </a>

            </div>
          </motion.div>

          {/* =================================================
              PROFILE IMAGE
          ================================================== */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 40,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.2,
              type: "spring",
              stiffness: 80,
            }}
            className="flex justify-center lg:justify-end"
          >

            <div className="relative">

              {/* Image glow */}

              <motion.div
                animate={{
                  scale: [1, 1.08, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-[#1d9bf0] blur-[60px]"
              />

              {/* Profile image */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-[1px] bg-gradient-to-b from-[#1d9bf0] via-[#1d9bf0]/40 to-transparent"
              >

                <div className="w-full h-full rounded-full bg-[#080808] p-2">

                  <img
                    src="/samson.jpg"
                    alt="samson Abidemi Abolarin"
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition duration-700"
                  />

                </div>

              </motion.div>


              {/* Floating label */}

              <motion.div
                animate={{
                  y: [0, 8, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -bottom-4 -left-5 sm:-left-10 px-5 py-3 rounded-2xl border border-white/10 bg-[#0b0b0b]/90 backdrop-blur-xl shadow-2xl"
              >

                <p className="text-xs text-gray-500">
                  Focus
                </p>

                <p className="font-semibold text-sm">
                  Data & Web
                </p>

              </motion.div>

              {/* Floating blue dot */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-5 -right-3 w-3 h-3 rounded-full bg-[#1d9bf0] shadow-[0_0_20px_#1d9bf0]"
              />

            </div>
          </motion.div>

        </div>
      </section>

      {/* =====================================================
          PROJECTS
      ====================================================== */}

      <motion.section
        id="projects"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative max-w-6xl mx-auto px-5 py-24 border-t border-white/[0.07]"
      >

        {/* Section heading */}

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-12">

          <div>

            <p className="text-[#1d9bf0] text-sm font-semibold mb-3">
              PORTFOLIO
            </p>

            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
              Selected Works
            </h2>

          </div>

          <p className="text-gray-500 max-w-md leading-7">
            A selection of projects across data analytics,
            data engineering and web development.
          </p>

        </div>

        {/* Project cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {projects.map((project, index) => (

            <motion.a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -8,
              }}
              className="group rounded-2xl border border-white/[0.08] bg-[#090909] overflow-hidden hover:border-[#1d9bf0]/40 transition duration-500"
            >

              {/* Project image */}

              <div className="relative h-56 overflow-hidden bg-[#111]">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition duration-700"
                />

                {/* Image overlay */}

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-70" />

                {/* Project number */}

                <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10 text-xs text-gray-300">
                  0{index + 1}
                </span>

              </div>

              {/* Project information */}

              <div className="p-6">

                <span className="text-xs font-medium text-[#1d9bf0]">
                  {project.tag}
                </span>

                <div className="flex items-start justify-between gap-4 mt-3">

                  <h3 className="text-lg font-semibold group-hover:text-[#1d9bf0] transition">
                    {project.title}
                  </h3>

                  <span className="text-gray-600 group-hover:text-white transition text-xl">
                    ↗
                  </span>

                </div>

                <p className="text-gray-500 text-sm leading-6 mt-3">
                  {project.description}
                </p>

              </div>

            </motion.a>

          ))}

        </div>
      </motion.section>

      {/* =====================================================
          CONTACT
      ====================================================== */}

      <motion.section
        id="contact"
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 0.7,
        }}
        className="relative max-w-6xl mx-auto px-5 py-28 border-t border-white/[0.07]"
      >

        <div className="max-w-3xl mx-auto text-center">

          <p className="text-[#1d9bf0] text-sm font-semibold mb-5">
            GET IN TOUCH
          </p>

          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-tight">

            Let&apos;s build something

            <span className="block text-[#1d9bf0]">
              meaningful.
            </span>

          </h2>

          <p className="text-gray-500 mt-7 text-lg leading-8 max-w-xl mx-auto">
            Interested in collaborating, discussing a project or
            exploring an opportunity? I&apos;d love to hear from you.
          </p>

          {/* Contact buttons */}

          <div className="flex flex-wrap justify-center gap-4 mt-10">

            <a
              href="mailto:mercywaves22@gmail.com"
              className="flex items-center gap-3 px-6 py-3 rounded-full bg-white text-black font-semibold hover:bg-gray-200 transition"
            >
              <FaEnvelope />

              Email Me
            </a>

            <a
              href="https://linkedin.com/in/samson"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition"
            >
              <FaLinkedin />

              LinkedIn
            </a>

            <a
              href="tel:+2348160427720"
              className="flex items-center gap-3 px-6 py-3 rounded-full border border-white/10 hover:bg-white/[0.07] hover:border-white/20 transition"
            >
              <FaPhone />

              Call Me
            </a>

          </div>

        </div>
      </motion.section>

      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="relative border-t border-white/[0.07]">

        <div className="max-w-6xl mx-auto px-5 py-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Samson Abidemi Abolarin.
            All rights reserved.
          </p>

          <div className="flex items-center gap-6 text-gray-500">

            <a
              href="https://github.com/Rhom01"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/samson"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaLinkedin />
            </a>

            <a
              href="mailto:mercywaves22@gmail.com"
              aria-label="Email"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaEnvelope />
            </a>

            <a
              href="tel:+2348160427720"
              aria-label="Phone"
              className="hover:text-white hover:scale-110 transition"
            >
              <FaPhone />
            </a>

          </div>

        </div>

      </footer>

    </main>
  );
}