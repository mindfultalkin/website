import React from 'react';

const TermsOfService: React.FC = () => {
    return (
        <div className="space-y-12 py-20 px-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Terms of Service
            </h1>

            <section className="space-y-4">
                <p className="text-gray-700">
                    While using MindfulTalk (“we” or “us”) as a platform, you agree to the
                    following terms before accessing our website or services. Please read each
                    term carefully as they form a binding agreement between you and MindfulTalk.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                    1. Agreement Between You and MindfulTalk
                </h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                        <strong>1.1</strong> You must be of legal age to enter into a binding
                        contract.
                    </li>
                    <li>
                        <strong>1.2</strong> By using our services, you agree to all terms
                        stated on this page.
                    </li>
                    <li>
                        <strong>1.3</strong> We reserve the right to update these terms at any
                        time without prior notice.
                    </li>
                    <li>
                        <strong>1.4</strong> Continued use of the platform after changes implies
                        acceptance of the updated terms.
                    </li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">2. Usage Allowance</h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                        <strong>2.1</strong> You may not alter any part of the website or services.
                    </li>
                    <li>
                        <strong>2.2</strong> Access must be via our official channels only.
                    </li>
                    <li>
                        <strong>2.3</strong> Automated tools (bots, crawlers, spiders) are prohibited.
                    </li>
                    <li>
                        <strong>2.4</strong> You are responsible for any breach of these terms
                        and any resulting losses.
                    </li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                    3. Limitation of Liabilities
                </h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                        <strong>3.1</strong> We are not liable for any indirect or consequential
                        losses, including loss of profit, goodwill, or data.
                    </li>
                    <li>
                        <strong>3.2</strong> We do not guarantee uninterrupted or error-free service.
                    </li>
                    <li>
                        <strong>3.3</strong> We may suspend or discontinue services without notice.
                    </li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                    4. MindfulTalk’s Rights
                </h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                        <strong>4.1</strong> We may restrict or terminate your access if you violate
                        these terms.
                    </li>
                    <li>
                        <strong>4.2</strong> We may remove any content from our site at our discretion.
                    </li>
                    <li>
                        <strong>4.3</strong> We reserve the right to modify or cease services without prior notice.
                    </li>
                </ul>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900">
                    5. Ordering Content Through MindfulTalk
                </h2>
                <ul className="list-decimal list-inside space-y-2 text-gray-700">
                    <li>
                        <strong>5.1</strong> Our ordering system allows you to request content in a structured manner.
                    </li>
                    <li>
                        <strong>5.2</strong> You must provide all necessary details; incomplete info may delay delivery.
                    </li>
                    <li>
                        <strong>5.3</strong> If payment fails, the project will not start until resolved.
                    </li>
                    <li>
                        <strong>5.4</strong> Late payments may incur extra fees under applicable laws.
                    </li>
                    <li>
                        <strong>5.5</strong> Full payment is required before initiating any project.
                    </li>
                    <li>
                        <strong>5.6</strong> You must review and provide feedback within 2 days of delivery.
                    </li>
                    <li>
                        <strong>5.7</strong> We may issue promotional coupons with limited availability.
                    </li>
                    <li>
                        <strong>5.8</strong> We may update these terms at any time; please check before ordering.
                    </li>
                </ul>
            </section>
        </div>
    );
};

export default TermsOfService;
