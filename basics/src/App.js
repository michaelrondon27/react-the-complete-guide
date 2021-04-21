import React, { useState } from 'react';

// JSX
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const DUMMY_EXPENSES = [
  {
    amount: 94.12,
    date: new Date(2020, 7, 14),
    id: 'e1',
    title: 'Toilet Paper'
  },
  { 
    amount: 799.49, 
    date: new Date(2021, 2, 12),
    id: 'e2',
    title: 'New TV'
  },
  {
    amount: 294.67,
    date: new Date(2021, 2, 28),
    id: 'e3',
    title: 'Car Insurance'
  },
  {
    amount: 450,
    date: new Date(2021, 5, 12),
    id: 'e4',
    title: 'New Desk (Wooden)'
  },
];

function App() {
  const [state, setState] = useState({
    expenses: DUMMY_EXPENSES
  });

  const addExpenseHandler = expense => {
    setState(prevState => ({
      expenses: [
        expense,
        ...prevState.expenses
      ]
    }));
  };

  return (
    <div>
      <NewExpense 
        onAddExpense={ addExpenseHandler }
      />

      <Expenses items={ state.expenses }/>
    </div>
  );
}

export default App;
