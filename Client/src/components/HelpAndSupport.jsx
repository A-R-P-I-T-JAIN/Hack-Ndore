import React from 'react';
import './HelpAndSupport.css';

const HelpAndSupport = () => {
  return (
    <div className="help-support">
      <h1>Municipal Tax Payment Help and Support</h1>
      
      <section>
        <h2>Introduction</h2>
        <p>
          Welcome to the Municipal Tax Payment Help and Support Page. Here you will find all the resources and support you need to easily manage and pay your taxes online. Whether you need help navigating the portal, understanding your tax bill, or troubleshooting issues, we are here to assist you.
        </p>
      </section>
      
      <section>
        <h2>How to Pay Taxes Online</h2>
        <ol>
          <li><strong>Access the Tax Payment Portal</strong>
            <p>Go to the <a href="#">Municipal Tax Payment Portal</a>. Log in with your user ID and password.</p>
          </li>
          <li><strong>Select the Tax Category</strong>
            <p>Choose the type of tax you want to pay (e.g., property tax, water tax, garbage collection tax).</p>
          </li>
          <li><strong>Enter Payment Details</strong>
            <p>Fill in the required information such as property ID, tax amount, and payment method.</p>
          </li>
          <li><strong>Complete the Payment</strong>
            <p>Review your details and click 'Submit' to complete the payment. You will receive a confirmation email and a receipt for your records.</p>
          </li>
        </ol>
      </section>
      
      <section>
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq">
          <h3>How do I find my property ID?</h3>
          <p>Your property ID can be found on your previous tax bill or by searching your property records on the municipal portal.</p>
          
          <h3>What payment methods are accepted?</h3>
          <p>We accept credit/debit cards, net banking, and e-wallets.</p>
          <h3>why do i need to pay property tax</h3>
          <p>Paying property tax funds essential local services like public safety,
             education, and infrastructure maintenance. It ensures community development and legal compliance, benefiting all residents</p>
          <h3>is there any penalties for delay in the payment of tax ?</h3>
          <p>Yes, there are penalties for delaying property tax payments, which typically include fines and interest charges on the overdue amount. Continuous non-payment can also lead to legal actions by the municipal authorities.</p>
          <h3>How do I get a receipt for my payment?</h3>
          <p>After completing your payment, a receipt will be emailed to you. You can also download it from your payment history in the portal.</p>
        </div>
      </section>
      
      <section>
        <h2>Technical Support</h2>
        <p>For technical assistance, please contact our support team:</p>
        <ul>
          <li><strong>Phone:</strong> +1-234-567-890</li>
          <li><strong>Email:</strong> <a href="mailto:support@municipality.gov">support@municipality.gov</a></li>
          <li><strong>Live Chat:</strong> <a href="#">Start Chat</a></li>
          <li><strong>Support Ticket:</strong> <a href="#">Submit a Ticket</a></li>
        </ul>
      </section>
      
      <section>
        <h2>Feedback and Suggestions</h2>
        <p>We value your feedback! Please fill out our <a href="#">Feedback Form</a> to share your suggestions and help us improve our services.</p>
      </section>
      
      <section>
        <h2>Additional Resources</h2>
        <ul>
          <li><a href="#">Tax Calculation Tools</a></li>
          <li><a href="#">Policy Documents</a></li>
          <li><a href="#">Payment History and Receipts</a></li>
        </ul>
      </section>
    </div>
  );
}

export default HelpAndSupport;
