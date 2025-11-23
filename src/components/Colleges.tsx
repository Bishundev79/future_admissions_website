import { MapPin, GraduationCap, ArrowRight } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Colleges() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const colleges = [
    {
      name: 'Pune Institute of Business Management',
      location: 'Pune, Maharashtra',
      programs: 'MBA, PGDM',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Maharashtra Institute of Technology',
      location: 'Pune, Maharashtra',
      programs: 'MBA, BBA',
      image: 'https://images.pexels.com/photos/1454360/pexels-photo-1454360.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Symbiosis Institute of Management',
      location: 'Pune, Maharashtra',
      programs: 'MBA, PGDM',
      image: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Mumbai Business School',
      location: 'Mumbai, Maharashtra',
      programs: 'MBA, BBA',
      image: 'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'IMDR Pune',
      location: 'Pune, Maharashtra',
      programs: 'MBA, Executive MBA',
      image: 'https://images.pexels.com/photos/159490/yale-university-landscape-universities-schools-159490.jpeg?auto=compress&cs=tinysrgb&w=800'
    },
    {
      name: 'Pune University Department of Management',
      location: 'Pune, Maharashtra',
      programs: 'MBA, BBA',
      image: 'https://images.pexels.com/photos/1595391/pexels-photo-1595391.jpeg?auto=compress&cs=tinysrgb&w=800'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="colleges" 
      className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-white via-slate-50 to-primary-50/10 dark:from-slate-900 dark:via-slate-800 dark:to-primary-900/10 relative overflow-hidden"
    >
      {/* Geometric pattern background */}
      <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        backgroundSize: '60px 60px'
      }}></div>
      
      {/* Blur orbs for depth */}
      <div className="absolute top-20 left-10 w-80 h-80 bg-gradient-radial from-primary-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-radial from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {colleges.map((college, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-soft hover:shadow-glow overflow-hidden card-hover border border-slate-100 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-700"
            >
              <div className="relative overflow-hidden h-56">
                <img
                  src={college.image}
                  alt={college.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  decoding="async"
                  width="800"
                  height="600"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {college.name}
                </h3>
                <div className="flex items-center text-slate-600 dark:text-slate-300 mb-3">
                  <MapPin size={18} className="mr-2 text-primary-500 dark:text-primary-400" />
                  <span className="text-sm">{college.location}</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-primary-600 dark:text-primary-400">
                    <GraduationCap size={18} className="mr-2" />
                    <span className="text-sm font-semibold">{college.programs}</span>
                  </div>
                  <ArrowRight size={18} className="text-slate-400 dark:text-slate-500 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
