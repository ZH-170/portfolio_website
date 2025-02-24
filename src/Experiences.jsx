
import React, { useRef, useEffect, useState } from 'react';
import "./Experiences.css";

import LionDanceImg from './image/lion-dance-head.jpg';
import EROHSSImg from './image/EROHSS.jpg';
import SciCampImg from './image/SciCampImg.jpg';
import MOImg from './image/MO.jpg';

// const openPopup = document.querySelectorAll()


export default function Experiences() {
    
    const [isPopup1Open, setIsPopup1Open] = useState(false);
    const [isPopup2Open, setIsPopup2Open] = useState(false);

    const [isPopup3Open, setIsPopup3Open] = useState(false);

    const [isPopup4Open, setIsPopup4Open] = useState(false);

    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleOpenPopup1 = () => {
        setIsPopup1Open(true); // Open first popup
        setIsOverlayOpen(true); // Open second popup
    };
    const handleClosePopup1 = () => {
        setIsPopup1Open(false); // Open first popup
        setIsOverlayOpen(false); // Open second popup
    }

    const handleOpenPopup2 = () => {
        setIsPopup2Open(true); // Open first popup
        setIsOverlayOpen(true); // Open second popup
    };
    const handleClosePopup2 = () => {
        setIsPopup2Open(false); // Open first popup
        setIsOverlayOpen(false); // Open second popup
    }

    const handleOpenPopup3 = () => {
        setIsPopup3Open(true); // Open first popup
        setIsOverlayOpen(true); // Open second popup
    };
    const handleClosePopup3 = () => {
        setIsPopup3Open(false); // Open first popup
        setIsOverlayOpen(false); // Open second popup
    }

    const handleOpenPopup4 = () => {
        setIsPopup4Open(true); // Open first popup
        setIsOverlayOpen(true); // Open second popup
    };
    const handleClosePopup4 = () => {
        setIsPopup4Open(false); // Open first popup
        setIsOverlayOpen(false); // Open second popup
    }

    return (
        <>
            <div>
                <div className="big-container">

                    <div className="Experience">
                        <div className="Experience-container">

                                <div className="row1-col-left">
                                    <div className="label1-container inset-shadow" onClick={handleOpenPopup1}>
                                        <div className="label1"><h1>Lion Dance</h1></div>
                                    </div>
                                    <img src={LionDanceImg} />

                                </div>
                    
                                <div className="row1-col-right">
                                    <div className="label2-container inset-shadow" onClick={handleOpenPopup2}>
                                        <div className="label2"><h1>EROHSS Program</h1></div>
                                    </div>
                                    <img src={EROHSSImg} />
                                
                                </div>
                            
                        </div>

                        <div className="Experience-container">
                            <div className="row2-col-left">
                                <div className="label3-container inset-shadow" onClick={handleOpenPopup3}>
                                        <div className="label3"><h1>Olympiad Competitions</h1></div>
                                    </div>
                                <img src={MOImg} />
                            </div>
                            <div className="row2-col-right">
                                <div className="label4-container inset-shadow" onClick={handleOpenPopup4}>
                                        <div className="label4"><h1>MICSS SC</h1></div>
                                    </div>
                                <img src={SciCampImg} />
                            </div>
                        </div>
                    </div>

                    <div className="Experience-popup">

                        {isPopup1Open && (
                            <div className="popup1">
                                <div className="popup-header">
                                    <div className="popup-title">Lion Dance</div>
                                    <button className="close-button" onClick={handleClosePopup1}>&times;</button>
                                </div>
                                <div className="popup-body">
                                    <p>The lion dance performance is a Chinese tradition in my country and is often seen during the Lunar New Year. At my high school, the lion dance troupe is an important annual tradition. Starting at the end of the previous year, students are recruited and undergo daily training in teams for three to four months. During the Lunar New Year, the troupe performs outside of school to raise funds, making it an iconic event for our school.</p>
                                    <p>In the year end of 2022, I have participated in this event, and that brings a lot of memorable experience to me. At the first time when I met my teammates, we were all strangers from different classes and different age, scarcely seen each other in school. However, after months of training together, we became as close as siblings, as close as brothers. We trained together, played together, ate together. They are the one that I love and I trust by the time. During the tough training, I gained persistence. Tough trainings will always make us to have the idea of giving up, but after taking a look at my teammates, seeing some of them that are younger than me still insisting, and that’s when the idea of giving up disappears, and all that left is the motivation and encouragement of my teammates.</p>
                                    <p>At the beginning of 2023, during the Lunar New Year, my team went outside the school, started our performance at all kinds of houses and restaurants and companies for 15 days, 5 to 8 performance a day. </p>
                                    <img src={MOImg} className="popup-img" />
                                    <img src={MOImg} className="popup-img" />






                                </div>
                            </div>
                        )}

                        {isPopup2Open && (
                            <div className="popup1">
                                <div className="popup-header">
                                    <div className="popup-title">EROHSS Program</div>
                                    <button className="close-button" onClick={handleClosePopup2}>&times;</button>
                                </div>
                                <div className="popup-body">
                                    <h1>Halo</h1>
                                    <p>This is a text.</p>
                                </div>
                            </div>
                        )}

                        {isPopup3Open && (
                            <div className="popup1">
                                <div className="popup-header">
                                    <div className="popup-title">Olympiad Competitions</div>
                                    <button className="close-button" onClick={handleClosePopup3}>&times;</button>
                                </div>
                                <div className="popup-body">
                                    <h1>Halo</h1>
                                    <p>This is a text.</p>
                                </div>
                            </div>
                        )}

                        {isPopup4Open && (
                            <div className="popup1">
                                <div className="popup-header">
                                    <div className="popup-title">MICSS Science Camp</div>
                                    <button className="close-button" onClick={handleClosePopup4}>&times;</button>
                                </div>
                                <div className="popup-body">
                                    <h1>Halo</h1>
                                    <p>This is a text.</p>
                                </div>
                            </div>
                        )}


                    </div>
                    {isOverlayOpen && (<div id="overlay"></div>)}

                    

                    
                    
                </div>
            </div>


{/* 
            <div className="all-polaroid">
                <div className="polaroid">
                    <img src="" style={{width: '100%'}} />
                    <div className="container">
                    <p>MICSS Science Camp</p>
                    </div>
                </div>

                <div className="polaroid">
                    <img src="" style={{width: '100%'}} />
                    <div className="container">
                        <p>Lion Dance</p>
                    </div>
                </div>

            </div>

            <div className="all-polaroid">
                <div className="polaroid">
                    <img src="" style={{width: '100%'}} />
                    <div className="container">
                    <p>MICSS Science Camp</p>
                    </div>
                </div>

                <div className="polaroid">
                    <img src="" style={{width: '100%'}} />
                    <div className="container">
                        <p>Lion Dance</p>
                    </div>
                </div>

            </div> */}
        </>
    );
}