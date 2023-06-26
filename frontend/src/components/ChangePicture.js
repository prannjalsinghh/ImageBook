import React from 'react';
import './DetectLocation.css';
import cross from '../images/cross.png';
import cameraPill from '../images/cameraPill.png';
import galleryPill from '../images/galleryPill.png';

const ChangePicture = ({ setUploadImage }) => {
    return (
        <div>
            <div className="backdrop-location" />
            <div data-aos="fade-up" data-aos-duration="300" className='fixed bottom-0 left-0 right-0 w-full z-[1000]'>
                <div className='w-full mx-auto bg-white rounded-t-3xl'>
                    <div className='w-11/12 mx-auto '>
                        <div className='flex items-center justify-between pt-4 pb-3'>
                            <p className='font-medium text-[#1B2328] text-xl'>Change Profile Picture</p>
                            <img onClick={() => setUploadImage(false)} src={cross} alt="" />
                        </div>
                        <hr className='border-[1px] border-[#CCEAFF] mb-4' />
                        <div className='flex items-center space-x-3 mb-3'>
                            <p className='text-[#1B2328] font-semibold text-lg'>Capture Image</p>
                            <img src={cameraPill} alt="" />
                        </div>
                        <div className='flex items-center space-x-3 pb-6'>
                            <p className='text-[#1B2328] font-semibold text-lg'>Upload Image</p>
                            <img src={galleryPill} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePicture;