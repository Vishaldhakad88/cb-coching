import React from 'react'
import placementData from "./placementData.json";
import { Link } from 'react-router-dom';



function Placements() {
    
  return (
    <div class="container-fluid text-center placements">
        <h1><b> CodeBetter's <span style={{color:'red'}}>Placements</span> </b></h1>
        <br /><br />
        <div className="cards">
            {/* row - 1 ------------- */}
            <div className="card">
                <img src={placementData[0].url} />
                <h5 className='name'>{placementData[0].name}</h5>
                <span className='job'>{placementData[0].job}</span>
                <span className='company'>{placementData[0].company}</span>
            </div> 

            <div className="card">
            <img src={placementData[1].url} />
                <h5 className='name'>{placementData[1].name}</h5>
                <span className='job'>{placementData[1].job}</span>
                <span className='company'>{placementData[1].company}</span>
            </div>
            
            <div className="card">
            <img src={placementData[2].url} />
                <h5 className='name'>{placementData[2].name}</h5>
                <span className='job'>{placementData[2].job}</span>
                <span className='company'>{placementData[2].company}</span>
            </div>
            
            <div className="card">
            <img src={placementData[3].url} />
                <h5 className='name'>{placementData[3].name}</h5>
                <span className='job'>{placementData[3].job}</span>
                <span className='company'>{placementData[3].company}</span>
            </div>
        </div>
{/* row - 2 ------------------------------------ */}
            
        <div className="cards">
            <div className="card">
                <img src={placementData[4].url} />
                <h5 className='name'>{placementData[4].name}</h5>
                <span className='job'>{placementData[4].job}</span>
                <span className='company'>{placementData[4].company}</span>
            </div> 

            <div className="card">
            <img src={placementData[5].url} />
                <h5 className='name'>{placementData[5].name}</h5>
                <span className='job'>{placementData[5].job}</span>
                <span className='company'>{placementData[5].company}</span>
            </div>
            
            <div className="card">
            <img src={placementData[6].url} />
                <h5 className='name'>{placementData[6].name}</h5>
                <span className='job'>{placementData[6].job}</span>
                <span className='company'>{placementData[6].company}</span>
            </div>
            
            <div className="card">
            <img src={placementData[7].url} />
                <h5 className='name'>{placementData[7].name}</h5>
                <span className='job'>{placementData[7].job}</span>
                <span className='company'>{placementData[7].company}</span>
            </div>
        </div>
        
        <button type="button" class="btn btn-danger"><Link to="/placements" style={{ textDecoration: 'none', color: 'white' }}>View More !</Link> </button>
<br />
<br /><br />
    </div>

  )
}

export default Placements
function Card() {
    return (
      <div>
        <div className="card">
                    <img src={placementData[7].url} alt={placementData[7].name} />
                    <h5 className='name'>{placementData[7].name}</h5>
                    <span className='job'>{placementData[7].job}</span>
                    <span className='company'>{placementData[7].company}</span>
                  </div>
   
      </div>
    )
  }
  