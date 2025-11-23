import ContactForm from '../components/ContactForm';
import PageHeader from '../components/ui/PageHeader';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title={<>Get in <span className="text-gradient">Touch</span></>}
        subtitle="Have questions? We're here to help you with your admission journey."
      />
      <ContactForm />
    </div>
  );
}
