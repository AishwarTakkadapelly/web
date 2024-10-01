import React from 'react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-12 px-4 text-theme1-primary">
      <div className="w-full max-w-6xl">
        <h1 className="md:text-4xl text-lg font-bold mb-6  md:text-center">Pricing</h1>
        <p className="md:text-lg text-base mb-6 md:text-center">
          MoveCloud offers flexible pricing plans to meet your needs. Whether you are a small startup or a large enterprise, we have a plan that fits your requirements.
        </p>

        <section className="mb-8">
          <h2 className="md:text-3xl text-base font-semibold mb-4 ">Free Tier</h2>
          <p className="md:text-lg  text-base mb-4">
            Get started with our free tier, perfect for small projects and testing. Enjoy limited access to our core features without any cost.
          </p>
          <ul className="md:text-lg  text-base list-disc list-inside  pl-4">
            <li className="mb-2">Limited access to core features</li>
            <li className="mb-2">5 GB of storage</li>
            <li className="mb-2">10,000 API requests per month</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="md:text-3xl text-base font-semibold mb-4 ">Standard Plan</h2>
          <p className="md:text-lg text-base mb-4">
            Our standard plan is ideal for growing businesses. Enjoy more resources and advanced features to support your growth.
          </p>
          <ul className="md:text-lg text-base list-disc list-inside  pl-4">
            <li className="mb-2">Access to advanced features</li>
            <li className="mb-2">50 GB of storage</li>
            <li className="mb-2">100,000 API requests per month</li>
            <li className="mb-2">$49 per month</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="md:text-3xl text-base font-semibold mb-4">Enterprise Plan</h2>
          <p className="md:text-lg text-base mb-4">
            Our enterprise plan is designed for large organizations with complex needs. Get access to all our features and premium support.
          </p>
          <ul className="md:text-lg text-base list-disc list-inside  pl-4">
            <li className="mb-2">Unlimited access to all features</li>
            <li className="mb-2">Unlimited storage</li>
            <li className="mb-2">Unlimited API requests</li>
            <li className="mb-2">Dedicated account manager</li>
            <li className="mb-2">Premium support</li>
            <li className="mb-2">Contact us for pricing</li>
          </ul>
        </section>

        <div className="md:text-center">
          <p className="md:text-lg text-base">
            Choose the plan that suits your needs and start leveraging the power of MoveCloud today. Contact us for more details.
          </p>
          <button className="mt-4 bg-theme1-primary text-theme1-primary-secoundary py-2 px-4 rounded-lg ">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
