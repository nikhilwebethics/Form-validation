import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';

const AddUser = (props) =>{

    const[enteredUserName,setEnteredUserName]=useState();
    const[enteredAge,setEnteredAge]=useState();
    const[error,setError]=useState();

        const addUserHandler = (event)=>{
            event.preventDefault(); 
            if(enteredUserName.trim().length===0 ){
                setError({
                    title:"Error Occur",
                    message:"Entered Username"
                })
                return;
            }
            if(enteredAge.trim().length===0 ){
                setError({
                    title:"Error Occur",
                    message:"Entered age"
                })
                return;
            }
            if(enteredAge<1){
                setError({
                    title:"Error Occur",
                    message:"enter age greater 0"
                })
                return;
            }
            props.NewUser(enteredUserName,enteredAge);
            // console.log(enteredUserName,enteredAge);
            setEnteredUserName('');
            setEnteredAge('');
        }
        const usernameChangeHandler = (event)=>{
            setEnteredUserName(event.target.value); 
          
        }
        const ageChangeHandler = (event)=>{
            setEnteredAge(event.target.value); 
            
        }
        const errorHandler = ()=>{
            setError(null);
        }

    return(
       <>
        {error && <ErrorModal title={error.title}  message={error.message} cancelModel={errorHandler}/>}
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" 
                onChange={usernameChangeHandler}
                value={enteredUserName}
                />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"
                onChange={ageChangeHandler}
                value={enteredAge}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </>
    );

}
export default AddUser;