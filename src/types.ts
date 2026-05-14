export interface Product {
  id: string;
  name: string;
  price: string;
  category: string;
  image: string;
  description: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  content: string;
}
