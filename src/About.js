import React from 'react';
import { SiExpress, SiMongoose, SiNodedotjs } from 'react-icons/si';
import { BiLogoCss3, BiLogoHtml5, BiLogoJavascript, BiLogoReact, BiLogoMongodb } from 'react-icons/bi';

const About = () => {
    return (
        <section id="about">
            <div className="about">
                <div className="about-content">
                    <div className="section-title">About</div>
                    <div className="about-paragraph">
                        I am an experienced full stack developer with a solid background
                        in both front-end and back-end development.
                        Proficient in a range of programming
                        languages, frameworks, and databases,
                        adept at creating seamless, user-focused
                        applications that combine functionality
                        and aesthetics.
                    </div>
                    <div className="icons">
                        <BiLogoHtml5 className="react-icon"/>
                        <BiLogoCss3 className="react-icon"/>
                        <BiLogoJavascript className="react-icon"/>
                        <BiLogoReact className="react-icon"/>
                        <SiNodedotjs className="react-icon"/>
                        <SiExpress className="react-icon"/>
                        <BiLogoMongodb className="react-icon"/>
                        <SiMongoose className="react-icon"/>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;