"use client"

import { useEffect, useRef } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function KnowledgeBaseCaseStudy() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const items = entry.target.querySelectorAll(".animate-on-scroll");
                        items.forEach((el, idx) => setTimeout(() => el.classList.add("animate"), idx * 200));
                    }
                });
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="container mx-auto space-y-16">
                {/* Hero */}
                <div className="text-center animate-on-scroll">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4">
                        Case Study: Self-Service Knowledge Base for Increased Product Adoption
                    </h1>
                    <h2 className="text-xl sm:text-2xl text-muted-foreground">
                        A Self-Service Documentation Knowledge Base for a Mediatech SaaS Platform
                    </h2>
                </div>

                {/* Introduction */}
                <div className="max-w-3xl mx-auto text-lg space-y-4 animate-on-scroll">
                    <p>
                        Our client is a fast-scaling mediatech SaaS company. The product owner had a clear vision that the product documentation must empower users to become self-reliant in using the product through an intuitive, well-structured documentation. The product was complex and feature-rich, requiring users to understand fundamental media-tech concepts before onboarding. Our mission was to build their documentation suite from the ground up and the educational content that equipped users to use the product effectively.
                    </p>
                </div>

                {/* Things That Made It Complicated */}
                <Card className="animate-on-scroll bg-gradient-to-br from-secondary/5 border border-secondary/20">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4">Things That Made It Complicated</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>The platform required a learning curve, as its features were built around domain-specific media workflows.</li>
                            <li>Features were continuously evolving during sprints, making traditional post-facto documentation ineffective.</li>
                            <li>The environment provided to us had multiple copyrighted media files listed that had to be handled correctly in screenshots and video capture.</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* How We Bridged the Concept And The Application */}
                <Card className="animate-on-scroll bg-gradient-to-br from-primary/5 border border-primary/20">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4">How We Bridged the Concept And The Application</h3>
                        <ol className="list-decimal list-inside space-y-2 text-lg">
                            <li><strong>Deep Immersion into Media Tech:</strong> We began by reading basic concepts on the internet, watched internal product explainer videos. This allowed us to get the underlying concepts of the product right.</li>
                            <li><strong>Reviews with SMEs:</strong> We documented our understanding of the concept, created visuals that could be used in the documents and later on in explainer videos. This was confirmed by the SMEs before continuing with further work and how-tos with the software.</li>
                            <li><strong>Sprint-Aligned Updates:</strong> At the end of each sprint, we presented updated documents reflecting the latest feature set. This agile-aligned documentation process ensured the features and documentation was always in-sync.</li>
                            <li><strong>Use-Case Driven Examples:</strong> To help users visualize application in real scenarios, we included sample use cases and walk-throughs. These ranged from basic onboarding flows to advanced configurations, increasing users' confidence in the product. We were also aware of copyright infringement that could result if we used the wrong examples or media samples in the screenshots, and were meticulous in checking to avoid them.</li>
                            <li><strong>Repurposing for Learning:</strong> The documented use cases were later transformed into audio scripts, forming the backbone of a certification course for end-users.</li>
                        </ol>
                    </CardContent>
                </Card>

                {/* What We Delivered */}
                <Card className="animate-on-scroll bg-gradient-to-br from-secondary/5 border border-secondary/20">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4">What We Delivered</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>End-to-end documentation written from scratch.</li>
                            <li>Concept primers and onboarding guides.</li>
                            <li>Feature manuals and quick-start tutorials.</li>
                            <li>Explainer videos for specific use-cases.</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* Tools Used */}
                <Card className="animate-on-scroll bg-gradient-to-br from-primary/5 border border-primary/20">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4">Tools Used</h3>
                        <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                            <li>Google Docs</li>
                            <li>Figma</li>
                            <li>TechSmith SnagIt</li>
                            <li>Canva</li>
                            <li>Docusaurus360</li>
                        </ul>
                    </CardContent>
                </Card>

                {/* A Knowledge Base That Drives Product Adoption */}
                <Card className="animate-on-scroll bg-gradient-to-br from-secondary/5 border border-secondary/20">
                    <CardContent className="p-8">
                        <h3 className="text-2xl font-semibold mb-4">A Knowledge Base That Drives Product Adoption</h3>
                        <p className="text-lg text-muted-foreground">
                            The documentation is now hosted in a user-friendly knowledge base, enabling customers to find solutions independently, reduce support tickets, and get the most out of the product. The structured, layered approach — from concepts to how-to manuals and also explainer videos helps end users understand the domain and use the product. This has resulted in increased product adoption, which defines the success for a product owner.
                        </p>
                    </CardContent>
                </Card>

                <div className="text-sm text-muted-foreground text-center">
                    Confidential | www.mindfultalk.in
                </div>
            </div>
        </section>
    );
}
