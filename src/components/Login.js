import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
// import toast from "react-hot-toast";
import toast from "react-hot-toast";
const Signupform = () => {
  const Navigate = useNavigate();
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    createpassword: "",
    confirmpassword: "",
  });
  const [showpassword, setshowpassword] = useState(false);
  const [Accounttype, setAccounttype] = useState("");
  const [showconfirmpassword, setshowconfirmpassword] = useState(false);

  function changehandler(event) {
    setformdata((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  function submithandler(event) {
    event.preventDefault();

    if (formdata.createpassword !== formdata.confirmpassword) {
      toast.error("password do not match");
      return;
    }
    // setisloggedin((prev) => !prev);
    // toast.success("Account Created Successfully");
    // Navigate("/Dashboard");

    const accountdata = { ...formdata };
    const Finaldata = { ...accountdata, Accounttype };
    console.log(Finaldata);
  }
  return (
    <div className="flex justify-center items-center h-screen bg-slate-700">
      <form
        onSubmit={submithandler}
        // className=" flex flex-col w-full gap-1"
      >
        <div className="w-[400px] h-[100px]">
          <label>
            <p className="text-richblack-5 font-bold text-[0.875rem] mb-1 leading-[1.375rem] ">
              Email Address <sup className="text-pink-700">*</sup>
            </p>
            <input
              required
              type="email"
              value={formdata.email}
              onChange={changehandler}
              placeholder="Enter Email Address "
              name="email"
              className="w-full bg-richblack-800 px-2 py-2 rounded-full border border-blue-100"
            />
          </label>
        </div>

        <div className="w-[400px] h-[100px] flex flex-row  ">
          <div className="w-full">
            <label className="w-full relative">
              <p className="text-richblack-5 font-bold text-[0.875rem] mb-1 leading-[1.375rem] ">
                Password <sup className="text-pink-700">*</sup>
              </p>
              <input
                required
                type={showpassword ? "text" : "password"}
                value={formdata.createpassword}
                onChange={changehandler}
                placeholder="Enter Password"
                name="createpassword"
                className="w-full bg-richblack-800 px-2 py-2 rounded-full border border-blue-100"
              />
              <span
                className="absolute right-2 top-[35px] cursor-pointer"
                onClick={() => setshowpassword((prev) => !prev)}
              >
                {showpassword ? (
                  <AiOutlineEyeInvisible size={24} fill="#AFB2BF" />
                ) : (
                  <AiOutlineEye size={24} fill="#AFB2BF" />
                )}
              </span>
            </label>
          </div>
        </div>

        <button className=" py-[6px] px-4 rounded-md w-full mt-2 bg-indigo-600">
          <p className="text-richblack-800  font-semibold ">Login </p>
        </button>
        <div className="w-full flex flex-row  items-center my-2 gap-x-2">
          <div className=" w-full h-[1px] bg-richblack-700 leading-[1.375rem] "></div>
          <p className="text-richblack-200 ">OR</p>
          <div className="w-full h-[1px] bg-richblack-700 "></div>
        </div>
        <Link to="/signup">
          <button className=" py-[6px] px-4 rounded-md w-full mt-2 bg-yellow-400">
            <p className="text-richblack-800  font-semibold ">
              Create Account{" "}
            </p>
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Signupform;
