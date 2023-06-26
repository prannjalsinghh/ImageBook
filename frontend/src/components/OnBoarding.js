import { useState } from "react";
import onBoardingImg from "../images/welcome.png";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNavigate } from "react-router-dom";

const OnBoarding = () => {
  const [onboarding, setOnboarding] = useState("1");
  const navigate = useNavigate()

  const openLoginHandler = () => {
    navigate('/login')
  }

  return (
    <>
      <p
        style={{ color: "#0093ED" }}
        className="absolute font-semibold underline top-8 right-7"
        onClick={openLoginHandler}
      >
        Skip
      </p>
      <div className="flex flex-col items-center">
        <img style={{ marginTop: "20vh" }} src={onBoardingImg} />
        <p className="font-semibold text-2xl mt-5">Welcome to ImageBook</p>
        {onboarding === "1" && (
          <p className="mx-9 text-center mt-3 text-sm text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat
            tempus cursus et faucibus venenatis consectetur sed auctor.
          </p>
        )}
        {onboarding === "2" && (
          <p className="mx-9 text-center mt-3 text-sm text-black">
            “सभ्य समाज की सभ्य पहचान है,<br />
            इमेजबुक अब भरोसा करना आसान है”
          </p>
        )}
        <div className="flex flex-row absolute bottom-24 gap-2">
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: onboarding === "1" ? "#1363DF" : "#47B5FF",
              borderRadius: "50%",
            }}
          ></div>
          <div
            style={{
              height: "10px",
              width: "10px",
              backgroundColor: onboarding === "2" ? "#1363DF" : "#47B5FF",
              borderRadius: "50%",
            }}
          ></div>
        </div>
        {onboarding === '1' && <button
          style={{
            backgroundColor: "#1363DF",
            color: "white",
            width: "90%",
            height: "52px",
            borderRadius: "10px",
            margin: "24px",
          }}
          className="absolute bottom-0"
          onClick={(e) => setOnboarding("2")}
        >
          <div className="flex flex-row gap-3 justify-center">
            <p>Continue</p>
            <ArrowForwardIcon />
          </div>
        </button>}
        {onboarding === '2' &&
          <div style={{ margin: "24px", width: "90%" }} className="flex items-center justify-center gap-3 flex-row absolute bottom-0">
            <button
              style={{
                backgroundColor: "#DFF6FF",
                color: "#0D1C2E",
                height: "52px",
                width: "52px",
                borderRadius: "10px"
              }}
              onClick={(e) => setOnboarding('1')}
            >

              <ArrowBackIcon />
            </button>
            <button style={{
              backgroundColor: "#1363DF",
              color: "white",
              width: "90%",
              height: "52px",
              borderRadius: "10px",
            }}>
              <div className="flex flex-row gap-3 justify-center" onClick={openLoginHandler}>
                <p>Continue</p>
                <ArrowForwardIcon />
              </div>
            </button>
          </div>}
      </div>
    </>
  );
};
export default OnBoarding;
