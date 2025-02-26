import Play from "../Icon/Play";
import { useState } from "react";
import { useCourse } from "../../../store";

function CourseVideo() {
  const [play, setplay] = useState(false);
  const Materi = useCourse((state) => state.Materi);
  const Product = useCourse((state) => state.Product);
  // console.log(Product.course[1 - 1].materi.find((item) => item.id == 1));

  return (
    <div>
      <div className="relative">
        <div className="bg-black  w-full">
          {/* <video
            src="/videos/test_video.mp4"
            id="course-video"
            controls
            width={1600}
            height={760}
            onPause={() => setplay(false)}
            onPlay={() => setplay(true)}
          ></video> */}
          <iframe
            src="https://www.youtube.com/embed/G6D9cBaLViA"
            frameborder="0"
            width={"100%"}
            height={760}
          ></iframe>
        </div>

        {/* <div
          className={` absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
            play ? "hidden" : "block"
          }`}
          onClick={() => document.getElementById("course-video").play()}
        >
          <Play />
        </div> */}
      </div>

      <div className="px-[120px] py-9 space-y-6">
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
