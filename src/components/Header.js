import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';

export const Header = () => {
    return (
      <section class="header">
        <section class="intros">
          <h1 class="ian">Ian Holladay</h1>
          <h2>Web Developer</h2>
        </section>
        <section class="button-section">
          <Link to= '/projects' >
            <button className="projects-button">Projects</button>
          </Link>
          <Link to= '/about' >
            <button className="about-button">About</button>
          </Link>
        </section>
      </section>
    )
}
