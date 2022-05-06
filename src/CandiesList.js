import React from 'react';

export default function CandiesList({ candies }) {
  return (
    <div className='candy-list'>
      {
        candies.map(candy => <div className='candy' key={candy.name}>
          <h2>{candy.name}</h2>
          <p>{candy.chocolate ? 'Chocolate🍫' : 'Not Chocolate🚫'}</p>
          <p>I rate it a {candy.taste_rating} out of 10</p>
          <p>{candy.colorful ? 'Colorful' : 'dull'}</p>
        </div>)

      }
    </div>
  );
}
