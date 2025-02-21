import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Contact from './Contact.js';

import "./App.css";
import AboutMe from './AboutMe.js';
import Home from './Home.js';

export default function App() {
    return (
        <>
        <Home />
        <h1>Ryan Lim Zi Heng</h1>
        <div>
            <h3>About Me: </h3>
            <AboutMe />
        </div>
        <Zoom>
        <div>
            <h3>Contact: </h3>
            <Contact />
        </div>
        </Zoom>
        <div>
            <h3>Achievements/Awards: </h3>
        </div>
        <div>
            <h3>Experiences: (lion dance team, EROHSS, Musical Instrument, Drawing, KCCC Cup) </h3>
        </div>
        <div>
            <h3>Files (Resume & Personal Statement) :</h3>
        </div>
        <Fade>
            <h3>heheboi</h3>
        </Fade>
        </>
    );
}
