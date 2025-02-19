import React from 'react'

export default function Keypoint() {
  return ( 
    <>

<div class="container text-center ">
  <div class="row ">
    {/* // section 1st---------------------------------------- */}

    <div class="col keypoint">
      {/* container first ------------- */}

     <div className="big">
     <div className="text">
        <h6>Get Trained by</h6>
        <h6><b style={{color:'orange'}}>CodeBetter</b></h6>
     </div>
     <div className="small">
        <img src="https://codebetter.in/images/homebanner/training.png" alt="" />
     </div>
     </div>
    </div>

      {/* // section 2nd---------------------------------------- */}

    <div class="col keypoint">
       {/* container second ------------- */}
       <div className="big">
       <div className="text">
        <h6>Get Internship from</h6>
        <h6><b> an </b><b style={{color:'orange'}}> IT Company</b></h6>
     </div>

     <div className="small">
     <img src="https://codebetter.in/images/homebanner/internship.png" alt="" />
     </div>
     </div>
    </div>

      {/* // section 3rd----------------------------------------- */}

    <div class="col keypoint">
      {/* container third ------------- */}
     <div className="big">
     <div className="text">
        <h6>Get Internship from</h6>
        <h6><b style={{color:'orange'}}>Scope Global Skills <br /> University, Bhopal</b></h6>
     </div>

     <div className="small small3">
        <img src="https://codebetter.in/images/homebanner/course-cpmpltion.png" alt="" />
     </div>
     </div>
    </div>
  </div>
</div>

     </>
  )
}

 