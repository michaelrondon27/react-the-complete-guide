import React, { useState } from 'react';

// CSS
import classes from './AddUser.module.css'; 

// JSX
import Button from './../UI/Button';
import Card from './../UI/Card';

const AddUser = props => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState('');

    const addUserHandler = (event) => {
        event.preventDefault();

        if ( enteredUsername.trim().length === 0 || enteredAge.trim().length === 0 ) {
            return;
        }

        if ( +enteredAge < 1 ) {
            return;
        }

        setEnteredUsername('');
        setEnteredAge('')
    };

    const usernameChangeHandler = (event) => {
        setEnteredUsername( event.target.value );
    };

    const ageChangeHandler = (event) => {
        setEnteredAge( event.target.value );
    };

    return (
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
    );
};

export default AddUser;
