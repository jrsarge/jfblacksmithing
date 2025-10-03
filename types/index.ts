import { type ProductCategory } from '@/lib/constants';

export interface Product {
  id: string;
  title: string;
  category: ProductCategory;
  images: string[];
  description: string;
  featured?: boolean;
  etsyUrl?: string;
  inStock?: boolean;
  priceRange?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  coverImage: string;
  category: string;
  tags: string[];
  author?: string;
  content?: string;
}

export interface ProductCard {
  image: string;
  title: string;
  category: string;
  description?: string;
  etsyUrl?: string;
}