import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';

const faqs = [
    {
        question: "How early should I start my admission process?",
        answer: "We recommend starting at least 6-8 months before the application deadlines. This gives us enough time to evaluate your profile, identify gaps, and prepare a strong application strategy."
    },
    {
        question: "Do you guarantee admission to top colleges?",
        answer: "While no ethical consultancy can guarantee admission, our track record shows a 95% success rate. We significantly maximize your chances by optimizing every aspect of your application."
    },
    {
        question: "What is included in your consultation package?",
        answer: "Our comprehensive package includes profile evaluation, college selection, SOP/Essay editing, resume building, interview preparation, and post-admission support (visa/loan guidance)."
    },
    {
        question: "Do you help with scholarship applications?",
        answer: "Yes, we identify scholarship opportunities you are eligible for and assist you in drafting compelling scholarship essays to secure financial aid."
    },
    {
        question: "Can I get a consultation if I have a low academic score?",
        answer: "Absolutely. We specialize in profile building. We help you highlight your other strengths—work experience, extracurriculars, and certifications—to offset lower academic scores."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    return (
        <section className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center justify-center p-3 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-4">
                        <HelpCircle className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                    </div>
                    <h2 className="text-3xl md:text-4xl font-display font-bold text-slate-900 dark:text-white mb-4">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-lg text-slate-600 dark:text-slate-300">
                        Everything you need to know about our admission process.
                    </p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-slate-900/50 overflow-hidden"
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                                aria-expanded={activeIndex === index}
                            >
                                <span className="text-lg font-semibold text-slate-900 dark:text-white pr-8">
                                    {faq.question}
                                </span>
                                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${activeIndex === index ? 'bg-primary-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                                    {activeIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                                </span>
                            </button>

                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 text-slate-600 dark:text-slate-300 leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
