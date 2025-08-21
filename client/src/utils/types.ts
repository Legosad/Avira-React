export interface Product {
  img: string;
  rating: string;
  name: string;
  description: string;
  price: string;
  discounted: string;
  id: string;
  sizes: string[];
  selectedSize: string;
}
export interface CardProps {
    product:Product
}

export interface PriceDetailsProps{
 products: Product[]
}