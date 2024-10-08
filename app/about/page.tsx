"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 text-center mb-12"
        >
          About Me
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden mb-8"
        >
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Image
                className="h-48 w-full object-cover md:w-48"
                src="/photo2.jpg"
                alt="Profile picture"
                width={300}
                height={300}
              />
            </div>
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                John Doe
              </h2>
              <p className="mt-2 text-gray-600 dark:text-gray-300">
                Computer Science Student | Sports enthusiast | Football lover
              </p>
              <p className="mt-4 text-gray-600 dark:text-gray-300">
                I'm a passionate developer currently in the last year of my
                Bachelors degree in Applied Information Technology.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            My Journey
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            I am currently pursuing a degree in Applied Information Technology
            at Ghent University of Applied Sciences and Arts. I decided to
            specialize in Mobile & Web Development because I absolutely fell in
            love with creating websites and applications during my studies.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Skills & Expertise
          </h2>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300">
            <li>Frontend: React, Vue.js, Next.js, Tailwind CSS, Shadcn ui</li>
            <li>Backend: Node.js, Prisma</li>
            <li>Databases: MySQL</li>
            <li>Other: REST APIs, Test-Driven Development</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden p-8 mb-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Interests & Hobbies
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            When I'm not coding, you can find me:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-600 dark:text-gray-300">
            <li>Playing football</li>
            <li>In the gym</li>
            <li>Training for 2025 Ironman</li>
            <li>Hanging out with friends</li>
            <li>Watching movies</li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden p-8"
        >
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Let's Connect
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            I'm always excited to collaborate on interesting projects or just
            chat about tech. Feel free to reach out to me through any of the
            following channels:
          </p>
          <div className="flex space-x-4">
            <Link
              href="https://www.github.com/devconinck"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </Link>
            <Link
              href="https://www.linkedin.com/in/quinten-deconinck-01b375177"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
            >
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
