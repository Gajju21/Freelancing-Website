import React from "react";
import freeimg from "../images/Editor.png";
import clientimg from "../images/client.jpg";
import { useNavigate } from "react-router-dom";

const Category = () => {
  const Navigate = useNavigate();
  return (
    <div className="flex justify-start items-center flex-row h-screen w-screen bg-gray-800">
      <div className="justify-center items-center w-full h-full flex gap-8 border border-black  bg-neutral-600">
        <div
          className="flex flex-col justify-center cursor-pointer items-center border border-black rounded-md py-2 gap-3"
          onClick={() => {
            Navigate("/works");
          }}
        >
          <h1 className="font-bold text-xl text-white">Are You a Freelancer</h1>
          <img src={freeimg} className="w-[450px] h-[330px] rounded-md" />
          <p className="font-semibold text-white">
            bid a project that you have knowledge{" "}
          </p>
        </div>
        <div
          className="flex flex-col justify-center items-center cursor-pointer border rounded-md border-black  py-2 gap-3"
          onClick={() => {
            Navigate("/clients");
          }}
        >
          <h1 className="font-bold text-xl text-white">
            Client ,Hire a Freelancer
          </h1>
          <img src={clientimg} className="w-[450px] h-[330px]" />
          <p className="font-semibold text-white">
            Hire a Freelancer who complete your work
          </p>
        </div>
      </div>
    </div>
  );
};

export default Category;
