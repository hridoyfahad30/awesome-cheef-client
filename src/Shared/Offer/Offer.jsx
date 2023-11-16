import React from "react";
import { useState, useEffect } from "react";

const Offer = () => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const deadline = "August, 31, 2024";

  const getTime = () => {
    const time = Date.parse(deadline) - Date.now();

    setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
    setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
    setMinutes(Math.floor((time / 1000 / 60) % 60));
    setSeconds(Math.floor((time / 1000) % 60));
  };

  useEffect(() => {
    const interval = setInterval(() => getTime(deadline), 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto bg-[url('https://i.ibb.co/44pxhsz/Gro1.png')] bg-cover bg-no-repeat bg-fixed py-20 flex flex-col items-center justify-center shadow-2xl text-orange-500">
      <h1 className="text-2xl lg:text-6xl text-center font-bold my-12 animate-pulse border-4 border-orange-300 shadow-2xl p-4 rounded-2xl backdrop-blur-lg">Exclusive Offer</h1>
      <div className=" flex gap-2 lg:gap-4 justify-center items-center ">
        <h1 className="text-2xl lg:text-7xl font-bold border-4 p-6 rounded-2xl border-orange-700 backdrop-blur-md text-orange-500 shadow-2xl shadow-orange-400"> 
          <span> {days <= 9 ? "0" : ""}</span>
          {days}
        </h1>
        <h1 className="text-2xl lg:text-7xl font-bold">:</h1>
        <h1 className="text-2xl lg:text-7xl font-bold border-4 p-6 rounded-2xl border-orange-700 backdrop-blur-md text-orange-500 shadow-2xl shadow-orange-400">
          <span> {hours <= 9 ? "0" : ""}</span>
          {hours}
        </h1>
        <h1 className="text-2xl lg:text-7xl font-bold">:</h1>
        <h1 className="text-2xl lg:text-7xl font-bold border-4 p-6 rounded-2xl border-orange-700 backdrop-blur-md text-orange-500 shadow-2xl shadow-orange-400">
          <span>{minutes <= 9 ? "0" : ""}</span>
          {minutes}
        </h1>
        <h1 className="text-2xl lg:text-7xl font-bold">:</h1>
        <h1 className="text-2xl lg:text-7xl font-bold border-4 p-6 rounded-2xl border-orange-700 backdrop-blur-md text-orange-500 shadow-2xl shadow-orange-400">
          <span  className="animate-pulse">{seconds <= 9 ? "0" : ""}{seconds}</span>
        </h1>
      </div>
    </div>
  );
};

export default Offer;
