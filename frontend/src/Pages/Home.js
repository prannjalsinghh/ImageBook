import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import RespectReceived from '../components/RespectReceived';
import trophy from '../images/Home/trophy.png';
import SpreadRespect from '../components/SpreadRespect';
import InvitePeople from '../components/InvitePeople';
import FooterHome from '../components/FooterHome';
import HomeSidebar from '../components/HomeSidebar';
import xIcon from '../images/Home/🎨 Icon Сolor.png';
import searchIcon from '../images/Home/search.svg';
import user from '../images/Home/Small Card Images.png';
import checkIcon from '../images/Home/filled color.png';
import wallet from '../images/Home/wallet-03.png';
import notification from '../images/Home/notification.png';
import location from '../images/Home/location.png';
import settings from '../images/Home/settings.png';
import logout from '../images/Home/logout.png';
import version from '../images/Home/version.png';
import { useNavigate } from 'react-router-dom';
import auth from '../firebase.init';
import { signOut } from "firebase/auth";
import { useContext } from 'react';
import UserContext from '../store/userContext';
import respect from '../images/Home/respect.svg';
import goodLuck from '../images/Home/goodLuck.svg';
import promise from '../images/Home/promise.svg';
import feedback from '../images/Home/feedback.svg';

const Home = () => {
    const userCtx = useContext(UserContext);
    const [sidebar, setSidebar] = useState(false);
    const navigate = useNavigate();
    const goToSearch = () => {
        navigate('/search')
    }
    const doSignOut = () => {
        signOut(auth).then(() => {
            localStorage.removeItem('loggedInUser');
            navigate('/login');
        }).catch((error) => {
            console.log('error occurred');
        });
    }

    const goToEditProfile = () => {
        navigate('/edit-profile');
    }

    const navigateToSearch = (route)=>{
        navigate('/giveResectSearch',{state:{id:route}})
    }

    return (
        <div className='font-poppins relative min-h-screen'>
            <Navbar sidebar={sidebar} setSidebar={setSidebar}></Navbar>
            <div className='w-11/12 mx-auto mb-8 relative'>
                <input onFocus={goToSearch} className='w-full h-12 rounded-[10px] border-2 border-[#EBF1F4] pl-10 focus:outline-none text-lg text-[#5E849C]' type="text" name="" id="" placeholder='Check reputation' />
                <img className='absolute top-[14px] left-3' src={searchIcon} alt="" />
            </div>
            <div className='w-11/12 mx-auto '>
                <p className='text-[#416C87] font-semibold text-sm mb-4'>Spread Feelings</p>
                <div className='grid grid-cols-2 justify-center gap-x-2 gap-y-4 mb-8'>
                    <div onClick={(e)=>navigateToSearch("Respect")} style={{ backgroundColor: 'rgba(154, 134, 164, 0.25)' }} className='w-[1/4] h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer'>
                        <div className='flex items-center justify-start space-x-1 '>
                            <img src={respect} alt="" />
                            <p className='text-[#06283D] font-semibold text-xl'>Respect</p>
                        </div>
                        <p className='text-xs text-[#1B2328] absolute bottom-4'>Give respect to the deserved ones.</p>
                    </div>
                    <div onClick={(e)=>navigateToSearch("Good Luck")} style={{ backgroundColor: 'rgba(177, 188, 230, 0.25)' }} className='w-[1/4] h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer'>
                        <div className='flex items-center justify-start space-x-1 '>
                            <img src={goodLuck} alt="" />
                            <p className='text-[#06283D] font-semibold text-xl'>Good Luck</p>
                        </div>
                        <p className='text-xs text-[#1B2328] absolute bottom-4'>Give wishes to the beloved ones.</p>
                    </div>
                    <div onClick={(e)=>navigateToSearch("Promise")} style={{ backgroundColor: 'rgba(183, 229, 221, 0.25)' }} className='w-[1/4] h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer'>
                        <div className='flex items-center justify-start space-x-1 '>
                            <img src={promise} alt="" />
                            <p className='text-[#06283D] font-semibold text-xl'>Promise</p>
                        </div>
                        <p className='text-xs text-[#1B2328] absolute bottom-4'>Give promise for the assurance.</p>
                    </div>
                    <div onClick={(e)=>navigateToSearch("Feedback")} style={{ backgroundColor: 'rgba(241, 240, 192, 0.25)' }} className='w-[1/4] h-[115px] rounded-2xl px-3 py-2 relative hover:cursor-pointer'>
                        <div className='flex items-center justify-start space-x-1 '>
                            <img src={feedback} alt="" />
                            <p className='text-[#06283D] font-semibold text-xl'>Feedback</p>
                        </div>
                        <p className='text-xs text-[#1B2328] absolute bottom-4'>Give review based on your exp.</p>
                    </div>
                </div>
            </div>
            {/* <div className='w-11/12 mx-auto flex items-center justify-between space-x-3 mb-6'>
                <button className='w-[180px] h-[52px] rounded-lg font-semibold text-lg text-white bg-[#1363DF]'>Join Contest</button>
                <button className='w-[180px] h-[52px] rounded-lg font-semibold text-lg text-[#416C87]  bg-[#DFF6FF]'>Mission</button>
            </div> */}
            {/* <div className='w-11/12 h-32 mx-auto mb-6 bg-gradient-to-r from-[#B74CD5] to-[#774CD5] rounded-[10px] relative'>
                <div className='absolute top-[16px] left-[16px]'>
                    <p className='font-semibold text-[22px] text-white leading-none'>Kon Banega, <br /> Respect Pati</p>
                </div>
                <div className='absolute bottom-[16px] left-[16px]'>
                    <p className='font-semibold text-[12px] text-[#E2CCFF]'>Win Minimum ₹5000</p>
                </div>
                <div className='absolute right-[14px] -top-[10px]'>
                    <img src={trophy} alt="" />
                </div>
            </div> */}
            <RespectReceived></RespectReceived>
            {/* <SpreadRespect></SpreadRespect> */}
            {/* <InvitePeople></InvitePeople> */}
            <FooterHome></FooterHome>
            {
                sidebar && <div data-aos="fade-right"
                    data-aos-duration="500" className={sidebar ? 'left-0 top-0 right-16 z-50 fixed bg-white ' : '-left-full '}>
                    <div className='w-full h-screen'>
                        <div className='w-5/6 mx-auto'>
                            <div className='flex items-center justify-between mt-6 mb-8'>
                                <p className='font-medium text-xl text-[#06283D]'>Menu</p>
                                <img onClick={() => setSidebar(false)} src={xIcon} alt="" />
                            </div>
                            <div className='flex items-center space-x-3 mt-3 mb-5'>
                                <img style={{ width: "50px", height: "50px", borderRadius: "100px" }} src={userCtx.loggedInUser.image} alt="" />
                                <div className=''>
                                    <div className='flex items-center space-x-2'>
                                        <p className='text-[#1B2328]'>{userCtx.loggedInUser.name}</p>
                                        {userCtx.loggedInUser.verified && <img src={checkIcon} alt="" />}
                                    </div>
                                    <button onClick={goToEditProfile} className='text-[#5E849C] text-xs font-semibold'>Edit Profile</button>
                                </div>
                            </div>
                        </div>
                        <hr className='' />
                        <div className='w-5/6 mx-auto flex items-center space-x-2 my-4'>
                            <img src={wallet} alt="" />
                            <p className='text-[#1B2328]'>Wallet</p>
                        </div>
                        <hr />
                        <div className='w-5/6 mx-auto flex items-center space-x-2 my-4'>
                            <img src={notification} alt="" />
                            <p className='text-[#1B2328]'>Notification</p>
                        </div>
                        <hr />
                        <div className='w-5/6 mx-auto flex items-center space-x-2 my-4'>
                            <img src={location} alt="" />
                            <p className='text-[#1B2328]'>Nearby People</p>
                        </div>
                        <hr />
                        <div className='w-5/6 mx-auto flex items-center space-x-2 my-4'>
                            <img src={settings} alt="" />
                            <p className='text-[#1B2328]'>Account Setting</p>
                        </div>
                        <hr />
                        <div onClick={doSignOut} className='w-5/6 mx-auto flex items-center space-x-2 my-4'>
                            <img src={logout} alt="" />
                            <p className='text-[#1B2328]'>Logout</p>
                        </div>
                        <div className='fixed bottom-0 left-0 right-0'>
                            <hr />
                            <div className='w-5/6 mx-auto flex items-center space-x-2 my-4'>
                                <img src={version} alt="" />
                                <p className='text-[#5E849C]'>Version v1.1</p>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
};

export default Home;