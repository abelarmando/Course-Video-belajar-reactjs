import { useCourse } from "../../../store";
import Icon_Arrow from "../Icon/Icon_Arrow";

function CourseMateri() {
  const Product = useCourse((state) => state.Product);
  const Course = useCourse((state) => state.Course);
  console.log(Product.course);
  console.log(Course);
  return (
    <div className="bg-white h-full border-[1px] border-[#F1F1F1]">
      <h6 className="font-bold border-[1px] border-[#F1F1F1] py-6 pl-9">
        Daftar Modul
      </h6>
      {Product.course.map((item, i) => (
        <div
          className="py-6 px-9 flex  justify-between items-center"
          key={i}
          id={item.id}
        >
          <h6 className="w-[250px]">{item.judul}</h6>
          <Icon_Arrow />
        </div>
      ))}
    </div>
  );
}

export default CourseMateri;
