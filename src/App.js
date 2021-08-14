import { useEffect, useState } from 'react';
import axios from 'axios';
import TableCoint from './components/TableCoint';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');

  const getData = async () => {
    const res = await axios.get(
      'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false'
    );
    setCoins(res.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <input
          type='text'
          placeholder='Search a coin'
          className='form-control mt-4 bg-dark text-light border-0'
          onChange={(e) => setSearch(e.target.value)}
        />
        <TableCoint coins={coins} search={search} />
      </div>
    </div>
  );
}

export default App;
