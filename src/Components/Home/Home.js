import React, { useState } from 'react'
import './Home.css'
import Astronaut from "../../Assets/Images/Astronaut.svg"
import logo from "../../Assets/Images/logo.png"
import Typewriter from 'typewriter-effect'
function Home() {
  return (
    <>
      <div id="Home">
        <div id='nav-main' className="nav-main">
          <div className="logo">
            <img className="brandLogo" src={logo} alt="" />
          </div>
          <ul id='navbar' className='navbar' >
            <li className='navLinks'><a href="#Home" className='navLinks'>Home</a></li>
            <li className='navLinks'><a href="#About" className='navLinks'>About</a></li>
            <li className='navLinks'><a href="#TandT" className='navLinks'>Tech&Tools</a></li>
            <li className='navLinks'><a href="#resume" className='navLinks'>Resume</a></li>
            <li className='navLinks'><a href="#contact" className='navLinks'>Contact</a></li>
          </ul>
          <div className="socialLogos">
            <a className='socialLogo' target='_blank' href="https://www.instagram.com/its_karanshx/">
              <i id='socialIcon' class="socialLogo fa-brands fa-instagram"></i>
            </a>
            <a className='socialLogo' target='_blank' href="https://www.linkedin.com/in/karan-sharma-23574a1b9/">
              <i id='socialIcon' class="socialLogo fa-brands fa-linkedin-in"></i>
            </a>
            <a className='socialLogo' target='_blank' href="https://github.com/Coder-X27">
              <i id='socialIcon' class="socialLogo fa-brands fa-github"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="seperate-left" >
            <div className="welcome">
              <h3 className="wel-title">Welcome to My portfolio Site</h3>
            </div>
            <div className="heading">
              <h1>Hi! I am <span className='auto-type'> Karan Sharma </span><br /> I am interested in<span >
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
            
            <a href="#About">
              <div className="connect">
                <h4>Lets Connect</h4>
                <div className='arrCircle'>
                  <i className="fa-solid fa-arrow-right"></i>
                </div>
              </div>
            </a>
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