import React from 'react'

const ProjectCard = ({ liveLink, gitLink, src, title, description }) => {
    return (
        <div className="projectContainer">
            <a className='projectLink' href={liveLink === '#' ? '' : liveLink} target='_blank'>
                <img className='projectTitle' src={src} alt={`${title} logo`} />
            </a>
            <div className="projectDetails">
                <h3>{title}</h3>
                <p className='projectDescription'>{description}</p>

            </div>
        </div>
    )
}

export default ProjectCard