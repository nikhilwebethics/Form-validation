import { useState } from 'react/cjs/react.development';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList';

function App() {

  const[userList,setUserList]=useState([]);
  const userHandler =(userName,userAge)=>{
    setUserList((prevUserlist)=>{
         return [...prevUserlist,{name:userName,age:userAge,id:Math.random().toString()}]
    })
  }
  return (
    <div>
      <h1 className='App'>USER LIST :</h1>
      <AddUser NewUser={userHandler}/>
      <UserList users={userList}/>
    </div>
  );
}

export default App;
