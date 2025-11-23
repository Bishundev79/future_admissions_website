import { useState } from 'react';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import { Maximize2 } from 'lucide-react';

export default function Gallery() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const images = [
    'https://images.pexels.com/photos/1438072/pexels-photo-1438072.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/716281/pexels-photo-716281.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=800'
  ];

  const slides = images.map((src) => ({ src }));

  const handleImageClick = (imageIndex: number) => {
    setIndex(imageIndex);
    setOpen(true);
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-slate-50 dark:bg-slate-900 relative overflow-hidden">
      {/* Enhanced background layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-100/80 via-slate-50 to-primary-50/40 dark:from-slate-900 dark:via-slate-800 dark:to-primary-900/20"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)',
        backgroundSize: '40px 40px'
      }}></div>
      
      {/* Floating orbs */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-radial from-primary-200/30 to-transparent rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-gradient-radial from-blue-200/30 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 min-[480px]:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
          {images.map((image, imageIndex) => (
            <button
              key={imageIndex}
              onClick={() => handleImageClick(imageIndex)}
              className="group relative overflow-hidden rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 aspect-square focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 min-h-[180px]"
              aria-label={`View full-size image ${imageIndex + 1}`}
            >
              <img
                src={image}
                alt={`Gallery image ${imageIndex + 1} - Success story`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
                decoding="async"
                width="800"
                height="800"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/80 via-primary-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-6">
                <Maximize2 size={32} className="text-white mb-2 transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                <p className="text-white font-semibold text-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Success Story #{imageIndex + 1}
                </p>
              </div>
            </button>
          ))}
        </div>
      </div>

      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        controller={{ closeOnBackdropClick: true }}
        carousel={{ finite: false }}
        render={{
          buttonPrev: slides.length <= 1 ? () => null : undefined,
          buttonNext: slides.length <= 1 ? () => null : undefined,
        }}
      />
    </section>
  );
}
