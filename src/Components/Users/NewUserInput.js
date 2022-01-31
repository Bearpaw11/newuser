import React, {useState} from 'react';
import Card from "../UI/Card";
import classes from "./NewUserInput.module.css";
import Button from "../UI/Button";


const NewUserInput = (props) => {

const [enteredUserName, setEnteredUserName] = useState('');
const [enteredUserAge, setEnteredUserAge] = useState('');

const formHandler = event => {
  event.preventDefault();
  console.log(enteredUserAge,enteredUserName)
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
        <input id="username" type="text" onChange={userNameChangeHandler} />
        <label htmlFor="age">User Age (Years)</label>
        <input id="age" type="number" onChange={userAgeChangeHandler} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default NewUserInput;