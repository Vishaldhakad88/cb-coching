import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import InquiryBtn from './otherPage/InquiryBtn'; 
import AboutUs from './otherPage/AboutUs'; 
import Courses from './otherPage/Courses'; 
import Internship from './otherPage/Internship'; 
import Placements from './otherPage/Placements'; 
import Contact from './otherPage/Contact'; 
import Testimonials from './otherPage/Testimonials'; 
import Events from './otherPage/Events';
import PlaceViewMore from './otherPage/PlaceViewMore'; 
import Artificial_Intelligence_and_Machine_Learning from './AllCourses/Artificial_Intelligence_and_Machine_Learning.jsx';
import Data_Analytics_withPower_BI_SQL_and_Excel from './AllCourses/Data_Analytics_withPower_BI_SQL_and_Excel.jsx';
import Data_Science_and_Data_Analytics from './AllCourses/Data_Science_and_Data_Analytics.jsx';
import Python_Django_App_Development from './AllCourses/Python_Django_App_Development.jsx';
import Python_Programming from './AllCourses/Python_Programming.jsx';
import React_Node_Fullstack from './AllCourses/React_Node_Fullstack.jsx';
import Java_Spring_Backend from './AllCourses/Java_Spring_Backend.jsx';
import ASP_NET_Web from './AllCourses/ASP_NET_Web.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
   

      <Routes>
        <Route path="/" element={<App />} /> {/* Route for the main app */}
        <Route path="/InquiryBtn" element={<InquiryBtn />} /> {/* Route for the inquiry button */}
      </Routes>

      <Routes>
        
        <Route path="/AboutUs" element={<AboutUs />} /> 
        <Route path="/Courses" element={<Courses />} /> 
        <Route path="/Internship" element={<Internship />} /> 
        <Route path="/Placements" element={<Placements />} /> 
        <Route path="/Testimonials" element={<Testimonials />} /> 
        <Route path="/Events" element={<Events />} />
        <Route path="/Contact" element={<Contact />} /> 
        </Routes>

        <Routes>
          <Route path='/PlaceViewMore' element={<PlaceViewMore/>}/>
        </Routes>
     
     <Routes>
      <Route path='/Artificial_Intelligence' element={<Artificial_Intelligence_and_Machine_Learning/>}></Route>
      <Route path='/Data_Analytics' element={<Data_Analytics_withPower_BI_SQL_and_Excel/>}></Route>
      <Route path='/Data_Science' element={<Data_Science_and_Data_Analytics/>}></Route>
      <Route path='/Python_Django' element={<Python_Django_App_Development/>}></Route>
      <Route path='/Python_Programming' element={<Python_Programming/>}></Route>
      <Route path='/reactNode' element={<React_Node_Fullstack/>}></Route>
      <Route path='/javaSpring' element={<Java_Spring_Backend/>}></Route>
      <Route path='/asp_net' element={<ASP_NET_Web/>}></Route>
     </Routes>
    </BrowserRouter>
  </StrictMode>
);
