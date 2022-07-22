import './About.css'
import React from 'react'
import profile from "../../Assets/Images/profile.jpg"
import resume from "../../Assets/Document/CV.pdf"


function About() {
    return (
        <>

            <div id='About' className="aboutContainer">
                <div className="sections">
                    <div className="sectionLeft">
                        <img src={profile} alt="" />
                    </div>
                    <div className="sectionRight">
                        <div className="description">
                            <h1 className="title">About <span> Me</span></h1>
                            <p className="desc">A Passionate Python Coder and a Full Stack Web Developer in MERN Stack offering more than 2 years of experience. Skilled in designing and developing multiple web-based Projects incorporating a range of technologies. Highly skilled at Frontend and Backend JavaScript Frameworks (React.Js and Node.Js). Aspiring to combine broad background with strong technical skills to excel as a Full Stack Web Developer and currently pursuing B.Tech Degree from JECRC Foundation in Artificial Intelligence and Data Science.</p>
                            <button className='resumeBtn btn'>
                            <a download="" href={resume}> Download Resume</a></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
