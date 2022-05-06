import React from 'react';

export default function BearList({ bears }) {
  return (
    <div className='bear-list'>
      {
        bears.map(bear => 
          <div className='bear' key={bear.type}>
            <p>Type of Bear: {bear.type}</p>
            <p>Bear Color: {bear.color}</p>
            <p> Located: {bear.location}</p>
          </div>
        )
      }
    </div>
  );
}
