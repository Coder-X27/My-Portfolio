import './Contact.css'
import img1 from '../../Assets/Images/Contact/github.png'
import img2 from '../../Assets/Images/Contact/facebook.svg'
import img3 from '../../Assets/Images/Contact/instagram.png'
import img4 from '../../Assets/Images/Contact/hackerrank.png'
import img5 from '../../Assets/Images/Contact/linkedin.png'
import img6 from '../../Assets/Images/Contact/leetcode.png'
import img7 from '../../Assets/Images/Contact/codechef.png'
import card1 from '../../Assets/Images/Contact/email.png'
import card2 from '../../Assets/Images/Contact/location.png'
import card3 from '../../Assets/Images/Contact/phone.png'
import React from 'react'

function Contact() {
  return (
    <div className="responsive2" id='Contact'>
      <div className="contactContainer">
        <h1 className="title mar2 grey">Contact <span>Me</span></h1>
        <div className="contact">
          <div className="card center">
            <div className="leftSec ">
              <img src={card1} alt="" />
              <p className="grey font ">sharma.karan27oct@gmail.com</p>
            </div>
          </div>
          <div className="card center">
            <div className="leftSec">
              <img src={card2} alt="" />
              <p className="grey font">Jaipur,Rajasthan</p>
            </div>
          </div>
          <div className="card center ">
            <div className="leftSec">
              <img src={card3} alt="" />
              <p className="grey font mar">+91 6377535991</p>
            </div>
          </div>
        </div>
        <div className="social">
          <div >
            <h1 className="title mar2 grey">
              <span> Social</span> Handles
            </h1>
          </div>
          <div className="socialHandles">
            <a target="_blank" rel="noreferrer" href="https://github.com/Coder-X27">
              <div className="socialHandle grey github">
                <img src={img1} alt="" />
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.facebook.com/Karansh99">
              <div className="socialHandle grey facebook">
                <img src={img2} alt="" />
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.instagram.com/its_karanshx/">
              <div className="socialHandle grey instagram">
                <img src={img3} alt="" />
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.hackerrank.com/Coder_X27">
              <div className="socialHandle grey hackerrank">
                <img src={img4} alt="" />
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/karan-sharma-23574a1b9/">
              <div className="socialHandle grey linkedin">
                <img src={img5} alt="" />
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://leetcode.com/karanshx/">
              <div className="socialHandle grey leetcode">
                <img src={img6} alt="" />
              </div>
            </a>
            <a target="_blank" rel="noreferrer" href="https://www.codechef.com/users/karanshx99">
              <div className="socialHandle grey codechef">
                <img src={img7} alt="" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
