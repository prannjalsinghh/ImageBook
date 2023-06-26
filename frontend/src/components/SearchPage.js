import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import leftIcon from "../images/Notifications/Left Icon.png";
import loveIcon from "../images/Home/Right Icon.png";
import notification from "../images/Home/Right Icon (1).png";
import person from "../images/Notifications/Vector.png";
import search from "../images/Notifications/search.png";
import ContactEach from "./ContactEach";
import ForNewUser from "./ForNewUser";
import PhoneInput from "react-phone-number-input";
import Search from "@mui/icons-material/Search";

const SearchPage = () => {
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
  const unreg = [
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
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState("");
  const [modalNumber, setModalNumber] = useState("");
  const goToNotifications = () => {
    navigate("/notifications");
  };
  const openContactHandler = () => {
    navigate("/contacts", { state: { id: 'search' } });
  };

  const modalOpenHandler = (number) => {
    setModalNumber(number);
    setModal(true);
  };

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
        <div className="w-11/12 mx-auto mt-12 flex justify-center items-center space-x-3">
          <div className="border-[2px] border-[#EBF1F4] rounded-[10px] p-[10px] h-12 text-lg flex ">
            <Search style={{ color: "#5E849C" }} />
            <input type="tel" style={{ outline: "none" }} className="placeholder-[#5E849C] w-[200px]" placeholder="Type Here" onChange={(e) => setInput(e.target.value)} />
          </div>
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
        {input?.length !== 0 &&
          unreg.filter((obj) => obj.number.includes(input)).length !== 0 &&
          arr.filter((obj) => obj.number.includes(input)).length !== 0 && (
            <>
              <div className="flex flex-row justify-between w-11/12 mx-auto mt-[27px]">
                <p
                  style={{ color: "#5E849C" }}
                  className="text-sm font-semibold"
                >
                  Contacts on ImageBook
                </p>
                <p style={{ color: "#47B5FF" }} className="text-sm underline">
                  View All
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-[20px]">
                {arr
                  .filter((obj) => obj.number.includes(input))
                  .map((each) => (
                    <ContactEach item={each} />
                  ))}
              </div>
            </>
          )}
        {input &&
          unreg.filter((obj) => obj.number.includes(input)).length === 0 &&
          arr.filter((obj) => obj.number.includes(input)).length === 0 && (
            <>
              <p
                style={{ color: "#5E849C" }}
                className="text-sm font-semibold ml-[20px] mt-[20px]"
              >
                Phonebook
              </p>
              <div onClick={(e) => modalOpenHandler(input)}>
                <div
                  style={{ backgroundColor: "#F5F8FA" }}
                  className="flex gap-2 w-11/12 mx-auto p-[12px]  rounded-xl"
                >
                  <img
                    style={{
                      borderRadius: "200px",
                      width: "60px",
                      height: "60px",
                      marginRight: "12px",
                    }}
                    src="https://i.stack.imgur.com/l60Hf.png"
                  />
                  <div>
                    <p className="text-lg">{input?.toString()}</p>
                    <p
                      style={{ backgroundColor: "#E8E8E8" }}
                      className="text-sm font-bold p-[4px] rounded-md w-fit"
                    >
                      Unregistered
                    </p>
                  </div>
                </div>
              </div>
            </>
          )}
      </div>
      {modal && <ForNewUser number={modalNumber} setModal={setModal} />}
    </div>
  );
};

export default SearchPage;
