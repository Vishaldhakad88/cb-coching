import React from 'react'
import Navbar1 from '../component/Navbar1'
import Nav from '../component/Nav'
import Footer from '../component/Footer'


function AboutUs() {
  return (
    <div>
      <Nav/>
      <Navbar1/>
      <hr />
      <div class="container text-center AboutUs">
      <h3>Welcome to CodeBetter</h3>
      <h6>Your Premier IT Training and Placement Institute in Indore!</h6>
      <center><div className='redLine'></div></center>
      <p>CodeBetter stands as a pioneering institution renowned for its distinctive teaching methodology that has propelled hundreds of students into their coveted IT careers. With a focused approach, we assist students in becoming proficient and launching their IT careers within a short span of 2-3 months.

Best Placement Coaching, Internships, and Institute in Indore
At CodeBetter, we offer master-level training across a spectrum of courses, including Python Data Science Internship, the best Python course for data analysis, and data science internships tailored for undergraduates and freshers. Our specialized machine learning training and placement programs, considered the best course for AI and machine learning, equip our students with cutting-edge skills demanded by the industry.

Our curriculum spans diverse areas such as .NET training online with certification, ideal for beginners, iOS application development courses, and Power BI Data Analyst certification - considered the best Power BI certification course in the industry.</p>

<h3 className='head1'>Mission</h3>
<p>At CodeBetter, our mission is to empower aspiring IT professionals with comprehensive and specialized training, enabling them to achieve their career goals swiftly. We are committed to providing top-tier training and placement services, ensuring that our students are well-prepared to enter the competitive IT landscape. Our focus is on delivering practical knowledge, enhancing skills in Python Data Science Internship, machine learning training and placement, .NET training online with certification, iOS application development courses, and Power BI Data Analyst certification, among others. We aim to equip our students with the expertise and confidence to excel in their desired IT careers within a span of 2-3 months.</p>

<h3 className='head2'>Vision</h3>
<p>Our vision at CodeBetter is to emerge as the preeminent destination for IT training and placement in Indore and beyond. We strive to maintain our status as the leading software training institute in Indore by continually adapting our curriculum to encompass the latest AI and machine learning trends. We envision CodeBetter as the go-to hub for individuals seeking the best Power BI certification course, unparalleled placement coaching in Indore, and a seamless transition into rewarding IT jobs. Our aim is to nurture a learning environment that fosters excellence, innovation, and success, preparing our students to be industry-ready professionals from day one.

We take pride in being recognized as the leading software training institute in Indore, focusing on training and placement services that ensure a seamless transition into the IT workforce. Our commitment to excellence is evident in providing the best placement coaching in Indore, empowering our students to secure their dream IT jobs.</p>

<div class="container-fluid text-center OurTeam">
  <h1 className='heding'>Our <span>Team</span></h1>
  <center>International exposure working with companies across the globe <br />
  Experience of delivering projects worth millions of dollar</center>
  <div className="cards">
            {/* row - 1 ------------- */}
            <div className="card">
                <img className='rounded-circle border border-4 border-dark' src="https://codebetter.in/images/ourTeam/amitJain.png" />
                <h5 className='name'>Amit Jain</h5>
                <span className='position'>Director</span>
                <span className='experience'>20+ Years of experience</span>
                <button type="button" class="btn btn-primary"><i class="bi bi-linkedin"></i>Connect with Linked-in</button>

            </div> 
            <div className="card">
                <img className='rounded-circle border border-4 border-dark' src="https://codebetter.in/images/ourTeam/team_pinkesh.jpg" />
                <h5 className='name'>Pinkesh Jain</h5>
                <span className='position'>Director</span>
                <span className='experience'>20+ Years of experience</span>
                <button type="button" class="btn btn-primary"><i class="bi bi-linkedin"></i>Connect with Linked-in</button>

            </div> 
            <div className="card">
                <img className='rounded-circle border border-4 border-dark' src="https://codebetter.in/images/ourTeam/hemant-vijayvargiya-new.jpg" />
                <h5 className='name'>Hemant Vijayvargiya</h5>
                <span className='position'>Head of Training Operations</span>
                <span className='experience'>20+ Years of experience</span>
                <button type="button" class="btn btn-primary"><i class="bi bi-linkedin"></i>Connect with Linked-in</button>

            </div> 

            
        </div>
</div>
<hr />
      <Footer/>
      </div>
    </div>
  )
}

export default AboutUs