import React from 'react';
import './sass/main.scss'
import Project from './Projects';
import { useEffect } from 'react';
import VanillaTilt from "vanilla-tilt";
import ScrollReveal from 'scrollreveal';
import { targetElements, defaultProps } from "./data/scrollRevealConfig";

const PortfolioPage = () => {
    useEffect(() => {
        if (!targetElements.length) return;

        ScrollReveal({ reset: false });

        targetElements.forEach(({ element, animation }) => {
            ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
        });
        // Initialize VanillaTilt
        const elements = document.querySelectorAll('.js-tilt');
        VanillaTilt.init(elements);
    }, []);

    return (
        <div>
            <section id="hero" className="jumbotron">
                <div className="container">
                    <h1 className="hero-title load-hidden">
                        Hi, my name is <span className="text-color-main">Atef Moazzen</span>
                        <br />
                        I'm the Developer you need.
                    </h1>
                    <p className="hero-cta load-hidden">
                        <a rel="noreferrer" className="cta-btn cta-btn--hero" href="#about">
                            Know more
                        </a>
                    </p>
                </div>
            </section>
            <section id="about">
                <div className="container">
                    <h2 className="section-title load-hidden">About me</h2>
                    <div className="row about-wrapper">
                        <div className="col-md-6 col-sm-12">
                            <div className="about-wrapper__image load-hidden">
                                <img
                                    alt="Profile"
                                    className="img-fluid rounded shadow-lg"
                                    height="auto"
                                    width="300px"
                                    src="assets/images/my-picture.png"
                                />
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12">
                            <div className="about-wrapper__info load-hidden">
                                <p className="about-wrapper__info-text">
                                    Hello! I'm a passionate software developer based in Sweden. With a strong background in React, JavaScript, and Python, I love building intuitive and responsive web applications that solve real-world problems.
                                </p>
                                <p className="about-wrapper__info-text">
                                    Currently, I'm pursuing a degree in Software Testing, honing my skills to ensure the highest quality in the software I develop. When I'm not coding, you'll find me immersed in the gaming world, tinkering with cars, or exploring the latest trends in technology.
                                </p>
                                <span className="d-flex mt-3">
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        className="cta-btn cta-btn--resume"
                                        href="assets/resume.pdf"
                                    >
                                        View Resume
                                    </a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {<Project />}

        </div>
    );
};

export default PortfolioPage;
