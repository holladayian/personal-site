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
        // {
        //   name: 'Dog Resivour',
        //   // need go go back and fix spelling everywhere
        //   // need to deploy
        //   description: '',
        //   tech: ['JavaScript', 'React', 'CSS', 'JSX', 'Jest'],
        //   deployed: '',
        //   repository: 'https://github.com/holladayian/dogrsreservoir',
        //   images: [
        //     {
        //     source: '',
        //     description: 'This is an image of the lobby. Here you can chose a name (or be left as guest), and create or join a room.'
        //     },
        //   ]
        // },
        {
          name: 'BangWords',
          description: '',
          tech: ['JavaScript', 'React', 'CSS', 'JSX', 'Socket.io', 'Express', 'Jest'],
          deployed: 'http://greymatteor.github.io/bangwords',
          repository: 'https://github.com/holladayian/bangwords',
          images: [
            {
            source: '',
            description: 'This is an image of the lobby. Here you can chose a name (or be left as guest), and create or join a room.'
            },
            {
            source: '',
            description: "The loading page.."
            },
            {
            source: '',
            description: "This image represents our game's functionality. It implements a chat feature, counts down the remaining guesses, and updates the DOM when the guesser is correct."
            },
            {
            source: '',
            description: "This is the winner!"
            },
          ]
        },
        {
          name: 'Rancid Tomatillos',
          description: 'Rotten tomatoes knock off. Blah blah blah, blah blah. Blah, blah blah blah, blah, blah blah blah...',
          tech: ['JavaScript', 'React', 'CSS', 'JSX'],
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
        // {
        //   name: 'What\'s Cookin\'?',
        //   description: "The \"What's Cookin\" project is a website that uses hosted datasets to allow a randomized user to scroll through a list of recipes and "Favorite" them, add them to a list of "Recipes to cook", review their ingredients and instructions, or search recipes by names and tags",
        //   tech: ['JavaScript', 'CSS', 'Chai', 'Chai Spies', 'WebPack', 'Babel' ],
        //  // will have to figure out the deployment on this one
        //   deployed: '',
        //   repository: 'https://github.com/holladayian/whats-cookin',
        //   images: [
        //     {
        //     source: '',
        //     description: ''
        //     },
        //   ]
        // },
        // {
        //   name: 'FitLit',
        //   description: "",
        //   tech: ['JavaScript', 'CSS', 'Chai', 'Chai Spies', 'WebPack', 'Babel' ],
        //  // will have to figure out the deployment on this one
        //  // Need to redisgn this whole project :/
        //   deployed: '',
        //   repository: '',
        //   images: [
        //     {
        //     source: '',
        //     description: ''
        //     },
        //   ]
        // },
        {
          name: 'Will Andy Pick Me?',
          description: 'This was a 3 hour long program competition. The goal was to use the magic 8 ball script form Toy Story to return random answers to questions.',
          tech: ['JavaScript', 'CSS', 'HTML'],
          deployed: 'https://holladayian.github.io/will-andy-pick-me/',
          repository: 'https://github.com/holladayian/will-andy-pick-me',
          images: [
            {
            source: '',
            description: ''
            },
          ]
        },
        // {
        //   name: 'Static Comp',
        //   description: '',
        //   tech: ['CSS', 'HTML'],
        //   // Need to revisit this a little bit
        //   deployed: '',
        //   repository: '',
        //   images: [
        //     {
        //     source: '',
        //     description: ''
        //     },
        //   ]
        // },
        {
          name: 'IdeaBox Generator',
          description: 'Throughout the project, one of our focuses will be on providing a fluid and responsive client-side interface. To this end, we’ll rely on JavaScript and to implement snappy filtering in the browser, and localStorage to persist our wonderful ideas between sessions. Our goal is to also incorporate an agile workflow by incorporating two weekly sprints.',
          tech: ['JavaScript', 'HTML', 'CSS'],
          deployed: 'https://holladayian.github.io/ideabox-generator/',
          repository: 'https://github.com/holladayian/ideabox-generator',
          images: [
            {
            source: '',
            description: 'This is the desktop view showing all of the saved cards in the array.'
            },
            {
            source: '',
            description: "This is the desktop view showing only the starred cards in the array."
            },
            {
            source: '',
            description: 'This is the desktop view showing only the searched cards in the array.'
            },
            {
            source: '',
            description: 'This is the mobile view.'
            },
          ]
        },
        // {
        //   name: 'Travel Tracker',
        //   // This project was never deployed
        //   description: '',
        //   tech: ['JavaScript', 'HTML', 'CSS'],
        //   deployed: '',
        //   repository: 'https://github.com/holladayian/travel-tracker-ih',
        //   images: [
        //     {
        //     source: '',
        //     description: ''
        //     },
        //   ]
        // },
        {
          name: 'Tic-Tac-Toe',
          description: 'For this project, we were required to make a working tic-tac-toe game from scratch. For this we used Javascript, HTML and CSS.',
          tech: ['JavaScript', 'HTML', 'CSS'],
          deployed: 'https://holladayian.github.io/tic-tac-toe/',
          repository: 'https://github.com/holladayian/tic-tac-toe',
          images: [
            {
            source: '',
            description: 'This is an image of halfway through a game. You can see it it will show you who\'s current turn it is.'
            },
            {
            source: '',
            description: "This is an image of a winning game. You can show it updates the DOM with the winning player's token."
            },
          ]
        },
        // {
        //   name: 'Slap Jack',
        //  // need to finish this project
        //   description: '',
        //   tech: ['JavaScript', 'HTML', 'CSS'],
        //   deployed: '',
        //   repository: '',
        //   images: [
        //     {
        //     source: '',
        //     description: '.'
        //     },
        //   ]
        // },
        {
          name: 'Intention Timer',
          description: 'The goal of this project was to build an application that allows a user to set goals for their health and productivity, tied to an amount of time. Users will select an activity category, set the amount of time they want to spend on that activity, and start the timer. The app will log that activity to keep track of how the user has been spending their time.',
          tech: ['JavaScript', 'React', 'CSS'],
          deployed: '',
          repository: 'https://github.com/holladayian/intention-timer',
          images: [
            {
            source: '',
            description: 'Our first task was to build the layout of our Intention Timer application using HTML and CSS, without building in any JavaScript functionality. We used semantic HTML elements throughout where appropriate to ensure we make the application accessible, and tried to use as simple yet effective CSS as possible.'
            },
            {
            source: '',
            description: "This portion of the project involved several steps. First, we added functionality to the form by making each category button change border, text, and icon color when clicked, to the colors specified in our project brief."
            },
            {
            source: '',
            description: 'Next, we added several form validation functions. The first disables any character that is not a number from being entered in the minutes and seconds form fields. The second checks to see if all of the form fields have an input, and if not, checks each individually and inserts error messages for those missing a value.'
            },
            {
            source: '',
            description: 'When a user has filled out all fields and clicks the "Start Activity" button, their information is stored as an instance of our Activity class. Additionally, that button click triggers a timer clock to display in place of the form. The timer clock has a circle outline that matches the color of the selected category, and displays the user-provided description and time.'
            },
            {
            source: '',
            description: 'Next, we created a function to make our timer functional, using the setInterval method. We were able to achieve this so when a user clicks "Start", the timer begins counting down and continues down to 0 seconds. At this stage of the project, we added a temporary alert that pops up when the timer completes.'
            },
            {
            source: '',
            description: 'Then, we removed the temporary alert and instead added functionality to display a congratulatory message when the timer reaches 0, along with a new "Log Activity" button.'
            },
            {
            source: '',
            description: 'When the user clicks this "Log Activity" button, a past Activity card appears on the right-hand side of the application, which displays the activity description, time, and a color-coded line matching the category type of that activity. A new button to Create a New Activity will also appear in place of the timer.'
            },
            {
            source: '',
            description: 'We also made our application responsive, so it displays correctly on mobile as well.'
            },
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
