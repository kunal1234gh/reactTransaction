import React, { useState, useEffect } from 'react';
import Customer from './components/Customer';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const URL = 'https://demo9446702.mockable.io/v1/transactions';
  const LoadText = 'Loading Data...';
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(URL);
      const data = await response.json();
      const processedData = data.map(transaction => {
        const points = (transaction.amount > 100 ? 2 * (transaction.amount - 100) : 0) +
          (transaction.amount > 50 ? 1 * 50 : 0);
        return { ...transaction, points };
      });
      setTransactions(processedData);
    }
    fetchData();
  }, []);

  return (
    <div>
      {transactions.length ? <Customer transactions={transactions} /> : <div>{LoadText}</div>}
    </div>
  );
}

export default App;
