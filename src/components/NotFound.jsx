// src/pages/NotFound.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      
      {/* Animated Background Blobs */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, scale: [1, 1.2, 1] }}
        transition={{ repeat: Infinity, duration: 6 }}
        className="absolute w-[400px] h-[400px] bg-indigo-500 rounded-full blur-3xl -top-20 -left-20"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3, scale: [1, 1.3, 1] }}
        transition={{ repeat: Infinity, duration: 7 }}
        className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-3xl bottom-0 -right-20"
      />

      {/* Main Content */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-lg relative z-10 p-6 rounded-2xl bg-gray-900/60 backdrop-blur-lg shadow-2xl border border-indigo-500/40"
      >
        {/* Floating Ghost Icon */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block mb-6"
        >
          <Ghost size={100} className="text-indigo-400 drop-shadow-[0_0_10px_rgba(99,102,241,0.8)]" />
        </motion.div>

        {/* 404 Text */}
        <motion.h1 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl md:text-7xl font-extrabold text-indigo-400 drop-shadow-[0_0_20px_rgba(99,102,241,0.9)] mb-4"
        >
          404
        </motion.h1>

        {/* Message */}
        <p className="text-xl font-medium text-gray-300 mb-8">
          Kechirasiz! Siz qidirgan sahifa topilmadi. 
        </p>

        {/* Back Button */}
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="/"
            className="inline-block px-8 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 border border-indigo-400"
          >
            Bosh sahifaga qaytish
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
