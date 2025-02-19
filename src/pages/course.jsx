import { useParams } from "react-router-dom";
import { useCourse } from "../../store";
import { useShallow } from "zustand/react/shallow";
import { useEffect } from "react";
import Navbar from "../Components/Fragments/Navbar/Navbar";
import CourseLayouts from "../Components/Layouts/CourseLayouts";
import Footer_Course from "../Components/Fragments/Footer/Footer_Course";

function Course() {
  const { id, courseid, materiid } = useParams();
  const { findproduct, findmateri } = useCourse(
    useShallow((state) => ({
      findproduct: state.findproduct,
      findmateri: state.findmateri,
    }))
  );

  useEffect(() => {
    findproduct(id);
    findmateri(courseid, materiid);
  }, [courseid, materiid]);
  return (
    <>
      <Navbar />
      <CourseLayouts />
      <Footer_Course />
    </>
  );
}

export default Course;
