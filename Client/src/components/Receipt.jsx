// src/Receipt.js

import React from 'react';
// import jsPDF from 'jspdf';
// import html2canvas from 'html2canvas';
import './Receipt.css';

const Receipt = () => {
//   const downloadReceipt = () => {
//     const receipt = document.getElementById('receipt');
//     html2canvas(receipt).then((canvas) => {
//       const imgData = canvas.toDataURL('image/png');
//       const pdf = new jsPDF();
//       pdf.addImage(imgData, 'PNG', 10, 10);
//       pdf.save('receipt.pdf');
//     });
//   };

  return (
    <div className="receipt-container">
      <div className="receipt" id="receipt">
        <div className="receipt-header">
          <h2>Payment Receipt</h2>
          <p>Receipt #: 12345</p>
          <p>Date: 2024-07-27</p>
        </div>
        <div className="receipt-body">
          <p><strong>Paid by:</strong> John Doe</p>
          <p><strong>Property ID:</strong> ABC123</p>
          <p><strong>Payment Method:</strong> Credit Card</p>
          <p><strong>Taxes:</strong> $500.00</p>
          <p><strong>Penalty:</strong> $500.00</p>
          <p><strong>Total amount:</strong> $1000.00</p>


        </div>
        <div className="receipt-footer">
          <p>Thank you for your payment!</p>
        </div>
      </div>
      <button className="btn" >Download Receipt</button>
    </div>
  );
}

export default Receipt;
