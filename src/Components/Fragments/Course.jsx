import { useState } from "react";

function Course({ Course }) {
  const [x, setx] = useState(true);
  const handleclick = (i) => {
    setx(!x);
    Course[i].isClicked = !Course[i].isClicked;
  };

  return (
    <div className="border-[1px] border-[#3A35411F] rounded-md p-6 bg-white space-y-3">
      <h3>Kamu akan Memplejari</h3>
      {Course.map((Course, i) => (
        <div className="space-y-3 cursor-pointer">
          <div key={i} onClick={() => handleclick(i)}>
            <p className="text-green-400 flex justify-between items-center">
              {Course.judul}

              <img
                src="./images/Icon/Icon/Pagination/Bottom_Vector.svg"
                alt="Bawah"
              />
            </p>
          </div>

          {Course.materi.map((x) => (
            <div
              className={` border-[1px] border-[#F1F1F1] rounded-md p-3 space-x-2 flex justify-between items-center ${
                Course.isClicked ? "block" : "hidden"
              }`}
            >
              <p>{x}</p>
              <div className="flex gap-2 max-md:hidden">
                <img src="./images/Icon/Icon/Video.svg" alt="" />
                <p>Video</p>

                <img src="./images/Icon/Icon/Clock.svg" alt="" />
                <p>12 Menit</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Course;
