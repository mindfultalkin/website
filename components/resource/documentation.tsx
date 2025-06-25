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

export default function DigitalTwinCaseStudyPage() {
  return (
    <>
      <Head>
        <title>Digital Twin Case Study – MindfulTalk</title>
        <meta
          name="description"
          content="A detailed case study on creating a digital twin to enable better documentation and onboarding for a SaaS manufacturing product."
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
              Codifying Expertise: Replacing Tribal Know-How with Structured Documentation
            </h1>
          </motion.header>

          <Section accent="primary">
            <p className="text-muted-foreground leading-relaxed">
              Our client has a mature SaaS product in the production planning software for manufacturing companies. The application incorporates the dynamics of the 3Ms - manpower, machine and material to produce a plan and schedule that can be used on the factory floor for production. When their engineering team provided just-in-time help documents to go along with their feature release, their European customers rejected them. The need for cohesive and accurate documentation became increasingly critical for client deployments, as well as for internal teams.
            </p>
          </Section>

          <Section accent="secondary">
            <h2 className="text-2xl font-semibold text-secondary">Complexities We Had To Navigate</h2>
            <p className="text-muted-foreground leading-relaxed">
              During the initial phase when we were getting comfortable with the product and domain, we came across a few complexities that we had to adopt, adapt and navigate to deliver value.
            </p>
            <ul className="list-inside space-y-2 text-muted-foreground">
              <li><strong className="text-primary">Product Expertise with a few employees:</strong> The application knowledge resided with a few SMEs and long-time employees, creating a bottleneck.</li>
              <li><strong className="text-primary">Limited or No Documentation:</strong> There was limited content to update or improve upon. The content available was mostly recordings of zoom meetings where a few team leads or SMEs have explained to new employees.</li>
              <li><strong className="text-primary">Complex and Multiple Features:</strong> The application was used within factory environments with multiple configurations and operational dependencies. This meant multiple features were available, each with various configurations.</li>
              <li><strong className="text-primary">High Support Load:</strong> Frequent queries on setup and usage resulted in high support ticket volume.</li>
            </ul>
          </Section>

          <Section accent="primary">
            <h2 className="text-2xl font-semibold text-primary">From Discovery To Documentation</h2>
            <p className="text-muted-foreground leading-relaxed">
              To build accurate, helpful documentation from scratch, we followed a structured, hands-on discovery and development process:
            </p>
            <ol className="list-inside space-y-3 text-muted-foreground">
              <li><strong className="text-primary">Stakeholder Interviews:</strong> We interacted with SMEs and interviewed them to extract functional and contextual knowledge about the application.</li>
              <li><strong className="text-primary">Application Immersion:</strong> Our team actively explored and interacted with the application to understand its capabilities, user journey, and potential friction points.</li>
              <li><strong className="text-primary">Use Case Mapping:</strong> We identified where and how the application was used, focusing on real-world industrial scenarios.</li>
              <li><strong className="text-primary">Factory Digital Twin:</strong> To give context to the documentation, we created a digital twin of a factory environment where the application was typically deployed. This served as a running example throughout the documentation, helping readers visualize context, workflows, and decisions.</li>
              <li><strong className="text-primary">Audience Analysis:</strong> We identified primary users of the documentation:
                <ul className="list-disc ml-6 space-y-1">
                  <li>Implementation engineers at the customer location, needed installation and configuration guidance</li>
                  <li>Internal teams for onboarding and knowledge transfer</li>
                  <li>Support teams for troubleshooting</li>
                </ul>
              </li>
              <li><strong className="text-primary">Interim Deliverables leading to CI/CD integration:</strong> We prioritized and delivered focused documents for features with a high ticket count. After 12 months of engagement, the documentation is aligned with the CI/CD pipeline and in sync with the releases.</li>
            </ol>
            {/* Our Approach Image */}
            <div className="flex justify-center my-6">
              <img
                src="/blog/codifying-expertise/our_approach.png"
                alt="Our Approach"
                className="max-w-3xl w-full rounded-xl"
              />
            </div>
          </Section>

          <Section accent="secondary">
            <h2 className="text-2xl font-semibold text-secondary">What We Delivered</h2>
            <p className="text-muted-foreground leading-relaxed">
              Our team consisting of senior tech writers who have been product owners and technical managers in the past were able to seamlessly integrate into the client's project in no time.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The team interacted with the subject matter experts (SMEs) within the organization, asked them questions, watched previous knowledge sharing videos, explored the application in different use cases, and conducted research about products in a similar space. As a result, we developed accurate, concise and visually appealing:
            </p>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              <li>Installation and setup guides</li>
              <li>Training Materials</li>
              <li>Onboarding documents for Users and Employees</li>
              <li>User guides with step-by-step scenarios</li>
              <li>Features Notes with releases</li>
            </ul>
            <p className="text-muted-foreground leading-relaxed">
              Above all, we understood the application and domain and delivered the right documentation. We delivered trust.
            </p>
          </Section>

          <Section accent="primary">
            <h2 className="text-2xl font-semibold text-primary">Tools Used</h2>
            <p className="text-muted-foreground">Microsoft Word, Draw.io, Figma, TechSmith SnagIt, Docusaurus</p>
          </Section>

          <Section accent="secondary">
            <h2 className="text-2xl font-semibold text-secondary">Turning Documentation Into Business Value</h2>
            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="md:w-1/4">
                <CaseStudyImage
                  src="/blog/codifying-expertise/turning-documentation-into-business-value.png"
                  alt="Turning Documentation Into Business Value"
                />
              </div>
              <div className="md:w-2/3 space-y-4 text-muted-foreground leading-relaxed">
                <p>The impact of precise and complete documentation has been multi-fold.</p>
                <ul className="list-inside space-y-2">
                  <li><strong className="text-primary">Reduced Support Load:</strong> Support tickets related to installation and setup dropped to 40% within the first 6 months of the rollout of the documentation.</li>
                  <li><strong className="text-primary">Faster Onboarding:</strong> New employees were able to get up to speed with the application faster using structured learning materials.</li>
                  <li><strong className="text-primary">Product Feedback Loop:</strong> The clarity brought by the documentation created a channel for iterative improvement.</li>
                  <li><strong className="text-primary">Increased Confidence for Next Steps:</strong> The results and approach has increased the confidence of the customer. We now help strategize their content architecture and bring the different pieces of information together.</li>
                  <li><strong className="text-primary">Initiate Certification Program:</strong> The client plans to use these documents to create a program for System integrators to be certified before they start to implement in different locations.</li>
                </ul>
              </div>
            </div>
          </Section>

          <Section accent="primary">
            <h2 className="text-2xl font-semibold text-primary">More Than Just Documentation</h2>
            <p className="text-muted-foreground leading-relaxed">
              What began as a necessity, an item on the checklist, has turned into a huge value add for the customer. The engagement has not only resulted in robust technical documentation but also empowered internal teams, streamlined customer onboarding, and established a framework for ongoing application refinement.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              The customer also appreciates that the team has been a part-QA, a part UX team, providing them appropriate feedback for increased product adoption. The confidence has led them to include us as part of their information strategy.
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
