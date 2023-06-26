import React, { useEffect, useState } from 'react';
import leftIcon from '../images/Notifications/Left Icon.png';
import { useNavigate } from 'react-router-dom';
import img from '../images/Small Card Images.png';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import verification from '../images/verification.png';
import question from '../images/question.png';
import gps from '../images/gps.png';
import date from '../images/date.png';
import DetectLocation from '../components/DetectLocation';
import ChangePicture from '../components/ChangePicture';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment';
import { TextField } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import ProfileUpdated from '../components/ProfileUpdated';

const EditProfile = () => {
    const [number, setNumber] = useState('');
    const [value, setValue] = useState('');
    const [updateProfile, setUpdateProfile] = useState(false);
    const [show, setShow] = useState(true);
    const [detectLocation, setDetectLocation] = useState(false);
    const [uploadImage, setUploadImage] = useState(false);
    const navigate = useNavigate();
    const goHome = () => {
        navigate('/home');
    }
    

    const handleSubmit = e => {
        e.preventDefault();
    }
    return (
        <div>
            <div className='w-11/12 mx-auto my-6 relative'>
                <div className='flex items-center justify-between mb-10'>
                    <div className='flex items-center space-x-2'>
                        <img onClick={goHome} className='hover:cursor-pointer' src={leftIcon} alt="" />
                        <p className='font-medium text-xl text-[#06283D]'>Edit Profile</p>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center mb-10'>
                    <img onClick={() => setUploadImage(true)} className='mb-2 hover:cursor-pointer' src={img} alt="" />
                    <p onClick={() => setUploadImage(true)} className='font-semibold text-xs text-[#5E849C] hover:cursor-pointer'>Tap to Upload Image</p>
                </div>
                <form onSubmit={handleSubmit} className='w-full mx-auto'>
                    <div className='flex items-center justify-center mb-4 gap-x-4'>
                        <div className='w-full mx-auto'>
                            <p className='font-semibold text-lg text-[#00386D] ml-2 mb-1'>First Name</p>
                            <input className='w-full h-11 focus:outline-none border-2 border-[#EBF1F4] rounded-[10px] text-lg text-[#1B2328] placeholder-[#1B2328] pl-3' placeholder='Bhageerathi' type="text" name="firstName" id="" />
                        </div>
                        <div className='w-full mx-auto'>
                            <p className='font-semibold text-lg text-[#00386D] ml-2 mb-1'>Last Name</p>
                            <input className='w-full h-11 focus:outline-none border-2 border-[#EBF1F4] rounded-[10px] text-lg text-[#1B2328] placeholder-[#1B2328] pl-3' placeholder='Patel' type="text" name="lastName" id="" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <p className='font-semibold text-lg text-[#00386D] ml-2 mb-1'>Number</p>
                        <PhoneInput className='border-[2px] border-[#EBF1F4] rounded-[10px] pl-3 h-12 space-x-1 mb-4 text-lg placeholder-[#1B2328] text-[#1B2328]'
                            defaultCountry='IN'
                            placeholder="Enter phone number"
                            value={number}
                            onChange={setNumber} />
                    </div>
                    <div className='mb-4'>
                        <p className='font-semibold text-lg text-[#00386D] ml-2 mb-1'>Kyc</p>
                        <div className='relative'>
                            <input className='border-[2px] border-[#EBF1F4] rounded-[10px] w-full pl-10 h-12 space-x-1 text-lg placeholder-[#1B2328] text-[#1B2328] focus:outline-none' placeholder="Kyc Verification" name="verification" type="text" />
                            <img className='absolute top-[14px] left-3' src={verification} alt="" />
                            <img className='absolute top-[14px] right-3' src={question} alt="" />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <p className='font-semibold text-lg text-[#00386D] ml-2 mb-1'>Gender</p>
                        <div className='flex items-center justify-center gap-x-4'>
                            <div className='w-full mx-auto'>
                                <div className='w-full h-11 focus:outline-none border-2 border-[#EBF1F4] rounded-[10px] text-lg text-[#1B2328] placeholder-[#1B2328] flex items-center space-x-2 pl-3'>
                                    <input className='bg-[#231F20] w-5 h-5' type="radio" name="gender" />
                                    <p className='text-lg text-[#1B2328]'>Male</p>
                                </div>
                            </div>
                            <div className='w-full mx-auto'>
                                <div className='w-full h-11 focus:outline-none border-2 border-[#EBF1F4] rounded-[10px] text-lg text-[#1B2328] placeholder-[#1B2328] flex items-center space-x-2 pl-3'>
                                    <input className='bg-[#231F20] w-5 h-5' type="radio" name="gender" checked="checked" />
                                    <p className='text-lg text-[#1B2328]'>Female</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='mb-4'>
                        <p className='font-semibold text-lg text-[#00386D] ml-2 mb-1'>Location</p>
                        <div className='relative'>
                            <input className='border-[2px] border-[#EBF1F4] rounded-[10px] w-full pl-3 h-12 space-x-1 text-lg placeholder-[#1B2328] text-[#1B2328] focus:outline-none' placeholder="Locality, City, State" name="location" type="text" />
                            <img onClick={() => setDetectLocation(true)} className='absolute top-[14px] right-3 hover:cursor-pointer' src={gps} alt="" />
                        </div>
                    </div>
                    <div className='mb-6'>
                        <p className='font-semibold text-lg text-[#00386D] ml-2 mb-1'>Date of Birth</p>
                        <div className='relative'>
                            <input className='border-[2px] border-[#EBF1F4] rounded-[10px] w-full pl-3 h-12 space-x-1 text-lg placeholder-[#1B2328] text-[#1B2328] focus:outline-none pr-3' name="dateInput" type="date" />
                            {/* <LocalizationProvider dateAdapter={AdapterMoment}>
                                <DatePicker className='w-full'
                                    label="13/03/1996"
                                    value={value}
                                    onChange={(newValue) => {
                                        setValue(newValue);
                                    }}
                                    renderInput={(params) => <TextField className='text-lg text-[#00386D]' {...params} />}
                                />
                            </LocalizationProvider> */}
                            {/* <img className='absolute top-[14px] right-3' src={date} alt="" /> */}
                        </div>
                    </div>
                    <div className='mb-4'>
                        <button onClick={() => setUpdateProfile(true)} type='submit' className='w-full h-12 rounded-[10px] bg-[#1363DF] text-white text-lg font-semibold'>Save Change</button>
                    </div>
                </form>
                {
                    detectLocation && <DetectLocation setDetectLocation={setDetectLocation}></DetectLocation>
                }
                {
                    uploadImage && <ChangePicture setUploadImage={setUploadImage}></ChangePicture>
                }
                {
                    updateProfile && <ProfileUpdated updateProfile={updateProfile} setUpdateProfile={setUpdateProfile}></ProfileUpdated>
                }
            </div>
        </div>
    );
};

export default EditProfile;