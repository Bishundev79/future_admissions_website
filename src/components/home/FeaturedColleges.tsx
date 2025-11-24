

const colleges = [
    { name: 'IIM Ahmedabad', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/38/IIMA_Logo.svg/1200px-IIMA_Logo.svg.png' },
    { name: 'IIM Bangalore', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/IIM_Bangalore_Logo.svg/1200px-IIM_Bangalore_Logo.svg.png' },
    { name: 'IIM Calcutta', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/IIM_Calcutta_Logo.svg/1200px-IIM_Calcutta_Logo.svg.png' },
    { name: 'XLRI Jamshedpur', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/3/3e/XLRI_Logo.svg/1200px-XLRI_Logo.svg.png' },
    { name: 'FMS Delhi', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/2d/Faculty_of_Management_Studies_Logo.svg/1200px-Faculty_of_Management_Studies_Logo.svg.png' },
    { name: 'SPJIMR', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/7/73/SPJIMR_Logo.svg/1200px-SPJIMR_Logo.svg.png' },
    { name: 'JBIMS', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/8/8c/JBIMS_Logo.svg/1200px-JBIMS_Logo.svg.png' },
    { name: 'NMIMS', logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/e/e3/NMIMS_Logo.svg/1200px-NMIMS_Logo.svg.png' },
];

// Duplicate the array for seamless scrolling
const scrollingColleges = [...colleges, ...colleges];

export default function FeaturedColleges() {
    return (
        <section className="py-10 bg-slate-50 dark:bg-slate-900 border-y border-slate-200 dark:border-slate-800 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
                <p className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                    Trusted by students admitted to top institutions
                </p>
            </div>

            <div className="relative flex overflow-x-hidden group">
                <div className="flex animate-scroll whitespace-nowrap hover:pause-animation">
                    {scrollingColleges.map((college, index) => (
                        <div
                            key={index}
                            className="mx-8 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            {/* 
                Using text placeholders for logos to avoid broken images if external links fail.
                In a real project, these would be local SVG assets.
              */}
                            <div className="text-xl font-bold text-slate-400 hover:text-primary-600 dark:text-slate-600 dark:hover:text-primary-400 transition-colors cursor-default">
                                {college.name}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex animate-scroll whitespace-nowrap hover:pause-animation" aria-hidden="true">
                    {scrollingColleges.map((college, index) => (
                        <div
                            key={index}
                            className="mx-8 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                        >
                            <div className="text-xl font-bold text-slate-400 hover:text-primary-600 dark:text-slate-600 dark:hover:text-primary-400 transition-colors cursor-default">
                                {college.name}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Gradient masks for smooth fade effect */}
                <div className="absolute top-0 left-0 w-20 h-full bg-gradient-to-r from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
                <div className="absolute top-0 right-0 w-20 h-full bg-gradient-to-l from-slate-50 dark:from-slate-900 to-transparent z-10"></div>
            </div>
        </section>
    );
}
