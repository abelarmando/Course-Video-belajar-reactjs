import { useEffect, useState } from "react";

function Countdown({ deadline }) {
  const [Datenow, setDatenow] = useState();
  const [Countdown, setCountdown] = useState(deadline);
  const [distance, setdistance] = useState();
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [minutes, setminutes] = useState(0);
  const [seconds, setseconds] = useState(0);

  useEffect(() => {
    const x = setInterval(() => {
      setDatenow(new Date().getTime());
      setdistance((Countdown - Datenow) / 1000);

      if (distance > 0) {
        setdays(Math.floor(distance / 60 / 60 / 24));
        sethours(Math.floor((distance / 60 / 60) % 24));
        setminutes(Math.floor((distance / 60) % 60));
        setseconds(Math.floor(distance % 60));
      } else {
        clearInterval(x);
      }
      //   console.log(seconds);
    }, 1000);

    return () => clearInterval(x);
  }, [Datenow]);

  return (
    <div className="bg-[#FEE8D2CC] py-3 flex items-center justify-center gap-2">
      <p>Selesaikan pemesanan dalam</p>
      <div className="rounded p-1 bg-red-500 w-8 h-8 text-center">{hours} </div>
      :
      <div className="rounded p-1 bg-red-500 w-8 h-8 text-center">
        {minutes}{" "}
      </div>
      :
      <div className="rounded p-1 bg-red-500 w-8 h-8 text-center">
        {seconds}
      </div>
    </div>
  );
}

export default Countdown;
