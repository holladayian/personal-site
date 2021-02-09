import React from 'react';

export const Projects = ({projects}) => {
  // return (
  //   <section class="projects">
  //     <h1>Projects</h1>
  //   </section>
  // )
  return projects.map(project => {
    return (
      <section>{project.name}</section>
    )
  })
}