import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8;
    }
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black"
      id="home"
    >
      {/* Background Video/Image Layer with Parallax */}
      <motion.div 
        style={{ y: y1, scale }} 
        className="absolute inset-0 w-full h-full z-0"
      >
        {/* We'll use a dynamic dark gradient overlay on top of the image */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-background z-10" />
        <img 
          src="/assets/mechaholics_img4.jpeg" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60"
        />
        
        {/* Animated Glow Effects */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] mix-blend-screen animate-blob" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/20 rounded-full blur-[120px] mix-blend-screen animate-blob" style={{ animationDelay: '2s' }} />
      </motion.div>

      {/* Content */}
      <motion.div 
        style={{ opacity }}
        className="container relative z-20 mx-auto px-6 text-center mt-20"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-block"
        >
          <div className="glass px-6 py-2 rounded-full border border-white/10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
            <span className="text-sm font-medium tracking-widest text-blue-400">NIT WARANGAL OFFICIAL TEAM</span>
          </div>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-6xl md:text-8xl lg:text-9xl font-display font-bold tracking-tighter text-white mb-6 leading-none"
        >
          TEAM
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-white">
            MECHAHOLICS
          </span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-12 font-light tracking-wide"
        >
          Engineering Excellence • Driven by Passion
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <a 
            href="#about"
            className="group relative px-8 py-4 bg-white text-black rounded-full font-semibold tracking-wide overflow-hidden transition-all hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              DISCOVER MORE <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity" />
          </a>
          
          <a 
            href="https://youtube.com/@team_mechaholics"
            target="_blank"
            rel="noreferrer"
            className="group px-8 py-4 rounded-full font-semibold tracking-wide text-white border border-white/20 hover:bg-white/10 transition-all flex items-center gap-2"
          >
            WATCH MOTION
            <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.3em] text-gray-400">Scroll</span>
        <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
