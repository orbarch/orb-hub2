"use client";

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  return (
  <div className="relative h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <div className="relative w-48 h-48 mb-8 mx-auto">
          <Image
            src="/orblogo.png"
            alt="ORB Architecture Logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-4xl font-bold text-gray-900 mb-4"
        >
          Welcome to ORB-Hub
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="text-xl text-gray-600 max-w-2xl mx-auto"
        >
          Checklists, checklists, and more checklists.
        </motion.p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-20 md:bottom-16 w-full text-center"
      >
        <div className="animate-bounce">
          <svg
            className="w-6 h-6 mx-auto text-gray-400 m-4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
          </svg>
        </div>
      </motion.div>
    </div>
  );
}