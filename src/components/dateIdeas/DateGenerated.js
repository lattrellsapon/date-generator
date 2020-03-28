import React, { Component } from 'react';
import { Consumer } from '../../context';

import { Link } from 'react-router-dom';

export default class DateGenerated extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          const { dateSuggestion, anotherSuggestion } = value;

          return (
            <div className='card'>
              <div className='m-10'>
                <Link to='/' className='back-button'>
                  Back
                </Link>
              </div>

              <div className='m-10 card-container text-center'>
                <h2>Date Reccomendation: </h2>
                <p>{dateSuggestion.dateName}</p>
              </div>

              <div className='text-center'>
                <button onClick={anotherSuggestion}>
                  Generate another idea
                </button>
              </div>
            </div>
          );
        }}
      </Consumer>
    );
  }
}
