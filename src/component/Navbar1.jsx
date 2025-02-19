import React from 'react'
import { Link } from 'react-router-dom';

function Navbar1() {
  return (
    <div className='container-fluid'>
    <nav className="navbar navbar1 navbar-expand-lg bg-body-dark">
    <div className="container-fluid">
    <Link className="navbar-brand" to="/"><img className='logo' src="https://www.itgurussoftware.com/images/digitalmarcketing/900X600/900X600_CodeBetter.jpg"/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/"><i class="bi bi-house-check-fill"></i> Home</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/AboutUs"><i class="bi bi-ticket-detailed"></i> About Us</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Courses"><i class="bi bi-backpack"></i>Courses</Link>
        </li>
        
        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Internship"><i class="bi bi-patch-check-fill"></i> Internship</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Placements"><i class="bi bi-speedometer2"></i> Placements</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Testimonials"> <i class="bi bi-chat-right-heart-fill"></i> Testimonials</Link>
        </li>

        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Events"><i class="bi bi-calendar-event-fill"> </i>
          Events</Link>
        </li>


        <li class="nav-item">
          <Link class="nav-link active" aria-current="page" to="/Contact"><i class="bi bi-telephone-inbound-fill"></i> Contact Us</Link>
        </li>
        
        
      </ul>
     
    </div>
  </div>
</nav>
</div>
  )
}

export default Navbar1