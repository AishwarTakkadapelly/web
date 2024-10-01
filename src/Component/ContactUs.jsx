import React, { useState } from 'react';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [responseMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // makeApiCall('/resource',Method,body,)
  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   try {
  //     const response = await fetch('/api/contact', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify(formData)
  //     });
  //     const result = await response.json();
  //     if (result.success) {
  //       setResponseMessage('Your message has been sent successfully!');
  //     } else {
  //       setResponseMessage('Failed to send your message. Please try again later.');
  //     }
  //   } catch (error) {
  //     setResponseMessage('An error occurred. Please try again later.');
  //   }
  // };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4">
      <div className="bg-white p-8 text-theme1-primary rounded-lg shadow-lg w-full max-w-4xl">
        <h1 className="md:text-4xl text-lg font-bold mb-6  text-center">Contact Us</h1>
        <p className="md:text-lg text-base  mb-6 md:text-center">
          We'd love to hear from you! Please fill out the form below to get in touch with us.
        </p>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block  font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border border-theme1-primary rounded-lg "
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block  font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border border-theme1-primary rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="subject" className="block  font-medium mb-2">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              className="w-full px-3 py-2 border border-theme1-primary rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
          </div>
          <div className="md:col-span-2">
            <label htmlFor="message" className="block  font-medium mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border border-theme1-primary rounded-lg focus:outline-none focus:ring focus:border-blue-300"
              placeholder="Your Message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <div className="md:col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-theme1-primary text-theme1-primary-secoundary py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-800"
            >
              Send Message
            </button>
          </div>
        </form>
        {responseMessage && (
          <p className="mt-4 text-center">
            {responseMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
