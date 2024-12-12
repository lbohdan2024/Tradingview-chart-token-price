"use client";
import React, { createContext, useContext, ReactNode } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface ToastContextType {
  toast: typeof toast;
}
interface ToastProviderProps {
  children: ReactNode;
}
const ToastContext = createContext<ToastContextType | undefined>(undefined);
export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => (
  <ToastContext.Provider value={{ toast }}>
    {children}
    <ToastContainer position="top-right" autoClose={3000} />
  </ToastContext.Provider>
);
const useToast = (): typeof toast => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context.toast;
};
export default useToast;







