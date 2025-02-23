
import React, { useRef, useEffect, useState } from 'react';
import "./Experiences.css";

import LionDanceImg from './image/lion-dance-head.jpg';
import EROHSSImg from './image/EROHSS.jpg';
import SciCampImg from './image/SciCampImg.jpg';
import MOImg from './image/MO.jpg';

export default function Experiences() {
    return (
        <>
            <div className="Experience-container">

                    <div className="row1-col-left">
                        <img src={LionDanceImg} />
                    </div>
          
                    <div className="row1-col-right">
                        <img src={EROHSSImg} />
                    
                    </div>
                
            </div>

            <div className="Experience-container">
                <div className="row2-col-left">
                    <img src={MOImg} />
                </div>
                <div className="row2-col-right">
                    <img src={SciCampImg} />
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