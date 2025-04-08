'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center text-white px-4 overflow-hidden">
      {/* Floating background numbers */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 0.05, y: 0 }}
        transition={{ duration: 1.2 }}
        className="absolute text-[250px] font-black text-white select-none pointer-events-none top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      >
        404
      </motion.div>

      {/* Glowing blur effects */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="absolute w-[600px] h-[600px] bg-purple-500/30 blur-3xl rounded-full top-1/3 left-1/4 -z-10 animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 1 }}
        className="absolute w-[400px] h-[400px] bg-indigo-400/20 blur-2xl rounded-full bottom-1/3 right-1/4 -z-10 animate-ping"
      />

      {/* Page content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="z-10 text-center max-w-2xl"
      >
        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-6xl md:text-7xl font-extrabold mb-4"
        >
          Page Not Found
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-lg text-gray-300 mb-8"
        >
          The page you’re looking for doesn't seem to exist. Let's get you back on track.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Link href="/">
            <button className="bg-indigo-600 hover:bg-indigo-700 px-6 py-3 rounded-full text-white font-semibold shadow-lg hover:shadow-xl transition-all">
              🏠 Go to Homepage
            </button>
          </Link>
          <button
            onClick={() => router.back()}
            className="bg-transparent border border-indigo-500 hover:bg-indigo-700 px-6 py-3 rounded-full text-white font-semibold transition-all"
          >
            🔙 Go Back
          </button>
        </motion.div>

        {/* Search box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mt-10 opacity-80"
        >
          <p className="text-sm text-gray-400">Still lost? Try searching below:</p>
          <div className="mt-3 flex items-center justify-center max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 px-4 py-2 rounded-l-lg bg-gray-800 border border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-r-lg text-white transition">
              <Search/>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NotFound;
