import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ChevronDown } from 'lucide-react';

const timelineData = [
  {
    year: '2017',
    image: '/assets/2017.jpg',
    title: 'THE BEGINNING',
    desc: "Built our first ATV for QuadTorc, marking the institute's first attempt at such a project. Provided valuable experience in design, fabrication, and teamwork.",
  },
  {
    year: '2018',
    image: '/assets/2018_2.jpg',
    title: 'QBDC DEBUT',
    desc: 'Designed and built an ATV to compete in QBDC. Achieved AIR 10 and 1st Rank in the Cost Report.',
  },
  {
    year: '2019',
    image: '/assets/2019.jpg',
    title: 'RISING RANKS',
    desc: 'Participated in QBDC. Achieved Overall AIR 7, Runner-Up in Traction Test, and AIR 3 in Cost Report.',
  },
  {
    year: '2020',
    image: '/assets/mechaholics_img2.jpeg',
    title: 'PERSEVERANCE',
    desc: 'Continued working on QBDC despite challenges. Focused on extensive design, fabrication, and testing, building technical excellence.',
  },
  {
    year: '2025',
    image: '/assets/mechaholics_img1.jpeg',
    title: 'EXCELLENCE ACHIVED',
    desc: 'Outstanding performance at QuadTorc, securing Overall Runner-Up (AIR-2). Also achieved AIR-1 in Design Evaluation and Traction Test.',
  },
  {
    year: '2026',
    image: '/assets/mechaholics_img2.jpeg',
    title: 'HYDROGEN REVOLUTION',
    desc: 'Transitioning to hydrogen fuel cell technology, pioneering the future of clean energy in motorsports.',
    highlight: true,
  }
];

const TimelineCard = ({ item, index }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className={`relative flex w-full my-12 md:my-24 justify-between items-center ${isEven ? 'flex-row-reverse' : ''}`}
    >
      {/* Center Line Marker */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        <div className={`w-6 h-6 rounded-full border-4 border-black ${item.highlight ? 'bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.6)]' : 'bg-orange-600'} z-10`} />
      </div>

      <div className="hidden md:block w-5/12" />
      
      <div className={`w-full md:w-5/12 glass-card rounded-2xl overflow-hidden group ${item.highlight ? 'border-green-500/30' : 'border-white/10'}`}>
        <div className="h-48 overflow-hidden relative">
          <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors z-10 duration-500" />
          <img 
            src={item.image} 
            alt={item.year} 
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {item.highlight && (
            <div className="absolute top-4 right-4 z-20 bg-green-500/90 backdrop-blur text-black text-xs font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
              <span>🔋</span> Hydrogen Powered
            </div>
          )}
        </div>
        <div className="p-8 relative">
          <div className="flex items-end justify-between mb-4">
            <h3 className={`text-4xl font-display font-bold ${item.highlight ? 'text-green-400' : 'text-white'}`}>{item.year}</h3>
            <span className="text-xs uppercase tracking-widest text-gray-500 font-bold">{item.title}</span>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-light">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Timeline = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end end"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="timeline" className="py-24 bg-[#050505] relative" ref={containerRef}>
      <div className="container mx-auto px-6 lg:px-12">
        <SectionHeader 
          title="OUR JOURNEY" 
          subtitle="A Decade of Innovation and Excellence" 
          centered={true}
        />

        <div className="relative mt-20">
          {/* Main vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 bg-white/10 overflow-hidden">
            <motion.div 
              style={{ scaleY, transformOrigin: 'top' }}
              className="w-full h-full bg-gradient-to-b from-orange-600 via-red-600 to-green-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" 
            />
          </div>

          <div className="relative z-10 w-full lg:max-w-5xl mx-auto">
            {timelineData.map((item, index) => (
              <TimelineCard key={item.year} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
