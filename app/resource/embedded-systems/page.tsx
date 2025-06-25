"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import EmbeddedSystems from "@/components/resource/complex-system";

export default function EmbeddedSystemsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-[60vh] flex flex-col items-center justify-center py-12">
        <EmbeddedSystems />
      </main>
      <Footer />
    </>
  );
}
