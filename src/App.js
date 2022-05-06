import { useEffect, useState } from 'react';
import { getBears, getCandies, getSpiders, getCartoons } from './services/fetch-utils';
import BearList from './BearList';
import CandiesList from './CandiesList';
import SpiderList from './SpiderList';
import CartoonList from './CartoonList';
import './App.css'; 

function App() {
  const [bears, setBears] = useState([]);
  const [candies, setCandies] = useState([]);
  const [spiders, setSpiders] = useState([]);
  const [cartoons, setCartoons] = useState([]);

  useEffect(async () => {
    const bearResponse = await getBears();
    const candyResponse = await getCandies();
    const spiderResponse = await getSpiders();
    const cartoonRespone = await getCartoons();

    setBears(bearResponse);
    setCandies(candyResponse);
    setSpiders(spiderResponse);
    setCartoons(cartoonRespone); 
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
      <div>
        <h1>Cartoons</h1>
        <CartoonList cartoons={cartoons}/>
      </div>
    </div>
  );
}

export default App;
