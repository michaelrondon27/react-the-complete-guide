import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = () => {
    const [userInput, setUserInput] = useState({
        enteredAmount: '',
        enteredDate: '',
        enteredTitle: ''
    });
    
    
    const amountChangeHandler = (event) => {
        setUserInput( (prevState) => {
            return {
                ...prevState,
                enteredAmount: event.target.value
            };
        });
    };
    
    const dateChangeHandler = (event) => {
        setUserInput( (prevState) => {
            return {
                ...prevState,
                enteredDate: event.target.value
            };
        });
    };

    const titleChangeHandler = (event) => {
        setUserInput( (prevState) => {
            return {
                ...prevState,
                enteredTitle: event.target.value
            };
        });
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>

                    <input 
                        onChange={ titleChangeHandler } 
                        type="text" 
                    />
                </div>

                <div className="new-expense__control">
                    <label>Amount</label>

                    <input 
                        min="0.01" 
                        onChange={ amountChangeHandler } 
                        step="0.01" 
                        type="number" 
                    />
                </div>

                <div className="new-expense__control">
                    <label>Date</label>

                    <input 
                        max="2022-12-31"
                        min="2019.01-01" 
                        onChange={ dateChangeHandler } 
                        type="date" 
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
