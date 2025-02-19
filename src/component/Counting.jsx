// import React from 'react'
import CountUp  from "react-countup";
import React, { useState, useEffect } from "react";

function Counting() {
  
  return <>
{/* this section for experience counting ---------- */}

      <div class="container text-center counting-bg">
  <div class="row ">
    <div class="col experience">
      <h1><b style={{fontSize:'65px'}}>
      <CountUp 
      start={0} end={10}>
      </CountUp>
        </b>+Years</h1>
   <h1 style={{color:'orange'}}> Experience </h1>
    </div>



    <div class="col experience">
      <h1><b style={{fontSize:'65px'}}>
        <CountUp 
        start={0} end={28}>
      </CountUp></b></h1>
   <h1 style={{color:'orange'}}> Courses </h1>
    </div>

    <div class="col experience">
      <h1 className="cont"><b style={{fontSize:'65px'}}>
        <CountUp 
      start={0} end={5000}>
      </CountUp>
      </b>+</h1>
   <h1 style={{color:'orange'}}> Trainee </h1>
    </div>

    <div class="col experience">
      <h1><b style={{fontSize:'65px'}}><CountUp 
      start={0} end={1200}>
      </CountUp></b>+</h1>
   <h1 style={{color:'orange'}}>Placements </h1>
    </div>

  </div>
</div>
      
      
  </>
}

export default Counting