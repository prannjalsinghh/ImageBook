import React from "react";
const UserContext = React.createContext({
    isLoggedIn: false,
    loggedInUser: {
        registered:false,
        accountCreationDate:Date.now(),
        number: "",
        name:"",
        image:"",
        dateOfBirth:"",
        verified:false,
        trustScore:0,
        location: {},
        gender:"",
        givenRespects:[],
        recievedRespects:[],
    },
    setLogin: (user)=>{}
})

export default UserContext;