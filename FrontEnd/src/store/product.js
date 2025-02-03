//global state
import { create } from "zustand";

// create hook and make it useable in other files by adding export
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if(!newProduct.name || !newProduct.price || !newProduct.image) {
            return {success: false, message: "Please fill all the fields."}
        }
        const response = await fetch("/api/products", {
            
        })
    }, 
}));
