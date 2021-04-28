import React, { useState } from 'react';

// CSS
import './NewExpense.css';

// JSX
import ExpenseForm from './ExpenseForm';

const NewExpense = (props) => {
    const [state, setState] = useState({
        isEditing: false
    });

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };

        props.onAddExpense( expenseData );

        setState({
            isEditing: false
        });
    };

    const startEditingHandler = () => {
        setState({
            isEditing: true
        });
    };

    const stopEditingHandler = () => {
        setState({
            isEditing: false
        });
    };

    return (
        <div className="new-expense">
            {!state.isEditing && (
                <button
                    onClick={ startEditingHandler }
                >
                    Add New Expense
                </button>
            )}

            {state.isEditing && (
                <ExpenseForm 
                    onCancel={ stopEditingHandler }
                    onSaveExpenseData={ saveExpenseDataHandler }
                />
            )}
        </div>
    );
};

export default NewExpense;
