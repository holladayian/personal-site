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
            {
            source: 'https://media.giphy.com/media/KhQN8qc4TjfDwykk6P/giphy.gif',
            description: "When the user inputs the following crendntial, `name` 'diana', `email`'diana@turing@io', and `password` '111111'. The user is greeted with a welcomin message that shows the user that has logged in succesfully."
            }
          ]
        },
        {
          name: 'RomCom',
          description: 'I designed a webpage that generates a random romcom novel cover, and has functionality to create and save custom covers based on user input.',
          tech: ['JavaScript', 'React', 'CSS'],
          deployed: 'https://holladayian.github.io/romcom/',
          repository: 'https://github.com/holladayian/romcom',
          images: [
            {
            source: '',
            description: 'This is the home page. It is what you will see when the page loads.'
            },
            {
            source: '',
            description: "On this page, users can create a custom cover (as weird and cheesy as they like)."
            },
            {
            source: '',
            description: 'Here is a picture of our saved cover page. You can see a collection of covers that are saved.'
            }
          ]
        },
        {
          name: 'Hang in There',
          description: 'We designed the functionality of a webpage using JavaScript with some HTML. Most of the HTML and all of the CSS were given to us to start out with. Our project goal was to create a webpage that can save, randomize, and take in user input to generate motivational posters.',
          tech: ['JavaScript', 'HTML', 'CSS'],
          deployed: 'https://holladayian.github.io/hang-in-there/',
          repository: 'https://github.com/holladayian/hang-in-there',
          images: [
            {
            source: '',
            description: 'This is a picture of our home page. It will load a randomly selected image, title, and quote to create an inspirational poster.'
            },
            {
            source: '',
            description: "This is the User Input View. Users can input their own image, title, and quote to create a personalized inspirational poster."
            },
            {
            source: '',
            description: 'Both randomly generated posters and user-created posters can be saved.'
            },
            {
            source: '',
            description: 'Double clicking on a poster will delete it from the Saved Posters view.'
            },
            {
            source: '',
            description: 'Leaving an input field blank will result in an alert.'
            }
          ]
        },
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
