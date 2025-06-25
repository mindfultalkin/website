import Head from 'next/head';
import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Section = ({ children, accent }: { children: React.ReactNode; accent?: 'primary' | 'secondary' }) => {
    const accentColor = accent === 'secondary' ? 'border-secondary/70' : 'border-primary/70';
    return (
        <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className={`rounded-xl p-10 space-y-6 border-l-4 ${accentColor}`}
        >
            {children}
        </motion.section>
    );
};

const CaseStudyImage = ({ src, alt }: { src: string; alt: string }) => (
    <motion.img
        src={src}
        alt={alt}
        className="rounded-xl w-full"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
    />
);

export default function SystemArchitectureCaseStudyPage() {
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
        <>
            <Head>
                <title>System Architecture Case Study</title>
                <meta
                    name="description"
                    content="A detailed case study on creating a system architecture document for embedded systems used in metro platform door control units."
                />
            </Head>
            <main className="py-20 px-6">
                <div className="mx-auto space-y-16">
                    <motion.header
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-center"
                    >
                        <h1 className="text-5xl font-extrabold text-primary tracking-tight">
                            System Architecture for a Metro Platform Door Control Unit
                        </h1>
                        <br />
                        <p className="text-lg sm:text-xl text-muted-foreground">
                            Our client, a niche embedded systems company, developed the electronics
                            and control logic behind automatic platform doors used in metro stations.
                            These doors are synchronized to work in sync with train arrivals to ensure
                            a controlled, reliable opening and closing of the doors.
                        </p>
                    </motion.header>

                    {/* The Challenge */}
                    <Section accent="secondary">
                        <h2 className="text-2xl font-semibold text-secondary">The Challenge</h2>
                        <p className="text-muted-foreground leading-relaxed">
                            While the engineering team had developed detailed system designs and component
                            specifications, the existing documentation was fragmented, highly technical, and
                            jargon-heavy.
                        </p>
                        <ul className="list-inside space-y-2 text-muted-foreground">
                            <li><strong className="text-primary">Engineering diagrams</strong> were distributed in various documents, and it was difficult to understand which one came before which.</li>
                            <li><strong className="text-primary">SME inputs</strong> had unexplained acronyms and domain-specific terms, making knowledge transfer to non-core teams difficult.</li>
                            <li>There was<strong className="text-primary"> no single source</strong> outlining how the system behaved under normal and error conditions or how maintenance should be approached.</li>
                            <li>The testing team was<strong className="text-primary"> outsourced.</strong>The communication between our client and the test team was partial, and both the teams didn’t have the complete information about the product - from installation to maintenance.</li>
                        </ul>
                        <p className="text-muted-foreground">Our task was to consolidate and translate this complexity into a <strong className="text-primary">cohesive, visual, and accessible System Architecture Document</strong> that could be used by engineering teams, maintenance crews, and future developers.</p>
                    </Section>

                    {/* Our Approach */}
                    <Section accent="primary">
                        <h2 className="text-2xl font-semibold text-primary">Our Approach</h2>
                        <ol className="list-inside space-y-2 text-muted-foreground">
                            <p className="text-muted-foreground">Our approach was to build a document from start to finish which would be a single source of all information.</p>
                            <li><strong className="text-primary">Start with a Visual Glossary:</strong> We developed a <strong>pictorial glossary</strong> of all hardware components and terms used by SMEs like the LED panel, connectors, cables with different configurations.This helped as a visual checklist of the components used in the installation too. Where relevant, we included labels on photos and diagrams to indicate where each component fit in the system.</li>
                            <li><strong className="text-primary">Macro to Micro:</strong> First, we explained the <strong>operational context</strong> — the metro station environment, the position of the embedded system, and the door control triggers .Then we<strong> zoomed in</strong>  on the specific electronic module developed by the client, covering hardware layout, interface dependencies, and internal control logic.</li>
                            <li><strong className="text-primary">Document the System Behavior.</strong> The crux of the document involved capturing how the system <strong>behaved in different states</strong> - the normal open and closing of the door, and the error states and their meaning, how to do the manual intervention - all complete with state diagrams.</li>
                            <li><strong className="text-primary">Capture Maintenance & Field Diagnostics:</strong> To support field engineers, we outlined the<strong> preventive maintenance schedule,</strong> listing which parts needed inspection or replacement at what intervals. For each hardware component, we added details like model numbers, access locations, and diagnostic procedures.</li>
                            </ol>
                    </Section>

                    {/* The Impact */}
                    <Section accent="secondary">
                        <h2 className="text-2xl font-semibold text-secondary">The Impact</h2>
                        <ul className="list-inside space-y-2 text-muted-foreground">
                            <li><strong className="text-primary">Improved handover</strong> to partner teams working on testing, integration, and installation.</li>
                            <li><strong className="text-primary">Faster onboarding</strong> of new engineers who could understand the system without multiple SME calls.</li>
                            <li><strong className="text-primary">Reduced dependency</strong> on tribal knowledge and verbal explanations from the core team.</li>
                            <li><strong className="text-primary">Better field readiness:</strong> Maintenance teams had one comprehensive guide instead of relying on scattered notes and PDF datasheets.</li>
                        </ul>
                    </Section>

                    {/* Key Takeaways */}
                    <Section accent="primary">
                        <h2 className="text-2xl font-semibold text-primary">Key Takeaways</h2>
                        <p className="text-muted-foreground">
                            For complex embedded systems, <strong className="text-secondary">contextualization is key.</strong> Once the context or the bigger
                            picture of where the system was deployed or intended to be deployed, it was easier to
                            explain the system and its behaviour. A <strong className='text-secondary'>visual glossary</strong> is essential when engineering
                            language becomes too dense when different teams are involved. The systems document also
                            included the maintenance path and was a complete reference manual for all audiences.
                        </p>
                    </Section>

                    <footer className="text-center text-muted-foreground mt-12">
                        Confidential | www.mindfultalk.in
                    </footer>
                </div>
            </main>
        </>
    );
}
