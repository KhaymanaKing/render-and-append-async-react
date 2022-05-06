import { useEffect, useState } from 'react';
import { getBears, getCandies, getSpiders } from './services/fetch-utils';
import BearList from './BearList';
import CandiesList from './CandiesList';
import SpiderList from './SpiderList';
import './App.css'; 
function App() {
  const [bears, setBears] = useState([]);
  const [candies, setCandies] = useState([]);
  const [spiders, setSpiders] = useState([]);

  useEffect(async () => {
    const bearResponse = await getBears();
    const candyResponse = await getCandies();
    const spiderResponse = await getSpiders();


    setBears(bearResponse);
    setCandies(candyResponse);
    setSpiders(spiderResponse);
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
      <div>
        <h1>Spiders</h1>
        <SpiderList spiders={spiders}/>
      </div>
    </div>
  );
}

export default App;
