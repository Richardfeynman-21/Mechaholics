import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const competitions = [
  {
    id: 1,
    title: 'QUAD TORC',
    badge: 'NATIONAL',
    badgeColor: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    description: `QuadTorc, organized by ISNEE Motorsports, is a national-level off-road competition that challenges student teams to design, analyze, and fabricate an ATV in compliance with technical standards. It evaluates teams through rigorous static and dynamic rounds, including design validation, technical inspection, maneuverability, acceleration, and endurance tests.`,
    delay: 0
  },
  {
    id: 2,
    title: 'QBDC',
    badge: 'NATIONAL',
    badgeColor: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    description: `The Quad Bike Design Challenge (QBDC), organized by FMAE, is a national-level competition where students design, fabricate, and test a single-rider all-terrain vehicle (ATV). It provides practical exposure to vehicle design, analysis, manufacturing, and performance evaluation while enhancing teamwork and technical skills.`,
    delay: 0.2
  },
  {
    id: 3,
    title: 'H-BAJA 2026',
    badge: 'HYDROGEN',
    badgeColor: 'bg-green-500/10 text-green-400 border-green-500/20',
    description: `hBAJA SAE India is a national-level engineering design competition organized by SAEINDIA, where student teams design and build a human-powered all-terrain vehicle to tackle real-world mobility challenges. The competition tests teams through static events such as design evaluation and cost analysis, along with dynamic events assessing performance, durability, and safety on rough terrains.`,
    delay: 0.4
  }
];

const Competitions = () => {
  return (
    <section id="competitions" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader 
          title="COMPETITIONS" 
          subtitle="Events We Participate In" 
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16 z-10 relative">
          {competitions.map((comp) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: comp.delay }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="glass-card rounded-2xl p-8 relative overflow-hidden group border border-white/5 hover:border-white/20 transition-all"
            >
              {/* Card Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex justify-between items-start mb-6 relative z-10">
                <h3 className="text-2xl font-display font-bold text-white tracking-widest">{comp.title}</h3>
                <span className={`px-3 py-1 rounded-full text-xs font-bold tracking-wider border ${comp.badgeColor}`}>
                  {comp.badge}
                </span>
              </div>
              
              <p className="text-gray-400 font-light leading-relaxed text-sm relative z-10 group-hover:text-gray-300 transition-colors">
                {comp.description}
              </p>

              {/* Decorative Corner Asset */}
              <div className="absolute -bottom-4 -right-4 text-[10rem] font-display font-bold text-white/[0.02] select-none group-hover:text-white/[0.05] transition-colors">
                {comp.id}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Competitions;
