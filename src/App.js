import React from 'react';
import expensesdata from './components/Expenses/ExpensesData';
import Expenses from './components/Expenses/Expenses';

const App = () => {

  return (
    <>
    <Expenses items={expensesdata}/>
    </>
  );
}
export default App;