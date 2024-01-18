import React from "react"
import { ProjectsData } from "./data/ProjectsData"
import './sass/main.scss'

const ProjectsComponent = () => {
    const projects = Object.values(ProjectsData).map((project) => {
        return (
            <div className="row" key={project.title}>
                <div className="col-lg-4 col-sm-12">
                    <div className="project-wrapper__text load-hidden">
                        <h3 className="project-wrapper__text-title">{project.title}</h3>
                        <div>
                            <p className="mb-4">{project.description}</p>
                        </div>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn cta-btn--hero"
                            href={project.prevlink}
                        >
                            See Live
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            className="cta-btn text-color-main"
                            href={project.github}
                        >
                            Source Code
                        </a>
                    </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                    <div className="project-wrapper__image load-hidden">
                        <a rel="noreferrer" href={project.prevlink} target="_blank">
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
                                    src={project.image}
                                />
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        );
    });

    return (
        <section id="projects">
            <div className="container">
                <div className="project-wrapper">
                    <h2 className="section-title dark-blue-text">Projects</h2>
                    {projects}
                </div>
            </div>
        </section>
    );
};

export default ProjectsComponent;
