import Navbar from "../Components/Fragments/Navbar/Navbar";
import CourseLayouts from "../Components/Layouts/CourseLayouts";
import Footer_Course from "../Components/Fragments/Footer/Footer_Course";
import fetchProductsCourse from "../Hooks/FetchProductsCourse";

function Course() {
  fetchProductsCourse();
  return (
    <>
      <Navbar />
      <CourseLayouts />
      <Footer_Course />
    </>
  );
}

export default Course;
