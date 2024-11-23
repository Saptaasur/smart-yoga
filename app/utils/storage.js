// utils/storage.js

export const loadProductsFromLocalStorage = () => {
    if (typeof window !== "undefined") {
      const products = localStorage.getItem("products");
      return products ? JSON.parse(products) : [];
    }
    return [];
  };
  
  export const saveProductsToLocalStorage = (products) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("products", JSON.stringify(products));
    }
  };
  