import React from 'react';
import '../styles/Projects.scss';

export const Projects = ({projects}) => {
  // return (
  //   <section class="projects">
  //     <h1>Projects</h1>
  //   </section>
  // )
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
      </section>
    )
  })
}