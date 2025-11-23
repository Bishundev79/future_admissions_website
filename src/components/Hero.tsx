import { GraduationCap, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="pt-24 sm:pt-32 pb-12 sm:pb-16 md:pb-20 relative overflow-hidden">
      {/* Animated Gradient Mesh Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-primary-900/30">
        {/* Gradient mesh orbs with different animations */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-primary-400/30 to-purple-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-gradient-y"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-blue-400/30 to-indigo-400/30 rounded-full mix-blend-multiply filter blur-3xl animate-gradient-x" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: '4s' }}></div>
        
        {/* Dot pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}></div>
        
        {/* Gradient mesh grid lines */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="h-full w-full" style={{
            backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
            backgroundSize: '100px 100px'
          }}></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          <div className="md:w-1/2 space-y-6 sm:space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-semibold">
              <Sparkles size={16} />
              <span>Your Dream College Awaits</span>
            </div>
            
            <h1 className="text-4xl min-[480px]:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-slate-900 dark:text-white leading-tight">
              Your Gateway to<br />
              <span className="text-gradient">Top MBA & BBA</span><br />
              Admissions
            </h1>
            
            <p className="text-lg min-[480px]:text-xl text-slate-600 dark:text-slate-300 leading-relaxed max-w-xl">\n              Expert admission consultancy for Maharashtra's premier colleges.\n              Get personalized guidance and secure your spot in top institutions.\n            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
              <Link to="/contact" className="group bg-gradient-to-r from-primary-600 to-primary-700 text-white px-6 py-3.5 sm:px-8 sm:py-4 rounded-full hover:shadow-glow transition-all duration-300 text-center font-semibold text-base sm:text-lg hover:scale-105 flex items-center justify-center">
                Get Free Consultation
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/colleges" className="bg-white dark:bg-slate-800 text-primary-700 dark:text-primary-400 px-6 py-3.5 sm:px-8 sm:py-4 rounded-full hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-300 border-2 border-primary-600 dark:border-primary-500 text-center font-semibold text-base sm:text-lg hover:scale-105 shadow-soft">
                Browse Colleges
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 flex justify-center animate-scale-in">
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-to-br from-primary-600 to-primary-800 rounded-full flex items-center justify-center shadow-2xl">
                <GraduationCap size={100} className="text-white sm:hidden" />
                <GraduationCap size={140} className="text-white hidden sm:block" />
              </div>
              
              <div className="hidden min-[400px]:block absolute -top-6 -right-6 bg-gradient-to-br from-accent-blue to-blue-600 text-white px-6 py-4 rounded-2xl shadow-xl animate-fade-in">
                <p className="font-bold text-3xl">100+</p>
                <p className="text-sm font-medium">Success Stories</p>
              </div>
              
              <div className="hidden min-[400px]:block absolute -bottom-6 -left-6 bg-gradient-to-br from-accent-green to-green-600 text-white px-6 py-4 rounded-2xl shadow-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                <p className="font-bold text-3xl">50+</p>
                <p className="text-sm font-medium">Partner Colleges</p>
              </div>
              
              <div className="hidden min-[400px]:block absolute top-1/2 -right-12 bg-gradient-to-br from-accent-pink to-pink-600 text-white px-5 py-3 rounded-2xl shadow-xl animate-fade-in" style={{ animationDelay: '0.4s' }}>
                <p className="font-bold text-2xl">95%</p>
                <p className="text-xs font-medium">Success Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
