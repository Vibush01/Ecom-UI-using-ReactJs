import React from 'react';
import { Star } from 'lucide-react';

interface RatingProps {
  value: number; 
}

const Rating: React.FC<RatingProps> = ({ value }) => {
  return (
    <div className="flex items-center">
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <Star
            key={index}
            size={16}
            className={starValue <= value ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}
          />
        );
      })}
    </div>
  );
};

export default Rating;