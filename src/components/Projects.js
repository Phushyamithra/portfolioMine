import React from 'react';
import '../styles/projects.css';
import todo from '../assets/todo.jpg';
import juice from '../assets/juice.jpg';
import ProjectCard from './ProjectCard';

export const AllList = [
    {
        title: 'Todo List',
        src: todo,
        description: `Developed a To-Do List web application using React.js with a user-friendly
 interface for managing the tasks, categorizing them with animation effects`,
        liveLink: "https://phushyamithra.github.io/Todo-list-app-2.0/",
        gitLink: 'https://github.com/Phushyamithra/Todo-list-app'
    },
    {
        title: 'Juice Bar',
        src: juice,
        description: `Developed JuiceBar, a dynamic web app built on React.js, featuring an
 intuitive user interface with multiple pages — Home, Items, About Us, and
 Contact`,
        liveLink: "#",
        gitLink: 'https://github.com/Phushyamithra/Juice-Bar-App'
    }
    //     {
    //         title: 'Todo List',
    //         src: todo,
    //         description: `Developed a To-Do List web application using React.js with a user-friendly
    //  interface for managing tasks, including categorization and animations`,
    //         liveLink: "https://phushyamithra.github.io/Todo-list-app-2.0/",
    //         gitLink: 'https://github.com/Phushyamithra/Todo-list-app'
    //     },
    //     {
    //         title: 'Juice Bar',
    //         src: juice,
    //         description: `Developed JuiceBar, a dynamic web application built on React.js, featuring an
    //  intuitive user interface with multiple pages — Home, Items, About Us, and
    //  Contact`,
    //         liveLink: "#",
    //         gitLink: 'https://github.com/Phushyamithra/Juice-Bar-App'
    //     }
];

const Projects = () => {
    return (
        <>
            <section id='projects' className='projectSectionContainer'>
                <h1 className='sectionTitle'>PROJECTS</h1>
                <div className="wrapper">

                    {AllList.map((project, index) => (
                        <ProjectCard
                            key={index}
                            title={project.title}
                            src={project.src}
                            description={project.description}
                            liveLink={project.liveLink}
                            gitLink={project.gitLink}
                        />
                    ))}
                </div>
            </section>
        </>
    );
};

export default Projects;
