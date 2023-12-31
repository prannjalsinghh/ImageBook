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
import plus from "../images/Home/plus.svg";
import tikFill from "../images/Profile/tik fill.svg";
import respect from "../images/Home/respect.svg";
import goodLuck from "../images/Home/goodLuck.svg";
import promise from "../images/Home/promise.svg";
import feedback from "../images/Home/feedback.svg";
import Loading from "../components/Loader/Loading";
import AddContact from "../Assets/addcontact.png";
import tick from "../Assets/tick.png";

const Profile = () => {
  const userCtx = useContext(UserContext);
  const params = useParams();
  const [obj, setObj] = useState({});
  const [type, setType] = useState("given");
  const navigate = useNavigate();
  const [isMyProfile, setIsMyProfile] = useState(false);
  const [notExist, setNotExist] = useState(false);
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(true);
  const [added, setAdded] = useState(false);

  useEffect(() => {
    getUser();

    if (params.id === userCtx.loggedInUser.number) {
      setIsMyProfile(true);
    }
  }, [params.id, userCtx.loggedInUser.number]);

  useEffect(() => {
    if (userCtx.loggedInUser.contacts.includes(obj._id)) {
      setAdded(true);
    }
  }, [obj, params.id, userCtx.loggedInUser.number]);

  const getUser = async () => {
    setLoading(true);
    const response = await axios.get(
      `https://imagebook.onrender.com/getUsers/${params.id}`
    );
    const data = response?.data;
    if (data.length === 0) {
      setNotExist(true);
    }
    if (data[0]?.registered == true) {
      setIsRegistered(true);
    }
    setLoading(false);
    setObj(data[0]);
  };

  const backHandler = () => {
    navigate("/home");
  };

  const openSearchHandler = () => {
    navigate("/giveResectSearch");
  };

  const navigateToDisplay = (route) => {
    navigate("/showProfile", { state: { id: route, obj: obj } });
  };

  const addContactHandler = async () => {
    const data = {
      id: userCtx.loggedInUser.number,
      number: obj?.number,
    };
    await axios.post(`https://imagebook.onrender.com/addToContacts`, data,
    {headers: { Authorization: `Bearer ${localStorage.getItem('loggedInUser')}`}});
    setAdded(true);
  };
  return (
    <>
      {loading && <Loading />}
      {!loading && (
        <>
          {" "}
          <Navigator heading="Profile" backHandler={backHandler} icon="share" />
          {!notExist && (
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
                  <p
                    style={{ color: "#5E849C" }}
                    className="text-sm font-semibold"
                  >
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
                    <p className="text-sm font-semibold">{`${
                      (obj.recievedRespects?.length /
                        obj.givenRespects?.length) *
                      100
                    }%`}</p>
                  </div>
                )}
              </div>

              {/* Changes made here */}
              <div className="w-11/12 mx-auto mt-12">
                <p className="text-[#416C87] font-semibold text-sm mb-4">
                  Received Feelings
                </p>
                <div className="grid grid-cols-2 justify-center gap-x-2 gap-y-4 mb-8">
                  <div
                    onClick={(e) => navigateToDisplay("Respect")}
                    style={{ backgroundColor: "rgba(154, 134, 164, 0.25)" }}
                    className=" h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer"
                  >
                    <div className="flex items-center justify-start space-x-1 ">
                      <img src={respect} alt="" />
                      <p className="text-[#06283D] font-semibold text-xl">
                        Respect
                      </p>
                    </div>
                    <p className="text-xs text-[#1B2328] absolute bottom-4">
                      Give respect to the deserved ones.
                    </p>
                  </div>
                  <div
                    onClick={(e) => navigateToDisplay("Good Luck")}
                    style={{ backgroundColor: "rgba(177, 188, 230, 0.25)" }}
                    className=" h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer"
                  >
                    <div className="flex items-center justify-start space-x-1 ">
                      <img src={goodLuck} alt="" />
                      <p className="text-[#06283D] font-semibold text-xl">
                        Good Luck
                      </p>
                    </div>
                    <p className="text-xs text-[#1B2328] absolute bottom-4">
                      Give wishes to the beloved ones.
                    </p>
                  </div>
                  <div
                    onClick={(e) => navigateToDisplay("Promise")}
                    style={{ backgroundColor: "rgba(183, 229, 221, 0.25)" }}
                    className=" h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer"
                  >
                    <div className="flex items-center justify-start space-x-1 ">
                      <img src={promise} alt="" />
                      <p className="text-[#06283D] font-semibold text-xl">
                        Promise
                      </p>
                    </div>
                    <p className="text-xs text-[#1B2328] absolute bottom-4">
                      Give promise for the assurance.
                    </p>
                  </div>
                  <div
                    onClick={(e) => navigateToDisplay("Feedback")}
                    style={{ backgroundColor: "rgba(241, 240, 192, 0.25)" }}
                    className=" h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer"
                  >
                    <div className="flex items-center justify-start space-x-1 ">
                      <img src={feedback} alt="" />
                      <p className="text-[#06283D] font-semibold text-xl">
                        Feedback
                      </p>
                    </div>
                    <p className="text-xs text-[#1B2328] absolute bottom-4">
                      Give review based on your exp.
                    </p>
                  </div>
                </div>
              </div>

              {(!added && !isMyProfile) && (
                <div
                  onClick={addContactHandler}
                  style={{
                    background:
                      "linear-gradient(270deg, rgb(106, 17, 203) 0%, rgb(37, 117, 252) 100%)",
                  }}
                  className=" right-[10px] rounded-[50%] absolute bottom-[80px] w-[50px] bg-[linear-gradient(270deg, rgb(106, 17, 203) 0%, rgb(37, 117, 252) 100%)] "
                >
                  <img src={AddContact} />
                </div>
              )}
            </>
          )}
          <div className="w-full bg-[#F7F7F7] fixed bottom-0 z-50">
            <div className="flex items-center btncls justify-between w-9/12 mx-auto py-4">
              <img src={home} alt="" onClick={() => navigate("/home")} />

              <div
                style={{
                  backgroundColor: "white",
                  padding: "20px",
                  width: "4.5rem",
                  height: "4.5rem",
                  marginTop: "-50px",
                  borderRadius: "9999px",
                }}
              >
                <div
                  className="bg-[#1363DF] rounded-full w-16 h-16 m-[5px] btncls shadow "
                  style={{
                    marginTop: "-15px",
                    marginLeft: "-15px",
                  }}
                >
                  <div
                    className="flex items-center justify-center"
                    onClick={() => navigate("/contacts")}
                  >
                    <img className="mt-[20px]" src={people} alt="" />
                  </div>
                </div>
              </div>
              <img
                onClick={() => navigate(`/${userCtx.loggedInUser.number}`)}
                src={person}
                className="btncls"
                on
                alt=""
              />
            </div>
          </div>
          {/* Footer Ends */}
        </>
      )}
    </>
  );
};

export default Profile;
