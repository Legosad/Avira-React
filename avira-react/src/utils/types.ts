export interface Products {
  img: string;
  rating: string;
  name: string;
  description: string;
  price: string;
  discounted: string;
  id: string;
}
export interface CardProps {
    product:Products, index: number
}