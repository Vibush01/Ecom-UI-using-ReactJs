import React from 'react';
import type { Product } from '../types';
import Badge from './Badge';
import Rating from './Rating';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden group transition-shadow duration-300 hover:shadow-xl">
      <div className="relative bg-[#F6F7F8] p-4 flex justify-center items-center h-60">
        <img src={product.imageUrl} alt={product.name} className="max-h-full max-w-full object-contain" />
        {product.isHot && <Badge text="HOT" />}
      </div>
      <div className="p-4 text-center">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{product.name}</h3>
        <div className="flex justify-center my-2">
          <Rating value={product.rating} />
        </div>
        <div className="flex justify-center items-center space-x-2">
          <span className="text-xl font-bold text-blue-600">${product.discountPrice?.toFixed(2)}</span>
          {product.price && (
            <span className="text-sm text-gray-400 line-through">${product.price.toFixed(2)}</span>
          )}
          {product.discountPercent && (
            <span className="text-sm font-bold text-red-500">{product.discountPercent}% Off</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;