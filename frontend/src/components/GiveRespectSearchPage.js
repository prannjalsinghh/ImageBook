import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import leftIcon from "../images/Notifications/Left Icon.png";
import loveIcon from "../images/Home/Right Icon.png";
import notification from "../images/Home/Right Icon (1).png";
import person from "../images/Notifications/Vector.png";
import search from "../images/Notifications/search.png";
import ContactEach from "./ContactEach";
import { useState } from "react";
import ohNoImage from "../Assets/ohNoImage.png";
import add from '../Assets/add.png'
import 'react-phone-number-input/style.css'
import { isPossiblePhoneNumber } from 'react-phone-number-input'
import PhoneInput from 'react-phone-number-input'
import GiveRespectEachContact from "./GiveRespectEachContact";
import axios from "axios";

const GiveRespectSearchPage = () => {
  const location = useLocation();
  console.log(location.state.id);
  const arr = [
    {
      name: "Aarush Mishra",
      number: "+9189237348934",
      img: "https://media.istockphoto.com/photos/portrait-of-handsome-latino-african-man-picture-id1007763808?k=20&m=1007763808&s=612x612&w=0&h=q4qlV-99EK1VHePL1-Xon4gpdpK7kz3631XK4Hgr1ls=",
    },
    {
      name: "Bhageerathi Patel",
      number: "+9189237348934",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
    },
  ];
  
  const navigate = useNavigate();
  const [input, setInput] = useState("");
  const [searchResult,setSearchResult] =useState({});


  useEffect(()=>{
    onInputChange();
  },[input])

  const onInputChange = async ()=>{
    const res = await axios.get(`http://localhost:5000/searchUserPartialNumber/${input}`)
    const data = res.data;
    if(data){
      setSearchResult({
        name: data.name,
        number: data.number,
        img: data.image,
        registered:data.registered
      })
    }
    if(!data){
      setSearchResult(null)
    }
  }
  

  const goToNotifications = () => {
    navigate("/notifications");
  };
  const openContactHandler = () => {
    navigate("/contacts",{state:{id:'send'}});
  };
  const suggestNameHandler = ()=>{
    navigate('/suggestName',{state:{id:input,request:location.state.id}})
  }
  
  return (
    <div>
      <div className="w-11/12 mx-auto my-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/home">
              <img className="hover:cursor-pointer" src={leftIcon} alt="" />
            </Link>
            <Link to="/home">
              <p className="font-medium text-xl text-[#06283D]">ImageBook</p>
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            <img className="hover:cursor-pointer" src={loveIcon} alt="" />
            <img
              onClick={goToNotifications}
              className="hover:cursor-pointer"
              src={notification}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="">
        <div className="w-11/12 mx-auto mt-12 flex items-center space-x-3">
        <PhoneInput
            className="border-[2px] border-[#EBF1F4] rounded-[10px] p-[10px] h-12 text-lg"
            defaultCountry="IN"
            placeholder="Enter phone number"
            value={input}
            onChange={setInput}
          />
          <div
            className="w-[44px] h-12 shadow-lg rounded-xl flex items-center justify-center"
            onClick={openContactHandler}
          >
            <img src={person} alt="" />
          </div>
        </div>
        {!input && (
          <div className="flex flex-col items-center justify-center space-y-3 mt-24">
            <img src={search} alt="" />
            <p className="text-[#416C87] text-sm text-center">
              Search people by <br /> number
            </p>
          </div>
        )}
        {
          input && <div className=" w-11/12 mx-auto mt-[27px]">
          <p
            style={{ color: "#5E849C" }}
            className="text-sm font-semibold"
          >
            Suggested Results
          </p>
          
        </div>
        }
        {input?.length !== 0 &&
          arr.filter((obj) => obj.number.includes(input)).length !== 0 && (
            <>
              
              
              <div className="flex flex-col gap-3 mt-[20px]">
                {arr
                  .filter((obj) => obj.number.includes(input))
                  .map((each) => (
                    <GiveRespectEachContact item={each} />
                  ))}
              </div>
            </>
          )}
          {(input &&  arr.filter((obj) => obj.number.includes(input)).length === 0 && searchResult && searchResult.registered==true ) && <div className="mt-[20px]">
            
              <GiveRespectEachContact item={searchResult}/>
            </div>}
        {input && !searchResult && isPossiblePhoneNumber(input) &&
          arr.filter((obj) => obj.number.includes(input)).length === 0 && (
            <>
              <div className="w-11/12 flex flex-row justify-between items-center mt-[20px] mx-auto bg-[#F5F8FA] rounded-xl h-[70px] px-[15px]" onClick={suggestNameHandler}>
                  <div className="flex flex-col gap-0.5 ">
                    <p className="text-lg">{input}</p>
                    <p className="text-sm text-[#5E849C]">Unregistered</p>
                  </div>
                  <img src={add}/>
              </div>
            </>
          )}
      </div>
    </div>
  );
};

export default GiveRespectSearchPage;
