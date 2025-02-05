import { useState, useEffect } from "react";

function Progress({ total }) {
  return (
    <div className="bg-red-300 rounded-md w-[300px] h-2 max-md:w-full">
      <div
        className={`bg-red-500 rounded-md  h-2`}
        style={{ width: `${total}%` }}
      ></div>
    </div>
  );
}

export default Progress;
