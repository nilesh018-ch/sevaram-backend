import { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { products as initialData } from "@/lib/data";
import { io, Socket } from "socket.io-client";

/* ------------------ TYPES ------------------ */

export interface Product {
  name: string;
  price: string;
  image: string;
  description: string;
  subCategory?: string;
}

export interface Category {
  id: string;
  label: string;
  image: string;
  count: string;
  description: string;
}

export interface Inquiry {
  id: number;
  type: "inquiry" | "message";

  fullName: string;
  email: string;
  mobileNo?: string;
  whatsappNo?: string;
  company?: string;
  country?: string;

  productName?: string;
  quantity?: string;
  brand?: string;
  hsnCode?: string;
  targetPrice?: string;

  labTest?: string;
  certificate?: string;
  paymentTerms?: string;

  additionalRequirements?: string;
  message?: string;
  date: string;
  status: "pending" | "accepted" | "rejected";
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
  updateProduct: (categoryId: string, product: Product) => void; // ✅ added

  addCategory: (category: Category) => void;
  removeCategory: (categoryId: string) => void;

  addInquiry: (inquiry: Inquiry) => void;
  addMessage: (
    message: Omit<Inquiry, "id" | "date" | "status" | "type">
  ) => void;

  acceptInquiry: (id: number) => void;
  fetchInquiries: () => void;
  setInquiries: React.Dispatch<React.SetStateAction<Inquiry[]>>;
}

/* ------------------ CONTEXT ------------------ */

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: ReactNode }) {
  const [categories, setCategories] = useState<Category[]>(initialData.categories);
  const [categoryProducts, setCategoryProducts] = useState<Record<string, Product[]>>(initialData.categoryProducts);
  const [isAdmin, setIsAdmin] = useState(false);
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);

  let socket: Socket | null = null;

  /* ------------------ AUTH ------------------ */
  const login = () => setIsAdmin(true);
  const logout = () => setIsAdmin(false);

  /* ------------------ PRODUCT ------------------ */
  const addProduct = (categoryId: string, product: Product) => {
    setCategoryProducts((prev) => ({
      ...prev,
      [categoryId]: [...(prev[categoryId] || []), product],
    }));
  };

  const removeProduct = (categoryId: string, productName: string) => {
    setCategoryProducts((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId].filter((p) => p.name !== productName),
    }));
  };

  // ✅ updateProduct function
  const updateProduct = (categoryId: string, updatedProduct: Product) => {
    setCategoryProducts((prev) => ({
      ...prev,
      [categoryId]: prev[categoryId].map((p) =>
        p.name === updatedProduct.name ? updatedProduct : p
      ),
    }));
  };

  /* ------------------ CATEGORY ------------------ */
  const addCategory = (category: Category) => {
    setCategories((prev) => [...prev, category]);
    setCategoryProducts((prev) => ({ ...prev, [category.id]: [] }));
  };

  const removeCategory = (categoryId: string) => {
    setCategories((prev) => prev.filter((c) => c.id !== categoryId));
    const updated = { ...categoryProducts };
    delete updated[categoryId];
    setCategoryProducts(updated);
  };

  /* ------------------ INQUIRY ------------------ */
  const addInquiry = (inquiry: Inquiry) => {
    setInquiries((prev) => [inquiry, ...prev]);
  };

  const addMessage = (data: Omit<Inquiry, "id" | "date" | "status" | "type">) => {
    const newMessage: Inquiry = {
      ...data,
      id: Date.now(),
      type: "message",
      date: new Date().toISOString().split("T")[0],
      status: "pending",
    };
    setInquiries((prev) => [newMessage, ...prev]);
  };

  const acceptInquiry = (id: number) => {
    setInquiries((prev) =>
      prev.map((inq) => (inq.id === id ? { ...inq, status: "accepted" } : inq))
    );
  };

  /* ------------------ FETCH INQUIRIES FROM BACKEND ------------------ */
  const fetchInquiries = async () => {
    try {
      const res = await fetch("/api/admin/inquiries");
      if (!res.ok) throw new Error("Failed to fetch inquiries");
      const data: Inquiry[] = await res.json();
      setInquiries(data);
    } catch (err) {
      console.error(err);
    }
  };

  /* ------------------ LIVE UPDATES SOCKET.IO ------------------ */
  useEffect(() => {
    fetchInquiries(); // initial load
    const socket = io();

    socket.on("new-inquiry", (inquiry: Inquiry) => {
      setInquiries((prev) => [inquiry, ...prev]);
    });

    socket.on("update-inquiry", (updated: Inquiry) => {
      setInquiries((prev) => prev.map(i => i.id === updated.id ? updated : i));
    });

    return () => {
      socket?.disconnect();
    };
  }, []);

  return (
    <StoreContext.Provider
      value={{
        categories,
        categoryProducts,
        inquiries,
        isAdmin,
        login,
        logout,
        addProduct,
        removeProduct,
        updateProduct, // ✅ added
        addCategory,
        removeCategory,
        addInquiry,
        addMessage,
        acceptInquiry,
        fetchInquiries,
        setInquiries,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

/* ------------------ HOOK ------------------ */
export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within StoreProvider");
  }
  return context;
}
