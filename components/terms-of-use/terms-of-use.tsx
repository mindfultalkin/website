import React from 'react';

const TermsOfUse: React.FC = () => {
    return (
        <div className="space-y-12 py-20 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Terms of Use

            </h1>

            <section className="space-y-4">
                <p className="text-gray-700">
                    Mindfultalk Consulting LLP
                </p>
            </section>

            {/* <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">1. Information We Collect</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>We collect personal details, payment information, session data, and recordings.</li>
                </ul>
            </section> */}

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">1. Introduction</h2>
                <p className="text-gray-700">
                    Welcome to Mindfultalk Consulting LLP (“we,” “our,” “us”). By accessing or using our website, online learning platform, or coaching services (“Services”), you agree to be bound by these Terms of Use. If you do not agree, please do not use our Services.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">2. Scope of Services</h2>
                <p className="text-gray-700">
                    We provide professional communication coaching, online courses via our LMS, and technical writing services for business clients.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">3. User Responsibilities</h2>
                <p className="text-gray-700">
                    Users must provide accurate information, use the Services lawfully, and not reproduce content without consent.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">4. Payment Terms</h2>
                <p className="text-gray-700">
                    All coaching and course payments are due in advance. Corporate and technical writing clients follow contract terms.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">5. Refunds & Cancellations</h2>
                <p className="text-gray-700">
                    Once payment is made and the first class has commenced, no refunds will be issued.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">6. Intellectual Property</h2>
                <p className="text-gray-700">
                    All course materials and recordings are the intellectual property of Mindfultalk Consulting LLP.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">7. Recordings & Usage</h2>
                <p className="text-gray-700">
                    Sessions may be recorded for internal or marketing use with data masking. Users can opt out via written notice.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">8. Confidentiality</h2>
                <p className="text-gray-700">
                    Client data will be kept confidential and not publicly disclosed.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">9. Limitation of Liability</h2>
                <p className="text-gray-700">
                    We are not liable for indirect or consequential damages arising from the use of our Services.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">10. Governing Law</h2>
                <p className="text-gray-700">
                    These Terms are governed by the laws of India and disputes fall under Bangalore jurisdiction.
                </p>
            </section>

            {/* <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Your Rights</h2>
                <p className="text-gray-700">
                    You can request access, correction, or deletion of your personal data. Contact
                    us at{' '}
                    <a
                        href="mailto:privacy@mindfultalk.in"
                        className="text-orange-500 hover:underline"
                    >
                        privacy@mindfultalk.in
                    </a>.
                </p>
            </section> */}

            <p className="text-gray-600 text-sm">
                <strong>Effective Date:</strong> 01 September 2025
            </p>
        </div>
    );
};

export default TermsOfUse;
