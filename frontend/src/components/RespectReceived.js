import React, { useEffect,useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import card1 from "../images/Home/Media Card.png";
import UserContext from '../store/userContext';
import card2 from "../images/Home/Media Card1.png";
import axios from 'axios';
import EachRespect from './EachRespect';

const RespectReceived = () => {
    const [data, setData] = React.useState([])
    const userCtx = useContext(UserContext);
    useEffect(() => {
    }, [])

    const getUser = async () => {
        const response = await axios.get(
          `https://imagebook.onrender.com/getUsers/${userCtx.loggedInUser.number}`
        );
        const data = response?.data;
        const recievedRespects = data[0]?.recievedRespects;
        setData(recievedRespects);
        
      };
    return (<>
        {data.length>0 && <div className='w-11/12 mx-auto'>
            <p className='font-semibold text-sm text-[#416C87] mb-4'>Feelings Received</p>
            <div className='mb-6'>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >

                    {data?.map((each) => (
                        <SwiperSlide><EachRespect key={each._id} each={each}></EachRespect></SwiperSlide>))
                            }
                </Swiper>
            </div>

        </div>}
        </>
    );
};

export default RespectReceived;