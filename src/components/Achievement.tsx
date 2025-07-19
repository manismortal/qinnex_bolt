import React from 'react';

interface AchievementProps {
  title: string;
  description: string;
  imageUrl: string;
}

const Achievement: React.FC<AchievementProps> = ({ title, description, imageUrl }) => {
  return (
    <div className="bg-surface rounded-lg shadow-md p-4">
      <img src={imageUrl} alt={title} className="w-full h-32 object-cover rounded-md mb-2" />
      <h3 className="text-lg font-semibold mb-1">{title}</h3>
      <p className="text-textSecondary">{description}</p>
    </div>
  );
};

export default Achievement;
