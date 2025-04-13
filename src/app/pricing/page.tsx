import Link from 'next/link';

export default function PricingPage() {
  return (
    <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 mt-32">
      <h1 className="text-4xl font-bold text-center mb-12">Pricing Plans</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">

        {/* Free Plan Card */}
        <div className="border rounded-lg p-8 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Free</h2>
          <p className="text-3xl font-bold mb-6">$0</p>
          <ul className="list-disc list-inside mb-8 space-y-2 flex-grow">
            <li>View recipes instantly in a popup</li>
            <li>Works with any recipe website</li>
          </ul>
          <Link href="/recipe">
            <button className="w-full bg-primary text-white py-2 px-4 rounded-full hover:bg-opacity-90 transition duration-200">
              Get Started
            </button>
          </Link>
        </div>

        {/* Pro Plan Card */}
        <div className="border rounded-lg p-8 flex flex-col bg-gray-50 dark:bg-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Pro</h2>
          <p className="text-3xl font-bold mb-6">Coming Soon!</p>
          <ul className="list-disc list-inside mb-8 space-y-2 flex-grow">
            <li>Cook hands-free with our Voice Assistant</li>
            <li>Works with any recipe on YouTube</li>
          </ul>
          <button
            disabled
            className="w-full bg-gray-400 text-white py-2 px-4 rounded-full cursor-not-allowed"
          >
            Coming Soon
          </button>
        </div>

      </div>
    </div>
  );
}