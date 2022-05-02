import './App.css';
import React, { useState } from 'react';
import AddUserForm from './components/AddUserForm';
import UserList from './components/UserList';

function App() {


  const [dta, sdta] = useState([]);

  const addUserData = (username, age) => {
    //sdta(...dta, data);
    sdta((prevUserList) => {
      return [{name: username, age: age, id: Math.random().toString()}, ...prevUserList];
    });
    console.log(dta);
  };

  return (
    <div>
      <AddUserForm onAdd={addUserData}/>
      <UserList items={dta}/>
    </div>

  );
}

export default App;
