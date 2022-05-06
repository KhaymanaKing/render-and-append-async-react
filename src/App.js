import { useEffect, useState } from 'react';
import { getBears, getCandies, getSpiders, getCartoons } from './services/fetch-utils';
import BearList from './BearList';
import CandiesList from './CandiesList';
import SpiderList from './SpiderList';
import CartoonList from './CartoonList';
import Loading from './Loading';
import './App.css'; 

function App() {
  const [bears, setBears] = useState([]);
  const [candies, setCandies] = useState([]);
  const [spiders, setSpiders] = useState([]);
  const [cartoons, setCartoons] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(async () => {
    setIsLoading(true);
    const bearResponse = await getBears();
    const candyResponse = await getCandies();
    const spiderResponse = await getSpiders();
    const cartoonRespone = await getCartoons();
    setIsLoading(false);
    setBears(bearResponse);
    setCandies(candyResponse);
    setSpiders(spiderResponse);
    setCartoons(cartoonRespone); 
  }, []);

  return (
    <div className="App">
      {
        isLoading ? <Loading/>
          : <><h1>Bears</h1><BearList bears={bears} />
            <h1>Candy</h1>
            <CandiesList candies={candies} />
            <h1>Spiders</h1>
            <SpiderList spiders={spiders} />
            <h1>Cartoons</h1>
            <CartoonList cartoons={cartoons} /></>
      }
    </div>
  );
}

export default App;
