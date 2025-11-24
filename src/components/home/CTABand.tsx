import { ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CTABand() {
    return (
        <section className="py-20 relative overflow-hidden">
            {/* Background with gradient and mesh */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-blue-700 dark:from-primary-900 dark:to-slate-900">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4"></div>
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/4"></div>

                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                    backgroundSize: '30px 30px'
                }}></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-8">
                    <Sparkles size={16} className="text-yellow-300" />
                    <span>Limited Slots Available for 2025 Batch</span>
                </div>

                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-tight">
                    Ready to Secure Your <br className="hidden sm:block" />
                    Dream College Admission?
                </h2>

                <p className="text-xl text-primary-100 max-w-2xl mx-auto mb-10 leading-relaxed">
                    Don't leave your future to chance. Get expert guidance, personalized strategy, and end-to-end support today.
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                        to="/contact"
                        className="w-full sm:w-auto bg-white text-primary-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center justify-center"
                    >
                        Book Free Consultation
                        <ArrowRight className="ml-2" size={20} />
                    </Link>
                    <Link
                        to="/services"
                        className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-lg text-white border-2 border-white/30 hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                    >
                        Explore Services
                    </Link>
                </div>

                <p className="mt-8 text-sm text-primary-200 opacity-80">
                    No hidden charges • 100% Transparent Process
                </p>
            </div>
        </section>
    );
}
