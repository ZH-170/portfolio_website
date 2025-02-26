
import React, { useRef, useEffect, useState } from 'react';
import "./Experiences.css";

import LionDanceImg from './image/lion-dance-head.jpg';
import EROHSSImg from './image/EROHSS.jpg';
import SciCampImg from './image/SciCampImg.jpg';
import MOImg from './image/MO.jpg';

import liondance1 from './image/liondance/liondance1.jpg';
import liondance2 from './image/liondance/liondance2.jpg';
import liondance3 from './image/liondance/liondance3.jpg';
import liondance4 from './image/liondance/liondance4.jpg';
import liondance5 from './image/liondance/liondance5.jpg';

// import { faSearch } from '../node_modules/@fortawesome/free-solid-svg-icons/faSearch.js';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/index';
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

    const handle6anluckIg = () => {
        window.open("https://www.instagram.com/6anluck_/", "_blank");
    }

    const handleDongZong = () => {
        window.open("https://www.dongzong.my/en/home/", "_blank");
    }

    const handleEROHSS = () => {
        window.open("https://www.monash.edu.my/engineering/news-and-events/articles/2024/erohss-shapes-young-minds-for-research", "_blank");
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
                                    <img src={liondance3} className="popup-img" />
                                    <img src={liondance4} className="popup-img" />
                                    <img src={liondance5} className="popup-img" />
                                    <br />
                                    <p>The lion dance performance is a Chinese tradition in my country and is often seen during the Lunar New Year. At my high school, the lion dance troupe is an important annual tradition. Starting at the end of the previous year, students are recruited and undergo daily training in teams for three to four months. During the Lunar New Year, the troupe performs outside of school to raise funds, making it an iconic event for our school.</p>
                                    <p>In the year end of 2022, I have participated in this event, and that brings a lot of memorable experience to me. At the first time when I met my teammates, we were all strangers from different classes and different age, scarcely seen each other in school. However, after months of training together, we became as close as siblings, as close as brothers. We trained together, played together, ate together. They are the one that I love and I trust by the time. During the tough training, I gained persistence. Tough trainings will always make us to have the idea of giving up, but after taking a look at my teammates, seeing some of them that are younger than me still insisting, and that’s when the idea of giving up disappears, and all that left is the motivation and encouragement of my teammates.</p>
                                    <p>At the beginning of 2023, during the Lunar New Year, my team went outside the school, started our performance at all kinds of houses and restaurants and companies for 15 days, 5 to 8 performance a day. </p>


                                    
                                    <div className="popup-more-info" onClick={handle6anluckIg}>Instagram</div>


                                    <br />
                                    
                                    <img src={liondance1} className="popup-img" />
                                    <img src={liondance2} className="popup-img" />





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
                                    
                                    <p>In 2023, I had the opportunity to participate in the Engineering Research Opportunities for High School Students (EROHSS) program at Monash University Malaysia. This initiative offers high school students hands-on experience in university-level research, covering topics from renewable energy to advanced nanomaterials.</p>
                                    <p>Given the competitive nature of the program, with only three spots allocated to my school, I was honored to be selected after a rigorous interview process. Assigned to the Department of Chemical Engineering, I worked under the guidance of Ms. Sia Chin Siew on a project titled "Magnetic-Controllable Pickering Emulsion: Futuristic Platform for Drug Delivery." This study focused on developing emulsions stabilized by magnetic nanoparticles to control drug release rates using external magnetic fields.</p>
                                    <p>Before stepping into the lab, I dedicated time to thoroughly understand the research paper associated with my project. I delved into every detail, familiarizing myself with new terminologies and concepts, and prepared a list of questions to discuss with my supervisor.</p>
                                    <p>On the lab day, the environment was both exhilarating and enlightening. Under Ms. Sia's supervision, I was introduced to advanced equipment and techniques, many of which were new to me. The hands-on experience deepened my appreciation for experimental research, and I successfully replicated the study's results, confirming the potential of magnetic Pickering emulsions in controlled drug delivery.</p>
                                    <p>Following the experimental phase, I faced the challenge of composing my first full-length research paper and preparing a presentation. Despite initial difficulties, I completed these tasks before the deadline. Presenting my findings to an audience was initially daunting, but as I progressed, my confidence grew, and I delivered a coherent and engaging presentation. The program concluded with a ceremony where I received a participation certificate, marking the end of a transformative journey.</p>
                                    <p>This experience has been pivotal in solidifying my passion for scientific inquiry and has inspired me to pursue further opportunities in research and experimentation.</p>

                                    <div className="popup-more-info" onClick={handleEROHSS}>EROHSS</div>

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
                                    <p>Throughout my academic journey, I have always been passionate about problem-solving and pushing my limits in various Olympiad competitions. Mathematics has been one of my strongest subjects, and I actively participated in Malaysia’s International Mathematical Olympiad (IMO) selection process. I was honored to be invited to the BIMO (Bengkel IMO) training camp, where I had the opportunity to train alongside some of the best young mathematicians in the country. This experience deepened my appreciation for mathematical problem-solving and allowed me to exchange ideas with like-minded peers.</p>
                                    <p>Beyond mathematics, my passion for programming led me to compete in the International Olympiad in Informatics (IOI) selection process. I advanced to the final national round, the Malaysian Computing Olympiad (MCO), where I won a bronze medal, placing among the top 30 competitive programmers in Malaysia. Additionally, I was selected as one of 30 representatives from Malaysia to compete in the Asia-Pacific Informatics Olympiad (APIO). Although I didn’t qualify for the IOI, the experience was incredibly valuable, exposing me to high-level algorithmic challenges and motivating me to explore programming beyond competitions. These competitions not only sharpened my technical skills but also strengthened my ability to think critically and solve complex problems under pressure.</p>
                                    <p>Aside from mathematics and computing, I also explored other science-related competitions. I participated in the Malaysian National Chemistry Quiz, where I achieved a Merit award, and the XMUM Cup Physics Competition for Secondary Schools, where I earned a commendation prize. These competitions allowed me to apply my scientific knowledge beyond the classroom and gain deeper insights into different scientific fields.</p>
                                    <p>For a long time, I thought that Malaysia did not participate in the International Biology Olympiad (IBO) as I didn't heard any information about that, so I never actively sought out biology competitions. However, I later discovered that Malaysia does have biology-related competitions—but by then, I had already exceeded the age limit for participation. This was a disappointment, as I would have loved to challenge myself in a field I am deeply passionate about. Despite this, my interest in life sciences remains strong, and I continue to explore it through self-study and interdisciplinary applications. I believe that integrating computer science with biology can lead to groundbreaking advancements, and I am eager to further explore this intersection in my future studies.</p>

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
                                    <p>The MICSS Science Camp is an annual event organized by Dong Zong, involving most of the top Chinese independent schools in Malaysia. Each year, the camp has a main theme and corresponding subject(s), and each school can send up to six representatives who have demonstrated outstanding performance in those subjects. The representatives gather at the hosting school and spend five days and four nights participating in the camp. The event features knowledge-sharing sessions conducted by professors in the respective fields, as well as competitions where students can showcase their abilities. However, due to the pandemic, the camp was canceled for several years before finally resuming in 2023.</p>
                                    <p>In 2023, the theme of the camp was "Cosmic New Journey, AI Leads the Way," focusing on astronomy and computer science. As a top student in physics and a beginner in programming, I was honored to be one of the six students from my school selected to participate. It was also my first time leaving home for such a long period.</p>
                                    <p>At first, I felt nervous, but once I arrived at the hosting school and settled in, I gradually became more comfortable. The opening ceremony and ice breaking session helped me adjust, and as the camp progressed, I started engaging with other participants. I had the opportunity to explore fascinating topics in AI and astronomy, which deepened my interest in both fields. One of the most memorable moments was reaching the finals in the poster competition with my teammates. We had to present our poster in front of professionals and outstanding students from other schools—a daunting experience. However, with teamwork and perseverance, we successfully delivered our presentation.</p>
                                    <p>The most exciting part of the camp was the stargazing session. Since the hosting school was far from the city, the night sky was clear and filled with stars. I spent hours taking photos of the stars and was thrilled to recognize constellations in real-time—something I had only seen in textbooks before. Although it was initially difficult to identify patterns among the stars, once someone guided me, I could clearly see the formations. This was the most unforgettable experience of the camp.</p>
                                    <p>In 2024, I was once again selected by my school to participate in the Science Camp, which focused on chemistry. This year, the hosting school collaborated with Universiti Tunku Abdul Rahman (UTAR) and Tianjin University, providing us with professional insights into chemistry. Although the main theme was chemistry, AI remained a key focus, with discussions on how artificial intelligence is revolutionizing the field.</p>
                                    <p>Determined to make my school proud, I worked closely with my teammates and successfully won a silver medal. Compared to the previous year, I had grown more confident, actively making new friends with others and exchanging learning experiences with others. This camp was truly an unforgettable memory—one that reinforced my passion for science and personal growth.</p>


                                    <div className="popup-more-info" onClick={handleDongZong}>DongZong</div>

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