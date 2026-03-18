import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Apply = () => {
  const navigate = useNavigate();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate submission delay
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505] relative overflow-hidden text-white font-sans selection:bg-blue-500/30">
      {/* Animated Background */}
      <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen animate-blob pointer-events-none" />

      {/* Nav */}
      <nav className="relative z-50 py-6 px-6 lg:px-12 flex justify-between items-center border-b border-white/5">
        <button 
          onClick={() => navigate('/')} 
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors group"
        >
          <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold tracking-wide text-sm">RETURN TO HOME</span>
        </button>
        <div className="flex items-center gap-3">
          <img src="/assets/Mechaholics_logo_draft.png" alt="Logo" className="h-8 w-auto" />
          <span className="font-display font-bold text-xl tracking-widest hidden sm:block">
            MECHAHOLICS
          </span>
        </div>
      </nav>

      <main className="container mx-auto px-6 py-12 lg:py-24 relative z-10 flex flex-col lg:flex-row gap-16 items-start justify-center min-h-[calc(100vh-100px)]">
        
        {/* Left Side Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="lg:w-5/12 max-w-xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-bold tracking-widest mb-6 uppercase">
            Recruitment 2026
          </div>
          <h1 className="text-5xl md:text-7xl font-display font-bold tracking-tighter mb-6 leading-[1.1]">
            JOIN THE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              REVOLUTION
            </span>
          </h1>
          <p className="text-gray-400 text-lg md:text-xl font-light leading-relaxed mb-8">
            Team Mechaholics is looking for passionate individuals to join our mission in pioneering hydrogen-powered motorsports. Bring your skills, and let's build the future together.
          </p>

          <div className="space-y-6">
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 border border-blue-500/30">
                <span className="text-xl">🚀</span>
              </div>
              <div>
                <h3 className="font-display font-bold tracking-widest text-lg mb-1">REAL-WORLD IMPACT</h3>
                <p className="text-sm text-gray-400">Work on cutting-edge hydrogen technology and compete in national Baja racing.</p>
              </div>
            </div>
            
            <div className="glass-card p-6 rounded-2xl flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0 border border-purple-500/30">
                <span className="text-xl">🛠️</span>
              </div>
              <div>
                <h3 className="font-display font-bold tracking-widest text-lg mb-1">HANDS-ON EXPERIENCE</h3>
                <p className="text-sm text-gray-400">Design, fabricate, and test complex systems alongside experienced seniors.</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right Side Form */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full lg:w-6/12 max-w-xl"
        >
          <div className="glass-card rounded-3xl p-8 md:p-12 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative overflow-hidden backdrop-blur-2xl bg-white/[0.02]">
            
            {/* Form Glow */}
            <div className="absolute -top-32 -right-32 w-64 h-64 bg-blue-500/20 rounded-full blur-[100px] pointer-events-none" />

            {submitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.2 }}
                >
                  <CheckCircle2 className="w-24 h-24 text-green-400 mb-6 drop-shadow-[0_0_15px_rgba(74,222,128,0.5)]" />
                </motion.div>
                <h2 className="text-3xl font-display font-bold tracking-widest mb-4">APPLICATION RECEIVED</h2>
                <p className="text-gray-400 font-light mb-8 max-w-sm">
                  Thank you for applying to Team Mechaholics. We will review your application and contact you soon regarding the next steps.
                </p>
                <button 
                  onClick={() => navigate('/')}
                  className="px-8 py-4 bg-white text-black font-bold tracking-widest rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
                >
                  RETURN HOME
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                <div>
                  <h2 className="text-2xl font-display font-bold tracking-widest mb-8 border-b border-white/10 pb-4">
                    APPLICANT DETAILS
                  </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold ml-1">Full Name</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold ml-1">Roll Number</label>
                    <input 
                      type="text" 
                      required
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light uppercase"
                      placeholder="23ME1001"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light"
                    placeholder="student@student.nitw.ac.in"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold ml-1">Branch</label>
                    <select required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light appearance-none cursor-pointer">
                      <option value="" disabled selected>Select Branch</option>
                      <option value="Mechanical">Mechanical Engineering</option>
                      <option value="CSE">Computer Science</option>
                      <option value="ECE">Electronics & Communication</option>
                      <option value="EEE">Electrical & Electronics</option>
                      <option value="Civil">Civil Engineering</option>
                      <option value="Chemical">Chemical Engineering</option>
                      <option value="Metallurgy">Metallurgical Engineering</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold ml-1">Year of Study</label>
                    <select required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light appearance-none cursor-pointer">
                      <option value="" disabled selected>Select Year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-gray-400 font-semibold ml-1">Preferred Department</label>
                  <select required className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all font-light appearance-none cursor-pointer">
                    <option value="" disabled selected>Select Core Team</option>
                    <option value="powertrain">Powertrain</option>
                    <option value="suspension">Suspension</option>
                    <option value="design">Design & Analysis</option>
                    <option value="steering">Steering</option>
                    <option value="braking">Braking</option>
                    <option value="management">Management</option>
                  </select>
                </div>

                <div className="space-y-2 mt-4 pt-6 border-t border-white/10">
                  <button 
                    type="submit" 
                    disabled={loading}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl text-white font-bold tracking-widest uppercase hover:opacity-90 transition-opacity flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(59,130,246,0.3)] disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                    ) : (
                      'SUBMIT APPLICATION'
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </motion.div>

      </main>
    </div>
  );
};

export default Apply;
