import { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Navigator from "../components/Navigator";
import ShieldIcon from "@mui/icons-material/Shield";
import axios from "axios";
import VideocamIcon from "@mui/icons-material/Videocam";
import UserContext from "../store/userContext";
import EachRespect from "../components/EachRespect";
import editIcon from "../Assets/edit.png";
import noDataFound from "../Assets/noDataFound.png";
import home from "../images/Profile/home.svg";
import film from "../images/Home/film-fill.svg";
import people from "../images/Home/people.svg";
import person from "../images/Profile/person blue.svg";
import plus from '../images/Home/plus.svg';
import tikFill from '../images/Profile/tik fill.svg';
import respect from '../images/Home/respect.svg';
import goodLuck from '../images/Home/goodLuck.svg';
import promise from '../images/Home/promise.svg';
import feedback from '../images/Home/feedback.svg';

const Profile = () => {
  const userCtx = useContext(UserContext);
  const params = useParams();
  const [obj, setObj] = useState({});
  const [type, setType] = useState("given");
  const navigate = useNavigate();
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [notExist, setNotExist] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);

  useEffect(() => {
    getUser();

    if (params.id === userCtx.loggedInUser.number) {
      // console.log('id', params.id, userCtx.loggedInUser.number);
      setIsMyProfile(true);
    }
  }, [params.id, userCtx.loggedInUser.number]);

  const getUser = async () => {
    const response = await axios.get(
      `https://imagebook-digilabs.herokuapp.com/getUsers/${params.id}`
    );
    const data = response?.data;
    if (data.length === 0) {
      setNotExist(true);
    }
    if (data[0]?.registered == true) {
      setIsRegistered(true);
    }
    setObj(data[0]);
  };

  const backHandler = () => {
    navigate("/home");
  };

  const openSearchHandler = () => {
    navigate("/giveResectSearch");
  };

  const navigateToDisplay = (route) => {
    navigate('/showProfile', { state: { id: route, obj: obj } });
  }

  return (
    <>
      <Navigator heading="Profile" backHandler={backHandler} icon="share" />
      {!notExist && 
      (
        <>
          <div className="flex flex-col items-center gap-3 justify-center mt-[40px]">
            <img
              style={{ width: "75px", height: "75px", borderRadius: "50%" }}
              src={obj?.image}
            />
            <div className="flex gap-2 items-center">
              <p className="text-xl font-semibold">{obj?.name}</p>
              {isRegistered && <img src={tikFill} alt="" />}
              {!isRegistered && <img src={editIcon} />}
            </div>
            <div className="flex gap-0.5">
              <p style={{ color: "#5E849C" }} className="text-sm font-semibold">
                {obj?.number}
              </p>
              {!isRegistered && (
                <div className="flex gap-0.5">
                  <p
                    style={{ color: "#5E849C" }}
                    className="text-sm font-semibold"
                  >
                    •
                  </p>
                  <p
                    style={{ color: "#5E849C" }}
                    className="text-sm font-semibold"
                  >
                    Unregistered
                  </p>
                </div>
              )}
            </div>
            {isRegistered && (
              <div
                style={{
                  background:
                    "linear-gradient(270deg, #6A11CB 0%, #2575FC 100%)",
                }}
                className="flex items-center gap-1 text-white px-[10px] py-[2px] rounded-xl"
              >
                <ShieldIcon style={{ fontSize: "17px" }} />
                <p className="text-sm font-semibold">{`${(obj.recievedRespects?.length / obj.givenRespects?.length) *
                  100
                  }%`}</p>
              </div>
            )}
          </div>

          {/* Changes made here */}
          <div className='w-11/12 mx-auto mt-12'>
            <p className='text-[#416C87] font-semibold text-sm mb-4'>Received Feelings</p>
            <div className='grid grid-cols-2 justify-center gap-x-2 gap-y-4 mb-8'>
              <div onClick={(e) => navigateToDisplay("Respect")} style={{ backgroundColor: 'rgba(154, 134, 164, 0.25)' }} className=' h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer'>
                <div className='flex items-center justify-start space-x-1 '>
                  <img src={respect} alt="" />
                  <p className='text-[#06283D] font-semibold text-xl'>Respect</p>
                </div>
                <p className='text-xs text-[#1B2328] absolute bottom-4'>Give respect to the deserved ones.</p>
              </div>
              <div onClick={(e) => navigateToDisplay("Good Luck")} style={{ backgroundColor: 'rgba(177, 188, 230, 0.25)' }} className=' h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer'>
                <div className='flex items-center justify-start space-x-1 '>
                  <img src={goodLuck} alt="" />
                  <p className='text-[#06283D] font-semibold text-xl'>Good Luck</p>
                </div>
                <p className='text-xs text-[#1B2328] absolute bottom-4'>Give wishes to the beloved ones.</p>
              </div>
              <div onClick={(e) => navigateToDisplay("Promise")} style={{ backgroundColor: 'rgba(183, 229, 221, 0.25)' }} className=' h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer'>
                <div className='flex items-center justify-start space-x-1 '>
                  <img src={promise} alt="" />
                  <p className='text-[#06283D] font-semibold text-xl'>Promise</p>
                </div>
                <p className='text-xs text-[#1B2328] absolute bottom-4'>Give promise for the assurance.</p>
              </div>
              <div onClick={(e) => navigateToDisplay("Feedback")} style={{ backgroundColor: 'rgba(241, 240, 192, 0.25)' }} className=' h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer'>
                <div className='flex items-center justify-start space-x-1 '>
                  <img src={feedback} alt="" />
                  <p className='text-[#06283D] font-semibold text-xl'>Feedback</p>
                </div>
                <p className='text-xs text-[#1B2328] absolute bottom-4'>Give review based on your exp.</p>
              </div>
            </div>
          </div>



          {/* <div
            style={{ backgroundColor: "#EBF1F4" }}
            className=" flex text-center items-center w-11/12 mt-[24px] mx-auto h-[50px] rounded-md"
          >
            <div
              style={{ backgroundColor: type === "given" ? "white" : "" }}
              className="flex gap-2 justify-center items-center w-1/2 ml-[2px] mr-[2px] h-[46px] rounded-md"
              onClick={(e) => setType("given")}
            >
              <p style={{ color: "#416C87" }}>Given</p>
              <p
                style={{ borderColor: "#416C87" }}
                className="border-2 text-xs rounded-md px-1"
              >
                {obj?.givenRespects?.length}
              </p>
            </div>
            <div
              style={{ backgroundColor: type === "recieved" ? "white" : "" }}
              className=" flex gap-2 justify-center items-center w-1/2 ml-[2px] mr-[2px] h-[46px] rounded-md"
              onClick={(e) => setType("recieved")}
            >
              <p style={{ color: "#416C87" }}>Recieved</p>
              <p
                style={{ borderColor: "#416C87" }}
                className="border-2 text-xs rounded-md px-1"
              >
                {obj?.recievedRespects?.length}
              </p>
            </div>
          </div>
          <div className="mt-[20px] grid grid-cols-3 gap-x-1 gap-y-1">
            
            {type === "given" &&
              obj?.givenRespects?.map((each) => (
                <EachRespect
                  sender={each.postedBy}
                  cameraUsed={each.cameraUsed}
                  url={each.url}
                  reciever={each.postedFor}
                />
              ))}
            {type === "recieved" &&
              obj?.recievedRespects?.map((each) => (
                <EachRespect
                  sender={each.postedBy}
                  cameraUsed={each.cameraUsed}
                  url={each.url}
                  reciever={each.postedFor}
                />
              ))}
          </div>
          <div className="mt-[20px] flex items-center justify-center">
          {type === "given" && obj?.givenRespects?.length === 0 && (
              <div className="flex flex-col items-center gap-3 mt-[40px]">
                <img src={noDataFound} />
                <p style={{ color: "#5E849C" }}>No respects given!</p>
              </div>
            )}
            {type === "recieved" && obj?.recievedRespects?.length === 0 && (
              <div className="flex flex-col items-center gap-3 mt-[40px]">
                <img src={noDataFound} />
                <p style={{ color: "#5E849C" }}>No respects recieved!</p>
              </div>
            )}
          </div>
          
        </>
      )}
      {notExist && (
        <h1
          style={{
            height: "90vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "2rem",
            fontWeight: "800",
          }}
        >
          User Does Not Exist
        </h1>
      )}
      {/* Footer starts */}
      </>)}
      <div className="w-full bg-[#F7F7F7] fixed bottom-0 z-50">
        <div className="flex items-center justify-between w-11/12 mx-auto py-4">
          <img src={home} alt="" />
          <img src={film} alt="" />

          <div
            style={{
              backgroundColor: "white",
              padding: "20px",
              width: "4.5rem",
              height: "4.5rem",
              marginTop: "-50px",
              borderRadius: "9999px"
            }}
          >
            <div className="bg-[#1363DF] rounded-full w-16 h-16 m-[5px] shadow " style={{
              marginTop: "-15px",
              marginLeft: "-15px"
            }}>
              <div
                className="flex items-center justify-center"
                onClick={openSearchHandler}
              >
                <img className="mt-[20px]" src={plus} alt="" />
              </div>
            </div>
          </div>
          <img src={people} alt="" />
          <img src={person} alt="" />
        </div>
      </div>
      {/* Footer Ends */}
    </>
  );
};

export default Profile;
