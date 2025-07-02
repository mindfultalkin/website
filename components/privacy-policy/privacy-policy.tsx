import React from 'react';

const PrivacyPolicy: React.FC = () => {
    return (
        <div className="space-y-12 py-20 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Privacy Policy
            </h1>

            <section className="space-y-4">
                <p className="text-gray-700">
                    This Privacy Policy governs the online information practices of MindfulTalk
                    (&ldquo;we&rdquo; or &ldquo;us&rdquo;) on our website. It explains what data
                    we collect, why we collect it, and how you can manage your privacy.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Personal Data We Collect</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>Name, email, and contact details you provide via forms or newsletter sign-ups.</li>
                    <li>IP address, browser type, device info, and usage data via cookies.</li>
                    <li>Comments you submit, along with your email hash and IP for spam detection.</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">How We Use Your Data</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                    <li>To deliver and maintain our services.</li>
                    <li>To respond to your inquiries and support requests.</li>
                    <li>To enhance your experience on our website.</li>
                    <li>To send updates and newsletters (opt-out available at any time).</li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Cookies</h2>
                <p className="text-gray-700">
                    We use cookies to improve your experience. You can disable cookies in your browser settings, but this may impact site functionality.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Embedded Content</h2>
                <p className="text-gray-700">
                    Our site may include embedded content (videos, images, etc.) from external websites. These sites may collect data about you.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Analytics</h2>
                <p className="text-gray-700">
                    We use Google Analytics to understand site usage. You can opt out via your browser settings.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Data Sharing</h2>
                <p className="text-gray-700">
                    We do not sell or rent your personal information. We may share aggregated, non-identifying data with trusted partners for analytical purposes.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Data Retention</h2>
                <p className="text-gray-700">
                    We retain your data only as long as necessary to fulfill the purposes described in this policy.
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

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">Changes to This Policy</h2>
                <p className="text-gray-700">
                    We may update this policy periodically. Updates will be posted here with a new effective date.
                </p>
            </section>

            <p className="text-gray-600 text-sm">
                <strong>Effective Date:</strong> 01 July 2025
            </p>
        </div>
    );
};

export default PrivacyPolicy;
