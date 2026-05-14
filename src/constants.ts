import { Category, Product } from "./types";

export const BUSINESS_NAME = "BLOSSOM MEE";
export const PHONE_NUMBER = "+2348106636673";
export const EMAIL = "meenatoyiza33@gmail.com";
export const ADDRESS = "Uyk Hexahub, Plot 1077A Balanga Cres, Garki, Abuja 900247, Federal Capital Territory";
export const CEO_NAME = "Amina Oyiza";

export const CATEGORIES: Category[] = [
  { id: "gadgets", name: "Gadgets", icon: "Smartphone", description: "Latest tech and gadgets" },
  { id: "men-acc", name: "Men Accessories", icon: "User", description: "Premium accessories for men" },
  { id: "women-acc", name: "Women Accessories", icon: "User2", description: "Elegant accessories for women" },
  { id: "kitchen", name: "Kitchen Items", icon: "Coffee", description: "Modern kitchen essentials" },
  { id: "fashion", name: "Fashion Collections", icon: "Shirt", description: "Trendy fashion pieces" },
  { id: "more", name: "More Quality Products", icon: "ShoppingBag", description: "Explore our full range" },
];

export const PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    price: "₦45,000",
    category: "Gadgets",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&q=80&w=800",
    description: "High-quality sound for your everyday needs."
  },
  {
    id: "2",
    name: "Luxury Wristwatch",
    price: "₦35,000",
    category: "Men Accessories",
    image: "https://images.unsplash.com/photo-1524592091214-8c6794628274?auto=format&fit=crop&q=80&w=800",
    description: "Timeless elegance on your wrist."
  },
  {
    id: "3",
    name: "Modern Kitchen Set",
    price: "₦28,000",
    category: "Kitchen Items",
    image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=800",
    description: "Upgrade your cooking experience."
  },
  {
    id: "4",
    name: "Designer Handbag",
    price: "₦52,000",
    category: "Women Accessories",
    image: "https://images.unsplash.com/photo-1584917469275-3adcb9378730?auto=format&fit=crop&q=80&w=800",
    description: "Carry your style everywhere."
  }
];

export const FEATURES = [
  { title: "Quality Guaranteed", icon: "Crown", description: "We only deal in original products." },
  { title: "Affordable Prices", icon: "Tag", description: "Luxury feel without the luxury price tag." },
  { title: "Fast Response", icon: "Zap", description: "Our team is always ready to assist you." },
  { title: "Trusted Service", icon: "ShieldCheck", description: "Thousands of happy customers served." },
  { title: "Secure Orders", icon: "Lock", description: "Your transactions are always safe." },
  { title: "Customer Satisfaction", icon: "Smile", description: "We prioritize your happiness." },
];
