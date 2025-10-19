import React from 'react';
import './sass/main.scss'
import { useEffect } from 'react';
import VanillaTilt from "vanilla-tilt";
import ScrollReveal from 'scrollreveal';
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';



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
            <a rel="noreferrer" className="cta-btn cta-btn--hero" href="https://atef1995.github.io/">
              view my new portfolio
            </a>
          </p>
        </div>
      </section>
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
      <footer className="portfolio-footer navbar-static-bottom">
        <div className="container">
          <a rel="noreferrer" href="#top" className="back-to-top">
            <FontAwesomeIcon icon={faAngleUp} />

          </a>
          <div className="social-links">
            <a rel="noreferrer" href="https:/linkedin.com/in/atef-moazzen" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
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
