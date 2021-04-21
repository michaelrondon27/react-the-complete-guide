import React, { useState } from 'react';

// CSS
import './Expenses.css';

// JSX
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';

function Expenses( props ) {
    const [state, setState] = useState({
        filteredYear: '2020'
    });

    const filteredChangeHandler = selectedYear => {
        setState( (prevState) => {
            return {
                ...prevState,
                filteredYear: selectedYear
            };
        });
    }

    return (
        <Card className="expenses">
            <ExpensesFilter 
                onChangeFilter={ filteredChangeHandler }
                selected={ state.filteredYear }
            />

            {props.items.map( expense => (
                <ExpenseItem 
                    amount={ expense.amount }
                    date={ expense.date }
                    title={ expense.title }
                />
            ))}
        </Card>
    );
}

export default Expenses;
