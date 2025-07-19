import React from 'react';
import DepositForm from '../components/DepositForm';
import WithdrawalForm from '../components/WithdrawalForm';

const Wallet: React.FC = () => {
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Wallet</h1>
      <DepositForm />
      <WithdrawalForm />
    </div>
  );
};

export default Wallet;
