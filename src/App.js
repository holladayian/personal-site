import { Header } from './components/Header.js';
import { Projects } from './components/Projects.js';
import { About } from './components/About.js';
import { Contact } from './components/Contact.js';
import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

export class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      projects: [
        {
          name: 'Rancid Tomatillos',
          img: 'imgpath',
          description: 'Rotten tomatoes knock off',
          tech: 'JavaScript, React, CSS',
          deployed: 'http//asrgargaerg',
          repository: 'http//asfaewfaef'
      }
      ]
    }
  }
    render() {
      return (
        <div className="App">
          <Header />
          <Switch>
            <Route
              path='/projects'
              render={() => <Projects projects={this.state.projects}/>}
            />
            <Route
              path='/about'
              render={() => <About />}
            />
            <Route
              path='/contact'
              render={() => <Contact />}
            />
          </Switch>
        </div>
      );
    }  
}

export default App;
