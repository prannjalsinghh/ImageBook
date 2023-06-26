import Navigator from "../components/Navigator";
import SearchIcon from "@mui/icons-material/Search";
import ContactEach from "../components/ContactEach";
import { useEffect, useState } from "react";
import PersonIcon from "@mui/icons-material/Person";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import ForNewUser from "../components/ForNewUser";
import GiveRespectEachContact from "../components/GiveRespectEachContact";
import RespectModal from "../components/RespectModal";

const ContactsPage = () => {
  const arr = [
    {
      name:"Pranjal Singh",
      number:"+918448507317",
      img:"https://cdn.vox-cdn.com/thumbor/24lwYHNT3kIcnV3VSxBL-S7u5OI=/0x0:1000x605/1400x1400/filters:focal(420x223:580x383):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/48780381/duck.0.png"
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
  const location = useLocation();

  const [modal,setModal] = useState(false)
  const [searching, setSearching] = useState(false);
  const [name, setName] = useState("");
  const [sentUser,setSentUser ] = useState('')
  const navigate = useNavigate()

  const searchNameHandler = (e) => {
    setName(e.target.value);
  };

  const setModalOpen = (user)=>{
    setSentUser({
      name:user.name,
      number:user.number,
      img:user.img
    });
    setModal(true);
  }
  const modalCloseHandler = ()=>{
    setModal(false);
  }

  const backHandler = () => {

    if (searching === true) {
      setSearching(false);
      return;
    }
    navigate(-1);
  }
  


  return (
    <>
      <Navigator heading="Select Contact" backHandler={backHandler} />
      {!searching && (
        <>
          {" "}
          <div className="flex justify-between w-11/12 mx-auto mt-[40px]">
            <h3 className="text-lg">All Contacts</h3>
            <div onClick={(e) => setSearching(true)}>
              <SearchIcon />
            </div>
          </div>
          <div className=" ">
            <div className="flex flex-row justify-between w-11/12 mx-auto mt-[27px]">
              <p style={{ color: "#5E849C" }} className="text-sm font-semibold">
                Contacts on ImageBook
              </p>
              <p style={{ color: "#47B5FF" }} className="text-sm underline">
                View All
              </p>
            </div>
            <div className="flex flex-col gap-3 mt-[20px]">
              {location.state.id==='search' && arr.map((each) => (
                <ContactEach item={each} />
              ))}
              {location.state.id==='send' && arr.map((each) => (
                <GiveRespectEachContact setModalOpen={setModalOpen} item={each} />
              ))
              }
            </div>
          </div>
          
        </>
      )}
      {searching && (
        <div className="flex flex-col">
          <div className="flex justify-center items-center gap-3 mt-[40px] w-11/12 mx-auto">
            <div className="flex items-center gap-2 box-border border-2 rounded-md w-5/6">
              <PersonIcon style={{ color: "#5E849C", fontSize: "30px" }} />
              <input
                className="placeholder-gray-500"
                style={{ outline: "none", height: "48px" }}
                type="text"
                placeholder="Search your contact"
                onChange={searchNameHandler}
              />
            </div>
            <SearchIcon />
          </div>

          {name.length !== 0 && <><div className="flex flex-row justify-between w-11/12 mx-auto mt-[27px]">
            <p style={{ color: "#5E849C" }} className="text-sm font-semibold">
              Contacts on ImageBook
            </p>
            <p style={{ color: "#47B5FF" }} className="text-sm underline">
              View All
            </p>
          </div>
            <div className="flex flex-col gap-3 mt-[20px]">
              {location.state.id==='search' && arr
                .filter((obj) => obj.name.includes(name))
                .map((each) => (
                  <ContactEach item={each} />
                ))}
                {location.state.id==='send' && arr
                .filter((obj) => obj.name.includes(name))
                .map((each) => (
                  <GiveRespectEachContact item={each} />
                ))}
            </div>
            </>}
        </div>
      )}
      {modal && <RespectModal name={sentUser.name} number={sentUser.number} img={sentUser.img} closeHandler={modalCloseHandler}/>}
    </>
  );
};
export default ContactsPage;
