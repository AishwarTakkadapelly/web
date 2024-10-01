import React from 'react';

const Footer = () => {
  const footerLinks = [
    {
      title: 'MoveCloud',
      links: [
        { label: 'Pricing', href: '/pricing' },
        { label: 'Why MoveCloud?', href: '/why-movecloud' },
        { label: 'Free Account', href: '/free-account' },
      ],
    },
    {
      title: 'Platform',
      links: [],
    },
    {
      title: 'Company',
      links: [
        { label: 'About Us', href: '/about-us' },
        { label: 'Case Studies', href: '/case-studies' },
        { label: 'Careers', href: '/careers' },
        { label: 'Contact Us', href: '/contact-us' },
        { label: 'Partners', href: '/partners' },
        { label: 'Customers', href: '/customers' },
        { label: 'Trademark Policy', href: '/trademark-policy' },
        { label: 'Security', href: '/security' },
        { label: 'Legal', href: '/legal' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { label: 'Documentation', href: '/documentation' },
        { label: 'API', href: '/api' },
      ],
    },
  ];

  const policyLinks = [
    { label: 'Terms Of Service', href: '/terms-of-service' },
    { label: 'Privacy Policy', href: '/privacy-policy' },
    { label: 'Security', href: '/security' },
    { label: 'Cookie Settings', href: '/cookie-settings' },
  ];

  const socialLinks = [
    { platform: 'Github', href: 'https://github.com', icon: 'fab fa-github' },
    { platform: 'LinkedIn', href: 'https://linkedin.com', icon: 'fab fa-linkedin' },
    { platform: 'Facebook', href: 'https://facebook.com', icon: 'fab fa-facebook' },
    { platform: 'Instagram', href: 'https://instagram.com', icon: 'fab fa-instagram' },
    { platform: 'Twitter', href: 'https://twitter.com', icon: 'fab fa-twitter' },
  ];

  return (
    <footer className="bg-theme1-primary text-theme1-primary-secoundary py-10">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 p-6 md:p-8">
        {footerLinks.map((section, index) => (
          <div key={index}>
            <h2 className="font-bold mb-4 md:text-xl text-base">{section.title}</h2>
            <ul className="md:text-base text-sm">
              {section.links.map((link, idx) => (
                <li key={idx} className="mb-2">
                  <a href={link.href} className="hover:text-gray-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="container mx-auto mt-10 flex flex-col md:flex-row justify-between items-center text-sm p-6 md:p-8">
        <p>&copy; MoveCloud 2024</p>
        <div className="flex space-x-2 md:space-x-4 mt-4 md:mt-0">
          {policyLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="hover:text-gray-400">
              {link.label}
            </a>
          ))}
        </div>
        <div className="flex space-x-4 mt-4 md:mt-0">
          {socialLinks.map((social, idx) => (
            <a key={idx} href={social.href} className="hover:text-gray-400">
              <i className={social.icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
