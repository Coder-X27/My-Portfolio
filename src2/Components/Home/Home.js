import React, { useState } from 'react'
import './Home.css'
import Astronaut from "../../Assets/Images/Astronaut.svg"
import logo from "../../Assets/Images/logo.png"
import Typewriter from 'typewriter-effect'
import img from '../../Assets/Images/bg.png'
function Home() {
  document.addEventListener('scroll', () => {
    var scroll_position = window.scrollY;
    if (scroll_position > 550) {
        document.getElementById('nav-main').style.background = 'white'
        document.getElementById('navLink1').style.color = 'black'
        document.getElementById('navLink2').style.color = 'black'
        document.getElementById('navLink3').style.color = 'black'
        document.getElementById('navLink4').style.color = 'black'
        document.getElementById('navLink5').style.color = 'black'
        document.getElementById('nav-main').style.boxShadow = '0 0 7px 0 grey'
        document.getElementById('brandLogo').style.filter = 'invert(1)'
        
      } else {
        document.getElementById('nav-main').style.background = 'transparent';
        document.getElementById('nav-main').style.boxShadow = '0 0 0 0 black'
        document.getElementById('brandLogo').style.filter = 'invert(0)'
        document.getElementById('navLink1').style.color = 'white'
        document.getElementById('navLink2').style.color = 'white'
        document.getElementById('navLink3').style.color = 'white'
        document.getElementById('navLink4').style.color = 'white'
        document.getElementById('navLink5').style.color = 'white'

      }
});
  return (
    <>
      <div id="Home">
        <header id='nav-main' className="nav-main">
          <div className="logo">
            <img id='brandLogo' className="brandLogo" src={logo} alt="" />
          </div>
          <ul id='navbar' className='navbar' >
            <li className='navLinks'><a href="#Home" id='navLink1' className='navLinks'>Home</a></li>
            <li className='navLinks'><a href="#About" id='navLink2' className='navLinks'>About</a></li>
            <li className='navLinks'><a href="#TandT" id='navLink3' className='navLinks'>Tech&Tools</a></li>
            <li className='navLinks'><a href="#contact" id='navLink4' className='navLinks'>Projects</a></li>
            <li className='navLinks'><a href="#Contact" id='navLink5' className='navLinks'>Contact</a></li>
          </ul>
        </header>
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