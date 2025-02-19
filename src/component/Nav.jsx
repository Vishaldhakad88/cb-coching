import React from 'react';
import { Link } from 'react-router-dom';  

function Nav() {
  return (
    <div className='container-fluid'>
      <nav className="navbar navbar-expand-lg bg-body-dark">
        <div className='icon'>
          <Link to="https://api.whatsapp.com/send/?phone=%2B916261119739&text=Name%3A++++++++++++++++++++++++%0AEmail%3A++++++++++++++++++++++++++%0APhone%3A++++++++++++++++++++++++%0AMessage%3A+%0A%0A&type=phone_number&app_absent=0">
            <i className="bi bi-whatsapp"></i>
          </Link>
          &nbsp;&nbsp;
          <Link to="https://www.instagram.com/code.better?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <i className="bi bi-instagram"></i>
          </Link>
          &nbsp;&nbsp;
          <Link to="https://www.facebook.com/share/1ApR4eNwzg/">
            <i className="bi bi-facebook"></i>
          </Link>
          &nbsp;&nbsp;
          <Link to="https://www.linkedin.com/company/codebetter/">
            <i className="bi bi-linkedin"></i>
          </Link>
        </div>
        <div className="contect">
          <i className="bi bi-envelope"></i><span> contact@codebetter.in</span>
          &nbsp;&nbsp;  &nbsp;&nbsp;
          <i className="bi bi-telephone"></i><span>+91 88230 75444,+91 99939 28766</span>
        </div>
        <div className="btn">
          <button type="button" className="btn btn-danger">
            <i className="bi bi-chat-left-text"></i> &nbsp;
            {/* Ensure the Link component is wrapped in the button without breaking the button styling */}
            <Link to="/InquiryBtn" style={{ textDecoration: 'none', color: 'white' }}>Enquiry Now!</Link>
          </button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
