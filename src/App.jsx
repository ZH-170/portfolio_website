import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Contact from './Contact.js';
import Skills from './Skills.js';
import Experiences from './Experiences.js';
import Achievements from './Achievements.js';


import "./App.css";
import AboutMe from './AboutMe.js';
import Home from './Home.js';

export default function App() {

    const clickElement = () => {
        // window.location.href = "https://www.google.com";
        window.open("https://www.google.com", "_blank");
    };

    return (
        <>
            <div className="navigation-bar">
                <a href="#home" onClick={clickElement}>Home</a>
                <a className="active" href="https://www.google.com" >About</a>
            </div>

            <div className="app-container">
                {/* <Home /> */}

                <div className="AboutMe">
                    <h1 className="div-title">About Me</h1>
                    <AboutMe />
                </div>

                <div className="Skills">
                    <h1 className="div-title">Skills</h1>
                    <Skills />
                </div>

                <div className="Experience">
                    <h1 className="div-title">Experiences</h1>
                    <Experiences />
                </div>

                
                <div className="Achievements">
                    <h3>Achievements/Awards: </h3>
                    {/* <Achievements /> */}
                </div>

                <div>
                    <h3>Files (Resume & Personal Statement) :</h3>
                </div>

                <div className="Contact">
                    <h1 className="div-title">Contact Me</h1>
                    <Contact />
                </div>

                <div>
                    <h3>Send me email: </h3>
                </div>

                <Fade>
                    <h3>heheboi</h3>
                </Fade>
            </div>
        </>
    );
}
