import { useEffect, useState } from 'react';
import { getBears } from './services/fetch-utils';
import BearList from './BearList';
import './App.css'; 
function App() {
  const [bears, setBears] = useState([{
    type: 'brown',
    color: 'brown',
    location: 'North America'
  }]);

  useEffect(async () => {
    const bearResponse = await getBears();

    setBears(bearResponse);
  }, []);
  return (
    <div className="App">
      <BearList bears={bears}/>
    </div>
  );
}

export default App;
