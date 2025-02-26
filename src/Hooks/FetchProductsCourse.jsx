import { useParams } from "react-router-dom";
import { useCourse } from "../../store";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";

function fetchProductsCourse() {
  const { id, courseid, materiid } = useParams();
  const { findproduct, findmateri } = useCourse(
    useShallow((state) => ({
      findproduct: state.findproduct,
      findmateri: state.findmateri,
    }))
  );

  useEffect(() => {
    async function fetchProducts() {
      try {
        await findproduct(id);
        findmateri(courseid, materiid);
      } catch (error) {
        console.error(error);
      }
    }

    fetchProducts();
  }, [courseid, materiid]);
}

export default fetchProductsCourse;
