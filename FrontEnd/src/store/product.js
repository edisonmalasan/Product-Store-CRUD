//global state
import { create } from "zustand";

// create hook and make it useable in other files by adding export
export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
}));

const [state, setState] = useState({})