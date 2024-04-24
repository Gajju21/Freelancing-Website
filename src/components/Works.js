import React from "react";
import Freelancedata from "../Freelancersdata";

const works = () => {
  return (
    <div className="max-w-max max-h-max justify-center items-center  p-2 bg-emerald-900">
      <div className=" m-2 p-2 pl-16 text-amber-600 font-bold text-3xl  animate-bounce">
        Go with Your Skill And Contact Client .....
      </div>
      <div className=" flex flex-wrap w-[80%] justify-center items-center ">
        {Freelancedata.map((data) => {
          return (
            <div className="flex flex-col w-[300px] h-[300px] border m-2 p-3 rounded-lg gap-2 hover:bg-cyan-500 hover:text-black transition-all delay-75 cursor-pointer text-white">
              <h1 className="font-bold text-3xl animate-bounce">{data.name}</h1>
              <div className="font-serif">{data.info}</div>
              <div className="font-bold text-xl text-rose-800">
                paid you :{data.price}
              </div>
              <div className="font-semibold text-md ">{data.person}</div>

              <div> contact no.- {data.contect}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default works;
