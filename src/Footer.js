import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';


const Footer = () => {
    return (
        <section id="footer">
            <a href="https://www.linkedin.com/in/andresguerra8a" target="_blank" rel="noopener noreferrer">
                <AiFillLinkedin style={{ fontSize: "2rem" }} />
            </a>
            <div>&copy; { new Date().getFullYear() } - Andres Guerra</div>
        </section>
    );
};

export default Footer;