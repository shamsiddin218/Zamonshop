// src/pages/NotFound.jsx

import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Ghost } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white flex items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-lg"
      >
        <motion.div 
          animate={{ rotate: [0, 10, -10, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="inline-block mb-6"
        >
          <Ghost size={80} className="text-indigo-400 drop-shadow-lg" />
        </motion.div>

        <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-400 drop-shadow-xl mb-4">404</h1>
        <p className="text-xl font-medium text-gray-300 mb-6">
          Kechirasiz! Bunday sahifa topilmadi.
        </p>
        <Link
          to="/"
          className="inline-block px-6 py-3 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold rounded-xl transition duration-300 shadow-lg hover:shadow-indigo-500/50"
        >
          Bosh sahifaga qaytish
        </Link>
      </motion.div>
    </div>
  );
}
