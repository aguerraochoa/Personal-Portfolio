import React from 'react';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';


const Footer = () => {
    return (
        <section id="footer">
            <a href="https://www.linkedin.com/in/andresguerra8a" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin style={{ fontSize: "2rem" }} />
            </a>
            <a href="https://github.com/aguerraochoa" target="_blank" rel="noopener noreferrer">
                <AiFillGithub style={{ fontSize: "2rem" }} />
            </a>
            <div class="footer-name">&copy; { new Date().getFullYear() } - Andres Guerra</div>
        </section>
    );
};

export default Footer;