import Head from 'next/head';
import { motion } from 'framer-motion';

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

export default function SelfServiceKnowledgeBaseCaseStudyPage() {
  return (
    <>
      <Head>
        <title>Self-Service Knowledge Base – Mediatech SaaS Platform</title>
        <meta
          name="description"
          content="Case study on building a self-service knowledge base for a Mediatech SaaS platform to drive product adoption."
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
              Self-Service Knowledge Base for Increased Product Adoption
            </h1>
          </motion.header>

          <Section accent="primary">
            <p className="text-muted-foreground leading-relaxed">
              Our client is a fast-scaling mediatech SaaS company. The product owner had a clear vision that the product documentation must empower users to become self-reliant in using the product through an intuitive, well-structured documentation. The product was complex and feature-rich, requiring users to understand fundamental media-tech concepts before onboarding. Our mission was to build their documentation suite from the ground up and the educational content that equipped users to use the product effectively.
            </p>
          </Section>

          <Section accent="secondary">
            <h2 className="text-2xl font-semibold text-secondary">Things That Made It Complicated</h2>
            <p className="text-muted-foreground leading-relaxed">
              The product was a SaaS platform being developed using Agile Methodologies, plus it had a very niche media domain targeting a specific set of users. Some challenges that are a highlight during our engagement with the client were:
            </p>
            <ul className="list-inside space-y-2 text-muted-foreground">
              <li>The platform required a learning curve, as its features were built around domain-specific media workflows.</li>
              <li>Features were continuously evolving during sprints, making traditional post-facto documentation ineffective.</li>
              <li>The environment provided had multiple copyrighted media files that had to be handled correctly in screenshots and video captures.</li>
            </ul>
          </Section>

          <Section accent="primary">
            <h2 className="text-2xl font-semibold text-primary">How We Bridged the Concept and the Application</h2>
            <p className="text-muted-foreground leading-relaxed">
              The domain was a niche segment in the media industry. There was very little information publicly available on the internet. Our approach here was:
            </p>
            <ol className="list-inside space-y-3 text-muted-foreground">
              <li><strong className="text-primary">Deep Immersion into Media Tech:</strong> We began by reading basic concepts on the internet, watched internal product explainer videos. This allowed us to get the underlying concepts of the product right.</li>
              <li><strong className="text-primary">Reviews with SMEs:</strong> We documented our understanding of the concept, created visuals that could be used in the documents and later on in explainer videos. This was confirmed by the SMEs before continuing with further work and how-tos with the software.</li>
              <li><strong className="text-primary">Sprint-Aligned Updates:</strong> The SaaS software was being developed with Agile methodologies. At the end of each sprint, we presented updated documents reflecting the latest feature set. This agile-aligned documentation process ensured the features and documentation was always in-sync.</li>
              <li><strong className="text-primary">Use-Case Driven Examples:</strong> To help users visualize application in real scenarios, we included sample use cases and walk-throughs. These ranged from basic onboarding flows to advanced configurations, increasing users' confidence in the product. We were also aware of copyright infringement that could result if we used the wrong examples or media samples in the screenshots, and were meticulous in checking to avoid them.</li>
              <li><strong className="text-primary">Repurposing for Learning:</strong> The documented use cases were later transformed into audio scripts, forming the backbone of a certification course for end-users.</li>
            </ol>
          </Section>

          <Section accent="secondary">
            <h2 className="text-2xl font-semibold text-secondary">What We Delivered</h2>
            <p className="text-muted-foreground leading-relaxed">We were a team with engineering background, and with sufficient years of experience in various industries. This helped us to quickly grasp the nuances of this niche media tech domain and deliver</p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>End-to-end documentation written from scratch.</li>
              <li>Concept primers and onboarding guides.</li>
              <li>Feature manuals and quick-start tutorials.</li>
              <li>Explainer videos for specific use-cases.</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              The documentation is now hosted in a user-friendly knowledge base, enabling customers to find solutions independently, reduce support tickets, and get the most out of the product.
            </p>
          </Section>

          <Section accent="primary">
            <h2 className="text-2xl font-semibold text-primary">Tools Used</h2>
            <p className="text-muted-foreground">Google Docs, Figma, TechSmith SnagIt, Canva, Docusaurus360.</p>
          </Section>

          <Section accent="secondary">
            <h2 className="text-2xl font-semibold text-secondary">A Knowledge Base That Drives Product Adoption</h2>
            <p className="text-muted-foreground leading-relaxed">The documentation is now hosted in a user-friendly knowledge base, enabling customers to find solutions independently, reduce support tickets, and get the most out of the product. The structured, layered approach — from concepts to how-to manuals and also explainer videos helps end users understand the domain and use the product. This has resulted in increased product adoption, which defines the success for a product owner.</p>
          </Section>

          <footer className="text-center text-muted-foreground mt-12">
            Confidential | www.mindfultalk.in
          </footer>
        </div>
      </main>
    </>
  );
}
