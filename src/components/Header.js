import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

export const Header = () => {
    return (
      <section class="header">
        <h1>Ian Holladay</h1>
        <h2>Web Developer</h2>
            <Link to= '/projects' >
            <button className="projects-button">Projects</button>
            </Link>
            <Link to= '/about' >
            <button className="about-button">About</button>
            </Link>
      </section>
    )
}
