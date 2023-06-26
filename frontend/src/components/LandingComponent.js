import { useState,useEffect } from "react";
const LandingComponent = (props)=>{
    const [width,setWidth] = useState(0)


    useEffect(()=>{
       
        setTimeout(()=>{
            loadingFiller(width+20)
        },100)
       
    },[width])

    const loadingFiller = (width)=>{
        if(width>100){
            props.PageChanger('3');
            return;
        }
        setWidth(width)
    }
    return(
        <><p style={{color:"#144A6B"}} className="text-center text-sm mt-3.5">
            “सभ्य समाज की सभ्य पहचान है,<br/>
            इमेजबुक अब भरोसा करना आसान है”
            </p>
            <div style={{backgroundColor:"#DFF6FF",height:"8px",width:"155px",borderRadius:"100px"}} className="mt-44">
                <div
                style={{
                    borderRadius:"100px",
                    backgroundColor:"#1363DF",
                    width:`${width}%`,
                    height:"100%"
                }}>

                </div>
            </div></>
    )
}
export default LandingComponent;