import React from 'react';
import "./AboutMe.css";

function getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

export default function AboutMe() {

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

    const educationBackground = [
        {schoolName: "SJK(C) Hin Hua", educationLevel: "Primary", firstYear: "standard 1", lastYear: "standard 6", startAge: "7", endAge: "12", url:"https://sjkchinhuaklang.wordpress.com/"},
        {schoolName: "Hin Hua High School", educationLevel: "Junior Secondary", firstYear: "Junior 1", lastYear: "Junior 3", startAge: "13", endAge: "15", url: "https://hinhua.edu.my/cn/index.html"},
        {schoolName: "Hin Hua High School", educationLevel: "Senior Secondary", firstYear: "Senior 1", lastYear: "Senior 3", startAge: "16", endAge: "18", url: "https://hinhua.edu.my/cn/index.html"}
    ]

    const edu = educationBackground.map((edu) => {
        ;
    });

    return (
        <section id="aboutMe">
            <div>
                <h3>
                High-achieving student at Hin Hua High
    School with a strong passion for Life
    Science and Computer Science.
    A highly diligent and organized individual,
    actively engaged in competitive
    programming, with advanced skills in C++,
    as well as in other science competitions.
    Eager to delve deeper in both of the field
    of computer science and biochemistry.
                </h3>
                
            </div>
            <div className="">
                <h1>
                    <span>Education</span>
                </h1>
            </div>


            <div className="">
                <p>blablabla</p>
                <div className="edubars">
                    <ul className="edu">{edu}</ul>
                </div>
            </div>
            
            <div className="row skill">
                <div className="three columns header-col">
                    <h1>
                        <span>Programming Skills</span>
                    </h1>
                </div>

                <div className="nine columns main-col">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" className="programmingLanguageIcons" />
                          
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg" className="programmingLanguageIcons" />
          
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" className="programmingLanguageIcons" />
          
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg" className="programmingLanguageIcons" />
          
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg" className="programmingLanguageIcons" />
          
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg" className="programmingLanguageIcons" />
          
                    <p>As there are courses for competitive programming in my high school, hence I have been involved in competitive programming for more than 3 years. With this skill, I have won a lot of competitions in the field of competitive programming.</p>
                    <p>Currently, I spent more time exploring web development and web automation after my high school graduation.</p>
                    <div className="bars">
                        <ul className="skills">{skills}</ul>
                    </div>
                </div>

            </div>

        </section>
    );
}


