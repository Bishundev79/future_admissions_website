import { Users, Building2, TrendingUp, Calendar } from 'lucide-react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';

interface StatItemProps {
  icon: React.ElementType;
  number: string;
  label: string;
  color: string;
  index: number;
}

function AnimatedNumber({ value, duration = 2 }: { value: number; duration?: number }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    const unsubscribe = springValue.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString();
      }
    });
    return () => unsubscribe();
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

function StatItem({ icon: Icon, number, label, color, index }: StatItemProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  // Extract numeric value from string like "500+" or "95%"
  const numericValue = parseInt(number.replace(/\D/g, ''));
  const suffix = number.replace(/\d/g, '');

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center group"
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ type: 'spring', stiffness: 300 }}
        className={`w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-xl`}
      >
        <Icon size={36} className="text-white" />
      </motion.div>
      <motion.p
        className="text-5xl md:text-6xl font-display font-bold text-white mb-2"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {isInView && <AnimatedNumber value={numericValue} />}
        {suffix}
      </motion.p>
      <p className="text-primary-100 text-lg font-medium">{label}</p>
    </motion.div>
  );
}

export default function Statistics() {
  const stats = [
    { icon: Users, number: '500+', label: 'Students Placed', color: 'from-blue-400 to-blue-600' },
    { icon: Building2, number: '50+', label: 'Partner Colleges', color: 'from-purple-400 to-purple-600' },
    { icon: TrendingUp, number: '95%', label: 'Success Rate', color: 'from-green-400 to-green-600' },
    { icon: Calendar, number: '10+', label: 'Years Experience', color: 'from-orange-400 to-orange-600' }
  ];

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 dark:from-primary-800 dark:via-primary-900 dark:to-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat, index) => (
            <StatItem key={index} {...stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
