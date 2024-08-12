import React from 'react';
import '../styles/experience.css';

const Experience = () => {
    const experiences = [
        {
            company: 'WIPRO TECHNOLOGIES',
            role: 'Salesforce Developer',
            duration: 'Dec 2022 - Mar 2024',
            location: 'Hyderabad, Telangana',
            achievements: [
                'Managed and optimized data management by creating a Lightning Record Type, Object, fields, etc., reducing data creation time to an average of 10 minutes.',
                'Tailored Salesforce Lightning Pages to meet client needs, achieving a 40% decrease in project completion time. Proficient in Salesforce Technological Product Suites, including Data Loader, Workbench, etc.',
                'Implemented code fixes with a focus on Data Manipulation and Email Triggers, driving a 40% reduction in system errors through cross-functional collaboration with diverse teams.'
            ]
        },
        {
            company: 'WIPRO TECHNOLOGIES',
            role: 'Full-Stack Developer',
            duration: 'Aug 2021 - Dec 2022',
            location: 'Hyderabad, Telangana',
            achievements: [
                'Developed responsive UI with HTML5, CSS3, Bootstrap, achieving 30% faster page load.',
                'Utilized React for dynamic components, reducing server response time by 25%.',
                'Enhanced application performance by 40% through core Java optimization and SQL database tuning.',
                'Identified and resolved bugs, reducing downtime by 50% and improving overall system stability.'
            ]
        }
    ];

    return (
        <div className="experienceContainer">
            <h1>EXPERIENCE</h1>
            <div className="timeline">
                {experiences.map((exp, index) => (
                    <div className="timelineItem" key={index}>
                        <div className="timelineContent">
                            <h2>{exp.company} | {exp.role}</h2>
                            <p>{exp.duration} | {exp.location}</p>
                            <p>
                                {exp.achievements.map((ach, idx) => (
                                    <li key={idx}>{ach}</li>
                                ))}
                            </p>
                        </div>
                    </div>
                ))}
                <div className="timelineLine"></div>
            </div>
        </div>
    );
}

export default Experience;
