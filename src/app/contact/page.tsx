'use client';

import React, { useState, FormEvent } from 'react';

const ContactUsPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [statusMessage, setStatusMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => { // Make async
    event.preventDefault();
    setStatusMessage(''); // Clear previous status
    setIsLoading(true); // Set loading true

    // Basic validation
    if (!name || !email || !subject || !message) {
      setStatusMessage('Please fill out all fields.');
      setIsLoading(false); // Reset loading state on validation failure
      return;
    }

    // Send data to the API endpoint
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, subject, message }),
      });

      const result = await response.json();

      if (response.ok) {
        setStatusMessage('Message sent successfully!');
        // Clear the form
        setName('');
        setEmail('');
        setSubject('');
        setMessage('');
      } else {
        setStatusMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission error:', error);
      setStatusMessage('An error occurred. Please try again later.');
    } finally {
      setIsLoading(false); // Reset loading state
    }
  };

  return (
    <div className="container mx-auto px-4 pt-36 pb-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        className="max-w-lg mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg"
      >
        <div className="mb-6">
          <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="subject" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
            required
          />
        </div>
        <div className="mb-6">
          <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 dark:text-white"
            required
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className={`w-full bg-primary hover:bg-opacity-90 text-white py-2 px-6 rounded-full transition duration-300 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
        {statusMessage && (
          <p className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
            {statusMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactUsPage;