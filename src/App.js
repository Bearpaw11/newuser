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
    <React.Fragment>
      <NewUserInput onAddUser={addUserHandler}/>
      <UsersList users={userArray}/>
    </React.Fragment>
  );
}

export default App;
