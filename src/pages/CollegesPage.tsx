import Colleges from '../components/Colleges';
import PageHeader from '../components/ui/PageHeader';

export default function CollegesPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title={<>Partner <span className="text-gradient">Colleges</span></>}
        subtitle="Explore our network of premier MBA and BBA colleges across Maharashtra."
      />
      <Colleges />
    </div>
  );
}
