import React from 'react';

const Platform = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-12 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="col-span-2">
          <h1 className="md:text-4xl text-lg font-bold mb-6 text-theme1-primary">An Introduction to MoveCloud Platform</h1>
          <p className="md:text-lg text-base theme1-text-primary mb-6">
            MoveCloud is a one-click platform that simplifies the creation and management of your infrastructure. A cloud platform enables businesses to rent access to computing resources on demand over the internet with pay-as-you-go pricing, rather than buying, installing, and managing their own data centers, servers, and software required to have these resources available on premises.
          </p>
          
          <h2 className="md:text-3xl text-base font-semibold mb-4 text-theme1-primary">How does MoveCloud work?</h2>
          <p className="md:text-lg text-base text-theme1-primary mb-6">
            MoveCloud creates a virtual pool of shared resources to provide compute, data storage, and network services over the internet. Customers can access resources on the cloud platform as needed, paying only for the resources they need. MoveCloud uses virtualization technologies to provide these services efficiently.
          </p>
          
          <h2 className="md:text-3xl text-base font-semibold mb-4 text-theme1-primary">Key Features</h2>
          <ul className="md:text-lg text-base list-disc list-inside mb-6 text-theme1-primary">
            <li className="mb-2">One-click infrastructure setup and management</li>
            <li className="mb-2">Supports multi-cloud environments</li>
            <li className="mb-2">Automated scaling and provisioning</li>
            <li className="mb-2">Integrated monitoring and alerting</li>
            <li className="mb-2">Cost optimization and management</li>
            <li className="mb-2">Security and compliance automation</li>
          </ul>
          
          <h2 className="md:text-3xl text-base font-semibold mb-4 text-theme1-primary">Supported Technologies</h2>
          <p className="md:text-lg text-base text-theme1-primary mb-6">
            MoveCloud integrates with various technologies to provide a robust infrastructure management experience. Some of the supported technologies include:
          </p>
          <ul className="md:text-lg text-base list-disc list-inside mb-6 text-theme1-primary">
            <li className="mb-2"><strong>Terraform:</strong> Infrastructure as code for defining and provisioning infrastructure using configuration files.</li>
            <li className="mb-2"><strong>Amazon Web Services (AWS):</strong> Deploy and manage applications on AWS's extensive cloud platform.</li>
            <li className="mb-2"><strong>Microsoft Azure:</strong> Seamless integration with Microsoft's cloud platform for deploying and managing applications.</li>
            <li className="mb-2"><strong>Google Cloud Platform (GCP):</strong> Leverage Google's powerful cloud infrastructure for deploying and managing applications.</li>
          </ul>

          <h2 className="md:text-3xl text-base font-semibold mb-4 text-theme1-primary">Why Choose MoveCloud?</h2>
          <p className="md:text-lg text-base text-theme1-primary mb-6">
            MoveCloud is designed to simplify and automate the complex tasks of infrastructure management, allowing you to focus on building and scaling your applications. Here are some reasons why you should choose MoveCloud:
          </p>
          <ul className="md:text-lg text-base list-disc list-inside mb-6 text-theme1-primary">
            <li className="mb-2">Unified platform for managing multi-cloud environments</li>
            <li className="mb-2">Automated and scalable infrastructure provisioning</li>
            <li className="mb-2">Integrated tools for monitoring, alerting, and cost management</li>
            <li className="mb-2">Security and compliance best practices built-in</li>
            <li className="mb-2">Easy-to-use interface with powerful capabilities</li>
          </ul>
          <p className="md:text-lg text-base text-theme1-primary">
            Join the many organizations that trust MoveCloud for their cloud infrastructure needs.
          </p>
        </div>
        <div className="col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-lg mb-6">
            <h3 className="md:text-2xl text-base font-bold mb-4 text-theme1-primary">Learn More</h3>
            <div className="mb-4">
              <h4 className="md:text-xl text-base font-semibold text-theme1-primary">Akamai Cloud Computing</h4>
              <p className="text-theme1-primary">
                Put applications and workloads close to your end users, no matter where they are in the world, with the world’s most distributed cloud platform.
              </p>
              <a href="#" className="md:text-lg text-sm text-theme1-secoundary hover:underline">Learn more</a>
            </div>
            <div className="mb-4">
              <h4 className="md:text-xl text-base font-semibold text-theme1-primary">Cloud Computing at the Edge</h4>
              <p className="md:text-lg text-base text-theme1-primary">
                Deliver faster and more reliable applications with edge computing solutions that bring computation and data storage closer to your users.
              </p>
              <a href="#" className="md:text-lg text-sm text-theme1-secoundary hover:underline">Learn more</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
