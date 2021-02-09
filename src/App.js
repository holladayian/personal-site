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
          description: 'Rotten tomatoes knock off. Blah blah blah, blah blah. Blah, blah blah blah, blah, blah blah blah...',
          tech: ['JavaScript', 'React', 'CSS'],
          deployed: 'https://rancid-t-omatillos.herokuapp.com/',
          repository: 'https://github.com/holladayian/ih-rancidtomatillos',
          images: [
            {
            source: 'https://media.giphy.com/media/KhQN8qc4TjfDwykk6P/giphy.gif',
            description: 'When the application run, it request the information about all movies within the `componentDidMount` method that runs even before the `App` render on the page. This way we have all the information availabe to display.'
            },
            // {
            // source: 'https://media.giphy.com/media/KhQN8qc4TjfDwykk6P/giphy.gif',
            // description: 'When the application run, it request the information about all movies within the `componentDidMount` method that runs even before the `App` render on the page. This way we have all the information availabe to display.'
            // }
          ]
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
