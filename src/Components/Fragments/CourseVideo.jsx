import Play from "../Icon/Play";
import { useState } from "react";
import { useCourse } from "../../../store";
function CourseVideo({ idauthor, idcourse }) {
  const [play, setplay] = useState(false);
  const Materi = useCourse((state) => state.Materi);
  const Product = useCourse((state) => state.Product);
  console.log(Materi);
  console.log(Product);

  return (
    <div>
      <div className="relative">
        <video
          src="/videos/test_video.mp4"
          id="course-video"
          controls
          width={"100%"}
          onPause={() => setplay(false)}
          onPlay={() => setplay(true)}
        ></video>

        <div
          className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            play ? "hidden" : "block"
          }`}
          onClick={() => document.getElementById("course-video").play()}
        >
          <Play />
        </div>
      </div>

      <div className="px-[112px] py-9 space-y-6">
        <h4>{Materi.titlepage}</h4>
        <p>{Materi.text}</p>
        <div className="flex gap-3">
          <img src={Product.imgprofile} alt="" />
          <div>
            <p>{Product.author}</p>
            <p>
              {Product.position} di <span>{Product.work}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseVideo;
