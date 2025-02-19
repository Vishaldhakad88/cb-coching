import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';

function Topcourses() {
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
    <div className="container-fluid  topcourses">
      <br />
      <h1>Here is <span style={{color:'red'}}>CodeBetter's</span> Top Courses</h1>
      <div className="mainbox">
        <Slider {...settings}>
          {data.map((d, index) => {
            return (
              <div key={index} className='topcoursesBox'>
                  <br />
                  <img src={d.url} alt={d.title} />
                  
                  <p>{d.title}</p>
                 <Link to={'/Courses'}> <button type="button" className="btn btn-danger">View Detail</button></Link>
                </div>
            
            );
          })}
        </Slider>
      </div>
    </div>
  );
}

const data = [
  {
    "url": "https://codebetter.in/images/courses/courseicons/mern.png",
    "title": "MERN FullStack Developer"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/mean.png",
    "title": "MERN FullStack Developer"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/python.png",
    "title": "Core Python Development"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/django.png",
    "title": "Python Django Web Development"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/data_science.png",
    "title": "Data Science and Data Engineering"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/data_analysis.png",
    "title": "Data Analytics with Power BI"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/machine_learning.png",
    "title": "Artificial Intelligence and Machine Learning"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/core.png",
    "title": "Core Java"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/java.png",
    "title": "Advance Java"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/java_spring.png",
    "title": "Java Spring Backend Development"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/manualTesting.png",
    "title": "Manual Testing"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/testing.png",
    "title": "Testing Automation"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/dotNet.png",
    "title": "ASP.NET Web Development"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/C_lang.png",
    "title": "Programming in C"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/cplusplus.png",
    "title": "Programming in C++"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/data_structures.png",
    "title": "Data Structure and Algorithms"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/digitalMark.png",
    "title": "Digital Marketing"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/salesForce.png",
    "title": "Salesforce Development"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/english_grammar.png",
    "title": "English Grammar and Verbal Communication"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/apple.png",
    "title": "iPhone/iPad App Development"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/flutter.png",
    "title": "Flutter Mobile App Development"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/android.png",
    "title": "Android Mobile App Development"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/reactNative.png",
    "title": "React Native Mobile App Development"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/reactJs.png",
    "title": "React JS Front End"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/angular.png",
    "title": "Angular Front End Development"
  },
  {
    "url": "https://codebetter.in/images/courses/courseicons/nodeJs.png",
    "title": "Node Js Express Js Mongo DB Backend"
  }
];

export default Topcourses;
