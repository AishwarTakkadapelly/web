import React from 'react';

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        <h1 className="md:text-4xl text-lg font-bold mb-6 text-theme1-primary md:text-center">Our Solutions</h1>
        <p className="md:text-lg text-base text-theme1-primary mb-6 md:text-center">
          MoveCloud offers a range of solutions to meet your cloud infrastructure needs. Our solutions are designed to provide the best performance, scalability, and security for your business.
        </p>

        <section className="mb-8">
          <h2 className="md:text-3xl text-base font-semibold mb-4 text-theme1-primary">Cloud Migration</h2>
          <p className="md:text-lg text-base text-theme1-primary mb-4">
            Seamlessly migrate your applications, data, and infrastructure to the cloud with our expert migration services. We ensure minimal downtime and disruption to your operations.
          </p>
          <ul className="md:text-lg text-base list-disc list-inside text-theme1-primary pl-4">
            <li className="mb-2">Comprehensive migration strategy</li>
            <li className="mb-2">Minimal downtime and disruption</li>
            <li className="mb-2">Secure and efficient data transfer</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="md:text-3xl text-base font-semibold mb-4 text-theme1-primary">Multi-Cloud Management</h2>
          <p className="md:text-lg text-base text-theme1-primary mb-4">
            Manage multiple cloud environments from a single platform. Our solution provides a unified interface to monitor and control your resources across different cloud providers.
          </p>
          <ul className="md:text-lg text-base list-disc list-inside text-theme1-primary pl-4">
            <li className="mb-2">Unified management interface</li>
            <li className="mb-2">Monitor and control resources</li>
            <li className="mb-2">Optimize cloud usage and costs</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="md:text-3xl text-base font-semibold mb-4 text-theme1-primary">Infrastructure Automation</h2>
          <p className="md:text-lg text-base text-theme1-primary mb-4">
            Automate the provisioning, scaling, and management of your cloud infrastructure. Our automation tools help you achieve greater efficiency and reduce operational overhead.
          </p>
          <ul className="md:text-lg text-base list-disc list-inside text-theme1-primary pl-4">
            <li className="mb-2">Automated provisioning and scaling</li>
            <li className="mb-2">Configuration management</li>
            <li className="mb-2">Infrastructure as code</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="md:text-3xl text-base font-semibold mb-4 text-theme1-primary">Security and Compliance</h2>
          <p className="md:text-lg text-base text-theme1-primary mb-4">
            Ensure your cloud environment is secure and compliant with industry standards. We provide tools and services to protect your data and maintain regulatory compliance.
          </p>
          <ul className="md:text-lg text-base list-disc list-inside text-theme1-primary pl-4">
            <li className="mb-2">Comprehensive security solutions</li>
            <li className="mb-2">Regulatory compliance support</li>
            <li className="mb-2">Continuous monitoring and assessment</li>
          </ul>
        </section>

        <div className="md:text-center">
          <p className="md:text-lg text-base text-theme1-primary">
            Discover how MoveCloud's solutions can help you achieve your business goals. Contact us today to learn more.
          </p>
          <button className="mt-4 bg-theme1-primary text-white py-2 px-4 rounded-lg hover:bg-theme1-primary focus:outline-none focus:ring focus:border-theme1-primary">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Solutions;
