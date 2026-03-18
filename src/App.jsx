import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Competitions from './components/Competitions';
import Timeline from './components/Timeline';
import Achievements from './components/Achievements';
import Team from './components/Team';
import Sponsors from './components/Sponsors';
import Footer from './components/Footer';
import ParticlesBackground from './components/ParticlesBackground';

function App() {
  return (
    <div className="bg-background min-h-screen text-foreground font-sans relative">
      <ParticlesBackground />
      <Navbar />
      <main>
        <Hero />
        
        {/* Machine in motion video intro to About section */}
        <section className="py-24 bg-black">
          <div className="container mx-auto px-6 lg:px-12 text-center">
            <h2 className="text-3xl font-display font-bold text-white tracking-widest mb-12">OUR MACHINE IN MOTION</h2>
            <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden glass-card shadow-[0_0_50px_rgba(59,130,246,0.15)] relative">
              <div className="absolute inset-0 bg-orange-600/10 pointer-events-none mix-blend-overlay" />
              <video 
                controls 
                autoPlay 
                muted 
                loop 
                className="w-full h-auto aspect-video object-cover"
              >
                <source src={`${import.meta.env.BASE_URL}assets/video.mp4`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </section>

        <About />
        <Competitions />
        <Timeline />
        <Achievements />
        <Team />

        {/* Support Section */}
        <section className="py-24 bg-[#0a0a0a] relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-900/10 via-black to-red-900/10" />
          <div className="container mx-auto px-6 lg:px-12 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-white tracking-widest mb-6">SUPPORT THE REVOLUTION</h2>
            <p className="text-gray-400 max-w-2xl mx-auto mb-12 font-light text-lg">
              Partner with us to build the future of sustainable motorsports. Your support drives innovation, engineering excellence, and the next generation of industry leaders.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="px-8 py-4 bg-white text-black rounded-full font-bold tracking-wider hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-105 active:scale-95">
                DOWNLOAD BROCHURE
              </button>
              <a href="#contact" className="px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold tracking-wider hover:bg-white/10 transition-colors hover:scale-105 active:scale-95">
                GET IN TOUCH
              </a>
            </div>
          </div>
        </section>

        <Sponsors />
      </main>
      <Footer />
    </div>
  );
}

export default App;
