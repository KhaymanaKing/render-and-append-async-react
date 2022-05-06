import { useEffect, useState } from 'react';
import { getBears, getCandies } from './services/fetch-utils';
import BearList from './BearList';
import './App.css'; 
import CandiesList from './services/CandiesList';
function App() {
  const [bears, setBears] = useState([]);
  const [candies, setCandies] = useState([]);

  useEffect(async () => {
    const bearResponse = await getBears();
    const candyResponse = await getCandies();

    setBears(bearResponse);
    setCandies(candyResponse);
  }, []);
  return (
    <div className="App">
      <div>
        <h1>Bears</h1>
        <BearList bears={bears}/>
      </div>
      <div>
        <h1>Candy</h1>
        <CandiesList candies={candies}/>
      </div>
    </div>
  );
}

export default App;
