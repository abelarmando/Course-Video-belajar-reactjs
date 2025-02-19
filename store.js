import { create } from "zustand";
import { Products } from "./src/Components/Data/Data";

const useProduct = create((set) => ({
  Product: [],
  findproduct: (id) =>
    set((state) => ({
      Product: Products.find((item) => item.id == id),
    })),
}));

const useCourse = create((set) => ({
  Product: [],
  Materi: [],

  findproduct: (id) =>
    set((state) => ({
      Product: Products.find((item) => item.id == id),
    })),
  findmateri: (courseid, materiid) =>
    set((state) => ({
      Materi: state.Product.course[courseid - 1].materi.find(
        (item) => item.id == materiid
      ),
    })),
}));

export { useProduct, useCourse };
