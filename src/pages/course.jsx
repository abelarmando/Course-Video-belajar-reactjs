import { useParams } from "react-router-dom";
import Navbar from "../Components/Fragments/Navbar/Navbar";
import CourseLayouts from "../Components/Layouts/CourseLayouts";
import { useCourse } from "../../store";
import { useEffect } from "react";

function Course() {
  const { id, course } = useParams();
  const findproduct = useCourse((state) => state.findproduct);
  const findcourse = useCourse((state) => state.findcourse);
  const Materiid = useCourse((state) => state.Materiid);
  const findmateri = useCourse((state) => state.findmateri);
  const Courseid = useCourse((state) => state.Courseid);

  useEffect(() => {
    findproduct(id);
    findcourse(course);
    findmateri();
    // findmateri();
  }, [Materiid, Courseid]);
  // console.log(Materi);

  // console.log(Product);
  return (
    <>
      <Navbar />
      <CourseLayouts />
    </>
  );
}

export default Course;
