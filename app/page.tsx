import About from "@/components/landing/about";
import CaseStudies from "@/components/landing/case-studies";
import Faq from "@/components/landing/faq";
import Features from "@/components/landing/features";
import Footer from "@/components/landing/footer";
import Hero from "@/components/landing/hero";
import HowItWorks from "@/components/landing/how-it-works";
import Integrations from "@/components/landing/integrations";
import MobileApp from "@/components/landing/mobile-app";
import Navbar from "@/components/landing/navbar";
import Newsletter from "@/components/landing/newsletter";
import Pricing from "@/components/landing/pricing";
import Screenshots from "@/components/landing/screenshots";
import Security from "@/components/landing/security";
import Testimonials from "@/components/landing/testimonials";
import WhyMindDocs from "@/components/landing/why-minddocs";

export default function Home() {
  return (
    <main className="min-h-screen bg-white overflow-hidden">
      <div className="fixed inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] pointer-events-none z-0 opacity-10"></div>
      <Navbar />
      <Hero />
      <HowItWorks />
      <Features />
      <Screenshots />
      <MobileApp />
      <WhyMindDocs />
      <CaseStudies />
      <Security />
      <Testimonials />
      <Integrations />
      <Pricing />
      <Faq />
      <Newsletter />
      <About />
      <Footer />
    </main>
  );
}
