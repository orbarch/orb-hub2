"use client";

import { motion } from 'framer-motion';

export default function NotFoundVisual() {
  return (
    <motion.div
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [-6, 0, -6], opacity: [1, 0.5, 0.9] }}
      transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
      className="flex items-center justify-center"
    >
      <div className="text-7xl font-extrabold text-gray-200 select-none tracking-tight drop-shadow-sm">
        404
      </div>
    </motion.div>
  );
}
