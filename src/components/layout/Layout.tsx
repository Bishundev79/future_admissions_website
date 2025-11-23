import { Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import Navigation from './Navigation';
import Footer from './Footer';
import WhatsAppButton from './WhatsAppButton';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navigation />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
      <Toaster 
        position="top-right" 
        expand={false}
        richColors
        closeButton
      />
    </>
  );
}
