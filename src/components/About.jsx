import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const About = () => {
  return (
    <section id="about" className="py-24 bg-[#0a0a0a] relative overflow-hidden">
      {/* Decorative Gradients */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-900/10 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-purple-900/10 to-transparent blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader 
          title="ABOUT US" 
          subtitle="A decade of engineering excellence, driven by passion and precision." 
          centered={true}
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-gray-300 font-light text-lg leading-relaxed"
          >
            <p>
              We are Team Mechaholics, a dedicated student-based team specializing in the design and manufacturing of cost-efficient quad bikes (ATVs). 
              Over the past decade, our focus has been on optimizing the manufacturing process to deliver high-quality, performance-driven vehicles.
            </p>
            <p>
              Our experience in cost-effective design and efficient production methods has been honed through continuous learning and a commitment to innovation. 
              We strive to achieve excellence in every aspect of ATV manufacturing, with a keen emphasis on minimizing costs without compromising on quality or performance.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-white/10">
              {[
                { number: '10+', label: 'Years Active' },
                { number: '45+', label: 'Team Members' },
                { number: '100%', label: 'Student Built' }
              ].map((stat, index) => (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  key={stat.label}
                  className="text-center group"
                >
                  <div className="text-3xl md:text-5xl font-display font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-xs uppercase tracking-widest text-gray-500 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Image Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-4 relative"
          >
            <div className="absolute inset-0 bg-blue-500/20 blur-3xl -z-10 rounded-full" />
            
            <motion.div whileHover={{ scale: 1.05 }} className="col-span-1 rounded-2xl overflow-hidden glass-card">
              <img src="/assets/mechaholics_img1.jpeg" alt="Quad Bike 1" className="w-full h-48 md:h-64 object-cover" />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="col-span-1 rounded-2xl overflow-hidden glass-card mt-8">
              <img src="/assets/mechaholics_img2.jpeg" alt="Quad Bike 2" className="w-full h-48 md:h-64 object-cover" />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="col-span-1 rounded-2xl overflow-hidden glass-card -mt-8">
              <img src="/assets/mechaholics_img3.jpeg" alt="Quad Bike 3" className="w-full h-48 md:h-64 object-cover" />
            </motion.div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="col-span-1 rounded-2xl overflow-hidden glass-card">
              <img src="/assets/mechaholics_img4.jpeg" alt="Quad Bike 4" className="w-full h-48 md:h-64 object-cover" />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
