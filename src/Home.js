import React from 'react';
import Laptop from './images/laptop.png'

const Home = () => {
    return (
        <section id="home">
            <div className="home">
                <div className="home-title">
                    <div>
                        <div className="home-title-message">Hello, my name is</div>
                        <div className="section-title">Andres Guerra</div>
                        <div className="home-title-position">A Web Developer.</div>
                    </div>
                </div>
                <div className="home-image">
                    <img src={Laptop} alt="laptop" />
                </div>
            </div>
        </section>
    );
};

export default Home;