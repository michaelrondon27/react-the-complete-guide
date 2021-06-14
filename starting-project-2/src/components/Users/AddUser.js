import React, { useState } from 'react';

// CSS
import classes from './AddUser.module.css'; 

// JSX
import Button from './../UI/Button';
import Card from './../UI/Card';
import ErrorModal from './../UI/ErrorModal';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');
    const [error, setError] = useState();

    const addUserHandler = (event) => {
        event.preventDefault();

        if ( enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
            setError({
                message: 'Please enter a valid name and age (non-empty values).',
                title: 'Invalid input'
            })
            return;
        }

        if ( +enteredAge < 1 ) {
            setError({
                message: 'Please enter a valid age (> 0).',
                title: 'Invalid age'
            })
            return;
        }

        props.onAddUser(enteredUsername, enteredAge);

        setEnteredUsername('');
        setEnteredAge('')
    };

    const ageChangeHandler = (event) => {
        setEnteredAge( event.target.value );
    };
    
    const errorHandler = () => {
        setError(null);
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername( event.target.value );
    };

    return (
        <div>
            {error && 
                <ErrorModal 
                    message={ error.message }
                    onConfirm={ errorHandler } 
                    title={ error.title } 
                />
            }
            
            <Card className={ classes.input }>
                <form onSubmit={ addUserHandler }>
                    <label htmlFor="username">Username</label>
                    <input 
                        id="username" 
                        onChange={ usernameChangeHandler }
                        type="text"
                        value={ enteredUsername }
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input 
                        id="age" 
                        onChange={ ageChangeHandler }
                        type="number" 
                        value={ enteredAge }
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
