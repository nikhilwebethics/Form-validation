import React from "react";
import Card from "../UI/Card";
import classes from './UsersList.module.css';

const UserList = (props)=>{
    return(
      <Card className={classes.users}>
      <h1>New Added User:</h1>
      <ul>
       {props.users.map((user)=> (
        <li key={user.id}>
            <span><span><b>{user.name}</b></span> Is {user.age} Years Old</span>
        </li>
       ))}
      </ul>
      </Card>
    );
}
export default UserList;