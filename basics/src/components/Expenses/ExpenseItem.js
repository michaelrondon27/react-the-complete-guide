import React, { useState } from 'react';

// CSS
import './ExpenseItem.css';

// JSX
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem( props ) {
    const [title, setTitle] = useState(props.title);

    const clickedHandler = () => {
        setTitle('Updated!');
    };

    return (
        <Card className="expense-item">
            <ExpenseDate date={ props.date }/>

            <div className="expense-item__description">
                <h2>{ title }</h2>

                <div className="expense-item__price">${ props.amount }</div>
            </div>

            <button
                onClick={ clickedHandler }
            >
                Change Title
            </button>
        </Card>
    );
}

export default ExpenseItem;
