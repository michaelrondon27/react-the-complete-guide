import React from 'react';

// CSS
import './NewExpense.css';

// JSX
import ExpenseForm from './ExpenseForm';

const NewExpense = () => {
    return (
        <div className="new-expense">
            <ExpenseForm />
        </div>
    );
};

export default NewExpense;
