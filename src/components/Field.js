import React from "react";

import { useNavigate } from "react-router-dom";

const Field = () => {
  const Navigate = useNavigate();
  return (
    <div className="flex flex-col justify-center items-center gap-4  bg-gray-400">
      <div className="font-extrabold pt-4 text-xl text-amber-950">
        Find Job Category
      </div>
      <div className="flex flex-wrap w-[900px] justify-center items-center gap-2 pb-8 ">
        <div
          className="h-[260px] w-[290px] flex flex-col transition-all delay-75  bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white"
          onClick={() => Navigate("/signup")}
        >
          <h1 className="font-extrabold text-3xl  text-white">
            Web Development
          </h1>
          <p className="font-semibold">
            Web development encompasses the process of creating websites and web
            applications, ranging from simple static web pages to complex
            dynamic applications....
          </p>
        </div>
        <div
          className="h-[260px] w-[290px] flex flex-col transition-all delay-75  bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white"
          onClick={() => Navigate("/signup")}
        >
          <h1 className="font-extrabold text-3xl  text-white">Data Entry</h1>
          <p className="font-semibold">
            Earn money through data entry by offering accurate and efficient
            data input services to businesses and clients....
          </p>
        </div>
        <div
          onClick={() => {
            Navigate("/signup");
          }}
          className="h-[260px] w-[290px] flex flex-col transition-all delay-75  bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white"
        >
          <h1 className="font-extrabold text-3xl  text-white ">Accounting</h1>
          <p className="font-semibold">
            Accounting involves managing financial transactions and records to
            ensure accurate financial reporting and decision-making....
          </p>
        </div>
        <div
          onClick={() => {
            Navigate("/signup");
          }}
          className="h-[260px] w-[290px] flex flex-col transition-all delay-75  bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white "
        >
          <h1 className="font-extrabold text-3xl  text-white">
            App Development
          </h1>
          <p className="font-semibold">
            App development refers to the process of creating software
            applications for mobile devices, desktops, or other platforms....
          </p>
        </div>
        <div
          onClick={() => {
            Navigate("/signup");
          }}
          className="h-[260px] w-[290px] flex flex-col transition-all delay-75  bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white"
        >
          <h1 className="font-extrabold text-3xl  text-white">Data Science</h1>
          <p className="font-semibold">
            Data science encompasses a wide range of techniques and
            methodologies for extracting insights and value from data....
          </p>
        </div>
        <div
          onClick={() => {
            Navigate("/signup");
          }}
          className="h-[260px] w-[290px] flex flex-col transition-all delay-75  bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white"
        >
          <h1 className="font-extrabold text-3xl  text-white">Painting</h1>
          <p className="font-semibold">
            You can create custom artwork, illustrations, portraits, or digital
            art for clients, negotiate pricing based on project requirements,
            and build a portfolio to showcase your skills and attract potential
            clients....
          </p>
        </div>
        <div
          onClick={() => {
            Navigate("/signup");
          }}
          className="h-[260px] w-[290px] flex flex-col transition-all delay-75  bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white "
        >
          <h1 className="font-extrabold text-3xl  text-white">Blogging</h1>
          <p className="font-semibold">
            stay updated on industry trends, SEO best practices, and effective
            marketing strategies to grow your blog and increase revenue over
            time....
          </p>
        </div>
        <div
          onClick={() => {
            Navigate("/signup");
          }}
          className="h-[260px] w-[290px] flex flex-col transition-all delay-75  bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white "
        >
          <h1 className="font-extrabold text-3xl  text-white">Video Editing</h1>
          <p className="font-semibold">
            Video editing involves manipulating and rearranging video clips to
            create a cohesive and visually appealing final product....
          </p>
        </div>
        <div
          onClick={() => {
            Navigate("/signup");
          }}
          className="h-[260px] w-[290px] flex flex-col transition-all delay-75  bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white "
        >
          <h1 className="font-extrabold text-3xl  text-white">
            Social Media Manager
          </h1>
          <p className="font-semibold">
            A social media manager is responsible for managing and overseeing a
            company's presence on social media platforms to build brand
            awareness, engage with the audience, and drive traffic and sales....
          </p>
        </div>
        <div
          onClick={() => {
            Navigate("/signup");
          }}
          className="h-[260px] w-[290px] flex flex-col transition-all delay-75  bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white "
        >
          <h1 className="font-extrabold text-3xl  text-white">
            Graphic Designer
          </h1>
          <p className="font-semibold">
            A graphic designer is a creative professional who uses visual
            elements, typography, and layout techniques to communicate ideas and
            messages visually....
          </p>
        </div>
        <div
          onClick={() => {
            Navigate("/signup");
          }}
          className="h-[260px] w-[290px] flex flex-col bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white transition-all delay-75 "
        >
          <h1 className="font-extrabold text-3xl  text-white">
            Content Creator
          </h1>
          <p className="font-semibold">
            Earning money as a content creator involves creating valuable and
            engaging content across various platforms and monetizing your
            audience....
          </p>
        </div>
        <div
          onClick={() => {
            Navigate("/signup");
          }}
          className="h-[260px] w-[290px] flex flex-col bg-slate-600 hover:bg-pink-700  rounded-xl justify-between px-6 py-4  hover:text-white transition-all  delay-75"
        >
          <h1 className="font-extrabold text-3xl  text-white">Any Work</h1>
          <p className="font-semibold">
            Evaluate your interests, skills, and resources to determine which
            opportunities align best with your goals and aspirations. Keep
            exploring and experimenting until you find the right path for
            you!....
          </p>
        </div>
      </div>
    </div>
  );
};

export default Field;
