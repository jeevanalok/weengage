import Hero from "@/components/Hero";
import Features from "@/components/Features";
import UseCases from "@/components/UseCases";
import ContactForm from "@/components/ContactForm";
import Pricing from "@/components/Pricing";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
        <Features />
        <UseCases />
        <Pricing />
        <Testimonials />
        <ContactForm />
      </main>
    </div>
  );
}
