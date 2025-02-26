import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCourse } from "../../store";

function Text_Pagination() {
  const Product = useCourse((state) => state.Product);
  const [beforemateri, setbeforemateri] = useState(0);
  const [beforecourse, setbeforecourse] = useState(0);
  const [aftermateri, setaftermateri] = useState(0);
  const [aftercourse, setaftercourse] = useState(0);
  const { courseid, materiid } = useParams();

  useEffect(() => {
    if (!Product.course) {
      setaftercourse(courseid);
      setaftermateri(materiid);
      setbeforecourse(courseid - 1);
      setbeforemateri(materiid - 2);
      return;
    }

    if (Product.course[courseid - 1].materi.length == materiid) {
      setaftercourse(courseid);
      setaftermateri(0);
    } else {
      setaftercourse(courseid - 1);
      setaftermateri(materiid);
    }

    if (materiid == 1) {
      setbeforecourse(courseid - 2);
      setbeforemateri(Product.course[courseid - 1].materi.length - 1);
    } else {
      setbeforecourse(courseid - 1);
      setbeforemateri(materiid - 2);
    }
  }, [courseid, materiid]);

  return { beforemateri, beforecourse, aftermateri, aftercourse, Product };
}

export default Text_Pagination;
