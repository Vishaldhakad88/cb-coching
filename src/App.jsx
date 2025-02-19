import React from 'react';
import './App.css';
import Counting from './component/Counting';
import Nav from './component/Nav';
import Navbar1 from './component/Navbar1';
import Slider from './component/Slider';
import Keypoint from './component/Keypoint';
import Placements from './component/Placements';
import Topcourses from './component/Topcourses';
import Say from './component/Say';
import Companies from './component/Companies';
import Welcome from './component/Welcome';
import Join from './component/Join';
import Inquiry from './component/Inquiry';
import Footer from './component/Footer'; 

function App() {
  return (
    <div> 
      <Nav />
      <Navbar1 />
      <Slider />
      <Keypoint />
      <Counting />
      <Placements />
      <Topcourses />
      <Say />
      <Companies />
      <Welcome />
      <Join />
      <Inquiry />
      <Footer />
    </div>
  );
}

export default App;
