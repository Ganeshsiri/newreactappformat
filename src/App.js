import React from 'react';
import expensesdata from './components/ExpensesData';
import Expenses from './components/Expenses';

function App() {

  return (
    <>
    <Expenses data={expensesdata}/>
    <h1>{expensesdata}</h1>
    </>
  );
}
export default App;