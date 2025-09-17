export interface Product {
  id: number;
  name: string;
  price: number;
  discountPrice?: number; 
  discountPercent?: number; 
  rating: number;
  ratingCount: number;
  isHot: boolean;
  imageUrl: string;
  
}