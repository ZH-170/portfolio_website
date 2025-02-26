import React, { useRef, useEffect, useState } from 'react';
import "./Skills.css";

import DrawingImg from './image/canvas.png';
import CodingImg from './image/data.png';
import MusicImg from './image/music.png';

import erhu from './image/erhu.png';
import piano from './image/piano.png';
import guitar from './image/guitar.png';

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function Skills() {

    

    const learnedSkills = [
        {name: "C++", level: "500"},
        {name: "JS", level: "60"},
        {name: "React-JSX", level: "50"},
        {name: "HTML", level: "30"},
        {name: "CSS", level: "30"},
    ];

    const skills = learnedSkills.map((skill) => {
        const backgroundColor = getRandomColor();
        const className = "bar-expand " + skill.name.toLowerCase();
        const width = `${skill.level}px`;

        return (
            <li key={skill.name}>
                <span style={{ width, backgroundColor }} className={className}></span>
                <em>{skill.name}</em>
            </li>
        );
    });


    
    const [isPopupMusicOpen, setIsPopupMusicOpen] = useState(false);
    const [isPopupCodingOpen, setIsPopupCodingOpen] = useState(false);
    const [isPopupDrawingOpen, setIsPopupDrawingOpen] = useState(false);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);


    const handlePopupMusic = () => {
        setIsPopupMusicOpen(!isPopupMusicOpen);
        setIsOverlayOpen(!isOverlayOpen);
    }

    const handlePopupCoding = () => {
        setIsPopupCodingOpen(!isPopupCodingOpen);
        setIsOverlayOpen(!isOverlayOpen);
    };

    const handlePopupDrawing = () => {
        setIsPopupDrawingOpen(!isPopupDrawingOpen);
        setIsOverlayOpen(!isOverlayOpen);
    }

    return (
        <section id="skills">
            <div className="skills-container">


                <div className="skill-column skill-music">
                    <h1>Music</h1>
                    <div className="skill-img2" onClick={handlePopupMusic} >
                        <img src={MusicImg} />
                    </div>
                </div>

                {isPopupMusicOpen && (
                    
                    <div className="skill-coding-popup-container">
                        <div className="skill-popup-header">
                            <h1>Music</h1>
                            <button className="close-button" onClick={handlePopupMusic}>&times;</button>
                        </div>
                        
                        <div className="skill-text-container">
                            <h1 className="skill-text-title">Instuments</h1>
                            <div className="skill-type">
                                <img src={piano} className="programmingLanguageIcons"/>
                                <img src={erhu} className="programmingLanguageIcons" />
                                <img src={guitar} className="programmingLanguageIcons" />
                            </div>

                            <h1 className="skill-text-title">Little story</h1>
                            <div className="skill-text">
                                <p>Have you ever wondered how people can create such beautiful sounds just by pressing keys? Well, I have. When I was little, my parents bought me a toy piano with just 10 white keys and 6 black keys. It wasn’t much, but it could roughly produce the sound of each note. Being curious and playful, I started experimenting with it. I still remember that at the time, I could only play with my right index finger, tapping out <i>Ode to Joy</i>. But over time, I began to recognize patterns and appreciate the beauty of how melody and rhythm come together. I started trying to play other simple songs I knew, figuring out the notes by trial and error and memorizing the sequence in which to press them.</p>
                                <p>One day, my parents noticed how interested I was in playing the piano and decided to send me to piano lessons. At first, my mom didn’t want to buy a piano for our house, so the only way I could practice was by going to my neighbor’s house and borrowing theirs. Slowly, I improved and could smoothly play songs with both hands. Seeing my progress, my younger sister and brother became envious and said they wanted to learn too. After a year of lessons, borrowing pianos, and none of us quitting, my parents finally decided to get one for us to practice at home.</p>
                                <p>Playing the piano has always been a way for me to relax. It allows me to express my emotions and creativity, changing the tone of a piece just by adjusting some annotations. It gives me a break from homework and studies, letting me enjoy the music I create.</p>
                                <p>One day, my piano teacher introduced me to orchestras—a musical ensemble where different instruments come together to create something even more breathtaking than a solo piano performance. After listening to some recordings, I completely fell in love with the rich and expressive sound of orchestral music. However, since the piano is mostly a solo instrument and rarely played in an orchestra, I decided to join my high school’s Chinese Orchestra Society instead. Being part of the society not only gave me the experience of playing in an orchestra but also introduced me to traditional Chinese instruments.</p>
                                <p>Learning both Western and Chinese traditional instruments, I discovered many similarities between them. For example, the string family in Chinese traditional instruments, known as the <i>Hu-qin</i>, consists of the <i>Gao-Hu</i>, <i>Er-Hu</i>, and <i>Zhong-Hu</i>, which correspond to the violin, viola, and double bass in Western orchestras. I played the Er-Hu in the society and learned a lot from the experience. I even participated in several Chinese orchestra competitions with my friends, gaining unforgettable memories and valuable lessons along the way. This musical journey has truly added a unique and vibrant color to my life.</p>
                                <p>Now, after graduating from high school, I’m working hard to achieve a Grade 8 in piano—a goal that I hope will be another milestone in my musical journey.</p>

                            </div>


                        </div>
                    </div>
                )}

                <div className="skill-column skill-coding">
                    <h1>Coding</h1>
                    <div className="skill-img" onClick={handlePopupCoding} >
                        <img src={CodingImg} />
                    </div>
                </div>

                {isPopupCodingOpen && (
                    
                    <div className="skill-coding-popup-container">
                        <div className="skill-popup-header">
                            <h1>Coding</h1>
                            <button className="close-button" onClick={handlePopupCoding}>&times;</button>
                        </div>
                        
                        <div className="skill-text-container">
                            
                            <h1 className="skill-text-title">Languages</h1>
                            <div className="skill-type">
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="programmingLanguageIcons" />
                                
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" className="programmingLanguageIcons" />
                        
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="programmingLanguageIcons" />
                        
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" className="programmingLanguageIcons" />
                        
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" className="programmingLanguageIcons" />
                        
                                <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className="programmingLanguageIcons" />
                        
                            </div>

                            <h1 className="skill-text-title">Little story</h1>
                            <div className="skill-text">
                                <p>In my high school, there are selective courses for students. Once I entered my senior level (16–18 years old), I selected the Programming Language Selective Course, and this was where my coding journey began. The language taught in the course was C++, with a focus on competitive programming.</p>
                                <p>The course was quite difficult for me at the beginning, as it was completely new to me. I even struggled with variables and syntax, not understanding why so many of them were necessary. However, after spending some time on it, it became easier and easier. Slowly, I realized that the teaching pace was too slow for me, so I started self-learning new algorithms and problem-solving techniques by searching the web. I also became addicted to solving problems.</p>
                                <p>Solving a difficult problem is not easy. After coming up with an idea, I need to code it and try submitting the solution. But the thing is, I usually do not succeed on my first or second attempt. I have to consider edge cases, exceptions, and sometimes even rethink my entire approach. This process can be frustrating, but if I don’t give up, I feel incredibly proud when I finally see the green "ACCEPT" button, knowing that all the hard work was truly worth it.</p>
                                <p>Through this journey, I learned that persistence and a passion for problem-solving can turn any challenge into an opportunity for growth, and this mindset continues to drive me forward in both coding and life.</p>
                            </div>

                            
                        </div>
                    </div>
                )}

                


                <div className="skill-column skill-drawing">
                    <h1>Drawing</h1>
                    <div className="skill-img2" onClick={handlePopupDrawing} >
                        <img src={DrawingImg} />
                    </div>
                </div>

                {isPopupDrawingOpen && (
                    
                    <div className="skill-coding-popup-container">
                        <div className="skill-popup-header">
                            <h1>Drawing</h1>
                            <button className="close-button" onClick={handlePopupDrawing}>&times;</button>
                        </div>
                        
                        <h1 className="skill-text-title">Art Works</h1>
                        <div className="skill-type">
                            <img src={piano} className="programmingLanguageIcons"/>
                        </div>
                        <div className="skill-text-container">
                            
                            <h1 className="skill-text-title">Little story</h1>
                            <div className="skill-text">
                                <p>My parents always told me that I was a creative child—I loved scribbling all over the place. Give me a marker, and I’d hand back a mess. That’s when they decided to send me to a painting class, hoping I’d channel all my creativity there. And that’s how my journey in art began.</p>
                                <p>When I entered primary school, I developed the habit of carrying a scribble book everywhere. I realized just how much I loved drawing and asked my parents if I could join an art class. To my surprise, they didn’t hesitate—they found one for me right away. From then on, Friday nights became the highlight of my week, giving me the chance to unwind and do something I truly enjoyed.</p>
                                <p>Joining that class was one of the best decisions I ever made because it led me to my most inspiring art teacher, Teacher Beyond. He was the one who saw my potential and pushed me to improve. I loved watching him do demos, and I even asked him to draw cute cartoons in my scribble book. He taught me more than anyone else on my artistic journey.</p>
                                <p>As time passed, I was able to draw realistic artworks on my own. I also picked up new skills like watercoloring and sketching. Unlike other subjects, I never enjoyed drawing competitions—I felt that putting a time limit on art made it less enjoyable. So, after entering high school, I rarely participated in them, especially as my schedule became busier. While I found science fascinating, I never wanted to let go of my first passion—art. That’s why you’ll find "Art" on my UEC result slip, proudly marked with an A1, representing the journey I’ve been through.</p>

                            </div>

                        </div>
                    </div>
                )}

                {isOverlayOpen && (<div className="skill-overlay"></div>)}
            </div>



        </section>
    );
}