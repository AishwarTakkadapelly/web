import React from 'react';

const Resources = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-theme1-primary flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl">
        <h1 className="md:text-4xl text-lg font-bold mb-6  md:text-center">Resources</h1>
        <p className="md:text-lg text-base  mb-6 md:text-center">
          Explore our comprehensive set of resources to help you get the most out of MoveCloud. From documentation to tutorials, we provide everything you need to succeed.
        </p>

        <section className="mb-8">
          <h2 className="md:text-3xl text-lg font-semibold mb-4">Documentation</h2>
          <p className="md:text-lg text-base mb-4">
            Our detailed documentation covers all aspects of MoveCloud, from setup to advanced configurations. Find step-by-step guides, API references, and troubleshooting tips.
          </p>
          <ul className="md:text-lg text-base list-disc list-inside  pl-4">
            <li className="mb-2">Getting Started Guide</li>
            <li className="mb-2">API Reference</li>
            <li className="mb-2">Configuration Examples</li>
            <li className="mb-2">Troubleshooting Tips</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="md:text-3xl text-base font-semibold mb-4">Tutorials</h2>
          <p className="md:text-lg text-base mb-4">
            Learn how to use MoveCloud with our comprehensive tutorials. Each tutorial provides step-by-step instructions to help you achieve your goals.
          </p>
          <ul className="md:text-lg text-base list-disc list-inside pl-4">
            <li className="mb-2">Deploying Applications</li>
            <li className="mb-2">Setting Up Continuous Integration</li>
            <li className="mb-2">Managing Multi-Cloud Environments</li>
            <li className="mb-2">Automating Infrastructure</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="md:text-3xl text-base font-semibold mb-4 ">Webinars</h2>
          <p className="md:text-lg text-base  mb-4">
            Join our webinars to get the latest updates and learn from our experts. We cover a wide range of topics to help you stay ahead in the cloud industry.
          </p>
          <ul className="md:text-lg text-base list-disc list-inside  pl-4">
            <li className="mb-2">Upcoming Webinars</li>
            <li className="mb-2">On-Demand Webinars</li>
            <li className="mb-2">Expert Q&A Sessions</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="md:text-3xl text-base font-semibold mb-4 ">Support</h2>
          <p className="md:text-lg text-base  mb-4">
            Our support team is here to help you with any issues you may encounter. Access our support portal to get in touch with our experts.
          </p>
          <ul className="md:text-lg text-base list-disc list-inside  pl-4">
            <li className="mb-2">24/7 Support Portal</li>
            <li className="mb-2">Community Forums</li>
            <li className="mb-2">Knowledge Base</li>
            <li className="mb-2">Contact Support</li>
          </ul>
        </section>

        <div className="md:text-center ">
          <p className="md:text-lg text-base">
            Discover more about MoveCloud's resources and how they can help you achieve your cloud goals. Contact us today to learn more.
          </p>
          <button className="mt-4 bg-theme1-primary text-theme1-primary-secoundary py-2 px-4 ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Resources;
