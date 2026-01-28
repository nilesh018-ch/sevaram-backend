import { createContext, useContext, useState, ReactNode } from "react";
import { products as initialData } from "@/lib/data";

interface Product {
  name: string;
  price: string;
  image: string;
  description: string;
  subCategory?: string;
}

interface Category {
  id: string;
  label: string;
  image: string;
  count: string;
  description: string;
}

interface Inquiry {
  id: number;
  name: string;
  email: string;
  company: string;
  message: string;
  date: string;
  status: 'pending' | 'accepted';
}

interface StoreContextType {
  categories: Category[];
  categoryProducts: Record<string, Product[]>;
  inquiries: Inquiry[];
  isAdmin: boolean;
  login: () => void;
  logout: () => void;
  addProduct: (categoryId: string, product: Product) => void;
  removeProduct: (categoryId: string, productName: string) => void;
  addCategory: (category: Category) => void;
  removeCategory: (categoryId: string) => void;
  addInquiry: (inquiry: Omit<Inquiry, 'id' | 'date' | 'status'>) => void;
  acceptInquiry: (id: number) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<Category[]>(initialData.categories);
  const [categoryProducts, setCategoryProducts] = useState<Record<string, Product[]>>(initialData.categoryProducts);
  const [isAdmin, setIsAdmin] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([
    {
      id: 1,
      name: "John Doe",
      email: "john@globaltrade.com",
      company: "Global Trade LLC",
      message: "Interested in bulk order of Bamboo Baskets.",
      date: "2025-10-25",
      status: 'pending'
    },
    {
      id: 2,
      name: "Sarah Smith",
      email: "sarah@organicfoods.eu",
      company: "Organic Foods Co",
      message: "Quote for 500kg Turmeric Powder.",
      date: "2025-10-26",
      status: 'accepted'
    }
  ]);

  const login = () => setIsAdmin(true);
  const logout = () => setIsAdmin(false);

  const addProduct = (categoryId: string, product: Product) => {
    setCategoryProducts(prev => ({
      ...prev,
      [categoryId]: [...(prev[categoryId] || []), product]
    }));
  };

  const removeProduct = (categoryId: string, productName: string) => {
    setCategoryProducts(prev => ({
      ...prev,
      [categoryId]: prev[categoryId].filter(p => p.name !== productName)
    }));
  };

  const addCategory = (category: Category) => {
    setCategories(prev => [...prev, category]);
    setCategoryProducts(prev => ({ ...prev, [category.id]: [] }));
  };

  const removeCategory = (categoryId: string) => {
    setCategories(prev => prev.filter(c => c.id !== categoryId));
    const newProducts = { ...categoryProducts };
    delete newProducts[categoryId];
    setCategoryProducts(newProducts);
  };

  const addInquiry = (data: Omit<Inquiry, 'id' | 'date' | 'status'>) => {
    const newInquiry: Inquiry = {
      ...data,
      id: Date.now(),
      date: new Date().toISOString().split('T')[0],
      status: 'pending'
    };
    setInquiries(prev => [newInquiry, ...prev]);
  };

  const acceptInquiry = (id: number) => {
    setInquiries(prev => prev.map(inq => 
      inq.id === id ? { ...inq, status: 'accepted' } : inq
    ));
  };

  return (
    <StoreContext.Provider value={{
      categories,
      categoryProducts,
      inquiries,
      isAdmin,
      login,
      logout,
      addProduct,
      removeProduct,
      addCategory,
      removeCategory,
      addInquiry,
      acceptInquiry
    }}>
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (context === undefined) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}
