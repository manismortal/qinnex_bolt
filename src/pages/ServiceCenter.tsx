import React from 'react';
import { motion } from 'framer-motion';

const ServiceCenter: React.FC = () => {
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
      <h1 className="text-3xl font-bold mb-6 text-center">Service Center</h1>
      <p className="text-lg text-center mb-8">Welcome to the Service Center! Find answers to your questions and contact support.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <motion.div className="rounded-lg shadow-md overflow-hidden" variants={itemVariants}>
          <img src="https://images.pexels.com/photos/768114/pexels-photo-768114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="FAQ" className="w-full h-48 object-cover" />
          <div className="p-4 bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">FAQ</h2>
            <p className="text-gray-300">Find answers to frequently asked questions.</p>
          </div>
        </motion.div>
        <motion.div className="rounded-lg shadow-md overflow-hidden" variants={itemVariants}>
          <img src="https://images.pexels.com/photos/712513/pexels-photo-712513.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Contact Support" className="w-full h-48 object-cover" />
          <div className="p-4 bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">Contact Support</h2>
            <p className="text-gray-300">Contact our customer support team.</p>
          </div>
        </motion.div>
        <motion.div className="rounded-lg shadow-md overflow-hidden" variants={itemVariants}>
          <img src="https://images.pexels.com/photos/405746/pexels-photo-405746.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="Report Issue" className="w-full h-48 object-cover" />
          <div className="p-4 bg-gray-800">
            <h2 className="text-xl font-semibold mb-2">Report Issue</h2>
            <p className="text-gray-300">Report a problem or issue.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ServiceCenter;
