import CourseMateri from "../Fragments/CourseMateri";
import CourseVideo from "../Fragments/CourseVideo";

function CourseLayouts({ idauthor, idcourse }) {
  return (
    <div>
      <div className="flex gap-0">
        <div className="w-full ">
          <CourseVideo />
        </div>
        <div className="w-[500px]">
          <CourseMateri />
        </div>
      </div>
    </div>
  );
}

export default CourseLayouts;
