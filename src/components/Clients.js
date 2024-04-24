import React from "react";
import clientwork from "../clientwork";

const works = () => {
  return (
    <div className="max-w-max max-h-max justify-center items-center  p-2 bg-slate-700">
      <div className=" m-2 p-2 pl-16 text-amber-500 text-3xl font-bold   animate-bounce">
        Best Freelancers here .....
      </div>
      <div className=" flex flex-wrap w-[80%] justify-center items-center ">
        {clientwork.map((data) => {
          return (
            <div className="flex flex-col w-[300px] h-[300px] border m-2 p-3 rounded-lg gap-2 hover: transition-all delay-75 cursor-pointer hover:text-black hover:bg-white text-white">
              <h1 className="font-bold  text-3xl ">{data.person}</h1>
              <div className="font-medium ">{data.name}</div>
              <div className="font-bold text-xl text-rose-500">
                rating : {data.rating}
              </div>
              <div className="font-semibold text-md ">
                {" "}
                experience :{data.experience}
              </div>

              <div> contact no.- {data.contect}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default works;
