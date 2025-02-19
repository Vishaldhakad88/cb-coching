import React from 'react'
import Navbar1 from '../component/Navbar1'
import Inquiry from '../component/Inquiry'
import Footer from '../component/Footer'
import { Link } from 'react-router-dom'
function Courses() {
  return (
    <div class="container-fluid text-center Courses">
        <Navbar1/>
        <hr />
      <h3 className='CoursesHed '>Our <span>Courses</span></h3>


      {/* Data Science, AI and Machine Learning--------------- course code  */}

<div className='container-fluid coursesHeading'>
      <div className="headingboximg">
        <img src="https://codebetter.in/images/courses/ai.png" alt="" />
      </div>
      <div className="headingboxtext rounded-pill">
        <h4>Data Science, AI and Machine Learning
        </h4>
      </div>
 </div>

 <div class="container-fluid text-center CoursesCard">
      <div className="cards">
            {/* row - 1 ------------- */}
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/machine_learning.png" />
                <p className='title'>Artificial Intelligence and <br />Machine Learning</p>
                <Link to={'/Artificial_Intelligence'}><button type="button" class="btn btn-danger">View Details</button>
                </Link>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/data_analysis.png" />
                <p className='title'>Data Analytics with Power BI, <br />SQL and Excel</p>
                <Link to={'/Data_Analytics'}><button type="title" class="btn btn-danger">View Details</button>
                </Link>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/data_science.png" />
                <p className='title'>Data Science and <br /> Data Analytics</p>
                <Link to={'/Data_Science'}><button type="button" class="btn btn-danger">View Details</button>
                </Link>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/django.png" />
                <p className='title'>Python Django App <br />Development</p>
                <Link to={'/Python_Django'}><button type="button" class="btn btn-danger">View Details</button>
                </Link>
            </div> 
            </div>

            {/* row second ----------- */}
            
            <div className="cards">
            {/* row - 1 ------------- */}
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/python.png" />
                <p className='title'>Python Programming</p>
                <Link to={'/Python_Programming'}><button type="button" class="btn btn-danger">View Details</button>
                </Link>
            </div> 
            </div>
</div>

<br /><br />
{/* Fullstack Development courses ---------code------- */}
<div className='container-fluid coursesHeading'>
      <div className="headingboximg">
        <img src="https://codebetter.in/images/courses/fullstack.png" alt="" />
      </div>
      <div className="headingboxtext rounded-pill">
        <h4>Fullstack Development</h4>
      </div>
 </div>

 <div class="container-fluid text-center CoursesCard">
      <div className="cards">
            {/* row - 1 ------------- */}
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/mern.png" />
                <p className='title'>React Node Fullstack <br />
                Development (MERN)</p>
                <Link to={'/reactNode'}><button type="button" class="btn btn-danger">View Details</button>
                </Link>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/java_spring.png" />
                <p className='title'>Java Spring Backend <br /> Development</p>
                <Link to={'/javaSpring'}> <button type="title" class="btn btn-danger">View Details</button>
                </Link>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/dotNet.png" />
                <p className='title'>ASP.NET Web <br />
                Development</p>
                <Link to={'/asp_net'}><button type="button" class="btn btn-danger">View Details</button>
                </Link>

            </div> 
             
            </div>   
</div>

<br /><br />
{/* Campus Placement Preparation  courses code------------ */}


<div className='container-fluid coursesHeading'>
      <div className="headingboximg">
        <img src="https://codebetter.in/images/courses/pro%20graminLanguage.png" alt="" />
      </div>
      <div className="headingboxtext rounded-pill">
        <h4>Campus Placement Preparation</h4>
      </div>
 </div>

 <div class="container-fluid text-center CoursesCard">
      <div className="cards">
            {/* row - 1 ------------- */}
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/data_structures.png" />
                <p className='title'>Data Structure and <br /> Algorithms</p>
                <button type="button" class="btn btn-danger">View Details</button>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/data_analysis.png" />
                <p className='title'>RDBMS with SQL<br />Development</p>
                <button type="title" class="btn btn-danger">View Details</button>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/placement.png" />
                <p className='title'>Aptitude and Reasoning</p>
                <button type="button" class="btn btn-danger">View Details</button>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/english_grammar.png" />
                <p className='title'>English Communication <br />& Personality Development</p>
                <button type="button" class="btn btn-danger">View Details</button>
            </div> 
            </div>

            {/* row 2 ------------------- */}
            <div className="cards">
            
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/bdm.png" />
                <p className='title'>Github</p>
                <button type="button" class="btn btn-danger">View Details</button>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/C_lang.png" />
                <p className='title'>C Programming</p>
                <button type="title" class="btn btn-danger">View Details</button>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/cplusplus.png" />
                <p className='title'>C++ Programming</p>
                <button type="button" class="btn btn-danger">View Details</button>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/core.png" />
                <p className='title'>Core Java</p>
                <button type="button" class="btn btn-danger">View Details</button>
            </div> 
            </div>

            {/* row third ----------- */}
            
            <div className="cards">
            {/* row - 1 ------------- */}
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/python.png" />
                <p className='title'>Python Programming</p>
                <button type="button" class="btn btn-danger">View Details</button>
            </div> 
            </div>
</div>
<br /><br />

{/* Fullstack Development courses ---------code------- */}
<div className='container-fluid coursesHeading'>
      <div className="headingboximg">
        <img src="https://codebetter.in/images/courses/mobapp.png" />
      </div>
      <div className="headingboxtext rounded-pill">
        <h4>Mobile App Development</h4>
      </div>
 </div>

 <div class="container-fluid text-center CoursesCard">
      <div className="cards">
            {/* row - 1 ------------- */}
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/mobapp.png" />
                <p className='title'>iPhone/ iPad App <br />Development</p>
                <button type="button" class="btn btn-danger">View Details</button>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/flutter.png" />
                <p className='title'>Flutter Mobile App <br />Development</p>
                <button type="title" class="btn btn-danger">View Details</button>

            </div> 
            <div className="card border-3 border-danger rounded-5">
                <img src="https://codebetter.in/images/courses/courseicons/reactNative.png" />
                <p className='title'>ReactNative Mobile App <br />Development</p>
                <button type="button" class="btn btn-danger">View Details</button>

            </div> 
             
            </div>   
</div>

<br /><br />
<Inquiry/>
<Footer/>
      </div>
  )
}

export default Courses