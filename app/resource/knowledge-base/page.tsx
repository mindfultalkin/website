"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import KnowledgeBase from "@/components/resource/adoption";

export default function KnowledgeBasePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-[60vh] flex flex-col items-center justify-center py-12">
        <KnowledgeBase />
      </main>
      <Footer />
    </>
  );
}
