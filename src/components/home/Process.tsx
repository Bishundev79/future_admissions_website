import { ClipboardCheck, Compass, PenTool, MessageSquare, PartyPopper } from 'lucide-react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Process() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-80px' });

    const steps = [
        {
            icon: ClipboardCheck,
            title: 'Profile Evaluation',
            description: 'We analyze your academic background, work experience, and extracurriculars to identify your unique strengths.',
            color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
        },
        {
            icon: Compass,
            title: 'Strategy Building',
            description: 'We create a personalized roadmap and select the best-fit colleges that align with your career goals.',
            color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
        },
        {
            icon: PenTool,
            title: 'Application Crafting',
            description: 'Our experts help you write compelling SOPs, essays, and resumes that stand out to admission committees.',
            color: 'bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400'
        },
        {
            icon: MessageSquare,
            title: 'Interview Prep',
            description: 'Rigorous mock interviews with alumni and experts to boost your confidence and communication skills.',
            color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400'
        },
        {
            icon: PartyPopper,
            title: 'Final Admission',
            description: 'We guide you through offer acceptance, financial planning, and enrollment formalities.',
            color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
        }
    ];

    return (
        <section ref={ref} className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04]" style={{
                backgroundImage: 'radial-gradient(#4f46e5 1px, transparent 1px)',
                backgroundSize: '32px 32px'
            }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block py-1 px-3 rounded-full bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-semibold mb-4"
                    >
                        How It Works
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4"
                    >
                        Your Journey to Success
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-lg text-slate-600 dark:text-slate-300"
                    >
                        A proven 5-step process designed to maximize your chances of getting into your dream college.
                    </motion.p>
                </div>

                <div className="relative">
                    {/* Connecting Line (Desktop) */}
                    <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-10"></div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className={`w-24 h-24 rounded-2xl ${step.color} flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 group-hover:shadow-md transition-all duration-300 relative z-10 bg-opacity-50 backdrop-blur-sm border border-white/50 dark:border-slate-700/50`}>
                                    <step.icon size={32} />

                                    {/* Step Number Badge */}
                                    <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 flex items-center justify-center text-sm font-bold text-slate-400 dark:text-slate-500 shadow-sm">
                                        {index + 1}
                                    </div>
                                </div>

                                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed px-2">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
