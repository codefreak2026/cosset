import LandingCarousel from "@/components/LandingCarousel";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Process from "@/components/Process";
import Projects from "@/components/Projects";
import Packages from "@/components/Packages";
import Testimonials from "@/components/Testimonials";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import PrivacyDisclaimer from "@/components/PrivacyDisclaimer";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <LandingCarousel />
      <Gallery />
      <About />
      <Process />
      {/* <Projects /> */}
      <Packages />
      {/* <Testimonials /> */}
      {/* <BlogSection /> */}
      <ContactSection />
      <PrivacyDisclaimer />
      <Footer />
    </>
  );
}
