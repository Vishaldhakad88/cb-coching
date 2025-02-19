import React from 'react';
import Navbar1 from '../component/Navbar1';
import Inquiry2 from '../component/Inquiry2';
import './inquiryBtn.css';
import Footer from '../component/Footer';

function InquiryBtn() {
  return (
    <div>
      <Navbar1 />
      <hr />
      <div className="container text-center InquiryBtn">
        <h1>
          <b>Get in Touch <span>With Us</span></b>
        </h1>
        <p>
          Embark on a transformative journey with CodeBetter today! Dive into the excellence through our unparalleled machine learning training and placement programs, unlocking the door to career opportunities. Explore the pinnacle of education with the best course for AI and machine learning, shaping your expertise in cutting-edge technology. Discover your potential with the best data science and machine learning course, designed to propel your career to new heights.
          Don't miss your chance to be part of this dynamic learning experience! Contact us now and join a community dedicated to fostering innovation and skill development. Our expert team awaits to guide you on your path to success. Whether you're seeking machine learning training and placement, the best course for AI and machine learning, or the best data science and machine learning course, CodeBetter is your gateway to a thriving career in technology.
          CodeBetter's iOS Application Development Course and Placement
          Reach out today, and let's embark on a journey that transforms aspirations into achievements. Together, let's code a better future!
        </p>
        <Inquiry2 />
        <Footer />
      </div>
    </div>
  );
}

export default InquiryBtn;
