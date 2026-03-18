import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { ChevronDown, ChevronUp } from 'lucide-react';

const teamData = {
  faculty: [
    { name: 'Dr. Naga Srinivasulu', role: 'Faculty Advisor' },
    { name: 'Dr. Satyanand Abraham', role: 'Faculty Advisor' }
  ],
  leadership: [
    { name: 'Nazeeruddin', role: 'Captain' },
    { name: 'Rakesh', role: 'Vice Captain' },
    { name: 'Om Patil', role: 'Manager' },
    { name: 'Jessica', role: 'Manufacturing Lead' }
  ],
  departments: [
    {
      name: 'POWERTRAIN',
      head: 'Nazeeruddin',
      members: ['Rakesh', 'Subodh Kanbale', 'Rohith Reddy', 'Vittal', 'Jatin', 'Fahad']
    },
    {
      name: 'SUSPENSION',
      head: 'Ganesh',
      members: ['Charan Venkat', 'Surya Kashyap', 'Pavan Karthikeya', 'Mithila Reddy', 'Rishikeshwar Reddy', 'Abhinav Goud']
    },
    {
      name: 'DESIGN',
      head: 'Shashwath',
      members: ['Asim', 'Siva Charan', 'Aaron', 'Koushik Sai', 'Aryan Chauhan', 'Monish']
    },
    {
      name: 'STEERING',
      head: 'Madhav',
      members: ['Sai Charan', 'Yash', 'Heden Antony', 'Abhinand', 'Sathwika', 'Raj Shekhar']
    },
    {
      name: 'BRAKING',
      head: 'Ali',
      members: ['Jessica', 'Preetham', 'Satyavrat', 'Koushik Yadav', 'Nuthan Reddy', 'Karthik B']
    },
    {
      name: 'MANAGEMENT',
      head: 'Lakshmi Prasanna',
      members: ['Om Patil', 'Isha Sharvani', 'Rejusmita', 'Himavi', 'Agnibesh']
    }
  ]
};

const Team = () => {
  const [showTeam, setShowTeam] = useState(false);

  return (
    <section id="team" className="py-24 bg-[#050505] relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeader 
          title="OUR TEAM" 
          subtitle="Team Mechaholics X.O"
          centered={true}
        />

        {/* Group Photo */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto rounded-3xl overflow-hidden glass-card p-2 md:p-4 mb-16 relative group"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
          <img 
            src="/assets/mechaholics_img1.jpeg" 
            alt="Team Mechaholics" 
            className="w-full h-[400px] md:h-[600px] object-cover rounded-2xl grayscale group-hover:grayscale-0 transition-all duration-700"
          />
        </motion.div>

        {/* Toggle Button */}
        <div className="text-center mb-12">
          <button 
            onClick={() => setShowTeam(!showTeam)}
            className="group relative inline-flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 hover:border-white/20 transition-all text-white font-display tracking-widest uppercase text-sm font-semibold"
          >
            <span>{showTeam ? 'HIDE TEAM DETAILS' : 'MEET THE TEAM'}</span>
            <span className={`transform transition-transform duration-300 ${showTeam ? 'rotate-180' : ''}`}>
              <ChevronDown size={18} />
            </span>
            <div className="absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-orange-600 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </button>
        </div>

        {/* Expandable Team Grid */}
        <AnimatePresence>
          {showTeam && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="max-w-6xl mx-auto space-y-16 pb-12">
                
                {/* Faculty & Leadership */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <div className="space-y-6">
                    <h3 className="text-xl font-display font-semibold text-orange-500 tracking-widest border-b border-white/10 pb-4">FACULTY ADVISORS</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {teamData.faculty.map(f => (
                        <div key={f.name} className="glass p-6 rounded-2xl border-l-4 border-l-orange-600 hover:bg-white/10 transition-colors">
                          <h4 className="text-white font-medium">{f.name}</h4>
                          <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">{f.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-6">
                    <h3 className="text-xl font-display font-semibold text-red-500 tracking-widest border-b border-white/10 pb-4">CORE LEADERSHIP</h3>
                    <div className="grid grid-cols-2 gap-4">
                      {teamData.leadership.map(l => (
                        <div key={l.name} className="glass p-6 rounded-2xl hover:bg-white/10 transition-colors group">
                          <h4 className="text-white font-medium group-hover:text-purple-300 transition-colors">{l.name}</h4>
                          <p className="text-xs text-gray-400 uppercase tracking-widest mt-1 group-hover:text-gray-300 transition-colors">{l.role}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Departments */}
                <div>
                  <h3 className="text-xl font-display font-semibold text-white tracking-widest border-b border-white/10 pb-4 mb-8 text-center">DEPARTMENTS</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {teamData.departments.map((dept, i) => (
                      <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        key={dept.name} 
                        className="glass-card p-8 rounded-3xl hover:bg-white/[0.04] transition-colors border border-white/5 hover:border-white/20"
                      >
                        <h4 className="text-lg font-display font-bold text-white tracking-widest mb-6 inline-flex flex-col">
                          {dept.name}
                          <span className="w-1/2 h-0.5 bg-orange-600 mt-2"></span>
                        </h4>
                        
                        <div className="space-y-4">
                          <div className="mb-4">
                            <p className="text-white font-medium">{dept.head}</p>
                            <p className="text-xs text-orange-500 uppercase tracking-widest font-semibold">Head</p>
                          </div>
                          
                          <div className="space-y-2">
                            {dept.members.map(member => (
                              <p key={member} className="text-sm text-gray-400 font-light hover:text-white transition-colors cursor-default">
                                • {member}
                              </p>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Team;
