import React, { useState, Fragment } from 'react';

// JSX
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler = (uName, uAge) => {
    setUsersList( (prevUsersList) => {
      return [
        ...prevUsersList,
        {
          age: uAge,
          id: Math.random().toString(),
          name: uName
        }
      ];
    });
  };

  return (
    <Fragment>
      <AddUser onAddUser={ addUserHandler }/>

      <UsersList users={ usersList }/>
    </Fragment>
  );
}

export default App;
