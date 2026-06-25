import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Stats from '@/components/Stats';
import Services from '@/components/Services';
import WhyMelz from '@/components/WhyMelz';
import Process from '@/components/Process';
import Testimonials from '@/components/Testimonials';
import Trust from '@/components/Trust';
import BlogSection from '@/components/BlogSection';
import FAQ from '@/components/FAQ';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <WhyMelz />
      <Process />
      <Testimonials />
      <Trust />
      <BlogSection />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
