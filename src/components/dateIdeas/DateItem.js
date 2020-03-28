import React from 'react';

const DateItem = props => {
  const { dateItem } = props;

  return (
    <div className='date-idea text-center'>
      <p>{dateItem.dateName}</p>
    </div>
  );
};

export default DateItem;
