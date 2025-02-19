import React, { useState } from 'react'
import Nav from '../component/Nav'
import Navbar1 from '../component/Navbar1'
import './Artificial_Intelligence_and_Machine_Learning.css'
import { Link } from 'react-router-dom'
import Topcourses from '../component/Topcourses'
import Footer from '../component/Footer'

function React_Node_Fullstack() {
  
  const [visible, setVisible] = useState(false)
  const togalBtn =()=>{
    setVisible(!visible);
  }
  const [visible1, setVisible1] = useState(false)
  const togalBtn1 =()=>{
    setVisible1(!visible1);
  }

  return (
    <div>
      <Nav/>
      <Navbar1/>
      <hr />
      <div className="container courseBox">
        <div className="AIMbox1">
          <img src="https://codebetter.in/images/courses/banner_machine_learning.jpg" alt="" />
        </div>
        <div className="AIMbox2">
          <center>Course <span style={{color:'red'}}> Features</span></center>
          <hr />
          <i class="bi bi-calendar-event"></i> &nbsp;&nbsp;<span>Duration &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'red'}}>6 - 8 Months </span></span>
          <br /><hr />
          <i class="bi bi-translate"></i>&nbsp;&nbsp;<span>Language &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'red'}}>Hindi/English</span></span>
          <br /><hr />
          <i class="bi bi-patch-check-fill"></i>&nbsp;&nbsp;<span>Certificate &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'red'}}>Yes </span></span>
          <br /><hr />
          <i class="bi bi-people-fill"></i>&nbsp;&nbsp;<span>Expert trainers &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'red'}}>Yes </span></span>
          <br /><hr />
          <i class="bi bi-cash-stack"></i>&nbsp;&nbsp;<span>Flexible Timing &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'red'}}>Yes</span></span>
          <br /><hr />
          <i class="bi bi-stopwatch-fill"></i>&nbsp;&nbsp; <span>Fee Installements &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'red'}}>Yes </span></span>
          <br /><hr />
          <center><Link to={'/InquiryBtn'}><button className='btn btn-danger text-center '>Enquire now</button></Link></center>

        </div>
        
        <div className="AIMbox3">
          <div className='detailBtn'>
          <span>
            <Link to={'/Courses'}><button className='btn border btn-dark m-4'>Back</button></Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;


            <button className='btn  btn-danger border m-4' onClick={togalBtn} >Overview </button>


            <button className='btn border-danger m-4' onClick={togalBtn1}>Course Content</button>

            <button className='btn border-danger  m-4'>Tutorials</button>

          </span>
          </div>
          {visible && (<div className="Description">
            <br />
            <h4>Description</h4>
            <p>Machine learning is a branch of artificial intelligence (AI) and computer science which focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving its accuracy. Additionally, CodeBetter IT Institute specializes in training individuals in AI and machine learning, offering comprehensive insights into this field of study.</p>

            <h4>Course Content Overview:</h4>

           </div>)}

           {visible1 && (<div>
            <div className="Artificial">
              <div className="headPy">
            <h3>Python</h3>
              </div>
              <div className="pythonSylbus">
                <ul>
                  <li>Introduction, Variables, Data Types, Operators, type Conversion
                  </li>
                  <li>Control structure - If else, switch, ternary operator, For loop, nested for loop, while loop, break, continue
                  </li>
                  <li>Collection - List, Dictionary, Set
                  </li>
                  <li>"functions, argument, return type, Arbitrary Arguments, *args, Keyword Arguments
                  </li>
                  <li>"kwargs, Default value parameters, nested functions. Anonymous functions. Local vs global variables"
                  </li>
                  <li>Introduction to OOP , Object , Class, Methods, initializer, self, static, List of object
                  </li>
                  <li>Inheritance - single, multilevel, hierarchical , multiple, pass keyword
                  </li>
                  <li>Runtime Polymorphism, Method overriding, super keyword, Abstraction, Abstract Class, ABC Module
                  </li>
                  <li>Modules and Access specifiers, Exception Handling try, except, raise, else, finally, custom exception
                  </li>
                  <li>Enumeration, Multithreading , File Handling, CSV read, write
                  </li>
                </ul>

                <div className="headPy">
              <h3>Numpy , Pandas, Matplotlib, Seaborn</h3>
              </div>
              <ul>
                <li>Introduction of Numpy, Data Types
                </li>
                <li>NdArray and Types of NdArray
                </li>
                <li>Array Attributes, Array Creation Patterns
                </li>
                <li>Indexing and Slicing,
                </li>
                <li>Iteration in Array
                </li>
                <li>Broadcasting
                </li>
                <li>String Functions
                </li>
                <li>Math Functions
                </li>
                <li>Statistical Functions
                </li>
                <li>Sort, Search and Counting Functions
                </li>
                <li>Matrix Functionality
                </li>
                <li>Introduction to Pandas
                </li>
                <li>Introduction of Series and methods
                </li>
                <li>Introduction of Dataframe creation
                </li>
                <li>Method of Dataframe
                </li>
                <li>Reindexing, Indexing and Slicing of Data
                </li>
                <li>GroupBy, Merging/Joining, Categorical Data
                </li>
                <li>Introduction of matploatlib installation plot
                </li>
                <li>Type of Plotting
                </li>
                <li>Introduction of Seaborn and installation
                </li>
                <li>Type of visualization
                </li>
                <li>Database Connectivity – MySql Connector
                </li>
              </ul>

              </div>
            </div>
           </div>)}
          
        </div>
        <div className="AIMbox4">
        <center>Our <span style={{color:'red'}}> Reviews</span></center>
          <hr />
          <span className='AVGrating' style={{color:'red'}}>Average Rating <br />
          
          <i className="bi bi-star-fill"></i>&nbsp;
          <i className="bi bi-star-fill"></i>&nbsp;
          <i className="bi bi-star-fill"></i>&nbsp;
          <i className="bi bi-star-fill"></i>&nbsp;
          <i className="bi bi-star-fill"></i>&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <span style={{color:'red'}}> <b> 4.9 </b></span>
          </span>
          <br /><hr />
          <span style={{color:'red'}}>Justdial	 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={{color:'red'}}>112 Reviews</span></span>
          <br /><hr />

        </div>
      </div>
       <br /><br />
     <Topcourses/>
     <Footer/>
      </div>
  
  )
}

export default React_Node_Fullstack