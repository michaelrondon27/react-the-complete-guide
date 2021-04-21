import React, { useState } from 'react';

// CSS
import './Expenses.css';

// JSX
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

function Expenses( props ) {
    const [state, setState] = useState({
        filteredYear: '2021'
    });

    const filterChangeHandler = (selectdYear) => {
        setState({
            filteredYear: selectdYear
        });
    };

    const filteredExpenses = props.items.filter( expense => {
        return expense.date.getFullYear().toString() === state.filteredYear;
    });

    let expensesContent = <p>No expenses found.</p>;

    if ( filteredExpenses.length > 0 ) {
        expensesContent = filteredExpenses.map((expense) => (
            <ExpenseItem 
                amount={ expense.amount }
                date={ expense.date }
                key={ expense.id }
                title={ expense.title }
            />
        ));
    }

    return (
        <Card className="expenses">
            <ExpensesFilter 
                onChangeFilter={ filterChangeHandler }
                selected={ state.filteredYear }
            />

            { expensesContent }
        </Card>
    );
}

export default Expenses;
