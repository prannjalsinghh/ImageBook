import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import card1 from "../images/Home/Media Card.png";
import card2 from "../images/Home/Media Card1.png";

const RespectReceived = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <p className='font-semibold text-sm text-[#416C87] mb-4'>Feelings Received</p>
            <div className='mb-6'>
                <Swiper
                    spaceBetween={5}
                    slidesPerView={2}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide><img src={card1} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={card2} alt="" /></SwiperSlide>
                    <SwiperSlide><img src={card1} alt="" /></SwiperSlide>
                </Swiper>
            </div>

        </div>
    );
};

export default RespectReceived;