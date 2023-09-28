import React from 'react';
import BlogPage from './images/daily-blogs.png';
import SpotifyPage from './images/spotify.png';
import SoftballPage from './images/softball.png';

const Projects = () => {
    return (
        <section id="projects">
            <div className="section-title projects-title">Projects</div>
            <div className="personal-projects">
                <div className="project">
                    <div className="project-name">Spotify Clone - Artists Page</div>
                    <div className="project-img">
                        <img src={SpotifyPage} alt="Spotify artists page"/>
                    </div>
                    <div className="project-description">
                        Developed a Spotify clone for 13-14 inch screens, 
                        centering solely on an artist page (chose my favorite 
                        band, The Beatles), using HTML, CSS, and JavaScript 
                        to showcase my web development skills. The goal was 
                        to create a user-friendly web application that mimics 
                        the core features of Spotify, in this case allowing 
                        users to play the top Beatles songs. Most of the features
                        in the page are implemented using HTML and CSS, and are
                        primarily for visual purposes.</div>
                    <a href="https://silver-queijadas-943918.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link">Link</a>
                </div>
                <div className="project">
                    <div className="project-name">Full Stack Blogging Platform</div>
                    <div className="project-img">
                        <img src={BlogPage} alt="Daily blogs page"/>
                    </div>
                    <div className="project-description">
                        Recently completed an engaging blog post project that demonstrates 
                        my proficiency in a range of technologies. Leveraging MongoDB, Mongoose, 
                        Express.js, and Node.js, I developed a robust backend infrastructure 
                        that handles user authentication, blog creation, and storage with efficiency. 
                        The frontend was crafted using Bootstrap, HTML, CSS, and JavaScript to ensure a 
                        responsive and visually appealing user interface.</div>
                    <a href="https://calm-gray-betta-wear.cyclic.cloud" target="_blank" rel="noopener noreferrer" className="project-link">Link</a>
                </div>
                <div className="project">
                    <div className="project-name">Softball Stats Pro</div>
                    <div className="project-img">
                        <img src={SoftballPage} alt="Daily blogs page"/>
                    </div>
                    <div className="project-description">
                        Designed and developed Softball Stats Pro, a dynamic web application built to 
                        facilitate the tracking of player statistics throughout a softball season. Using 
                        React and Firebase Firestore, I managed to create a user-friendly platform that 
                        allows softball teams to manage their player data effortlessly.
                    </div>
                    <a href="https://softball-stats-pro1.web.app/" target="_blank" rel="noopener noreferrer" className="project-link">Link</a>
                </div>
            </div>
        </section>
    );
};

export default Projects;