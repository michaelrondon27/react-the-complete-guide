import React, { useState } from 'react';

// CSS
import './Expenses.css';

// JSX
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

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

    return (
        <Card className="expenses">
            <ExpensesFilter 
                onChangeFilter={ filterChangeHandler }
                selected={ state.filteredYear }
            />

            <ExpensesList
                items={ filteredExpenses }
            />
        </Card>
    );
}

export default Expenses;
