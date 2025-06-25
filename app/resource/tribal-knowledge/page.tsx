"use client";

import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import TribalKnowledge from "@/components/resource/documentation";
import { use } from "react";

export default function TribalKnowledgePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-[60vh] flex flex-col items-center justify-center py-12">
        <TribalKnowledge />
      </main>
      <Footer />
    </>
  );
}
