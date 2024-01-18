import React from "react"
import { EducationData } from "./data/EducationData"
import './sass/main.scss'

export default function Education() {
    const { title, description, prevlink, github, image } = EducationData
    return (
        <section id="projects">
            <div className="container">
                <div className="project-wrapper">
                    <h2 className="section-title dark-blue-text">Education</h2>
                    <div className="row">
                        <div className="col-lg-4 col-sm-12">
                            <div className="project-wrapper__text load-hidden">
                                <h3 className="project-wrapper__text-title">{title}</h3>
                                <div>
                                    <p className="mb-4">
                                        {description}
                                    </p>
                                </div>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    className="cta-btn cta-btn--hero"
                                    href={prevlink}
                                >
                                    See Live
                                </a>
                                <a
                                    rel="noreferrer"
                                    target="_blank"
                                    className="cta-btn text-color-main"
                                    href={github}
                                >
                                    Source Code
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-8 col-sm-12">
                            <div className="project-wrapper__image load-hidden">
                                <a rel="noreferrer" href={image} target="_blank">
                                    <div
                                        data-tilt
                                        data-tilt-max="4"
                                        data-tilt-glare="true"
                                        data-tilt-max-glare="0.5"
                                        className="thumbnail rounded js-tilt"
                                    >
                                        <img
                                            alt="Project"
                                            className="img-fluid"
                                            src={image}
                                        />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}