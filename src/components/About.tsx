import { Target, Users, Award, TrendingUp } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const cards = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'Empowering students to achieve their academic dreams through expert guidance',
      color: 'primary',
      gradient: 'from-primary-500 to-primary-700'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced counselors with deep knowledge of admission processes',
      color: 'blue',
      gradient: 'from-blue-500 to-blue-700'
    },
    {
      icon: Award,
      title: 'Proven Success',
      description: 'Track record of successful placements in top institutions',
      color: 'green',
      gradient: 'from-green-500 to-green-700'
    },
    {
      icon: TrendingUp,
      title: 'Career Growth',
      description: 'Focus on long-term career development and success',
      color: 'orange',
      gradient: 'from-orange-500 to-orange-700'
    }
  ];

  return (
    <motion.section 
      ref={ref}
      className="py-12 sm:py-16 md:py-20 relative overflow-hidden"
    >
      {/* Subtle radial gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50/30 via-white to-blue-50/20 dark:from-slate-900 dark:via-slate-800 dark:to-primary-900/10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-radial from-primary-100/20 to-transparent rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-radial from-blue-100/20 to-transparent rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {cards.map((card, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-primary-200 dark:hover:border-primary-700 card-hover shadow-soft hover:shadow-glow"
            >
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 dark:group-hover:opacity-20 rounded-2xl transition-opacity duration-300`}
              ></div>
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)',
                backgroundSize: '200% 100%',
                animation: 'shimmer 2s linear infinite'
              }}></div>
              
              <div className={`w-16 h-16 bg-gradient-to-br ${card.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-glow transition-all duration-300 shadow-lg relative z-10`}>
                <card.icon className="text-white" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors relative z-10">
                {card.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed relative z-10">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
