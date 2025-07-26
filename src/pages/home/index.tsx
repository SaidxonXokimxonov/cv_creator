// App.tsx
import { Header } from '../../components/navbar';
import { Hero } from './components/hero';
import { Templates } from './components/templates';
import { Features } from './components/features';
import { HowItWorks } from './components/how-it-works';
import { Testimonials } from './components/testemonials';
import { CTA } from './components/cta';
import { Footer } from './components/footer';

export const Home = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main>
        <Hero />
        <Templates />
        <Features />
        <HowItWorks />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};
