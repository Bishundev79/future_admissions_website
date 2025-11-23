import { FileText, UserCheck, BookOpen, Briefcase, MessageSquare, CheckCircle } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const services = [
    {
      icon: FileText,
      title: 'Application Assistance',
      description: 'Complete support with application forms, documentation, and submission processes',
      color: 'from-primary-500 to-primary-700'
    },
    {
      icon: UserCheck,
      title: 'College Selection',
      description: 'Personalized college recommendations based on your profile and preferences',
      color: 'from-blue-500 to-blue-700'
    },
    {
      icon: BookOpen,
      title: 'Entrance Exam Prep',
      description: 'Guidance for MAH-CET, CAT, and other entrance examinations',
      color: 'from-green-500 to-green-700'
    },
    {
      icon: Briefcase,
      title: 'Career Counseling',
      description: 'Expert advice on career paths and specialization selection',
      color: 'from-orange-500 to-orange-700'
    },
    {
      icon: MessageSquare,
      title: 'Interview Preparation',
      description: 'Mock interviews and tips to ace your admission interviews',
      color: 'from-pink-500 to-pink-700'
    },
    {
      icon: CheckCircle,
      title: 'End-to-End Support',
      description: 'Complete guidance from application to final admission confirmation',
      color: 'from-indigo-500 to-indigo-700'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      id="admissions" 
      className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '50px 50px'
      }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl shadow-soft hover:shadow-glow card-hover border border-slate-100 dark:border-slate-700 hover:border-primary-200 dark:hover:border-primary-700 relative overflow-hidden"
            >
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s linear infinite'
              }}></div>
              
              <div className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-glow transition-all duration-300 shadow-lg relative z-10`}>
                <service.icon className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors relative z-10">
                {service.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
