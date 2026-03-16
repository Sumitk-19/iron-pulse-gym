import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Trainers from "@/components/Trainers";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import ContactForm from "@/components/ContactForm";
import WhatsappButton from "@/components/WhatsappButton";
import StickyCTA from "@/components/StickyCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Trainers />
      <Pricing />
      <Reviews />
      <ContactForm />
      <WhatsappButton />
      <StickyCTA />
      <Footer />
    </main>
  );
}