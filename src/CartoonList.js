import React from 'react';

export default function CartoonList({ cartoons }) {
  return (
    <div className='cartoon-list'>
      {
        cartoons.map(cartoon => <div className='cartoon' key={cartoon.name}>
          <h2>{cartoon.name}</h2>
          <img src={cartoon.img}/>
          <p>Original airing date:{cartoon.date_aired}</p>
          <p>Air on: {cartoon.network}</p>
          <p>Main Characters: {cartoon.main_characters}</p>
          <p>Khayman Stamp of approval{cartoon.do_i_like ? '✅' : '🚫'}</p>
          <p>I give it a {cartoon.rating} out of 10</p>
        </div>)
      }
    </div>
  );
}
