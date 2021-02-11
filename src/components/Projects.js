import React from 'react';
// import Redirect from './Redirect.js';
import { Link, Route, Redirect } from 'react-router-dom';
import { ImgCarousel } from './ImgCarousel.js';
import '../styles/Projects.scss';

export const Projects = ({projects}) => {

  return projects.map(project => {
    return (
      <section class="project-card">
        <h1 class="name">
          {project.name}
        </h1>
        <section class="info">
          <section class="tech">
          <h2>Tech</h2>
          {project.tech.map(t => <p>{t}</p>)}
          
          </section>
          <section class="description">
          <h2>Description</h2>
          {project.description}

          </section>
          <section class="images">
          <h2>Images</h2>
          <ImgCarousel images={project.images} />
            {/* <img src={project.images[scroll()].source} /> */}
            {/* <img src={project.images[0].source} /> */}
            {/* {project.images[0].description} */}
          </section>
        </section>
        <section class="buttons">
            <a href={project.repository}>
              <button className="projects-button">
                Repository
              </button>
            </a>
            <a href={project.deployed}>
              <button className="projects-button">
                Deployed
              </button>
            </a>
        </section>
      </section>
    )
  })
}