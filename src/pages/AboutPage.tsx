import About from '../components/About';
import Statistics from '../components/Statistics';
import PageHeader from '../components/ui/PageHeader';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title={<>About <span className="text-gradient">FutureAdmissions</span></>}
        subtitle="We are dedicated to helping students achieve their academic dreams by providing expert guidance and support throughout the admission process."
      />
      <About />
      <Statistics />
    </div>
  );
}
