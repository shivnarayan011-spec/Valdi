export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'men' | 'women' | 'accessories';
  sizes: string[];
  colors: string[];
  image: string;
  images: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedSize: string;
  selectedColor: string;
}
