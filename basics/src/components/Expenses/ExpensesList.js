import React from 'react';

// CSS
import './ExpensesList.css';

// JSX
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
    if ( props.items.length === 0 ) {
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }

    return <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem 
                amount={ expense.amount }
                date={ expense.date }
                key={ expense.id }
                title={ expense.title }
            />
        ))}
    </ul>
};

export default ExpensesList;
