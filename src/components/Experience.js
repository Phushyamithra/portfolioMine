import React from 'react';
import '../styles/experience.css';

const experiences = [
    {
        company: 'WIPRO TECHNOLOGIES',
        role: 'Salesforce Developer',
        duration: 'Aug 2021 - Mar 2024',
        location: 'Hyderabad, Telangana',
        achievements: [
            'Managed and optimized data management by creating a Lightning Record Type, Object, fields, etc., reducing data creation time to an average of 10 minutes.',
            'Tailored Salesforce Lightning Pages to meet client needs, achieving a 40% decrease in project completion time.Proficient in Salesforce Technological Product Suites, including Data Loader, Workbench, etc.',
            'Implemented code fixes with a focus on Data Manipulation and Email Triggers, driving a 40% reduction in system errors through cross - functional collaboration with diverse teams.',
            'Developed and implemented Lightning Web ComponentS (LWC), reducing error rates by 35% and improving system responsiveness by 20 %.',
            'Created and managed Apex Flows, automating 60% of manual processes and increasing team productivity by 25 % ',
            'Designed and optimized Record-Triggered Flows, reducing manual intervention by 50% and improving process efficiency by 30 % ',
            'Utilized SOQL to improve data retrieval, enhancing query performance by 20% and increasing reporting accuracy by 15 %.']
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