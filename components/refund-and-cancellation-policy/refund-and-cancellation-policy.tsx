import React from 'react';

const RefundAndCancellationPolicy: React.FC = () => {
    return (
        <div className="space-y-12 py-20 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Refund And Cancellation Policy

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
                <h2 className="text-2xl font-semibold text-gray-900">1. Coaching & Training Services</h2>
                <p className="text-gray-700">
                    All fees are payable in advance. No refunds after the first session. Sessions can be rescheduled with 24-hour notice.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">2. Online Courses</h2>
                <p className="text-gray-700">
                    Fees for digital courses are non-refundable once access is granted.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">3. Corporate or Technical Writing Services</h2>
                <p className="text-gray-700">
                    Each engagement follows its own agreement. Refunds depend on milestones completed.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">4. Exceptions</h2>
                <p className="text-gray-700">
                    Refunds only for duplicate payments or service cancellation by us before commencement.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">5. Contact for Refunds</h2>
                <p className="text-gray-700">
                    For refund queries, contact [insert official email] within 7 days of payment.
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

export default RefundAndCancellationPolicy;
