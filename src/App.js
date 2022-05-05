import { useEffect, useState } from 'react';
import { getBears } from './services/fetch-utils';
import BearList from './BearList';

function App() {
  const [bears, setBears] = useState([]);

  useEffect(async () => {
    const bearResponse = await getBears();

    setBears(bearResponse);
  });

  return (
    <div className="App">

    </div>
  );
}

export default App;
