import React from 'react';
import backIcon from '../images/Notifications/Left Icon.png';
import right from '../images/Notifications/Right Icon.png';
import time from '../images/Notifications/time.png';
import dots from '../images/Notifications/dots.png';
import { useNavigate } from 'react-router-dom';

const Notifications = () => {
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/home')
    }
    return (
        <div>
            <div className='bg-[#F8FAFB]'>
                <div className='w-11/12 mx-auto '>
                    <div className='flex items-center justify-between py-6'>
                        <div className='flex items-center space-x-2'>
                            <img onClick={goHome} src={backIcon} alt="" />
                            <p>Notification</p>
                        </div>
                        <img src={right} alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='w-11/12 mx-auto'>
                    <div className='border border-[#DFF6FF] rounded-2xl mt-3 p-3'>
                        <div className='flex items-center justify-between mb-[2px]'>
                            <p className='font-semibold text-sm text-[#416C87]'>Respond review received</p>
                            <img src={dots} alt="" />
                        </div>
                        <p className='text-[#1B2328] text-xs mb-1'>New video review received from <span className='font-semibold'>Aarush <br /> Misra</span>. Tap to play it.</p>
                        <div className='flex items-center space-x-1'>
                            <img className='w-[13px] h-[13px]' src={time} alt="" />
                            <p className='font-medium text-[#5E849C] text-xs'>45 minutes ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='w-11/12 mx-auto'>
                    <div className='bg-[#F5F8FA] border border-[#DFF6FF] rounded-2xl mt-3 p-3'>
                        <div className='flex items-center justify-between mb-[2px]'>
                            <p className='font-semibold text-sm text-[#416C87]'>Account activity</p>
                            <img src={dots} alt="" />
                        </div>
                        <p className='text-[#1B2328] text-xs mb-1'>Your account have been accessed from <br /> iPhone 13 Mini.</p>
                        <div className='flex items-center space-x-1'>
                            <img className='w-[13px] h-[13px]' src={time} alt="" />
                            <p className='font-medium text-[#5E849C] text-xs'>2 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='w-11/12 mx-auto'>
                    <div className=' border border-[#DFF6FF] rounded-2xl mt-3 p-3'>
                        <div className='flex items-center justify-between mb-[2px]'>
                            <p className='font-semibold text-sm text-[#416C87]'>Review Seen</p>
                            <img src={dots} alt="" />
                        </div>
                        <p className='text-[#1B2328] text-xs mb-1'><span className='font-semibold'>Aarush Misra</span> has seen review video you <br /> have made for him.</p>
                        <div className='flex items-center space-x-1'>
                            <img className='w-[13px] h-[13px]' src={time} alt="" />
                            <p className='font-medium text-[#5E849C] text-xs'>2 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white'>
                <div className='w-11/12 mx-auto'>
                    <div className='bg-[#F5F8FA] border border-[#DFF6FF] rounded-2xl mt-3 p-3'>
                        <div className='flex items-center justify-between mb-[2px]'>
                            <p className='font-semibold text-sm text-[#416C87]'>Review Deleted</p>
                            <img src={dots} alt="" />
                        </div>
                        <p className='text-[#1B2328] text-xs mb-1'>Somesh Nanda didn't responded on your <br /> review in 7 days that's why your review <br /> got deleted automatically. Give another <br /> shot sometime.</p>
                        <div className='flex items-center space-x-1'>
                            <img className='w-[13px] h-[13px]' src={time} alt="" />
                            <p className='font-medium text-[#5E849C] text-xs'>2 hours ago</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Notifications;