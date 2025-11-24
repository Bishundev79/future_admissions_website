import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: "Rahul Sharma",
        college: "IIM Ahmedabad",
        quote: "FutureAdmissions guided me through every step. Their mock interviews were a game changer!",
        role: "MBA Candidate"
    },
    {
        id: 2,
        name: "Priya Patel",
        college: "JBIMS Mumbai",
        quote: "I was confused about my profile, but their counseling helped me highlight my strengths perfectly.",
        role: "MMS Student"
    },
    {
        id: 3,
        name: "Aditya Singh",
        college: "SPJIMR",
        quote: "The personalized attention I received was unmatched. Highly recommended for serious aspirants.",
        role: "PGDM Student"
    },
    {
        id: 4,
        name: "Neha Gupta",
        college: "NMIMS Mumbai",
        quote: "From application essays to the final interview, the team supported me throughout the journey.",
        role: "MBA Student"
    }
];

export default function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const next = () => setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    const prev = () => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

    return (
        <section className="py-20 bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
            {/* Background elements */}
            <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
                backgroundImage: 'radial-gradient(circle, #6366f1 1px, transparent 1px)',
                backgroundSize: '30px 30px'
            }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
                        Student Success Stories
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        Hear from our students who made it to their dream colleges.
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 md:p-12 shadow-xl border border-white/20 dark:border-slate-700/50"
                        >
                            <div className="flex flex-col items-center text-center">
                                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mb-6">
                                    <Quote className="w-8 h-8 text-primary-600 dark:text-primary-400" />
                                </div>
                                <p className="text-xl md:text-2xl text-slate-700 dark:text-slate-200 font-medium italic mb-8 leading-relaxed">
                                    "{testimonials[currentIndex].quote}"
                                </p>
                                <div>
                                    <h4 className="text-lg font-bold text-slate-900 dark:text-white">
                                        {testimonials[currentIndex].name}
                                    </h4>
                                    <p className="text-primary-600 dark:text-primary-400 font-medium">
                                        {testimonials[currentIndex].college}
                                    </p>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">
                                        {testimonials[currentIndex].role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Controls */}
                    <button
                        onClick={prev}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:bg-primary-50 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 z-20"
                        aria-label="Previous testimonial"
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={next}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-white dark:bg-slate-800 shadow-lg hover:bg-primary-50 dark:hover:bg-slate-700 transition-colors text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 z-20"
                        aria-label="Next testimonial"
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Dots */}
                    <div className="flex justify-center space-x-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                        ? 'bg-primary-600 w-8'
                                        : 'bg-slate-300 dark:bg-slate-600 hover:bg-primary-400'
                                    }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
