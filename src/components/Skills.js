import React from 'react';
import { TbChecks } from "react-icons/tb";
import '../styles/skills.css';
import { useTheme } from '../contexts/ThemeContext.js';
import { FaReact } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { FaJava } from "react-icons/fa6";
import { FaHtml5 } from "react-icons/fa";
import { SiCss3 } from "react-icons/si";
// Uncomment and use the correct import paths if these logos are available
// import cplus from '../assets/c++.png';
// import c from '../assets/C.png';

export const skills = [
    {
        index: 1,
        skill: 'HTML',
        logo: <FaHtml5 />
    },
    {
        index: 2,
        skill: 'CSS',
        logo: <SiCss3 />
    },
    {
        index: 3,
        skill: 'Javascript',
        logo: <RiJavascriptFill />
    },
    {
        index: 4,
        skill: 'C',
        // Uncomment if using image logos
        // logo: <img src={c} alt="C Logo" />
    },
    {
        index: 5,
        skill: 'C++',
        // Uncomment if using image logos
        // logo: <img src={cplus} alt="C++ Logo" />
    },
    {
        index: 6,
        skill: 'Java',
        logo: <FaJava />
    },
    {
        index: 8,
        skill: 'React.JS',
        logo: <FaReact />
    }
];

const Skills = () => {
    const { theme } = useTheme();
    return (
        <div className='skillsContainer'>
            <h1>Skills</h1>
            <div className="holder">
                {
                    skills.map((item, index) => (
                        <React.Fragment key={index}>
                            <div className='skillItem'>
                                <TbChecks color={theme === 'dark' ? 'white' : 'black'} />
                                <p>{item.skill}</p>
                            </div>
                            {/* {(index + 1) % 3 === 0 && true ? <br /> : ''} */}
                        </React.Fragment>
                    ))
                }
            </div>
        </div>
    );
}

export default Skills;
