import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Trophy, Settings, Star } from 'lucide-react';

const achievements = [
  {
    id: 1,
    icon: <Trophy className="w-8 h-8 text-yellow-400" />,
    title: 'QBDC 2024',
    subtitle: 'Runners-Up in Setting Up in Pit Event',
    desc: 'Evaluated team coordination, efficiency, and technical preparedness during vehicle setup under time constraints. Reflects strong collaboration and quick problem-solving ability.',
    year: '2024',
    color: 'from-yellow-400/20 to-transparent'
  },
  {
    id: 2,
    icon: <Settings className="w-8 h-8 text-blue-400" />,
    title: 'QUAD TORC 2025',
    subtitle: 'Overall Runner-Up (AIR-2)',
    desc: 'AIR-1 in Design Evaluation, Traction Test, and Business & Cost Report. AIR-2 in Kill the Hill, Acceleration Test, and Fuel Economy. Demonstrated vehicle capability and reliability under competitive conditions.',
    year: '2025',
    color: 'from-blue-400/20 to-transparent'
  }
];

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 bg-black relative overflow-hidden">
      {/* Background Starfield effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 3 + 1}px`,
              height: `${Math.random() * 3 + 1}px`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader 
          title="ACHIEVEMENTS" 
          subtitle="Consistent performance across national competitions highlighting our commitment to engineering excellence."
          centered={true}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16 max-w-5xl mx-auto">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.id}
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative p-[1px] rounded-2xl overflow-hidden group"
            >
              {/* Animated Gradient Border */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-white/10 opacity-50 group-hover:opacity-100 transition-opacity" />
              <div className={`absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b ${ach.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="bg-[#0a0a0a]/90 backdrop-blur-xl h-full p-8 rounded-[15px] relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/5 rounded-xl border border-white/10 group-hover:scale-110 transition-transform">
                    {ach.icon}
                  </div>
                  <span className="text-4xl font-display font-bold text-white/10 group-hover:text-white/20 transition-colors">
                    {ach.year}
                  </span>
                </div>
                
                <h3 className="text-2xl font-display font-bold tracking-widest text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {ach.title}
                </h3>
                <h4 className="text-sm font-semibold tracking-wide text-gray-300 mb-4 uppercase">
                  {ach.subtitle}
                </h4>
                
                <p className="text-gray-400 font-light text-sm leading-relaxed">
                  {ach.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
