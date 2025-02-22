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
    return (
        <>
            <Home />

            <div className="AboutMe">
                <AboutMe />
            </div>

            <div>
                <h3>Skills: </h3>
                <Skills />
            </div>

            <div className="Experience">
                <h3>Experiences: (lion dance team, EROHSS, Musical Instrument, Drawing, KCCC Cup) </h3>
                <Experiences />
            </div>

            
            <div className="Achievements">
                <h3>Achievements/Awards: </h3>
                <Achievements />
            </div>

            <div>
                <h3>Files (Resume & Personal Statement) :</h3>
            </div>

            <div>
                <h3>Contact: </h3>
                <Contact />
            </div>

            <div>
                <h3>Send me email: </h3>
            </div>

            <Fade>
                <h3>heheboi</h3>
            </Fade>
        </>
    );
}
