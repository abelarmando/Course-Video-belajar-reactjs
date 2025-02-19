import { useEffect, useRef, useState } from "react";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "../../../services/function_service";
import { updateuser } from "../../../services/users.function";

function Profile_Card() {
  const [user, setuser] = useState(getFromLocalStorage("user"));
  const emailref = useRef();
  const namaref = useRef();
  const nohpref = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      namaref.current.value ||
      emailref.current.value ||
      nohpref.current.value
    ) {
      updateuser(user.id, {
        name: namaref.current.value || user.name,
        email: emailref.current.value || user.email,
        number: nohpref.current.value || user.number,
      });
      saveToLocalStorage("user", {
        ...user,
        name: namaref.current.value || user.name,
        email: emailref.current.value || user.email,
        number: nohpref.current.value || user.number,
      });
    }
  };
  return (
    <div className="border-[1px] border-[#F1F1F1] rounded-md p-6 space-y-6 bg-white w-full">
      <div className="flex gap-5">
        <img src="/images/Icon/Avatar/Avatar-Profile.svg" alt="Profile" />
        <div>
          <h5>Nama</h5>
          <p>email</p>
          <p>Ganti Foto Profile</p>
        </div>
      </div>
      <hr />
      <form
        action=""
        className="space-y-6 w-[740px]"
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex gap-5">
          <div className="relative">
            <p className="absolute top-0 left-2 -translate-y-3 bg-white px-1">
              Nama Lengkap
            </p>
            <input
              type="text"
              placeholder={user.name}
              ref={namaref}
              className="outline-green-400 placeholder-black border-[1px] border-[#F1F1F1] rounded-md px-3 h-[50px]"
            />
          </div>
          <div className="relative">
            <p className="absolute top-0 left-2 -translate-y-3 bg-white px-1">
              Email
            </p>
            <input
              type="email"
              placeholder={user.email}
              ref={emailref}
              className="outline-green-400 placeholder-black border-[1px] border-[#F1F1F1] rounded-md px-3 h-[50px]"
            />
          </div>
          <div className="flex border-[1px] border-[#F1F1F1] rounded-md px-3 h-[10px]justify-between items-center ">
            <p>+62</p>
            <img
              src="/images/Icon/Icon/Icon_arrow.svg"
              alt="arrow"
              className="cursor-pointer"
            />
          </div>
          <div className="relative">
            <p className="absolute top-0 left-2 -translate-y-3 bg-white px-1">
              No. Hp
            </p>
            <input
              type="number"
              placeholder={user.number}
              ref={nohpref}
              className="outline-green-400 placeholder-black border-[1px] border-[#F1F1F1] rounded-md px-3 h-[50px] "
            />
          </div>
        </div>
        <div className="flex justify-end">
          <button className="bg-[#3ECF4C] rounded-md py-3 px-7 text-white ">
            Simpan
          </button>
        </div>
      </form>
    </div>
  );
}

export default Profile_Card;
