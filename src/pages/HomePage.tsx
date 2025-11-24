import Hero from '../components/Hero';
import About from '../components/About';
import Statistics from '../components/Statistics';
import Process from '../components/home/Process';
import FeaturedColleges from '../components/home/FeaturedColleges';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/home/FAQ';
import CTABand from '../components/home/CTABand';

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Statistics />
      <Process />
      <FeaturedColleges />
      <Testimonials />
      <FAQ />
      <CTABand />
    </>
  );
}
