import { create } from "zustand";
import { Products } from "./src/Components/Data/Data";

const useProduct = create((set) => ({
  Product: [],
  oldproduct: Products,
  findproduct: (id) =>
    set((state) => ({
      Product: Products.find((item) => item.id == id),
    })),
}));

const useCourse = create((set) => ({
  Product: [],
  Course: [],
  Materi: [],
  Courseid: 1,
  Materiid: 1,
  findproduct: (id) =>
    set((state) => ({
      Product: Products.find((item) => item.id == id),
    })),
  setcourseid: (id) => set((state) => ({ Courseid: id })),
  findcourse: (id) =>
    set((state) => ({
      Course: state.Product.course.find((item) => item.id == id),
    })),

  findmateri: () =>
    set((state) => ({
      Materi: state.Course.materi.find((item) => item.id == state.Materiid),
    })),

  setmaterid: (id) => set((state) => ({ Materiid: id })),
}));

export { useProduct, useCourse };
