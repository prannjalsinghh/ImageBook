import React from 'react';
import { useContext } from 'react';
import axios from 'axios';
import UserContext from '../store/userContext';
import './DetectLocation.css';
import cross from '../images/cross.png';
import cameraPill from '../images/cameraPill.png';
import galleryPill from '../images/galleryPill.png';

const  ChangePicture = ({ setUploadImage }) => {
    const userCtx = useContext(UserContext);
    const [image, setImage] = React.useState();

    const imageSetter = (e) => {
        setImage(e.target.files[0]);
    };
    const imageUploader = () => {
        const formData = new FormData();
        formData.append('file', image);
        formData.append("upload_preset", "cok0kqhe");

        axios.post("https://api.cloudinary.com/v1_1/djdqb8feb/image/upload", formData).then((response) => {
        if (response.status === 200) {

        let link = response.data.secure_url;
        console.log(link);

        axios.post('https://imagebook.onrender.com/updateUser', { number: userCtx.loggedInUser.number, name: userCtx.loggedInUser.name ,image: link, dateOfBirth: userCtx.isLoggedIn.dateOfBirth, gender: userCtx.isLoggedIn.gender });
        console.log('updated');
        }});
        }


    return (
        <div>
            <div className="backdrop-location" />
            <div className='fixed bottom-0 left-0 right-0 w-full z-[1000]'>
                <div className='w-full mx-auto bg-white rounded-t-3xl'>
                    <div className='w-11/12 mx-auto '>
                        <div className='flex items-center justify-between pt-4 pb-3'>
                            <p className='font-medium text-[#1B2328] text-xl'>Change Profile Picture</p>
                            <img onClick={() => setUploadImage(false)} src={cross} alt="" />
                        </div>
                        <hr className='border-[1px] border-[#CCEAFF] mb-4' />
                        <input type='file' id='file' placeholder='here' onChange={imageSetter}></input>
                        <button className='w-full h-12 mt-[10px] rounded-[10px] bg-[#1363DF] text-white text-md font-semibold' onClick={imageUploader}>Upload</button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChangePicture;