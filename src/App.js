import React, {useState} from 'react';
import NewUserInput from './Components/Users/NewUserInput';
import UsersList from './Components/Users/UsersList';


function App() {
 const [userArray, setUserArray] = useState([]);

 const addUserHandler = (uName, uAge) => {
   setUserArray((prevUserList) => {
    return [...prevUserList, {name: uName, age: uAge, id: Math.random().toString()}];
  });
 }

  return (
    <div >
      <NewUserInput onAddUser={addUserHandler}/>
      <UsersList users={userArray}/>
    </div>
  );
}

export default App;
