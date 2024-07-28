import React, { useState } from 'react';
import Navbar2 from './Navbar2';

const transactions = [
  { id: 1, date: '2024-01-15', type: 'Property Tax', amount: '₹500', status: 'Paid' },
  { id: 2, date: '2024-02-18', type: 'Water Tax', amount: '₹150', status: 'Pending' },
  { id: 3, date: '2024-03-10', type: 'Garbage Collection', amount: '₹50', status: 'Pending' },
  { id: 4, date: '2024-04-13', type: 'Property Tax', amount: '₹500', status: 'Paid' },
  { id: 5, date: '2024-05-19', type: 'Water Tax', amount: '₹150', status: 'Pending' },
  { id: 6, date: '2024-05-20', type: 'Garbage Collection', amount: '₹50', status: 'Pending' },
  { id: 7, date: '2024-05-21', type: 'Property Tax', amount: '₹500', status: 'Pending' },
  { id: 8, date: '2024-05-21', type: 'Water Tax', amount: '₹150', status: 'Paid' },
  { id: 9, date: '2024-05-22', type: 'Garbage Collection', amount: '₹50', status: 'Paid' },
  { id: 10, date: '2024-05-23', type: 'Property Tax', amount: '₹500', status: 'Paid' },
  { id: 11, date: '2024-05-23', type: 'Water Tax', amount: '₹150', status: 'Paid' },
  { id: 12, date: '2024-05-24', type: 'Garbage Collection', amount: '₹50', status: 'Pending' },
  { id: 13, date: '2024-05-24', type: 'Property Tax', amount: '₹500', status: 'Pending' },
  { id: 14, date: '2024-05-25', type: 'Water Tax', amount: '₹150', status: 'Paid' },
  { id: 15, date: '2024-05-25', type: 'Garbage Collection', amount: '₹50', status: 'Pending' },
];

const Transaction_History = () => {
  const [filter, setFilter] = useState('');
  const [search, setSearch] = useState('');
  const [filteredTransactions, setFilteredTransactions] = useState(transactions);

  const handleFilterChange = (event) => {
    const value = event.target.value;
    setFilter(value);
    applyFilters(value, search);
  };

  const handleSearchChange = (event) => {
    const value = event.target.value;
    setSearch(value);
    applyFilters(filter, value);
  };

  const applyFilters = (status, searchTerm) => {
    let filtered = transactions;

    if (status) {
      filtered = filtered.filter(transaction => transaction.status === status);
    }

    if (searchTerm) {
      filtered = filtered.filter(transaction => 
        transaction.type.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredTransactions(filtered);
  };

  return (
    <>
      <Navbar2 />
      <div className="bg-gray-100 min-h-screen py-8">
        <div className="max-w-6xl mx-auto p-6 bg-white shadow-md rounded-lg">
          <h1 className="text-3xl font-bold mb-6 text-center text-blue-800">Transaction History</h1>
          
          <div className="mb-4 flex justify-between items-center">
            <input 
              type="text"
              value={search}
              onChange={handleSearchChange}
              placeholder="Search by Type..."
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <select 
              value={filter}
              onChange={handleFilterChange}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            >
              <option value="">Filter by Status</option>
              <option value="Paid">Paid</option>
              <option value="Pending">Pending</option>
            </select>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full bg-white">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase">Date</th>
                  <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase">Type</th>
                  <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase">Amount</th>
                  <th className="py-2 px-4 border-b-2 border-gray-300 text-left text-sm font-semibold text-gray-600 uppercase">Status</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.map(transaction => (
                  <tr key={transaction.id} className="hover:bg-gray-100">
                    <td className="py-2 px-4 border-b border-gray-300">{transaction.date}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{transaction.type}</td>
                    <td className="py-2 px-4 border-b border-gray-300">{transaction.amount}</td>
                    <td className="py-2 px-4 border-b border-gray-300">
                      <span className={`px-2 py-1 rounded-full text-sm font-semibold ${transaction.status === 'Paid' ? 'bg-green-200 text-green-800' : 'bg-yellow-200 text-yellow-800'}`}>
                        {transaction.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Transaction_History;
