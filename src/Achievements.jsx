import React from 'react';
import './Achievements.css';

import UEC2024 from './image/UEC2024.jpg';
import NSSPC2024 from './image/NSSPC2024.jpg';
import TOP102024 from './image/TOP102024.jpg';
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

    const achievementList = [
        {
            year: "2024",
            academic: [
                {name: "Science Stream Top 10 Academic Achievement", result: "#5", img: {TOP102024}}
            ],
            exam: [
                {name: "Unified Examination Certificate (UEC)", result: "7A1, 2A2", img: {UEC2024}}
            ],
            competitions: [
                {name: "National Secondary School Programming Contest (NSSPC)", result: "2nd Runner-up", img: {NSSPC2024}}
            ]
        },
        {
            year: "2025",
            academic: [
                {name: "Science Stream Top 10 Academic Achievement", result: "#5", img: {TOP102024}}
            ],
            exam: [
                {name: "Unified Examination Certificate (UEC)", result: "7A1, 2A2", img: {UEC2024}}
            ],
            competitions: [
                {name: "National Secondary School Programming Contest (NSSPC)", result: "2nd Runner-up", img: {NSSPC2024}}
            ]
        }
    ];

    

    const achievementListItems = achievementList.map(x => (
        <>
            <div className={x.year % 2 === 0 ? 'Achievements-timeline-container left-container' : 'Achievements-timeline-container right-container'}>
                
                <img src={wolfImg} className="small-icon"/>                    
                <div className="Achievements-timeline-container-textbox">
                    <h2>{x.year}</h2>
                    <small>2018 - 2019</small>
                    <p> asdfghjkl The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>


                    { x.academic.length > 0 && <achievementRowItems row={x.academic} type='academic' /> }
                    { x.exam.length > 0 && <achievementRowItems row={x.exam} type='exam' /> }
                    { x.competitions.length > 0 && <achievementRowItems row={x.competitions} type='competitions' /> }


                    <span className={x.year % 2 === 0 ? "left-container-arrow" : "right-container-arrow"}></span>

                </div>
            </div>
        </>
    ));

    return (
        <>
        <section id="awards">
            <div className="Achievements-timeline">

                {achievementListItems}

                <div className="Achievements-timeline-container left-container">
                    <img src={wolfImg} className="small-icon"/>
                    <div className="Achievements-timeline-container-textbox">
                        <h2>2024</h2>
                        {/* <small>2018 - 2019</small>
                        <p> The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>
                         */}
                        <div className="all-achievement-blocks">
                            <div className="achievement-block">
                                <div className="achievement">
                                    <img className="certs" src={UEC2024}/>
                                    <div className="achievements-container">
                                        <p>UEC Result Slip</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="achievement-block">
                                <div className="achievement">
                                    <img  style={{width: '100%'}} />
                                    <div className="achievements-container">
                                        <p>UEC Result Slip</p>
                                    </div>
                                </div>
                            </div>
            
                            <div className="achievement-block">
                                <div className="achievement">
                                    <img style={{width: '100%'}} />
                                    <div className="achievements-container">
                                        <p>UEC Result Slip</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <span className="left-container-arrow"></span>
                    </div>
                </div>

                <div className="Achievements-timeline-container right-container">
                    <img src={wolfImg} className="small-icon"/>                    <div className="Achievements-timeline-container-textbox">
                        <h2>Alphabet Inc.</h2>
                        <small>2018 - 2019</small>
                        <p> The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>

                        <span className="right-container-arrow"></span>

                    </div>
                </div>
                
                <div className="Achievements-timeline-container left-container">
                    
                <img src={wolfImg} className="small-icon"/>
                    <div className="Achievements-timeline-container-textbox">
                        <h2>Alphabet Inc.</h2>
                        <small>2018 - 2019</small>
                        <p> The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>

                        <span className="left-container-arrow"></span>

                    </div>
                </div>

                <div className="Achievements-timeline-container right-container">
                <img src={wolfImg} className="small-icon"/>
                    <div className="Achievements-timeline-container-textbox">
                        <h2>Alphabet Inc.</h2>
                        <small>2018 - 2019</small>
                        <p> The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>

                        <span className="right-container-arrow"></span>

                    </div>
                </div>
                

                <div className="Achievements-timeline-container left-container">
                    
                <img src={wolfImg} className="small-icon"/>
                    <div className="Achievements-timeline-container-textbox">
                        <h2>Alphabet Inc.</h2>
                        <small>2018 - 2019</small>
                        <p> The succes of every websites depends on search engine optimisation and digital marketing strategy. If you are pn first page of all major search...</p>

                        <span className="left-container-arrow"></span>

                    </div>
                </div>

                <div className="Achievements-timeline-container right-container">
                <img src={wolfImg} className="small-icon"/>
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
                        <img src={UEC2024} style={{width: '100%'}} />
                        <div className="achievements-container">
                            <p>UEC Result Slip</p>
                        </div>
                    </div>
                </div>
                
                <div className="block">
                    <div className="achievements">
                        <img src={UEC2024} style={{width: '100%'}} />
                        <div className="achievements-container">
                            <p>UEC Result Slip</p>
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="achievements">
                        <img src={UEC2024} style={{width: '100%'}} />
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




function achievementRowItems(prop) {
    const type = 'ab';
    const row = prop.row;

    return(
        <>
            <small>abasdv</small>
            <div className="all-achievement-blocks">


                <div className="achievement-block">
                    <div className="achievement">
                        <img className="certs" src={UEC2024}/>
                        <div className="achievements-container">
                            <p>UEC Result Slip</p>
                        </div>
                    </div>
                </div>
                

            </div>
        </>
    );
}