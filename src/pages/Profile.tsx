import React from 'react';
import { useZustandStore } from '../stores/zustandStore';
import { motion } from 'framer-motion';

const Profile: React.FC = () => {
  const { user } = useZustandStore();

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

  const referralLink = `https://winnix.com/register?referral=${user?.id}`;

  return (
    <motion.div
      className="container mx-auto py-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-3xl font-bold mb-6 text-center">Your Profile</h1>
      <div className="bg-surface rounded-lg shadow-md p-8">
        <motion.div className="mb-4" variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-2">Username</h2>
          <p className="text-textSecondary">{user?.username}</p>
        </motion.div>
        <motion.div className="mb-4" variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-2">Email</h2>
          <p className="text-textSecondary">{user?.email}</p>
        </motion.div>
        <motion.div className="mb-4" variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-2">Balance</h2>
          <p className="text-textSecondary">${user?.balance}</p>
        </motion.div>
        <motion.div className="mb-4" variants={itemVariants}>
          <h2 className="text-xl font-semibold mb-2">Referral Link</h2>
          <p className="text-textSecondary">
            <a href={referralLink} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              {referralLink}
            </a>
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Profile;
