import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        amount: '',
        date: '',
        title: ''
    });
    
    
    const amountChangeHandler = (event) => {
        setUserInput( (prevState) => {
            return {
                ...prevState,
                amount: event.target.value
            };
        });
    };
    
    const dateChangeHandler = (event) => {
        setUserInput( (prevState) => {
            return {
                ...prevState,
                date: event.target.value
            };
        });
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            ...userInput,
            date: new Date( userInput.date )
        };

        console.log(expenseData);

        setUserInput({
            amount: '',
            date: '',
            title: ''
        })
    }

    const titleChangeHandler = (event) => {
        setUserInput( (prevState) => {
            return {
                ...prevState,
                title: event.target.value
            };
        });
    };

    return (
        <form onSubmit={ submitHandler }>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>

                    <input 
                        onChange={ titleChangeHandler } 
                        type="text" 
                        value={ userInput.title }
                    />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>

                    <input 
                        min="0.01" 
                        onChange={ amountChangeHandler } 
                        step="0.01" 
                        type="number" 
                        value={ userInput.amount }
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>

                    <input 
                        max="2022-12-31"
                        min="2019.01-01" 
                        onChange={ dateChangeHandler } 
                        type="date" 
                        value={ userInput.date }
                    />
                </div>
            </div>

            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
};

export default ExpenseForm;
