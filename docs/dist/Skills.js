import React, {useRef, useEffect, useState} from "../_snowpack/pkg/react.js";
import "./Skills.css.proxy.js";
import DrawingImg from "./image/canvas.png.proxy.js";
import CodingImg from "./image/data.png.proxy.js";
import MusicImg from "./image/music.png.proxy.js";
import erhu from "./image/erhu.png.proxy.js";
import piano from "./image/piano.png.proxy.js";
import guitar from "./image/guitar.png.proxy.js";
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
    {name: "CSS", level: "30"}
  ];
  const skills = learnedSkills.map((skill) => {
    const backgroundColor = getRandomColor();
    const className = "bar-expand " + skill.name.toLowerCase();
    const width = `${skill.level}px`;
    return /* @__PURE__ */ React.createElement("li", {
      key: skill.name
    }, /* @__PURE__ */ React.createElement("span", {
      style: {width, backgroundColor},
      className
    }), /* @__PURE__ */ React.createElement("em", null, skill.name));
  });
  const [isPopupMusicOpen, setIsPopupMusicOpen] = useState(false);
  const [isPopupCodingOpen, setIsPopupCodingOpen] = useState(false);
  const [isPopupDrawingOpen, setIsPopupDrawingOpen] = useState(false);
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);
  const handlePopupMusic = () => {
    setIsPopupMusicOpen(!isPopupMusicOpen);
    setIsOverlayOpen(!isOverlayOpen);
  };
  const handlePopupCoding = () => {
    setIsPopupCodingOpen(!isPopupCodingOpen);
    setIsOverlayOpen(!isOverlayOpen);
  };
  const handlePopupDrawing = () => {
    setIsPopupDrawingOpen(!isPopupDrawingOpen);
    setIsOverlayOpen(!isOverlayOpen);
  };
  return /* @__PURE__ */ React.createElement("section", {
    id: "skills"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "skills-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "skill-column skill-music"
  }, /* @__PURE__ */ React.createElement("h1", null, "Music"), /* @__PURE__ */ React.createElement("div", {
    className: "skill-img2",
    onClick: handlePopupMusic
  }, /* @__PURE__ */ React.createElement("img", {
    src: MusicImg
  }))), isPopupMusicOpen && /* @__PURE__ */ React.createElement("div", {
    className: "skill-coding-popup-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "skill-popup-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Music"), /* @__PURE__ */ React.createElement("button", {
    className: "close-button",
    onClick: handlePopupMusic
  }, "×")), /* @__PURE__ */ React.createElement("div", {
    className: "skill-text-container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "skill-text-title"
  }, "Instuments"), /* @__PURE__ */ React.createElement("div", {
    className: "skill-type"
  }, /* @__PURE__ */ React.createElement("img", {
    src: piano,
    className: "programmingLanguageIcons"
  }), /* @__PURE__ */ React.createElement("img", {
    src: erhu,
    className: "programmingLanguageIcons"
  }), /* @__PURE__ */ React.createElement("img", {
    src: guitar,
    className: "programmingLanguageIcons"
  })), /* @__PURE__ */ React.createElement("h1", {
    className: "skill-text-title"
  }, "Little story"), /* @__PURE__ */ React.createElement("div", {
    className: "skill-text"
  }, /* @__PURE__ */ React.createElement("p", null, "Have you ever wondered how people can create such beautiful sounds just by pressing keys? Well, I have. When I was little, my parents bought me a toy piano with just 10 white keys and 6 black keys. It wasn’t much, but it could roughly produce the sound of each note. Being curious and playful, I started experimenting with it. I still remember that at the time, I could only play with my right index finger, tapping out ", /* @__PURE__ */ React.createElement("i", null, "Ode to Joy"), ". But over time, I began to recognize patterns and appreciate the beauty of how melody and rhythm come together. I started trying to play other simple songs I knew, figuring out the notes by trial and error and memorizing the sequence in which to press them."), /* @__PURE__ */ React.createElement("p", null, "One day, my parents noticed how interested I was in playing the piano and decided to send me to piano lessons. At first, my mom didn’t want to buy a piano for our house, so the only way I could practice was by going to my neighbor’s house and borrowing theirs. Slowly, I improved and could smoothly play songs with both hands. Seeing my progress, my younger sister and brother became envious and said they wanted to learn too. After a year of lessons, borrowing pianos, and none of us quitting, my parents finally decided to get one for us to practice at home."), /* @__PURE__ */ React.createElement("p", null, "Playing the piano has always been a way for me to relax. It allows me to express my emotions and creativity, changing the tone of a piece just by adjusting some annotations. It gives me a break from homework and studies, letting me enjoy the music I create."), /* @__PURE__ */ React.createElement("p", null, "One day, my piano teacher introduced me to orchestras—a musical ensemble where different instruments come together to create something even more breathtaking than a solo piano performance. After listening to some recordings, I completely fell in love with the rich and expressive sound of orchestral music. However, since the piano is mostly a solo instrument and rarely played in an orchestra, I decided to join my high school’s Chinese Orchestra Society instead. Being part of the society not only gave me the experience of playing in an orchestra but also introduced me to traditional Chinese instruments."), /* @__PURE__ */ React.createElement("p", null, "Learning both Western and Chinese traditional instruments, I discovered many similarities between them. For example, the string family in Chinese traditional instruments, known as the ", /* @__PURE__ */ React.createElement("i", null, "Hu-qin"), ", consists of the ", /* @__PURE__ */ React.createElement("i", null, "Gao-Hu"), ", ", /* @__PURE__ */ React.createElement("i", null, "Er-Hu"), ", and ", /* @__PURE__ */ React.createElement("i", null, "Zhong-Hu"), ", which correspond to the violin, viola, and double bass in Western orchestras. I played the Er-Hu in the society and learned a lot from the experience. I even participated in several Chinese orchestra competitions with my friends, gaining unforgettable memories and valuable lessons along the way. This musical journey has truly added a unique and vibrant color to my life."), /* @__PURE__ */ React.createElement("p", null, "Now, after graduating from high school, I’m working hard to achieve a Grade 8 in piano—a goal that I hope will be another milestone in my musical journey.")))), /* @__PURE__ */ React.createElement("div", {
    className: "skill-column skill-coding"
  }, /* @__PURE__ */ React.createElement("h1", null, "Coding"), /* @__PURE__ */ React.createElement("div", {
    className: "skill-img",
    onClick: handlePopupCoding
  }, /* @__PURE__ */ React.createElement("img", {
    src: CodingImg
  }))), isPopupCodingOpen && /* @__PURE__ */ React.createElement("div", {
    className: "skill-coding-popup-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "skill-popup-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Coding"), /* @__PURE__ */ React.createElement("button", {
    className: "close-button",
    onClick: handlePopupCoding
  }, "×")), /* @__PURE__ */ React.createElement("div", {
    className: "skill-text-container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "skill-text-title"
  }, "Languages"), /* @__PURE__ */ React.createElement("div", {
    className: "skill-type"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg",
    className: "programmingLanguageIcons"
  }), /* @__PURE__ */ React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg",
    className: "programmingLanguageIcons"
  }), /* @__PURE__ */ React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
    className: "programmingLanguageIcons"
  }), /* @__PURE__ */ React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg",
    className: "programmingLanguageIcons"
  }), /* @__PURE__ */ React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg",
    className: "programmingLanguageIcons"
  }), /* @__PURE__ */ React.createElement("img", {
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg",
    className: "programmingLanguageIcons"
  })), /* @__PURE__ */ React.createElement("h1", {
    className: "skill-text-title"
  }, "Little story"), /* @__PURE__ */ React.createElement("div", {
    className: "skill-text"
  }, /* @__PURE__ */ React.createElement("p", null, "In my high school, there are selective courses for students. Once I entered my senior level (16–18 years old), I selected the Programming Language Selective Course, and this was where my coding journey began. The language taught in the course was C++, with a focus on competitive programming."), /* @__PURE__ */ React.createElement("p", null, "The course was quite difficult for me at the beginning, as it was completely new to me. I even struggled with variables and syntax, not understanding why so many of them were necessary. However, after spending some time on it, it became easier and easier. Slowly, I realized that the teaching pace was too slow for me, so I started self-learning new algorithms and problem-solving techniques by searching the web. I also became addicted to solving problems."), /* @__PURE__ */ React.createElement("p", null, 'Solving a difficult problem is not easy. After coming up with an idea, I need to code it and try submitting the solution. But the thing is, I usually do not succeed on my first or second attempt. I have to consider edge cases, exceptions, and sometimes even rethink my entire approach. This process can be frustrating, but if I don’t give up, I feel incredibly proud when I finally see the green "ACCEPT" button, knowing that all the hard work was truly worth it.'), /* @__PURE__ */ React.createElement("p", null, "Through this journey, I learned that persistence and a passion for problem-solving can turn any challenge into an opportunity for growth, and this mindset continues to drive me forward in both coding and life.")))), /* @__PURE__ */ React.createElement("div", {
    className: "skill-column skill-drawing"
  }, /* @__PURE__ */ React.createElement("h1", null, "Drawing"), /* @__PURE__ */ React.createElement("div", {
    className: "skill-img2",
    onClick: handlePopupDrawing
  }, /* @__PURE__ */ React.createElement("img", {
    src: DrawingImg
  }))), isPopupDrawingOpen && /* @__PURE__ */ React.createElement("div", {
    className: "skill-coding-popup-container"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "skill-popup-header"
  }, /* @__PURE__ */ React.createElement("h1", null, "Drawing"), /* @__PURE__ */ React.createElement("button", {
    className: "close-button",
    onClick: handlePopupDrawing
  }, "×")), /* @__PURE__ */ React.createElement("h1", {
    className: "skill-text-title"
  }, "Art Works"), /* @__PURE__ */ React.createElement("div", {
    className: "skill-type"
  }, /* @__PURE__ */ React.createElement("img", {
    src: piano,
    className: "programmingLanguageIcons"
  })), /* @__PURE__ */ React.createElement("div", {
    className: "skill-text-container"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "skill-text-title"
  }, "Little story"), /* @__PURE__ */ React.createElement("div", {
    className: "skill-text"
  }, /* @__PURE__ */ React.createElement("p", null, "My parents always told me that I was a creative child—I loved scribbling all over the place. Give me a marker, and I’d hand back a mess. That’s when they decided to send me to a painting class, hoping I’d channel all my creativity there. And that’s how my journey in art began."), /* @__PURE__ */ React.createElement("p", null, "When I entered primary school, I developed the habit of carrying a scribble book everywhere. I realized just how much I loved drawing and asked my parents if I could join an art class. To my surprise, they didn’t hesitate—they found one for me right away. From then on, Friday nights became the highlight of my week, giving me the chance to unwind and do something I truly enjoyed."), /* @__PURE__ */ React.createElement("p", null, "Joining that class was one of the best decisions I ever made because it led me to my most inspiring art teacher, Teacher Beyond. He was the one who saw my potential and pushed me to improve. I loved watching him do demos, and I even asked him to draw cute cartoons in my scribble book. He taught me more than anyone else on my artistic journey."), /* @__PURE__ */ React.createElement("p", null, 'As time passed, I was able to draw realistic artworks on my own. I also picked up new skills like watercoloring and sketching. Unlike other subjects, I never enjoyed drawing competitions—I felt that putting a time limit on art made it less enjoyable. So, after entering high school, I rarely participated in them, especially as my schedule became busier. While I found science fascinating, I never wanted to let go of my first passion—art. That’s why you’ll find "Art" on my UEC result slip, proudly marked with an A1, representing the journey I’ve been through.')))), isOverlayOpen && /* @__PURE__ */ React.createElement("div", {
    className: "skill-overlay"
  })));
}
