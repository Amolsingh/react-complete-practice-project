import React from "react";

const UserList = (props) => {
    return (
        <ul className="expenses-list">
            {props.items.map((e) => (
                <li key={e.id}>{e.name}             {e.age}</li>
            ))
            }
        </ul> 
    );
};

export default UserList;