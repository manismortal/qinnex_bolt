import React from 'react';
import { motion } from 'framer-motion';

const VIPLounge: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.4,
        type: 'spring',
      },
    },
  };

  return (
    <motion.div
      className="container mx-auto py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">VIP Lounge</h1>
      <p className="text-lg text-center mb-8">Welcome to the VIP Lounge! Enjoy exclusive benefits and promotions.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div className="rounded-lg shadow-md overflow-hidden" variants={itemVariants}>
          <img src="https://images.pexels.com/photos/3952065/pexels-photo-3952065.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="High Betting Limits" className="w-full h-48 object-cover" />
          <div className="p-4 bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">High Betting Limits</h2>
            <p className="text-gray-300">Enjoy higher betting limits on all games.</p>
          </div>
        </motion.div>
        <motion.div className="rounded-lg shadow-md overflow-hidden" variants={itemVariants}>
          <img src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Personalized Support" className="w-full h-48 object-cover" />
          <div className="p-4 bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">Personalized Support</h2>
            <p className="text-gray-300">Get personalized support from our VIP customer service team.</p>
          </div>
        </motion.div>
        <motion.div className="rounded-lg shadow-md overflow-hidden" variants={itemVariants}>
          <img src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Exclusive Promotions" className="w-full h-48 object-cover" />
          <div className="p-4 bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">Exclusive Promotions</h2>
            <p className="text-gray-300">Access exclusive promotions and bonuses.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default VIPLounge;
