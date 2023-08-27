import React, { useState } from 'react';
import { jobs } from './jobs'

const Experience = () => {

    const [currentButtonInfo, setCurrentButtonInfo] = useState(jobs[0]);

    const handleClick = (job) => {
        setCurrentButtonInfo(job);
    }

    return (
        <section id="experience">
            <div className="experience">
                <div className="section-title experience-title">Experience</div>
                <div className="experience-buttons">
                    {jobs.map((job, idx) => (
                        <button key={idx} className={`experience-btn ${job === currentButtonInfo ? 'selected' : ''}`} onClick={() => handleClick(job)} >{job.name}</button>
                    ))}
                </div>
                <div className="experience-info">
                    <div className="experience-info-date">{currentButtonInfo.date}</div>
                    <div className="experience-info-position">{currentButtonInfo.position}</div>
                    <ul className="experience-info-points">
                        {currentButtonInfo.info.map((point, idx) => (
                            <li key={idx}>{point}</li>
                        ))}
                    </ul>

                </div>
            </div>
        </section>
    );
};

export default Experience;