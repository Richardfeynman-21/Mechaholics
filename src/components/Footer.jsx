import React from 'react';
import { Instagram, Linkedin, Youtube, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer id="contact" className="relative bg-[#050505] pt-24 pb-8 overflow-hidden border-t border-white/5">
      {/* Background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[1px] bg-gradient-to-r from-transparent via-orange-600/20 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src="/assets/Mechaholics_logo_draft.png" alt="Team Mechaholics" className="h-16 w-auto" />
              <div>
                <h3 className="font-display font-bold text-2xl tracking-widest text-white">TEAM MECHAHOLICS</h3>
                <p className="text-gray-400 text-sm mt-1">Official Quad Bike Team of NIT Warangal</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed max-w-md">
              Engineering excellence since 2014. Designing, manufacturing, and racing world-class All-Terrain Vehicles. Now pioneering the hydrogen revolution.
            </p>
            
            <div className="flex gap-4 mt-8">
              <a href="https://www.instagram.com/team__mechaholics" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-yellow-500 hover:bg-white/10 transition-all">
                <Instagram size={20} />
              </a>
              <a href="https://in.linkedin.com/company/team-mechaholics" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-orange-600 hover:bg-white/10 transition-all">
                <Linkedin size={20} />
              </a>
              <a href="https://youtube.com/@team_mechaholics" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-red-500 hover:bg-white/10 transition-all">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold text-lg tracking-wider text-white mb-6">QUICK LINKS</h4>
            <ul className="space-y-3">
              {['About Us', 'Competitions', 'Achievements', 'Team', 'Sponsors'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase().replace(' ', '')}`} className="text-gray-400 hover:text-orange-500 transition-colors inline-block hover:translate-x-1 transform duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-bold text-lg tracking-wider text-white mb-6">CONTACT US</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <a href="mailto:team_mechaholics@nitw.ac.in" className="text-gray-400 hover:text-white transition-colors break-all">
                  team_mechaholics@nitw.ac.in
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-orange-600 mt-1 flex-shrink-0" />
                <p className="text-gray-400">
                  National Institute of Technology,<br />
                  Warangal, Telangana,<br />
                  India - 506004
                </p>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Team Mechaholics. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
