import React from 'react';
import "./Skills.css";
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

    return (
        <section id="skills">
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
                        {/* <ul className="skills">{skills}</ul> */}
                    </div>
                </div>
            </div>

            <div>
                <h1>Musical Talent:</h1>

            </div>

            <div>
                <h1>Drawing Talent:</h1>
            </div>
        </section>
    );
}