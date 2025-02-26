import Text_Pagination from "../../../Hooks/Text_Pagination";

function Footer_Course() {
  const { beforemateri, beforecourse, aftermateri, aftercourse, Product } =
    Text_Pagination();
  console.log(beforecourse, beforemateri);
  return (
    <div className="bg-[#3ECF4C] flex justify-between items-center px-9 py-[18px] text-white">
      <div>
        <p>
          {Product.course &&
            beforecourse >= 0 &&
            beforemateri >= 0 &&
            Product.course[beforecourse].materi[beforemateri].title}
        </p>
      </div>
      <div>
        <p>
          {Product.length == undefined &&
            aftercourse < Product.course.length &&
            Product.course[aftercourse].materi[aftermateri].title}
        </p>
      </div>
    </div>
  );
}

export default Footer_Course;
