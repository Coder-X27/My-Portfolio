import React from 'react'
import './Home.css'
import Astronaut from "../../Assets/Images/Astronaut.svg"
import Typewriter from 'typewriter-effect'
import {FaArrowRight} from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Home() {
  
  return (
    <>
      <div id="Home">
        <div className="container">
          <div className="seperate-left" >
            <div className="welcome">
              <h3 className="wel-title">Welcome to My portfolio Site</h3>
            </div>
            <div className="heading">
              <h1 className="wel-subtitle" >Hi! I am <span className='auto-type'> Karan Sharma </span><br /> I am interested in<span >
                <Typewriter
                  
                  options={{
                    autoStart: true,
                    loop: true,
                    delay : 150,
                    strings: ["MERN Stack Development","Compititive Programming","Machine Learning"],
                  }}
                />
              </span> </h1>
            </div>
            <Link to="/About">
              <div className="connect">
                <h2 className="wel-subtitle">Lets Connect</h2>
                <div className='arrCircle wel-title'>
                  <FaArrowRight/>
                </div>
              </div>
            </Link>
          </div>
          <div className="seperate-right">
            <img className="homeAstronaut" src={Astronaut} alt="" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home