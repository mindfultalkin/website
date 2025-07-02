// app/privacy/page.tsx
import { Navigation } from "@/components/navigation";
import PrivacyPolicy from "@/components/privacy-policy/privacy-policy";
// import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <PrivacyPolicy />
      </div>

      {/* <TestimonialsSection /> */}
      <Footer />
    </main>
  );
}
