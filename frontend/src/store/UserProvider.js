import axios from "axios";
import { useEffect, useReducer } from "react";
import UserContext from "./userContext";
import { set } from "mongoose";
import { useState } from "react";
import Loading from "../components/Loader/Loading";
const defaultUserCtx = {
    isLoggedIn: false,
    isLoading:true,
    loggedInUser: {
        registered: false,
        accountCreationDate: Date.now,
        name: '',
        number: '',
        image: 'https://i.stack.imgur.com/l60Hf.png',
        dateOfBirth: Date.now(),
        verified: false,
        trustScore: 0,
        location: { longitude: 0, latitude: 0 },
        gender: '',
        givenRespects: [],
        recievedRespects: [],
        notifications: [],
        contacts: []
    }
}

const userReducer = (state, action) => {

    if (action.type === 'SETLOGIN') {
        return {
            isLoggedIn: true,
            
            loggedInUser: {
                registered: action.user.registered,
                accountCreationDate: action.user.accountCreationDate,
                name: action.user.name,
                number: action.user.number,
                image: action.user.image,
                dateOfBirth: action.user.dateOfBirth,
                verified: action.user.verified,
                trustScore: action.user.trustScore,
                location: action.user.location,
                gender: action.user.gender,
                givenRespects: action.user.givenRespects,
                recievedRespects: action.user.recievedRespects,
                notifications: action.user.notifications,
                contacts: action.user.contacts
            },
            isLoading:false,
        }
    }




    // if(action.type==='CHANGE'){
    //     return{

    //     }
    // }
}

const UserProvider = (props) => {
    useEffect(() => {
        getLoggedInUser();
    }, [])
    const [UserState, dispatchUserState] = useReducer(userReducer, defaultUserCtx);
    const getLoggedInUser = async () => {
        if (localStorage.getItem('loggedInUser')) {
            const res = await axios.get(`https://imagebook.onrender.com/getUsers/${localStorage.getItem('loggedInUser')}`)
            const data = res?.data;
            setLogin(data[0])
            
        }
    }
    const setLogin = (user) => {
        dispatchUserState({ type: "SETLOGIN", user: user });
    }

    const userContext = {
        isLoggedIn: UserState.isLoggedIn,
        isLoading:UserState.isLoading,
        loggedInUser: UserState.loggedInUser,
        setLogin: setLogin,

    }

    return (
        <UserContext.Provider value={userContext}>
            {props.children}
        </UserContext.Provider>
    )
}
export default UserProvider;