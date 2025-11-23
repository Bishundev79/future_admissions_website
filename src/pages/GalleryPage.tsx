import Gallery from '../components/Gallery';
import PageHeader from '../components/ui/PageHeader';

export default function GalleryPage() {
  return (
    <div className="pt-20">
      <PageHeader
        title={<>Success <span className="text-gradient">Gallery</span></>}
        subtitle="Celebrating our students' journey to their dream colleges."
      />
      <Gallery />
    </div>
  );
}
