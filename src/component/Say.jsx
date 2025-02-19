import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Reting from './Reting'

function Say() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
              
            }
          }
          ]
      };
    

      
  return (
    <div className="container-flud  Say">
      <br />
      <h1>What our <span style={{color:'red'}}>Students </span> Say!</h1>
      <br />
      {/* ----------+card+---------- */}
      <Slider {...settings}>
          {data.map((d, index) => {
            return (
              <div key={index} className='SayBox'>
                  <br />
                  <img src={d.url} alt={d.title} className='rounded-circle ' />
                  {/* reting with star ............. */}
                  <Reting/>
                {/* ---------------------------------- */}
                  <p>{d.dec}</p>
                  <h4>{d.name}</h4>
                  <p>{d.job}</p>
                  <h3>{d.company}</h3>
                </div>
            
            );
          })}
        </Slider>
 
    </div>
  )
}

const data = [
    {
      "url": "https://codebetter.in/images/placements-imgs/Adnan_Bohra.jpg",
      "dec": "I have trained my skills at Codebetter, I must say its one of the best training institude for coding.",
      "name":"Adnan Bohra",
      "job":"React Native Developer",
        "company":"Linkites Infotech Pvt Ltd"
    },
    {
      "url":"https://codebetter.in/images/placements-imgs/Bharti_Chauhan.jpg",
      "dec":"Codebetter is really a great institude for freshers. I learnt a lot of things here.",
        "name":"Bharti Chouhan",
        "job":"iOS Developer",
        "company":"Yash Technologies"
    },
    {
      "url": "https://codebetter.in/images/placements-imgs/jitendra_Adalak.jpg",
      "dec":" Really Good institude to learn React, React Native, Android, ios or etc",
        "name":"Jitendra Adalak",
        "job":"React Native Developer",
        "company":"Vkaps IT Solutions Pvt ltd"
 },
    {
      "url": "https://codebetter.in/images/placements-imgs/Zahra_Lokhandwala.jpg",
      "dec":"For the ones interested in IT sector, Code better is institude is best place.",
        "name":"Jitendra Adalak",
        "job":"React Native Developer",
        "company":"Vkaps IT Solutions Pvt ltd"
  },
    {
      "url":"https://codebetter.in/images/placements-imgs/Simran_Modi.jpg",
      "dec":"A place where you wish to study and increase your technical skills",
        "name":"Simran Modi",
        "job":"Software Engineer Trainee",
        "company":"iT Gurus Software"
    }
  ];
  
  
export default Say