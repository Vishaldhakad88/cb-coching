import React from 'react'

function Welcome() {
  return (
    <div class="container-fluid text-center welcome">
        <h1><b>Welcome to CodeBetter</b> </h1>
        <h5>Rise Above The Rest</h5>
        <div className="line"></div>
        <br />

        <div className="WelcomeBox">
        <div className="Welcomeimg">
            <img className='imgge' src="https://codebetter.in/images/homebanner/welcome-codebetter.jpg" width={'500px'} alt="" />
        </div>
      
    <div className="WelcomePara">
            <ul>
                <li>Are you an aspiring technology aficionado? Learn more about Python, data science, machine learning, and much more at CodeBetter through numerous opportunities to improve your skills and advance your career.</li>
                <br />
                <li>
                <span style={{fontWeight:'bold'}}>Courses and Internship Diversified:</span> Courses and internship opportunities from CodeBetter include a wide range of aspirations to propel you forward in your career.
                </li>
                <br />
                <li>
                <span style={{fontWeight:'bold'}}> CodeBetter:</span> Best iOS Training and Best Coding Classes in Indore: We are well-known for top-notch training, with complete iOS training in Indore, coupled with best coding classes in the city.
                </li>
                <br />
                <li>
                <span style={{fontWeight:'bold'}}> Python Data Science Internship: </span> Our course is designed for undergrads and freshers who would like to take the best Python course for data analysis. Jump into data analysis and gear up for sought-after data science internships in this current competitive market.
                </li>
                <br />
                <li >
                 <b>Machine Learning and Artificial Intelligence:</b> Leading with focused Machine Learning training and placement programs. Hands-on expertise in AI and machine learning: right skills in today's technology landscape. Here, our courses ensure you are receiving top-notch data science and machine learning training, which gives you a competitive edge in this rapidly evolving field.
                </li>
            </ul>
        </div>
    
  </div>
</div>


  
  )
}

export default Welcome