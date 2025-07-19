import React, { useState } from 'react';

const WithdrawalForm: React.FC = () => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle withdrawal logic here
    console.log('Withdrawing:', amount, 'via', paymentMethod);
  };

  return (
    <div className="bg-surface rounded-lg shadow-md p-8">
      <h2 className="text-xl font-bold mb-4">Withdraw Funds</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="amount" className="block text-textSecondary text-sm font-bold mb-2">
            Amount:
          </label>
          <input
            type="number"
            id="amount"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline bg-background border-border"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="paymentMethod" className="block text-textSecondary text-sm font-bold mb-2">
            Payment Method:
          </label>
          <select
            id="paymentMethod"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-text leading-tight focus:outline-none focus:shadow-outline bg-background border-border"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            <option value="">Select Payment Method</option>
            <option value="creditCard">Credit Card</option>
            <option value="paypal">PayPal</option>
            <option value="bitcoin">Bitcoin</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-primary hover:bg-primary-dark text-text font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Withdraw
        </button>
      </form>
    </div>
  );
};

export default WithdrawalForm;
