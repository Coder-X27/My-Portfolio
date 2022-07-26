import React from 'react'
import './Projects.css'
import project1 from '../../Assets/Images/Projects/project1.png'
import project2 from '../../Assets/Images/Projects/project2.png'
import project3 from '../../Assets/Images/Projects/project3.png'
import project4 from '../../Assets/Images/Projects/project4.png'
import project5 from '../../Assets/Images/Projects/project5.png'
import project6 from '../../Assets/Images/Projects/project6.png'
import project7 from '../../Assets/Images/Projects/project7.png'
import project8 from '../../Assets/Images/Projects/project8.png'
import project9 from '../../Assets/Images/Projects/project9.png'
import project10 from '../../Assets/Images/Projects/project10.png'
import project11 from '../../Assets/Images/Projects/project11.png'
import project12 from '../../Assets/Images/Projects/project12.png'
import project14 from '../../Assets/Images/Projects/project14.png'
import project19 from '../../Assets/Images/Projects/project19.png'
import { BsGithub } from "react-icons/bs";
import { SiFirefoxbrowser } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";
function Projects() {
    return (
        <div className="projectsSection">
            <div className="section2">
                <h1 className="title mar2 grey"><span>P</span>rojects</h1>
                <div className="projects">
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project1} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Data Analytics Application  </h1>
                            <p className="projectDescription">Application build on MERN Stack which gives access to the authorized person to take
                                input and present that data to the another person with other credentials in the form of Bar Graphs , Pie Charts
                                and many other Infographics. Technologies used in this Application are React.js, Web API, Authorisation, Axios ,
                                Express.js, Mongoose , Chart.js. </p>
                            <div className="goto">
                                <div className="link">
                                    <a target='_blank' rel="noreferrer" className='iconlink' href="https://github.com/Coder-X27/hackathon4">
                                        <BsGithub className='icons' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project2} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Portfolio First Version</h1>
                            <p className="projectDescription">This is my personal portfolio Website and  is created using pure HTML, CSS and JavaScript. This website gives you the experience of modern UI Design in which you can change the theme by using HUE Colors. It also has a dark mode by toggling that button you can experience the dark mode. Recruiters can view my profile it shows my Experience, Skills, Projects, and my Contact Info.</p>
                            <div className="goto">
                                <div className="link">
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://github.com/Coder-X27/Portfolio-Site">
                                        <BsGithub className='icons' />
                                    </a>
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://coderx-portfoliosite.netlify.app/">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project3} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >MultiPurpose NEWS APP</h1>
                            <p className="projectDescription">This Application is Created on React using the NEWS API. This website offers you the Latest News and categories such as General, Buissness, Entertainment, Health, Science, Sports and Technology. It automatically gets update in real time and you can see thousands of news in it.</p>
                            <div className="goto">
                                <div className="link">
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://github.com/Coder-X27/React-News-Application">
                                        <BsGithub className='icons' />
                                    </a>
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://react-newsapiproject.netlify.app/">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project4} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Text Analyzing Application</h1>
                            <p className="projectDescription">Application build on react which gives you the functionality to  convert your sample text to uppercase, lowercase, remove the extra white spaces from the text, Copy to Clipboard and preview this text. From the information of the survey a human takes a particular time to read text this analyze the text and shows you exactly how much time you gonna take to read this text.</p>
                            <div className="goto">
                                <div className="link">
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://github.com/Coder-X27/play-with-texts">
                                        <BsGithub className='icons' />
                                    </a>
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://coder-x27.github.io/play-with-texts/">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://www.linkedin.com/posts/karan-sharma-23574a1b9_community-webdevelopment-learning-activity-6949669219131092992-f_G1?utm_source=linkedin_share&utm_medium=member_desktop_web">
                                        <FaLinkedinIn className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project19} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Jecrc Hackathon 5.0</h1>
                            <p className="projectDescription">A website which is Developed for my College for conducting Inter-College
                                Hackathon 2021. This Website is based on Pure HTML, CSS and JavaScript. </p>
                            <div className="goto">
                                <div className="link">

                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://jecrchackathon.in/">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project11} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Cloud Application</h1>
                            <p className="projectDescription">A Cloud Notes application build on React.js and for security purpose the passwords are hashed with bcrypt.js with a high level security. In this you can read,upadate,delete and add the notes. In which you have to login with your credentials and the notes will be stored on cloud you can access them in any of your life time. </p>
                            <div className="goto">
                                <div className="link">
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://github.com/Coder-X27/Cloud-Web-App">
                                        <BsGithub className='icons' />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project5} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Dragon Adventures JavaScript Game</h1>
                            <p className="projectDescription">Ready for some adventure in the forests, then is the game for you.</p>
                            <div className="goto">
                                <div className="link">

                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://github.com/Coder-X27/Dragon-Game">
                                        <BsGithub className="icons" />
                                    </a>
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://idragonadventuresgame.netlify.app/">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project6} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Lamborghini Animation</h1>
                            <p className="projectDescription">This is a simple animation display of a car moving forward w.r.t the background .  </p>
                            <div className="goto">
                                <div className="link">
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://github.com/Coder-X27/Lamborghini-Animation">
                                        <BsGithub className='icons' />
                                    </a>
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="lamborghini-animation.netlify.app">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project7} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Notes Application</h1>
                            <p className="projectDescription">A site in which you can add your Notes and use it for future use by adding the title and the description . This will store the details in local storage. You can even delete the note if needed.  </p>
                            <div className="goto">
                                <div className="link">
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://github.com/Coder-X27/Notes-Maker">
                                        <BsGithub className='icons' />
                                    </a>
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://notesappbootstrap.netlify.app/">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project8} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Simon Game</h1>
                            <p className="projectDescription">Simon game is basically a memory game for the Alzheimer Patients as well as for the normal people to improve their memory . </p>
                            <div className="goto">
                                <div className="link">
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://github.com/Coder-X27/Simon-Game">
                                        <BsGithub className='icons' />
                                    </a>
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://coderx-simongame.netlify.app">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project9} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Library Management System</h1>
                            <p className="projectDescription">Library Management System is a basic application which stores the information realted to your book taken and it stores the data of your book in local storage. This JavaScript logic code is written in both ES6 and function based components.</p>
                            <div className="goto">
                                <div className="link">
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://github.com/Coder-X27/Library-Management-8-5-2021">
                                        <BsGithub className='icons' />
                                    </a>
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://library-management-es6.netlify.app/">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project10} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >JECRC Renaissance 22-SummerVibes</h1>
                            <p className="projectDescription">A informative Drinks website which is Developed as per the theme of the college event named Summer Vibes . This Website is based on Pure HTML, CSS and JavaScript.</p>
                            <div className="goto">
                                <div className="link">
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://github.com/Coder-X27/Renaissance2022-GOCODE-Site">
                                        <BsGithub className='icons' />
                                    </a>
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://renaissance2022-gocode.netlify.app/">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project12} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Post Master</h1>
                            <p className="projectDescription">In this application you can fetch the API's and make requests either GET/POST. You can simply add the JSON or your Custom parameters of your choice and it works similar to the POSTMAN or the THUNDER-CLIENT we use to make requests of our API's. It output the response using Prism.js </p>
                            <div className="goto">
                                <div className="link">
                                    <a rel="noreferrer" target="_blank" className='iconlink' href="https://postmaster-karansharma.netlify.app/">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project">
                        <div className="leftSection">
                            <img className='projectImg' id="clickable" src={project14} alt="" />
                        </div>
                        <div className="rightSection">
                            <h1 className="projectTitle" >Hotstart Clone</h1>
                            <p className="projectDescription">Disney Hotstart Clone with a crousel animation .</p>
                            <div className="goto">
                                <div className="link">
                                    <a rel="noreferrer" target="_blank" href="https://hotstar-clone-karansharma.netlify.app/">
                                        <SiFirefoxbrowser className="icons" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects