import React from 'react';
import CoinRow from './CoinRow';

const title = ['Coin', 'Price', 'Price Change', '24hs Volume'];

const TableCoint = ({ coins, index, search }) => {
  const filteredCoins = coins.filter(
    (coin) =>
      coin.name.toLowerCase().includes(search.toLowerCase()) |
      coin.symbol.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <table className='table table-dark mt-4 table-hover'>
      <thead>
        <tr className='ms-2'>
          {title.map((title, i) => (
            <td key={i}>{title}</td>
          ))}
        </tr>
      </thead>
      <tbody>
        {filteredCoins.map((coin) => (
          <CoinRow coin={coin} key={coin.id} />
        ))}
      </tbody>
    </table>
  );
};

export default TableCoint;
