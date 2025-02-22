import React from 'react';
import './Achievements.css';

import UECResultSlip from './image/UEC-result-slip.jpg';

import wolfImg from './image/wolf.jpg';

export default function Achievements(){
    const examsList = [
        {examName: "UPSR", year: "2018", result: "", cert: ""},
        {examName: "Junior UEC", year: "2021", result: "", cert: ""},
        {examName: "Senior UEC", year: "2024", result: "", cert: ""}
    ];



    // const awardList = [
    //     CP = [
    //         {competitionName: "NSSPC", year: "2024", level: "National", award: "Gold Medal"},
    //         {competitionName: "MCO", year: "2024", level: "", award: "Bronze Medal"}
    //     ],
    //     MO = [
    //         {competitionName: "IMONST", year: "2024", level: "", award: ""},
    //         {competitionName: "", year: "", level: "", award: ""}
    //     ],
    //     others = [
    //         {competitionName: "", year: "", level: "", award: ""}
    //     ]
    // ];

    return (
        <>
        <section id="awards">

            <div className="Achievements-timeline">

                <div className="Achievements-timeline-container left-container">
                    <img src={wolfImg} />
                    <div className="Achievements-timeline-container-textbox">
                        <h2>Alphabet Inc.</h2>
                        <small>2018 - 2019</small>
                        <p> The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>

                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="Achievements-timeline-container right-container">
                    <img src={wolfImg} />
                    <div className="Achievements-timeline-container-textbox">
                        <h2>Alphabet Inc.</h2>
                        <small>2018 - 2019</small>
                        <p> The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>

                        <span className="right-container-arrow"></span>

                    </div>
                </div>
                
                <div className="Achievements-timeline-container left-container">
                    
                    <img src={wolfImg} />
                    <div className="Achievements-timeline-container-textbox">
                        <h2>Alphabet Inc.</h2>
                        <small>2018 - 2019</small>
                        <p> The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>

                        <span className="left-container-arrow"></span>

                    </div>
                </div>

                <div className="Achievements-timeline-container right-container">
                    <img src={wolfImg} />
                    <div className="Achievements-timeline-container-textbox">
                        <h2>Alphabet Inc.</h2>
                        <small>2018 - 2019</small>
                        <p> The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>

                        <span className="right-container-arrow"></span>

                    </div>
                </div>
                

                <div className="Achievements-timeline-container left-container">
                    
                    <img src={wolfImg} />
                    <div className="Achievements-timeline-container-textbox">
                        <h2>Alphabet Inc.</h2>
                        <small>2018 - 2019</small>
                        <p> The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>

                        <span className="left-container-arrow"></span>

                    </div>
                </div>

                <div className="Achievements-timeline-container right-container">
                    <img src={wolfImg} />
                    <div className="Achievements-timeline-container-textbox">
                        <h2>Alphabet Inc.</h2>
                        <small>2018 - 2019</small>
                        <p> The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>

                        <span className="right-container-arrow"></span>

                    </div>
                </div>

                





            </div>






            <h3>A lot of awards...</h3>

            <div className="all-achievements">
                <div className="block">
                    <div className="achievements">
                        <img src={UECResultSlip} style={{width: '100%'}} />
                        <div className="achievements-container">
                            <p>UEC Result Slip</p>
                        </div>
                    </div>
                </div>
                
                <div className="block">
                    <div className="achievements">
                        <img src={UECResultSlip} style={{width: '100%'}} />
                        <div className="achievements-container">
                            <p>UEC Result Slip</p>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="achievements">
                        <img src={UECResultSlip} style={{width: '100%'}} />
                        <div className="achievements-container">
                            <p>UEC Result Slip</p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </>
    );
}

//* can use this.setState => make the state of the cert be preview / clicked