import React from 'react';
// import Redirect from './Redirect.js';
import { Link, Route, Redirect } from 'react-router-dom';
import '../styles/Projects.scss';

export const Projects = ({projects}) => {
  // return (
  //   <section class="projects">
  //     <h1>Projects</h1>
  //   </section>
  // )
  const redirectToSite = (site) => {
    console.log("site", site)
    return <Redirect to={site} />
  }

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

          </section>
        </section>
        <section class="buttons">
        {/* <Route
  path="/privacy-policy"
  component={ Redirect }
  loc={projects.repository}
  /> */}
        {/* <a target="_blank" href={projects.repository}>Repository</a> */}

          {/* <Link to={project.repository}> */}
            <a href={project.repository}>
            <button className="projects-button">
            Repository
            </button>
            </a>
            {/* <button className="projects-button" onClick={() => redirectToSite(project.repository)}>Repository</button> */}
          {/* </Link> */}
          {/* <Link to={project.deployed}> */}
            {/* <button className="projects-button" href={project.deployed}>Deployed</button> */}
            <a href={project.deployed}>
            <button className="projects-button">
            Deployed
            </button>
            </a>
            {/* <button className="projects-button">Deployed</button> */}
          {/* </Link/> */}
        </section>
      </section>
    )
  })
}