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
        console.log(enteredUsername, enteredAge);
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
                />

                <label htmlFor="age">Age (Years)</label>
                <input 
                    id="age" 
                    onChange={ ageChangeHandler }
                    type="number" 
                />

                <Button type="submit">Add User</Button>
            </form>
        </Card>
    );
};

export default AddUser;
