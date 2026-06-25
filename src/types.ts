export interface Product {
  id: string;
  name: string;
  tagline: string;
  category: 'Serum' | 'Cream' | 'Oil' | 'Mask' | 'Toner' | 'Cleanser';
  price: number;
  rating: number;
  reviewsCount: number;
  imageBg: string;
  imageUrl: string;
  badge?: string;
  description: string;
  keyIngredients: string[];
  benefits: string[];
  volume: string;
  howToUse: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface RoutineQuestion {
  id: number;
  question: string;
  options: {
    label: string;
    description: string;
    recommendedCategories: string[];
  }[];
}
