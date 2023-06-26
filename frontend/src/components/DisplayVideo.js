import React from 'react';
import leftIcon from '../images/Notifications/Left Icon.png';
import { useLocation, useNavigate } from 'react-router-dom';
import emoji1 from '../images/Expand extention.png';
import emoji2 from '../images/Reward Trust.png';
import emoji3 from '../images/Send Clap.png';
import emoji4 from '../images/ShareIcon.png';
import dots from '../images/more-horizontal.png';
import clock from '../images/clock.png';


const DisplayVideo = () => {
    const navigate = useNavigate();
    const goToProfile = () => {
        navigate(-1);
    }

    const { state } = useLocation();

    return (
        <div>
            <div className='w-11/12 mx-auto my-6'>
                <div className='flex items-center justify-between'>
                    <div className='flex items-center space-x-2'>
                        <img onClick={goToProfile} className='hover:cursor-pointer' src={leftIcon} alt="" />
                        <p className='font-medium text-xl text-[#06283D]'>Given Respect</p>
                    </div>
                </div>
            </div>
            <div  className='relative object-cover w-full'>
                <video style={{ minHeight: 'calc(100vh - 110px)',transform: state.cameraUsed==='user'? 'scaleX(-1)':'' }} className='object-cover w-full' autoPlay playsInline src={state.video}></video>
                <div className='absolute right-4 bottom-16 space-y-3'>
                    <img className='' src={emoji1} alt="" />
                    <img className='' src={emoji2} alt="" />
                    <img className='' src={emoji3} alt="" />
                    <img className='' src={emoji4} alt="" />
                </div>
            </div>
            <div className='fixed left-0 right-0 bottom-0 z-10 bg-[#F2F6F8]'>
                <div className='w-full rounded-t-[10px] bg-[#F2F6F8]'>
                    <div className='w-11/12 mx-auto flex items-center justify-between bg-[#F2F6F8] rounded-b-2xl py-4'>
                        <div className='pl-[10px] flex gap-2 items-center'>
                            <img className='w-[50px] h-[50px] mr-2' style={{ borderRadius: "100px" }} src={state.senderImage} alt="" />
                            <div className='flex flex-col items-start space-y-1'>
                                <p className='text-[#1B2328] text-sm '>{state.senderName} <span className='font-bold'>Respected</span> {state.recieverName}</p>
                                <div className='flex items-center space-x-1'>
                                    <img className='' src={clock} alt="" />
                                    <p className='text-[#5E849C] font-medium text-xs'>45 min. ago</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <img src={dots} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayVideo;