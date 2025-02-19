import React from 'react'
import Nav from '../component/Nav'
import Navbar1 from '../component/Navbar1'
import Footer from '../component/Footer'
import './Events.css';
import { event } from './EventsData';
// import EventsData from './EventsData'

function Events() {
  return (
    <div>
      <Nav/>
      <Navbar1/>
      <hr />
      
      <div className="container EventCardCss">
        {event.map((v,i)=>{
          return(
        <Card Item={v}/>   // props ..........
          )
        })}

      </div>
      <hr />
      <Footer/>
    </div>
  )
}

export default Events


function Card({Item}) {
  return (
    <div className='cardEvent'>
      <img src={Item.img} alt="" />
      <center style={{color:'red'}}>{Item.EventName}</center>
    </div>
  )
}
