import { useCourse } from "../../../store";
<<<<<<< HEAD
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
=======
import { useState } from "react";
import { useShallow } from "zustand/shallow";
import { useNavigate, useParams } from "react-router-dom";
import Icon_Arrow from "../Icon/Icon_Arrow";
import Course_Card from "./Card/Course_Card";
import Play from "../Icon/Play";
import Review_Rating from "./Review&Rating/Review_Rating";
function CourseMateri() {
  const Product = useCourse((state) => state.Product);
  const [Visibleitems, setVisibleitems] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  const toggleitem = (id) => {
    setVisibleitems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleclick = (materiid, courseid) => {
    // console.log(materiid, courseid);
    navigate(`/${id}/course/${courseid}/${materiid}`);
  };

  return (
    <div className="bg-white h-[1145px] border-[1px] border-[#F1F1F1] pt-3 sticky top-0 ">
      <h6 className="font-bold border-b-[1px] border-[#F1F1F1] py-6 pl-9">
        Daftar Modul
      </h6>

      <div className="overflow-y-scroll h-[1000px] flex flex-col pb-3">
        {Product.course &&
          Product.course.map((itemparent, i) => (
            <div>
              <div
                className="py-6 px-9 flex  justify-between items-center cursor-pointer"
                key={i}
                id={itemparent.id}
                onClick={() => toggleitem(itemparent.id)}
              >
                <h6 className="w-[250px]">{itemparent.judul}</h6>
                <Icon_Arrow />
              </div>
              <div className="px-9 space-y-3">
                {Visibleitems[itemparent.id]
                  ? ""
                  : itemparent.materi.map((item) => (
                      <Course_Card
                        text={item.title}
                        key={item.id}
                        handleclick={handleclick.bind(
                          null,
                          item.id,
                          itemparent.id
                        )}
                      >
                        <Play
                          width="20"
                          height="100"
                          stroke="black "
                          strokeWidth="4"
                        />
                      </Course_Card>
                    ))}
              </div>
            </div>
          ))}
      </div>
      <Review_Rating />
>>>>>>> course
    </div>
  );
}

export default CourseMateri;
