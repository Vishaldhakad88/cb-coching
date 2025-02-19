  import React, { useState } from 'react';
  import './Placements.css';
  import Navbar1 from '../component/Navbar1';
  import Nav from '../component/Nav'
  import placementData from "../component/placementData.json";
  import Footer from '../component/Footer';

  function Placements() {
    const [isVisible, setIsVisible] = useState(false); 
    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };

    return (
      <>
      <Nav/>
        <Navbar1 />
        <hr /><br /><br />
        <div className="container Placements">
          <h5><b>Join CodeBetter’s Placement Program and Launch Your Tech Career!</b><span> Our holistic approach, from resume building to real-world interviews, ensures that you’re not just job-ready but career-ready. Your success story starts here!</span>
            <br /><br />
            CodeBetter IT Institute is one of the best institutes to opt for AI and machine learning courses which major on machine learning training and placement. We are one of the top software training institutes in Indore, providing students with comprehensive software training and placement programs to emerge out as the best placement coaching in Indore. Our placement in Indore and training ensure that students get industry-ready. We have a reputation as the best coding classes in Indore with strong experience in delivering high-end learning. Join our institute of software training in Indore, which promises to take your career to the height of success.
          </h5>
        </div>

        <div className="container-fluid text-center placementsC">
          <div className="cards">
            {/* row - 1 ------------- */}
            <div className="card">
              <img src={placementData[0].url} alt={placementData[0].name} />
              <h5 className='name'>{placementData[0].name}</h5>
              <span className='job'>{placementData[0].job}</span>
              <span className='company'>{placementData[0].company}</span>
            </div>

            <div className="card">
              <img src={placementData[1].url} alt={placementData[1].name} />
              <h5 className='name'>{placementData[1].name}</h5>
              <span className='job'>{placementData[1].job}</span>
              <span className='company'>{placementData[1].company}</span>
            </div>

            <div className="card">
              <img src={placementData[2].url} alt={placementData[2].name} />
              <h5 className='name'>{placementData[2].name}</h5>
              <span className='job'>{placementData[2].job}</span>
              <span className='company'>{placementData[2].company}</span>
            </div>

            <div className="card">
              <img src={placementData[3].url} alt={placementData[3].name} />
              <h5 className='name'>{placementData[3].name}</h5>
              <span className='job'>{placementData[3].job}</span>
              <span className='company'>{placementData[3].company}</span>
            </div>
          </div>
          {/* row - 2 ------------------------------------ */}
          <div className="cards">
            <div className="card">
              <img src={placementData[4].url} alt={placementData[4].name} />
              <h5 className='name'>{placementData[4].name}</h5>
              <span className='job'>{placementData[4].job}</span>
              <span className='company'>{placementData[4].company}</span>
            </div>

            <div className="card">
              <img src={placementData[5].url} alt={placementData[5].name} />
              <h5 className='name'>{placementData[5].name}</h5>
              <span className='job'>{placementData[5].job}</span>
              <span className='company'>{placementData[5].company}</span>
            </div>

            <div className="card">
              <img src={placementData[6].url} alt={placementData[6].name} />
              <h5 className='name'>{placementData[6].name}</h5>
              <span className='job'>{placementData[6].job}</span>
              <span className='company'>{placementData[6].company}</span>
            </div>

            <div className="card">
              <img src={placementData[7].url} alt={placementData[7].name} />
              <h5 className='name'>{placementData[7].name}</h5>
              <span className='job'>{placementData[7].job}</span>
              <span className='company'>{placementData[7].company}</span>
            </div>
          </div>

          {/* Show the button only if the additional cards aren't visible */}
          {!isVisible && (
            <button type="button" onClick={toggleVisibility} className="btn btn-danger cardBtn">View More</button>
          )}

          {isVisible && (
            <div className="moreCards">
              <div className="cards">
                {/* row - 1 ------------- */}
                <div className="card">
                  <img src={placementData[0].url} alt={placementData[0].name} />
                  <h5 className='name'>{placementData[0].name}</h5>
                  <span className='job'>{placementData[0].job}</span>
                  <span className='company'>{placementData[0].company}</span>
                </div>

                <div className="card">
                  <img src={placementData[1].url} alt={placementData[1].name} />
                  <h5 className='name'>{placementData[1].name}</h5>
                  <span className='job'>{placementData[1].job}</span>
                  <span className='company'>{placementData[1].company}</span>
                </div>

                <div className="card">
                  <img src={placementData[2].url} alt={placementData[2].name} />
                  <h5 className='name'>{placementData[2].name}</h5>
                  <span className='job'>{placementData[2].job}</span>
                  <span className='company'>{placementData[2].company}</span>
                </div>

                <div className="card">
                  <img src={placementData[3].url} alt={placementData[3].name} />
                  <h5 className='name'>{placementData[3].name}</h5>
                  <span className='job'>{placementData[3].job}</span>
                  <span className='company'>{placementData[3].company}</span>
                </div>
              </div>
              {/* row - 2 ------------------------------------ */}
              <div className="cards">
                <div className="card">
                  <img src={placementData[4].url} alt={placementData[4].name} />
                  <h5 className='name'>{placementData[4].name}</h5>
                  <span className='job'>{placementData[4].job}</span>
                  <span className='company'>{placementData[4].company}</span>
                </div>

                <div className="card">
                  <img src={placementData[5].url} alt={placementData[5].name} />
                  <h5 className='name'>{placementData[5].name}</h5>
                  <span className='job'>{placementData[5].job}</span>
                  <span className='company'>{placementData[5].company}</span>
                </div>

                <div className="card">
                  <img src={placementData[6].url} alt={placementData[6].name} />
                  <h5 className='name'>{placementData[6].name}</h5>
                  <span className='job'>{placementData[6].job}</span>
                  <span className='company'>{placementData[6].company}</span>
                </div>

                <div className="card">
                  <img src={placementData[7].url} alt={placementData[7].name} />
                  <h5 className='name'>{placementData[7].name}</h5>
                  <span className='job'>{placementData[7].job}</span>
                  <span className='company'>{placementData[7].company}</span>
                </div>
                
              </div>

              {/* row -3 ---------------- */}
              <div className="cards">
                <div className="card">
                  <h5 style={{color:'red'}}>And many more..
                  </h5>
                  </div>
                
              </div>
            </div>
          )}
        </div>
        <br />
        <br /><br />
        <hr />
        <Footer />
      </>
    );
  }

  export default Placements;


