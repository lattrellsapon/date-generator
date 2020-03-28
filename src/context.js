import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext();

export class Provider extends Component {
  state = {
    dateIdea: [
      {
        id: uuidv4(),
        dateName: 'Attend a dance class together',
        dateActivity:
          'It is always to get the body moving! Attend a dance class together '
      },
      {
        id: uuidv4(),
        dateName: 'Train for a particular activity event (eg. Marathon)',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Attend a cooking class',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Build a puzzle together',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Attend a swimming lesson',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Join a Social Sports team',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Dinner hopping',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Catch a ferry (eg. to the city or Rangitoto)',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Attend a quiz night at a pub',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Play chess (maybe play outdoors)',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Volunteer together',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Time Capsule',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Reflects on goals for the year',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Ice Skating',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Go to Jump',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Watch a live sporting event (basketball or rugby)',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Work on a podcast together',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Visit an orphanage',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Snorkel at Goat Island',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName: 'Milford to Takapuna coast walk',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      },
      {
        id: uuidv4(),
        dateName:
          'Attend a Catholic talk / teaching that is not held within the CFC community',
        dateActivity:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '
      }
    ],
    dateSuggestion: {}
  };

  // This function will generate a new date idea for the user
  anotherSuggestion = () => {
    const randomNumberTwo = Math.floor(
      Math.random() * this.state.dateIdea.length
    );
    this.setState({
      dateSuggestion: this.state.dateIdea[randomNumberTwo]
    });
  };

  // This will set the initial random date idea . . .

  componentDidMount() {
    console.log(this.state.dateIdea.length);
    const randonNumber = Math.floor(Math.random() * this.state.dateIdea.length);
    console.log(randonNumber);
    this.setState({
      dateSuggestion: this.state.dateIdea[randonNumber]
    });
    this.anotherSuggestion();
  }

  render() {
    return (
      <Context.Provider
        value={{ ...this.state, anotherSuggestion: this.anotherSuggestion }}
      >
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
