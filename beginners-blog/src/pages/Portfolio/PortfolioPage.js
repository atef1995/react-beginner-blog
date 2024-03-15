import React from 'react';
import './sass/main.scss'
import Project from './Projects';
import { useEffect } from 'react';
import VanillaTilt from "vanilla-tilt";
import ScrollReveal from 'scrollreveal';
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import Education from './Education';



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
                                <span className="d-flex mt-3">
                                    <a
                                        rel="noreferrer"
                                        target="_blank"
                                        className="cta-btn cta-btn--resume"
                                        href="assets/certificate.pdf"
                                    >
                                        View Certificate
                                    </a>

                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {<Project />}
            <section id="contact">
                <div className="container">
                    <h2 className="section-title">Contact</h2>
                    <div className="contact-wrapper load-hidden">
                        <p className="contact-wrapper__text">Have Questions? Contact me!</p>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--resume"
                            href="mailto:atefm6@outlook.com"
                        >Email me</a
                        >
                    </div>
                </div>
            </section>
            <footer className="footer navbar-static-bottom">
                <div className="container">
                    <a rel="noreferrer" href="#top" className="back-to-top">
                        <FontAwesomeIcon icon={faAngleUp} />

                    </a>
                    <div className="social-links">
                        <Link rel="noreferrer" to="https://linkedin.com/in/atef-moazzen" target="_blank">
                            <FontAwesomeIcon icon={faLinkedin} />
                        </Link>
                        <a rel="noreferrer" href="https://twitter.com/thetestercorner" target="_blank">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a rel="noreferrer" href="https://github.com/atef1995" target="_blank">
                            <FontAwesomeIcon icon={faGithub} />
                        </a>
                    </div>

                    <hr />
                </div>
            </footer>
        </div>
    );
};

export default PortfolioPage;
