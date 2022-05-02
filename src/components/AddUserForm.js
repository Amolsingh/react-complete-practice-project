import React, { useState } from "react";

const AddUserForm = (props) => {

    const [username, setUserName] = useState("");
    const [age, setAge] = useState("");

    const usernameHandler = (event) => {
        console.log(event.target.value);
        setUserName(event.target.value);
    };

    const ageHandler = (event) => {
        console.log(event.target.value);
        setAge(event.target.value);
    }

    const addUserHandler = (event) => {
        console.log("inside add user Handler");

        event.preventDefault();
        if (username.trim().length === 0 || age.trim().length === 0) {
            return;
        }

        if(age < 1) {
            return;
        }
        props.onAdd(username, age);
        setUserName('');
        setAge('');
    };

    return (
        <form onSubmit={addUserHandler}>
            <label>Username</label>
            <input type="text" id="username" value={username} onChange={usernameHandler}></input>

            <label>Age(Years)</label>
            <input type="text" id="age" value={age} onChange={ageHandler}></input>

            <button type='submit'>Add User</button>
        </form>
    );
};

export default AddUserForm;