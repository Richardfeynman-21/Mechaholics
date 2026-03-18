import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle, centered = true }) => {
  return (
    <div className={`mb-16 ${centered ? 'text-center' : 'text-left'}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest inline-block relative">
          {title}
          <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-orange-600 via-red-600 to-yellow-500 rounded-full origin-left transform scale-x-0 transition-transform duration-700 delay-300 group-hover:scale-x-100" />
        </h2>
        {subtitle && (
          <p className="mt-6 text-xl text-gray-400 font-light max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default SectionHeader;
