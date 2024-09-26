import React from 'react';
import '../styles/experience.css';

const experiences = [
    {
        company: 'WIPRO TECHNOLOGIES',
        role: 'Salesforce Developer',
        duration: 'Dec 2022 - Mar 2024',
        location: 'Hyderabad, Telangana',
        achievements: [
            'Managed and resolved issues in Sales Cloud and Service Cloud across four different client instances', 'Optimized data management by creating a Lightning Record Type, Object, fields, and Page layout, reducing data creation time to an average of 10 minutes per requirement', 'Tailored Salesforce Lightning Pages to meet unique client needs, slashing average customization time to 5 minutes, achieving a 40% decrease in project completion time and boosting client satisfaction by 25%', 'Increased data security by implementing Single Sign-On (SSO) and integrating external applications within Salesforce instances, resulting in a 30% reduction in security breaches and a 20% improvement in overall system efficiency', 'Proficient in maximizing the potential of Salesforce tools like Data Loader and Workbench, leading to a 25% increase in data processing speed and a 15% reduction in error rates', 'Implemented code fixes with a focus on Data Manipulation and Email Triggers, driving a 40% reduction in system errors, enhancing functionality and efficiency through cross-functional collaboration with diverse teams']
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
const Experience = () => {
    return (
        <div className="experienceContainer">
            <h1>EXPERIENCE</h1>
            <div className="timeline">
                {experiences.map((exp, idx) => {
                    return (
                        <>
                            <div className="timeline_component">
                                <div className="timeline_date timeline_date--right">{exp.duration}</div>
                            </div>
                            <div className="timeline_middle">
                                <div className="timeline_point"></div>
                            </div>
                            <div className="timeline_component timeline_component--bg">
                                <h2 style={{ fontFamily: 'Franklin Gothic' }}>{exp.company}</h2>
                                <h3 className="timeline_title">{exp.role}</h3>
                                <ol>

                                    {exp.achievements.map((acheivement, key) => {
                                        return (
                                            <li>
                                                <p key={key} >
                                                    {acheivement}
                                                </p>
                                            </li>
                                        );
                                    })}
                                </ol>
                            </div>
                        </>
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;