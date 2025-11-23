import Services from '../components/Services';
import PageHeader from '../components/ui/PageHeader';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title={<>Our <span className="text-gradient">Services</span></>}
        subtitle="Comprehensive admission guidance services designed to help you secure your spot in top MBA and BBA colleges."
      />
      <Services />
    </div>
  );
}
