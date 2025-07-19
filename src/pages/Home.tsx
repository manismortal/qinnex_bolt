import React from 'react';
import { motion } from 'framer-motion';

const Home: React.FC = () => {
  const gameItems = [
    { id: 1, title: 'Sports Betting', description: 'Bet on your favorite sports teams!', imageUrl: 'https://images.pexels.com/photos/163473/stadium-football-lights-night-163473.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 2, title: 'Casino Games', description: 'Play exciting casino games and win big!', imageUrl: 'https://images.pexels.com/photos/4498147/pexels-photo-4498147.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 3, title: 'Live Betting', description: 'Experience the thrill of live betting!', imageUrl: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ];

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
      <h1 className="text-3xl font-bold mb-6 text-center">Welcome to Winnix</h1>
      <p className="text-lg text-center mb-8">Explore our exciting betting options!</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {gameItems.map((item) => (
          <motion.div
            key={item.id}
            className="rounded-lg shadow-md overflow-hidden"
            variants={itemVariants}
          >
            <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4 bg-gray-800">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-gray-300">{item.description}</p>
              <button className="mt-4 bg-primary text-white py-2 px-4 rounded hover:bg-secondary transition-colors duration-300">
                Explore
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Home;
