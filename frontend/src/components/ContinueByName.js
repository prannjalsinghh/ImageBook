import { useNavigate } from "react-router-dom";
import React from "react";
import rightIcon from "../images/num-pad/arrow-right.png";
import { useForm } from "react-hook-form";
import axios from "axios";
import UserContext from "../store/userContext";
import { useContext } from "react";
import img from '../images/continuebyname.png';

const ContinueByName = ({ number }) => {
  const userCtx = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    const userName = data.firstName.trim() + " " + data.lastName.trim();

    const user = {
      number: number,
      name: userName,
    };
    axios.post('https://imagebook-digilabs.herokuapp.com/postUsers', user);


    fetch(`https://imagebook-digilabs.herokuapp.com/getUsers/${user.number}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log('data', data);

        userCtx.setLogin(data[0]);
        navigate("/home");
      });




  };

  return (
    <div className="flex flex-col justify-center h-screen -mt-10">
      <img className="w-48 mx-auto mb-6" src={img} alt="" />
      <p className="font-semibold text-[#00386D] text-lg ml-8 mb-2">
        Enter Your Name
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className=" mx-6">
        <input
          {...register("firstName")}
          className="w-full border-2 border-[#D3DBE3] rounded-[10px] h-12 pl-4 focus:outline-none mb-2"
          type="text"
          placeholder="First Name"
          name="firstName"
          id=""
          required
        />
        <input
          {...register("lastName")}
          className="w-full border-2 border-[#D3DBE3] rounded-[10px] h-12 pl-4 focus:outline-none mb-4"
          type="text"
          placeholder="Last Name"
          name="lastName"
          id=""
          required
        />
        <button
          type="submit"
          className=" flex items-center justify-center space-x-2 bg-[#1363DF] w-full h-[52px] rounded text-white font-semibold text-lg"
        >
          <p>Continue</p>
          <img src={rightIcon} alt="" />
        </button>
      </form>
    </div>
  );
};

export default ContinueByName;
