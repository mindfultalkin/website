"use client"

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function SystemArchitectureCaseStudy() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const elems = entry.target.querySelectorAll(".animate-on-scroll");
                        elems.forEach((el, i) => setTimeout(() => el.classList.add("animate"), i * 200));
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="container mx-auto space-y-16">
                {/* Hero */}
                <div className="text-center animate-on-scroll">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Case Study: System Architecture Document for Embedded Systems
                    </h1>
                    <p className="text-lg sm:text-xl text-muted-foreground">
                        System Architecture for a Metro Platform Door Control Unit<br />
                        Our client, a niche embedded systems company, developed the electronics
                        and control logic behind automatic platform doors used in metro stations.
                        These doors are synchronized to work in sync with train arrivals to ensure
                        a controlled, reliable opening and closing of the doors.
                    </p>
                </div>

                {/* The Challenge */}
                <div className="animate-on-scroll">
                    <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
                    <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                        <li>Engineering diagrams were distributed in various documents, making sequence unclear.</li>
                        <li>SME inputs had unexplained acronyms and domain-specific terms, hindering knowledge transfer.</li>
                        <li>No single source of truth for normal vs. error-state behaviors or maintenance procedures.</li>
                        <li>Outsourced testing team lacked complete product information, causing integration gaps.</li>
                    </ul>
                    <p className="mt-4 text-lg text-muted-foreground">
                        Our task was to consolidate and translate this complexity into a cohesive,
                        visual, and accessible System Architecture Document for engineering teams,
                        maintenance crews, and future developers.
                    </p>
                </div>

                {/* Our Approach */}
                <div className="animate-on-scroll space-y-6">
                    <h2 className="text-2xl font-semibold mb-2">Our Approach</h2>
                    <p className="text-lg text-muted-foreground">
                        Our approach was to build a document from start to finish as a single source
                        of all system information:
                    </p>
                    <ol className="list-decimal list-inside space-y-2 text-lg text-muted-foreground">
                        <li>
                            <strong>Visual Glossary:</strong> Developed a pictorial glossary of hardware
                            components (LED panels, connectors, cables) with labeled photos and diagrams.
                        </li>
                        <li>
                            <strong>Macro to Micro:</strong> Explained the metro station environment and
                            door-control triggers before zooming into the electronic module’s hardware layout
                            and control logic.
                        </li>
                        <li>
                            <strong>System Behavior:</strong> Captured normal open/close cycles and error states
                            with detailed state diagrams and manual intervention procedures.
                        </li>
                        <li>
                            <strong>Maintenance & Diagnostics:</strong> Outlined preventive maintenance schedules,
                            component model numbers, access points, and field diagnostic steps.
                        </li>
                    </ol>

                    {/* Diagrams Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {[
                            { src: "/diagrams/visual-glossary.svg", alt: "Visual Glossary" },
                            { src: "/diagrams/context-overview.svg", alt: "Macro to Micro" },
                            { src: "/diagrams/state-diagram.svg", alt: "System Behavior" },
                            { src: "/diagrams/maintenance-checklist.svg", alt: "Maintenance & Diagnostics" },
                        ].map((img, idx) => (
                            <Card key={idx} className="bg-transparent border border-primary/20 animate-on-scroll">
                                <CardContent className="p-4 flex justify-center">
                                    <img src={img.src} alt={img.alt} className="w-full h-auto object-contain" />
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* The Impact */}
                <div className="animate-on-scroll">
                    <h2 className="text-2xl font-semibold mb-4">The Impact</h2>
                    <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                        <li>Streamlined handover to testing, integration, and installation teams.</li>
                        <li>Faster onboarding of new engineers with reduced SME dependency.</li>
                        <li>Reduced tribal-knowledge reliance through a single comprehensive guide.</li>
                        <li>Enhanced field readiness and maintenance efficiency.</li>
                    </ul>
                </div>

                {/* Key Takeaways */}
                <div className="animate-on-scroll">
                    <h2 className="text-2xl font-semibold mb-4">Key Takeaways</h2>
                    <p className="text-lg text-muted-foreground">
                        For complex embedded systems, contextualization is key. A clear, visual representation
                        of the operating environment simplifies system explanations for diverse teams. A visual
                        glossary bridges jargon gaps, and consolidated documentation serves as the definitive
                        operational manual across engineering, testing, and field maintenance.
                    </p>
                </div>

                <p className="text-center text-sm text-muted-foreground">
                    Confidential | www.mindfultalk.in
                </p>
            </div>
        </section>
    );
}
