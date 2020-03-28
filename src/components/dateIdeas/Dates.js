import React, { Component } from 'react';
import { Consumer } from '../../context';

import Spinner from '../layout/Spinner';
import DateItem from './DateItem';

import { Link } from 'react-router-dom';

export class Dates extends Component {
  render() {
    return (
      <Consumer>
        {value => {
          console.log(value.dateIdea[0].dateName);
          const { dateIdea } = value;
          if (dateIdea === undefined || dateIdea.length === 0) {
            return <Spinner />;
          } else {
            return (
              <div>
                <div className='text-center m-10 p-10'>
                  <p>Here are some date ideas . . .</p>
                </div>

                <div className='three-grid'>
                  {dateIdea.map(dateItem => (
                    <DateItem key={dateItem.id} dateItem={dateItem} />
                  ))}
                </div>
                <div className='text-center m-30'>
                  <p className='mb-10'>Still undecided? Allow us to suggest an idea!</p>
                  <Link to='/date-suggestion' className='date-suggestion'>
                    Suggest a date idea !
                  </Link>
                </div>
              </div>
            );
          }
        }}
      </Consumer>
    );
  }
}

export default Dates;
