import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-blue-500 to-primary-500"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <h3 className="text-3xl font-display font-bold text-gradient mb-4">FutureAdmissions</h3>
            <p className="text-slate-400 mb-6 leading-relaxed">
              Your trusted partner for MBA and BBA admissions in Maharashtra's top colleges.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 transition-all duration-300 hover:scale-110">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 transition-all duration-300 hover:scale-110">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" 
                 className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-primary-600 transition-all duration-300 hover:scale-110">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Home
              </Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                About
              </Link></li>
              <li><Link to="/services" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Services
              </Link></li>
              <li><Link to="/colleges" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Colleges
              </Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-primary-400 transition-colors flex items-center group">
                <span className="w-0 group-hover:w-2 h-0.5 bg-primary-400 mr-0 group-hover:mr-2 transition-all duration-300"></span>
                Contact
              </Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start group">
                <Phone size={20} className="mr-3 mt-1 flex-shrink-0 text-primary-400" />
                <span className="text-slate-400 group-hover:text-white transition-colors">+91 98765 43210</span>
              </li>
              <li className="flex items-start group">
                <Mail size={20} className="mr-3 mt-1 flex-shrink-0 text-primary-400" />
                <span className="text-slate-400 group-hover:text-white transition-colors">info@futureadmissions.org</span>
              </li>
              <li className="flex items-start group">
                <MapPin size={20} className="mr-3 mt-1 flex-shrink-0 text-primary-400" />
                <span className="text-slate-400 group-hover:text-white transition-colors">Pune, Maharashtra, India</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-6">Business Hours</h4>
            <div className="flex items-start">
              <Clock size={20} className="mr-3 mt-1 flex-shrink-0 text-primary-400" />
              <div className="text-slate-400 space-y-2">
                <p className="hover:text-white transition-colors">Mon - Fri: 9:00 AM - 6:00 PM</p>
                <p className="hover:text-white transition-colors">Sat: 10:00 AM - 4:00 PM</p>
                <p className="hover:text-white transition-colors">Sun: Closed</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 dark:border-slate-900 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-400 text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} FutureAdmissions. All rights reserved.
          </p>
          <p className="text-slate-400 flex items-center">
            Made with <Heart size={16} className="mx-2 text-red-500 animate-pulse" /> for students
          </p>
        </div>
      </div>
    </footer>
  );
}
