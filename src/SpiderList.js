import React from 'react';

export default function SpiderList({ spiders }) {
  return (
    <div className='spider-list'>
      {
        spiders.map(spider => <div className='spider' key={spider.name}>
          <h2>{spider.name}</h2>
          <p>{spider.venomous ? 'Venomous' : 'Not Venomous🚫'}</p>
          <p>Good Pet? {spider.pet ? '✅' : '🚫'}</p>
          <p>Located: {spider.location}</p>
          <img src={spider.img}/>
        </div>)

      }
    </div>
  );
}
