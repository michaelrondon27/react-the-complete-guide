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

            <ExpenseItem
                amount={ props.items[0].amount }
                date={ props.items[0].date }
                title={ props.items[0].title }
            />

            <ExpenseItem
                amount={ props.items[1].amount }
                date={ props.items[1].date }
                title={ props.items[1].title }
            />

            <ExpenseItem
                amount={ props.items[2].amount }
                date={ props.items[2].date }
                title={ props.items[2].title }
            />

            <ExpenseItem
                amount={ props.items[3].amount }
                date={ props.items[3].date }
                title={ props.items[3].title }
            />
        </Card>
    );
}

export default Expenses;
