import React from 'react';
import Navbar2 from './Navbar2';

const HelpAndSupport = () => {
  return (
    <>
      <Navbar2 />
      <div className="bg-gray-100 min-h-screen py-8 px-4 sm:px-8">
        <h1 className="text-3xl font-bold text-center text-blue-800 mb-8">Municipal Tax Payment Help and Support</h1>
        
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Introduction</h2>
          <p>
            Welcome to the Municipal Tax Payment Help and Support Page. Here you will find all the resources and support you need to easily manage and pay your taxes online. Whether you need help navigating the portal, understanding your tax bill, or troubleshooting issues, we are here to assist you.
          </p>
        </section>
        
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">How to Pay Taxes Online</h2>
          <ol className="list-decimal list-inside">
            <li className="mb-2">
              <strong>Access the Tax Payment Portal</strong>
              <p>Go to the <a href="#" className="text-blue-500 hover:underline">Municipal Tax Payment Portal</a>. Log in with your user ID and password.</p>
            </li>
            <li className="mb-2">
              <strong>Select the Tax Category</strong>
              <p>Choose the type of tax you want to pay (e.g., property tax, water tax, garbage collection tax).</p>
            </li>
            <li className="mb-2">
              <strong>Enter Payment Details</strong>
              <p>Fill in the required information such as property ID, tax amount, and payment method.</p>
            </li>
            <li className="mb-2">
              <strong>Complete the Payment</strong>
              <p>Review your details and click 'Submit' to complete the payment. You will receive a confirmation email and a receipt for your records.</p>
            </li>
          </ol>
        </section>
        
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Frequently Asked Questions (FAQs)</h2>
          <div className="faq space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-blue-600">How do I find my property ID?</h3>
              <p>Your property ID can be found on your previous tax bill or by searching your property records on the municipal portal.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">What payment methods are accepted?</h3>
              <p>We accept credit/debit cards, net banking, and e-wallets.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Why do I need to pay property tax?</h3>
              <p>Paying property tax funds essential local services like public safety, education, and infrastructure maintenance. It ensures community development and legal compliance, benefiting all residents.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">Is there any penalty for delay in the payment of tax?</h3>
              <p>Yes, there are penalties for delaying property tax payments, which typically include fines and interest charges on the overdue amount. Continuous non-payment can also lead to legal actions by the municipal authorities.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-blue-600">How do I get a receipt for my payment?</h3>
              <p>After completing your payment, a receipt will be emailed to you. You can also download it from your payment history in the portal.</p>
            </div>
          </div>
        </section>
        
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Technical Support</h2>
          <p>For technical assistance, please contact our support team:</p>
          <ul className="list-disc list-inside">
            <li><strong>Phone:</strong> +1-234-567-890</li>
            <li><strong>Email:</strong> <a href="mailto:support@municipality.gov" className="text-blue-500 hover:underline">support@municipality.gov</a></li>
            <li><strong>Live Chat:</strong> <a href="#" className="text-blue-500 hover:underline">Start Chat</a></li>
            <li><strong>Support Ticket:</strong> <a href="#" className="text-blue-500 hover:underline">Submit a Ticket</a></li>
          </ul>
        </section>
        
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Feedback and Suggestions</h2>
          <p>We value your feedback! Please fill out our <a href="#" className="text-blue-500 hover:underline">Feedback Form</a> to share your suggestions and help us improve our services.</p>
        </section>
        
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-700 mb-4">Additional Resources</h2>
          <ul className="list-disc list-inside">
            <li><a href="#" className="text-blue-500 hover:underline">Tax Calculation Tools</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Policy Documents</a></li>
            <li><a href="#" className="text-blue-500 hover:underline">Payment History and Receipts</a></li>
          </ul>
        </section>
      </div>
    </>
  );
}

export default HelpAndSupport;
