import React from 'react';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import Contact from './Contact.js';
import "./App.css";
import AboutMe from './AboutMe.js';

export default function App() {
    return (
        <>
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
            <h3>Education: </h3>
        </div>
        <div>
            <h3>Achievements: </h3>
        </div>
        <div>
            <h3>Files (Resume & Personal Statement) :</h3>
        </div>
        <AboutMe />
        <AboutMe />
        <Fade>
            <h3>heheboi</h3>
        </Fade>
        </>
    );
}