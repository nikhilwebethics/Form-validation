import React, { useState, useRef } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from './AddUser.module.css';

const AddUser = (props) =>{

    const inputName = useRef();
    const inputAge = useRef();


    const[error,setError]=useState();

        const addUserHandler = (event)=>{
            event.preventDefault();     
            const userName = inputName.current.value;
            const userAge = inputAge.current.value;


            if(userName.trim().length===0 ){
                setError({
                    title:"Error Occur",
                    message:"Entered Username"
                })
                return;
            }
            if(userAge.trim().length===0 ){
                setError({
                    title:"Error Occur",
                    message:"Entered age"
                })
                return;
            }
            if(userAge<1){
                setError({
                    title:"Error Occur",
                    message:"enter age greater 0"
                })
                return;
            }
            props.NewUser(userName,userAge);
            // console.log(enteredUserName,enteredAge);
            inputName.current.value ='';
            inputAge.current.value =''
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
                ref={inputName}
                />
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number"
                ref={inputAge}
                />
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    </>
    );

}
export default AddUser;