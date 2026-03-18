import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const sponsors = [
  { name: 'SolidWorks', logo: `${import.meta.env.BASE_URL}assets/SolidWorks-Logo.jpeg` },
  { name: 'Ansys', logo: `${import.meta.env.BASE_URL}assets/ansyslogo.jpeg` },
  { name: 'Matlab', logo: `${import.meta.env.BASE_URL}assets/Matlab_Google.jpeg` }
];

const Sponsors = () => {
  return (
    <section id="sponsors" className="py-24 bg-black relative">
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader 
          title="POWERED BY OUR PARTNERS" 
          subtitle="Thank You to Our Valued Sponsors" 
          centered={true}
        />

        <div className="flex flex-wrap justify-center items-center gap-12 mt-16 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5, scale: 1.05 }}
              className="glass p-8 rounded-3xl border border-white/5 hover:border-orange-600/30 transition-all flex flex-col items-center gap-6 w-full sm:w-64 bg-white/[0.02]"
            >
              <div className="h-24 w-full flex items-center justify-center bg-white rounded-xl overflow-hidden p-2">
                <img 
                  src={sponsor.logo} 
                  alt={sponsor.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              <h3 className="text-xl font-display font-bold tracking-widest text-white">{sponsor.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
