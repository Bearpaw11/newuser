import React, {useState} from 'react';
import Card from "../UI/Card";
import classes from "./NewUserInput.module.css";
import Button from "../UI/Button";



const NewUserInput = (props) => {

const [enteredUserName, setEnteredUserName] = useState('');
const [enteredUserAge, setEnteredUserAge] = useState('');

const formHandler = event => {
  event.preventDefault();
  if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
    console.log('hoping')
    return; 
  }
  if (+enteredUserAge < 1) {
    console.log('hoping')
    return;
  }
  props.onAddUser(enteredUserName,enteredUserAge)
  setEnteredUserName("");
  setEnteredUserAge("");
  

}

const userNameChangeHandler = event =>{
  setEnteredUserName(event.target.value);
}

const userAgeChangeHandler = event =>{
  setEnteredUserAge(event.target.value);
}


  return (
    <Card className={classes.input}>
      <form onSubmit={formHandler}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
        <label htmlFor="age">User Age (Years)</label>
        <input id="age" type="number" value={enteredUserAge} onChange={userAgeChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default NewUserInput;