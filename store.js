import { create } from "zustand";
import axios from "axios";

const useProduct = create((set) => ({
  product: [],
  findproduct: async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_PRODUTS}${id}`
      );
      set({ product: response.data });
    } catch (error) {
      console.error(error);
    }
  },

  fetchProducts: async () => {
    try {
      const response = await axios.get(import.meta.env.VITE_API_PRODUTS);
      set({ product: response.data });
    } catch (error) {
      console.error(error);
    }
  },
}));

const useCourse = create((set) => ({
  Product: [],
  Materi: [],
  findproduct: async (id) => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_PRODUTS}${id}`
      );
      set({ Product: response.data });
    } catch (error) {
      console.error(error);
    }
  },
  findmateri: (courseid, materiid) =>
    set((state) => ({
      Materi: state.Product.course[courseid - 1].materi.find(
        (item) => item.id == materiid
      ),
    })),
}));

export { useProduct, useCourse };
