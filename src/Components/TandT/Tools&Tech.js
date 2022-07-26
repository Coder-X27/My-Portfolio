import './TandT.css'

import React from 'react'
import url1 from "../../Assets/Images/Languages/html.png"
import url2 from "../../Assets/Images/Languages/css.png"
import url3 from "../../Assets/Images/Languages/javascript.png"
import url4 from "../../Assets/Images/Languages/react.png"
import url5 from "../../Assets/Images/Languages/node.png"
import url6 from "../../Assets/Images/Languages/mongo.png"

import lang1 from '../../Assets/Images/Languages/c.png'
import lang2 from '../../Assets/Images/Languages/cpp.png'
import lang3 from '../../Assets/Images/Languages/matplotlib.png'
import lang4 from '../../Assets/Images/Languages/numpy.png'
import lang5 from '../../Assets/Images/Languages/pandas.png'
import lang6 from '../../Assets/Images/Languages/pug.png'
import lang7 from '../../Assets/Images/Languages/python.png'
import lang8 from '../../Assets/Images/Languages/seaborn.png'
import lang9 from '../../Assets/Images/Languages/scipy.png'
import lang10 from '../../Assets/Images/Languages/tensorflow.png'

import tool1 from '../../Assets/Images/Tools/babel.png'
import tool2 from '../../Assets/Images/Tools/bootstrap.png'
import tool3 from '../../Assets/Images/Tools/git.png'
import tool4 from '../../Assets/Images/Tools/github.png'
import tool5 from '../../Assets/Images/Tools/heroku.png'
import tool6 from '../../Assets/Images/Tools/netlify.png'
import tool7 from '../../Assets/Images/Tools/stackoverflow.png'
import tool8 from '../../Assets/Images/Tools/sublimetext.png'
import tool9 from '../../Assets/Images/Tools/tailwind.png'
import tool10 from '../../Assets/Images/Tools/VScode.png'


function TandT() {
  return (
    <div className="responsive">
      <div id='TandT'>
        <div className="section">
          <div className="cubeSection">
            <div className="homeCubeSkills mb5">
              <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                <img src={url1} alt="Face1" />
              </div>

              <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                <img src={url2} alt="Face2" />
              </div>

              <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                <img src={url3} alt="Face3" />
              </div>

              <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                <img src={url4} alt="Face4" />
              </div>

              <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                <img src={url5} alt="Face5" />
              </div>

              <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                <img src={url6} alt="Face6" />
              </div>
            </div>
            <h1 className="title grey auto m"><span> T</span>echnology <br /> and <span> T</span>ools </h1>
          </div>
          <div className="skillsSection">
            <div className="languages">
              <h1 className="subTitle grey">Languages and Frameworks</h1>
              <div className="language">
                <div className="lang1 lang">
                  <img className='langImg' src={lang1} alt="" />
                  <p className="langName">C</p>
                </div>
                <div className="lang1 lang">
                  <img className='langImg' src={lang2} alt="" />
                  <p className="langName">C++</p>
                </div>
                <div className="lang1 lang">
                  <img className='langImg' src={lang7} alt="" />
                  <p className="langName">Python</p>
                </div>
                <div className="lang1 lang">
                  <img className='langImg' src={lang6} alt="" />
                  <p className="langName">Pug</p>
                </div>
                <div className="lang1 lang">
                  <img className='langImg' src={lang3} alt="" />
                  <p className="langName">MatPlotLib</p>
                </div>
                <div className="lang1 lang">
                  <img className='langImg' src={lang4} alt="" />
                  <p className="langName">Numpy</p>
                </div>
                <div className="lang1 lang">
                  <img className='langImg' src={lang5} alt="" />
                  <p className="langName">Pandas</p>
                </div>


                <div className="lang1 lang">
                  <img className='langImg' src={lang8} alt="" />
                  <p className="langName">Seaborn</p>
                </div>
                <div className="lang1 lang">
                  <img className='langImg' src={lang9} alt="" />
                  <p className="langName">Scipy</p>
                </div>
                <div className="lang1 lang">
                  <img className='langImg' src={lang10} alt="" />
                  <p className="langName">Tensorflow</p>
                </div>
              </div>
            </div>
            <hr />
            <div className="tools">
              <h1 className="subTitle grey">Tools</h1>
              <div className="toola">
                <div className="tool1 tool">
                  <img className='toolImg' src={tool1} alt="" />
                  <p className="toolName">Babel JS</p>
                </div>
                <div className="tool2 tool">
                  <img className='toolImg' src={tool2} alt="" />
                  <p className="toolName">BootStrap</p>
                </div>
                <div className="tool1 tool">
                  <img className='toolImg' src={tool3} alt="" />
                  <p className="toolName">Git</p>
                </div>
                <div className="tool1 tool">
                  <img className='toolImg' src={tool4} alt="" />
                  <p className="toolName">Github</p>
                </div>
                <div className="tool1 tool">
                  <img className='toolImg' src={tool5} alt="" />
                  <p className="toolName">Heroku</p>
                </div>
                <div className="tool1 tool">
                  <img className='toolImg' src={tool6} alt="" />
                  <p className="toolName">Netlify</p>
                </div>
                <div className="tool1 tool">
                  <img className='toolImg' src={tool7} alt="" />
                  <p className="toolName">StackOverflow</p>
                </div>
                <div className="tool1 tool">
                  <img className='toolImg' src={tool8} alt="" />
                  <p className="toolName">Sublime</p>
                </div>
                <div className="tool1 tool">
                  <img className='toolImg' src={tool9} alt="" />
                  <p className="toolName">Tailwind</p>
                </div>
                <div className="tool1 tool">
                  <img className='toolImg' src={tool10} alt="" />
                  <p className="toolName">VS Code</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TandT
