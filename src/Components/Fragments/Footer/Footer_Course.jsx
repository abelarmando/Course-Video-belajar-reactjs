// import { useEffect, useState } from "react";
// import { useCourse } from "../../../../store";
// import { useParams } from "react-router-dom";
import Text_Pagination from "../../../Hooks/Text_Pagination";

function Footer_Course() {
  const { beforemateri, beforecourse, aftermateri, aftercourse, Product } =
    Text_Pagination();
  // cosole.log(Product.course[courseid - 1].materi);
  // console.log(beforecourse);

  return (
    <div className="bg-[#3ECF4C] flex justify-between items-center px-9 py-[18px] text-white">
      <div>
        <p>
          {/* {Product.course[beforecourse].materi[beforemateri] &&
            Product.course[beforecourse].materi[beforemateri].title} */}
        </p>
      </div>
      <div>
        <p>
          {Product.course &&
            Product.course[aftercourse] &&
            Product.course[aftercourse].materi[aftermateri].title}
        </p>
      </div>
    </div>
  );
}

export default Footer_Course;
