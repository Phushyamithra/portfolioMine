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
        skill: 'Apex',
        logo: <FaHtml5 />
    },
    {
        index: 2,
        skill: 'LWC',
        logo: <SiCss3 />
    },
    {
        index: 3,
        skill: 'Javascript',
        logo: <RiJavascriptFill />
    },
    {
        index: 4,
        skill: 'Apex Flows',

    },
    {
        index: 5,
        skill: 'Triggers',

    },
    {
        index: 6,
        skill: 'CSS',
        logo: <FaJava />
    },
    {
        index: 8,
        skill: 'HTML',
        logo: <FaReact />
    },
    {
        index: 9,
        skill: 'React.JS',
    }

];

const Skills = () => {
    const { theme } = useTheme();
    return (
        <div className='skillsContainer'>
            <h1>SKILLS</h1>
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
