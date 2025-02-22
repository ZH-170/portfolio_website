
import React, { useRef, useEffect, useState } from 'react';
import "./Experiences.css";

export default function Experiences() {
    return (
        <>
            <div className="all-polaroid">
                <div className="polaroid">
                    <img src="" style={{width: '100%'}} />
                    <div className="container">
                        <p>Lion Dance</p>
                    </div>
                </div>

                <div className="polaroid">
                    <img src="" style={{width: '100%'}} />
                    <div className="container">
                        <p>MICSS Science Camp</p>
                    </div>
                </div>

                <div className="polaroid">
                    <img src="" style={{width: '100%'}} />
                    <div className="container">
                        <p>EROHSS</p>
                    </div>
                </div>
            </div>
        </>
    );
}