import React from "react";
import "./Testimonials.css";
import Navbar1 from '../component/Navbar1'
import Nav from '../component/Nav'
import Footer from '../component/Footer'

const testimonials = [
  {
    name: "Shubham Pandey",
    role: "React Native Developer",
    company: "ThoughtWin IT Solutions Pvt. Ltd.",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/shubham_pandey.jpg",
    text: "For a web development and iOS development courses, CodeBetter is the best institute. Faculties are very supportive.",
  },
  {
    name: "Raunak Jashnani",
    role: "Web Developer",
    company: "InfoBeans Technologies Limited",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/raunak_jashnani.jpg",
    text: "If you want to learn new technologies, this is the best institute for you; all facilities are excellent, the environment is pleasant, and the faculty members are courteous.",
  },
  {
    name: "Prince Dwivedi",
    role: "Full Stack Developer",
    company: "Webvillee Technology Pvt. Ltd",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/Prince_Dwivedi.jpg",
    text: "An awesome place to learn and grow, Experienced and supporting teachers.",
  },
  {
    name: "Shivkant Sisodiya",
    role: "Android Developer",
    company: "Ksolves",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/sivkant_shisodia.jpg",
    text: "I received training in Flutter and Native Android development from this institution, and they assisted me in securing a position in a reputable company. I highly recommend this institution to anyone looking to acquire or refine their computer-related skills. Their program incorporates practical sessions from the outset, ensuring that we receive hands-on experience from day one.",
  },
  {
    name: "Simran Modi",
    role: "Software Engineer Trainee",
    company: "iT Gurus Software",
    location: "Pune",
    image: "https://codebetter.in/images/placements-imgs/Simran_Modi.jpg",
    text: "A place where you wish to study and increase your technical skills regarding C, C++ and Java. faculties are supportive,friendly environment is there. And u will get placements in good companies as well. Teacher do their work well but it depends on student that how much practical knowledge u r getting by doing more n more practice. Thank you CODEBETTER😊.",
  },
  {
    name: "Bharti Chouhan",
    role: "iOS Developer",
    company: "Yash Technologies",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/Bharti_Chauhan.jpg",
    text: "Codebetter is really a great institute for freshers. I learnt a lot of things here in my IOS App development internship. Faculties all supportive, specially vijayavargiya sir. He taught us that how can we practically implement the skills rather than theoretical Thanks codebetter team.",
  },
  {
    name: "Jitendra Adlak",
    role: "React Native Developer",
    company: "Vkaps IT Solutions Pvt Ltd",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/jitendra_Adalak.jpg",
    text: "Really good institute to learn react, react native, android, ios or etc. My personal knowledge says - this. institute is very good. With the help of this institute I got a job as a react native developer in an IT company indore.",
  },
  {
    name: "Atuldev Sharma",
    role: "iOS Developer",
    company: "Yuvasoft Solutions Pvt Ltd",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/Atul_Dev_Sharma.jpg",
    text: "Codebetter provided me proper training on iOS App development. Although I am from non-IT background (BBA), but they helped me to improve my basic programming skills. Faculties are very supportive and helped me to prepare for interviews. I have got a good Job offer.",
  },
  {
    name: "Adnan Bohra",
    role: "React Native Developer",
    company: "Linkites Infotech Pvt Ltd",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/Adnan_Bohra.jpg",
    text: "I have trained my skills at Codebetter, I must say its one of the best training institute for coding language preparations.",
  },
  {
    name: "Suman Singh Bhati",
    role: "iOS Developer",
    company: "iT Gurus Software",
    location: "Pune",
    image: "https://codebetter.in/images/placements-imgs/Suman_Singh_Bhati.jpg",
    text: "Best institute in Indore for training and internship.",
  },
  {
    name: "Zahra Lokhandwala",
    role: "Software Engineer Trainee",
    company: "iT Gurus Software",
    location: "Pune",
    image: "https://codebetter.in/images/placements-imgs/Zahra_Lokhandwala.jpg",
    text: "For the ones interested in IT sector, Code Better institute is the best place to get start with, conduct various programming language classes with knowledgeable teachers, also provide good job opportunities.",
  },
  {
    name: "Ujjwal Paliwal",
    role: "ReactJs Developer",
    company: "Canopus Infosystems Private Limited",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/Ujjwal_Paliwal.jpg",
    text: "If you want to get trained in the trending technologies like react js, react native and MERN then code better is the best option available for you. I have done my training in react js and through out my training everything was good. And I also would like to thank videh sir and hemant sir for their constant support.",
  },
  {
    name: "Shivank Shukla",
    role: "ReactJs Developer",
    company: "EngineerBabu",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/shivank_Shukla.jpg",
    text: "Great institute, irrespective of the way you learn there either virtually or on campus all trainers treat you the same and help out if you are stuck somewhere. Great place to kickstart your career.",
  },
  {
    name: "Priyanka Kumari",
    role: "iOS Developer",
    company: "Cinta Medtech Private Limited",
    location: "Gurugram",
    image: "https://codebetter.in/images/placements-imgs/Priyanka_Kumari.jpg",
    text: "Good institute for beginners to learn iOS. Teachers are very helpful, you can ask your doubts n no of times. Overall good experience.",
  },
  {
    name: "Anjali Sharma",
    role: "ReactJs Developer",
    company: "MINDIII Systems Pvt. Ltd",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/anjali_sharma.jpg",
    text: "Code Better is best institute for learning Coding. here I did Web Development Course and faculty are awesome , familiar atmosphere and I suggest you guys if you want improve your technical skills must join this Code Better Institute.",
  },
  {
    name: "Aneesh Singh Baghel",
    role: "iOS Developer",
    company: "Siya Tech Ventures Pvt Ltd",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/aneesh_baghel.jpg",
    text: "Good Environment for learning language.",
  },
  {
    name: "Kalpesh Patil",
    role: "Java Developer",
    company: "Rakuten Symphony",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/kalpesh_patil.jpg",
    text: "Best institute in indore to learn or get master in any language or techology. culture is also very good to practice and helpfull faculty and other staff also after course complition we can also come for practice as much we want to come. overall best experince with code better.",
  },
  {
    name: "Pinki Kumari",
    role: "ReactJs Developer",
    company: "Creative Thoughts Informatics",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/female_user.jpg",
    text: "I saw many institutes, but CodeBetter is one of the best institute in Indore. Great institute for freshers. I learnt a lot of things here in my front-end development internship. Faculties all very supportive. If are you interested in coming software line, then don't waste your time to searching others. let's join CodeBetter institute and inbuild your knowledge.",
  },
  {
    name: "Rishi Namdev",
    role: "Python Developer",
    company: "Bitvivid Solutions Pvt Ltd",
    location: "Indore",
    image: "https://codebetter.in/images/placements-imgs/rishi_namdev.jpg",
    text: "I have done a internship here .I got what I paid for. I learnt a lot while doing the internship. learned how to actually build a project, working with back end and front end technologies. I have so much to say but altogether I learned a lot here and its a wonderful experience.",
  },
  {
    name: "Prashant Bhati",
    image: "https://codebetter.in/images/placements-imgs/prashant_bhati.jpg",
    text: "I can honestly say that Code Better Institute is probably the most useful training place and provides wonderful learning environment. This institute made the training class fun and interesting.... I suggest to all peoples who like and interested to make career in computer IT industry must visit once and register for your interested course....",
  },
  {
    name: "Yogesh Mangule",
    image: "https://codebetter.in/images/placements-imgs/yogesh_mangule.jpg",
    text: "I received training in ReactJs Web Development from this institution, and they assisted me in securing a position in a reputable company. I highly recommend this institution to anyone looking to acquire or refine their computer-related skills.Their program incorporates practical sessions fromthe outset, ensuring that we receive hands-on experience from day one Thanks to CodeBetter.",
  },
  {
    name: "Savan Pagare",
    image: "https://codebetter.in/images/placements-imgs/savan_pagare.jpg",
    text: "If you want to join for the course of web development, then there is no better institute than Code Better in Indore. All the faculties teach and explain very well, and solve every queries in easy way. All the faculties are very familiar. Thet also provide lab facility and every time teachers and trainers are available in the lab, who help us to solve all the problems at the same time. It has been a very good experience with Code Batter. Thanks to Code Better for guiding in the right way.",
  },
  {
    name: "Shanid Khan",
    image: "https://codebetter.in/images/placements-imgs/shanid_khan.jpg",
    text: "It's an amazing platform which helps us to start a good career in I.T sector. faculty and HR are very friendly and supportive. It is one of the best institutes to learn c,swift,ios from basics. The way of teaching of trainers is very good and easily we can understand the topics.",
  },
  {
    name: "Vandana Lakshkar",
    image: "https://codebetter.in/images/placements-imgs/vandana_lakshkar.jpg",
    text: "Code better is the best to learn many programming language. we learned about android from this place. Hemant sir trained as well using practical approach with projects also. Hemant sir is best teacher ever.",
  },
  {
    name: "Dharmendra Verma",
    image: "https://codebetter.in/images/placements-imgs/dharmendra_verma.jpg",
    text: "Codebetter is best place to gain knowledge related to codding. I Learn a lot of things. Best Place to enhance coding skills.",
  },
  {
    name: "Nancy Shivhare",
    image: "https://codebetter.in/images/placements-imgs/Nanshi_Shivhare.jpg",
    text: "It's really a great place to gain knowledge related to world of Codding. Giving me opportunity to become IOS developer with different aspect codebetter has helped me built my career foundation strong by giving good placement and also develop my personality through soft skill training to present myself in global world.",
  },
  {
    name: "Sushmita Barfa",
    image: "https://codebetter.in/images/placements-imgs/sushmita_barfa.jpg",
    text: "I joined Code Better for Full stack development internship and it was truly the best decision. Every smallest concept has been explained by faculties and helped me to cover all my doubts under their exceptional training sessions. And the lab supporter Radhika Mam and Ashvini Mam they are all time available in lab to solve error. Thanks for such an informative and concept-clearing training session.",
  },
  {
    name: "Shubham Vyas",
    role: "Full Stack Developer",
    company: "WebTech Pvt. Ltd.",
    location: "Pune",
    image: "https://codebetter.in/images/placements-imgs/shubham_vyas.jpg",
    text: "Codebetter not only a institute, it's a family. I joined batch Dec. 2018 and would say this is one of the best training institute in Indore. Very high quality 'iOS Development' training if you want then this is the one BEST in my knowledge. thank you CODEBETTER family!! 10/10",
  },
  {
    name: "Purva Kulkarni",
    image: "https://codebetter.in/images/placements-imgs/purva_kulkarni.jpg",
    text: "It's amazing place which helps us to start my carrier in I.T.field. Excellent place to enhance our coding skills.Faculties are very supportive at every time. Thank you so much for supporting me.",
  },
  {
    name: "Nalin Porwal",
    image: "https://codebetter.in/images/placements-imgs/nalin_porwal.jpg",
    text: "I am college student. code better gave me awesome iOS app development skill. Now I could make native iOS application.",
  },
  {
    name: "Sagar Makode",
    image: "https://codebetter.in/images/placements-imgs/sagar_makode.jpg",
    text: "Teaching is excellent, Especially your (supporting team) clarifications and explaining about the problems is good. And thanks for your support.",
  },
  {
    name: "Abhi Chouhan",
    image: "https://codebetter.in/images/placements-imgs/abhi_chouhan.jpg",
    text: "we learned c and cpp programming from code better. There's so many institutes but CodeBeter institute is one of the best training institute in indore for developing our Technical Skills at the top level. Faculty is too good and very helpful.",
  },
  {
    name: "Ajay Choudhary",
    image: "https://codebetter.in/images/placements-imgs/ajay_choudhary.jpg",
    text: "Code better is one of the best trainining institute , office management is good and always ready to help out in our problems trainers are very experienced they are very proficient in respected technologies.",
  },
  {
    name: "Pushkar Raj Yadav",
    role: "Full Stack Developer",
    company: "WebTech Pvt. Ltd.",
    location: "Pune",
    image: "https://codebetter.in/images/placements-imgs/pushkar_yadav.jpg",
    text: "I personally think best classes, give best atmosphere for practice, get much knowlege from there,it make my coding better as it named.",
  },
  {
    name: "Sangam Mukati",
    image: "https://codebetter.in/images/placements-imgs/male_user.jpg",
    text: "Awesome Technical Training classes and the Faculties is so supportive and management is also good. Online classes also available also given lecture videos for our support.",
  },
  {
    name: "Adarsh Dangi",
    image: "https://codebetter.in/images/placements-imgs/male_user.jpg",
    text: "This is the best institute in Indore city to learn programming languages. If you want to start your career in IT industry, this is the right place for you.",
  },
  {
    name: "Himanshu Shukla",
    image: "https://codebetter.in/images/placements-imgs/male_user.jpg",
    text: "Best training center in Indore for web development and other courses. I strongly recommend other student to join this training center as i found the best teacher and practice lab here.",
  },
];


const Testimonials = () => {
  return (
    <>
    <Nav/>
    <Navbar1/>
    <hr />
    <div className="haedingPart">
      <center>What Our <span style={{color:'red'}}>Students</span> Say</center>
      <h5 style={{textAlign:'center'}}><b>Transform Your Career:</b> Learn from Our Students Success Stories in Power BI, Data Analysis, and Internships</h5><br /><br />
    </div>
    <div className="testimonial-container">
      {testimonials.map((testimonial, index) => (
        <div key={index} className="testimonial-card">
          <div className="image-container">
            <img src={testimonial.image} alt={testimonial.name} className="profile-image" />
          </div>
          <div className="quote-icon">❝</div>
          <div className="stars">★★★★★</div>
          <p className="testimonial-text">{testimonial.text}</p>
          <h3 className="name">{testimonial.name}</h3>
          <p className="designation">{testimonial.role}</p>
          <p className="company">
            <strong>{testimonial.company}</strong>
          </p>
          <p className="location">{testimonial.location}</p>
        </div>
      ))}
    </div>
  <hr />
  <Footer/>
    </>
  );
};

export default Testimonials;

