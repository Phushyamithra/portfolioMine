/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import '../styles/hero.css';
import dp from '../assets/mine.JPG';
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoMdSunny } from "react-icons/io";
import { GoMoon } from "react-icons/go";
import resume from '../assets/Phushya_Mithra_Resume_N.pdf';
import { useTheme } from '../contexts/ThemeContext.js';

const Hero = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <section id='hero' className='container'>
            <div className="colorModeContainer">
                <img className='hero' src={dp} alt="Profile Picture" />
                <button className='themeMode' onClick={toggleTheme}>
                    {theme === 'light' ? <GoMoon size={30} color='black' /> : <IoMdSunny size={30} color='white' />}
                </button>
            </div>
            <div className="info">
                <h1>Phushya Mithra<br />Gauri</h1>
                <h2>Software Developer</h2>
                <div className="icons">
                    <a href="https://x.com/Mithra0302" target='_blank' rel='noopener noreferrer'>
                        <FaSquareXTwitter color={theme === 'light' ? 'black' : 'white'} size={35} />
                    </a>
                    <a href="https://www.linkedin.com/in/phushya-mithra-gauri-77a359171/" target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin color={theme === 'light' ? 'black' : 'white'} size={35} />
                    </a>
                    <a href="https://github.com/Phushyamithra" target='_blank' rel='noopener noreferrer'>
                        <FaGithub color={theme === 'light' ? 'black' : 'white'} size={35} />
                    </a>
                </div>
                <p className='description'>Hi there! I’m Phushya Mithra Gauri, a Salesforce Developer who loves turning challenges into solutions. With 2.5 years at Wipro under my belt, I’ve mastered Apex, SOQL, and LWC, and have a knack for creating smooth, efficient Salesforce experiences. From automating processes to reducing error rates by 35%, my goal is to make Salesforce work smarter, not harder.
                    <br /><br />Let’s connect—I’m always up for discussing big ideas, new tech, or finding creative solutions that make a real impact!</p>
                <a href={resume} download><button className='resumeHover'>Resume</button></a>
            </div>
        </section>
    );
};

export default Hero;
