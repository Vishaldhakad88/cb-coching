import React, { useEffect, useState } from 'react'
import data from "./data.json";

function Slider() {
const[next,setNext]= useState(0);

// next button logic --------------
    const  nextbtn = ()=>{
        setNext((prevalue)=>{
            if(prevalue == data.length-1)
            {
                return 0;
            }
            return prevalue+1;
        })
    }

// next button logic --------------

const prebtn = ()=>{
    if(next == 0){
        setNext(data.length-1)
    }else{
    setNext(next-1)
}
}


// change the images with setInterval function *--------------
// setInterval is a callback function it is take two paramiter first function and second time. it use for perform repitive task.----------

useEffect(()=>{  
     // useEffect is a hook, it is a callback function, render after load website.

     setInterval(nextbtn,3000)
},[])
  return (
    <div className='container slider'>
        <div className="left-btn">
            <button onClick={prebtn}>{"<"}</button>
        </div>
        <img src={data[next].url} alt="image" />
        <div className="right-btn">
            <button onClick={nextbtn}>{">"}</button>
        </div>
    </div>
  )
}

export default Slider