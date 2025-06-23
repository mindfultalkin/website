import Head from 'next/head';
import { Card, CardContent } from '@/components/ui/card';

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
            <main className="mx-auto py-16 px-6 space-y-24">
                {/* Hero / Introduction */}
                <section className="text-center space-y-6 animate-on-scroll">
                    <h1 className="text-5xl font-extrabold">Codifying Expertise</h1>
                    <p className="text-2xl text-muted-foreground">
                        <strong>Replacing Tribal Know-How with Structured Documentation</strong>
                    </p>
                    <div className="prose prose-lg mx-auto">
                        <p>
                            Our client has a mature SaaS product in the production planning software for manufacturing
                            companies. The application incorporates the dynamics of the 3Ms – manpower, machine and
                            material to produce a plan and schedule that can be used on the factory floor for production.
                        </p>
                        <p>
                            When their engineering team provided just-in-time help documents to go along with their feature
                            release, their European customers rejected them. The need for cohesive and accurate
                            documentation became increasingly critical for client deployments, as well as for internal teams.
                        </p>
                    </div>
                </section>

                {/* Complexities Section */}
                <Card className="bg-primary/10 border border-primary/20 animate-on-scroll">
                    <CardContent>
                        <h2 className="text-3xl font-semibold mb-6">Complexities We Had To Navigate</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start space-x-4">
                                <div className="w-4 h-4 bg-primary rounded-full mt-2" />
                                <p>
                                    <strong>Product Expertise with a few employees:</strong> The application knowledge
                                    resided with a few SMEs and long-time employees, creating a bottleneck.
                                </p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-4 h-4 bg-primary rounded-full mt-2" />
                                <p>
                                    <strong>Limited or No Documentation:</strong> There was limited content to update or
                                    improve upon. The content available was mostly recordings of zoom meetings where a few
                                    team leads or SMEs have explained to new employees.
                                </p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-4 h-4 bg-primary rounded-full mt-2" />
                                <p>
                                    <strong>Complex and Multiple Features:</strong> The application was used within factory
                                    environments with multiple configurations and operational dependencies. This meant multiple
                                    features were available, each with various configurations.
                                </p>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="w-4 h-4 bg-primary rounded-full mt-2" />
                                <p>
                                    <strong>High Support Load:</strong> Frequent queries on setup and usage resulted in high
                                    support ticket volume.
                                </p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Discovery Process Section */}
                <Card className="bg-secondary/10 border border-secondary/20 animate-on-scroll">
                    <CardContent>
                        <h2 className="text-3xl font-semibold mb-6">From Discovery To Documentation</h2>
                        <ol className="list-decimal list-inside space-y-4 prose prose-lg">
                            <li>
                                <strong>Stakeholder Interviews:</strong> We interacted with SMEs and interviewed them to
                                extract functional and contextual knowledge about the application.
                            </li>
                            <li>
                                <strong>Application Immersion:</strong> Our team actively explored and interacted with the
                                application to understand its capabilities, user journey, and potential friction points.
                            </li>
                            <li>
                                <strong>Use Case Mapping:</strong> We identified where and how the application was used,
                                focusing on real-world industrial scenarios.
                            </li>
                            <li>
                                <strong>Factory Digital Twin:</strong> To give a context to the documentation, we created a
                                digital twin of a factory environment where the application was typically deployed. This
                                served as a running example throughout the documentation, helping readers visualize context,
                                workflows, and decisions.
                            </li>
                            <li>
                                <strong>Audience Analysis:</strong> We identified primary users of the documentation:
                                <ul className="list-disc list-inside mt-2 ml-6 space-y-1">
                                    <li>Implementation engineers at the customer location, needed installation and configuration guidance</li>
                                    <li>Internal teams for onboarding and knowledge transfer</li>
                                    <li>Support teams for troubleshooting</li>
                                </ul>
                            </li>
                            <li>
                                <strong>Interim Deliverables leading to CI/CD integration:</strong> We prioritized and delivered
                                focused documents for features with a high ticket count. After 12 months of engagement, the
                                documentation is aligned with the CI/CD pipeline and in sync with the releases.
                            </li>
                        </ol>
                    </CardContent>
                </Card>

                {/* Deliverables Section */}
                <Card className="border border-gray-200 animate-on-scroll">
                    <CardContent>
                        <h2 className="text-3xl font-semibold mb-6">What We Delivered</h2>
                        <div className="prose prose-lg space-y-4">
                            <p>
                                Our team consisting of senior tech writers who have been product owners and technical
                                managers in the past were able to seamlessly integrate into the client's project in no time.
                            </p>
                            <p>
                                The team interacted with the subject matter experts (SMEs) within the organization, asked
                                them questions, watched previous knowledge sharing videos, explored the application in
                                different use cases, and conducted research about products in a similar space. As a result,
                                we developed accurate, concise and visually appealing:
                            </p>
                            <ul className="list-disc list-inside ml-6 space-y-2">
                                <li>Installation and setup guides</li>
                                <li>Training Materials</li>
                                <li>Onboarding documents for Users and Employees</li>
                                <li>User guides with step-by-step scenarios</li>
                                <li>Features Notes with releases</li>
                            </ul>
                            <p>
                                Above all, we understood the application and domain and delivered the right documentation.
                                <strong>We delivered trust.</strong>
                            </p>
                        </div>
                    </CardContent>
                </Card>

                {/* Tools Used Section */}
                <section className="animate-on-scroll">
                    <h2 className="text-3xl font-semibold mb-4">Tools Used</h2>
                    <div className="flex flex-wrap gap-4">
                        {['Microsoft Word', 'Draw.io', 'Figma', 'TechSmith SnagIt', 'Docusaurus'].map((tool) => (
                            <span
                                key={tool}
                                className="px-3 py-1 border border-gray-300 rounded-full text-sm"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>
                </section>

                {/* Business Value Section */}
                <section className="flex flex-col md:flex-row items-center gap-12 animate-on-scroll">
                    <div className="md:w-1/2">
                        <img
                            src="/blog/codifying-expertise/turning-documentation-into-business-value.png"
                            alt="Turning Documentation Into Business Value"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 prose prose-lg">
                        <h2 className="text-3xl font-semibold mb-4">Turning Documentation Into Business Value</h2>
                        <p>
                            The impact of precise and complete documentation has been multi-fold.
                        </p>
                        <ul className="list-disc list-inside ml-6 space-y-2">
                            <li>
                                <strong>Reduced Support Load:</strong> Support tickets related to installation and setup
                                dropped to 40% within the first 6 months of the rollout of the documentation.
                            </li>
                            <li>
                                <strong>Faster Onboarding:</strong> New employees were able to get up to speed with the
                                application faster using structured learning materials.
                            </li>
                            <li>
                                <strong>Product Feedback Loop:</strong> The clarity brought by the documentation created a
                                channel for iterative improvement.
                            </li>
                            <li>
                                <strong>Increased Confidence for Next Steps:</strong> The results and approach has increased
                                the confidence of the customer. We now help strategize their content architecture and bring
                                the different pieces of information together.
                            </li>
                            <li>
                                <strong>Initiate Certification Program:</strong> The client plans to use these documents to
                                create a program for System integrators to be certified before they start to implement in
                                different locations.
                            </li>
                        </ul>
                    </div>
                </section>

                {/* Conclusion Section */}
                <section className="animate-on-scroll prose prose-lg">
                    <h2 className="text-3xl font-semibold mb-4">More Than Just Documentation</h2>
                    <p>
                        What began as a necessity, an item on the checklist, has turned into a huge value add for the
                        customer. The engagement has not only resulted in robust technical documentation but also empowered
                        internal teams, streamlined customer onboarding, and established a framework for ongoing application
                        refinement.
                    </p>
                    <p>
                        The customer also appreciates that the team has been a part-QA, a part UX team, providing them
                        appropriate feedback for increased product adoption. The confidence has led them to include us as part
                        of their information strategy.
                    </p>
                </section>

                {/* Footer */}
                <div className="text-center text-sm text-muted-foreground">
                    Confidential | www.mindfultalk.in
                </div>
            </main>
        </>
    );
}
