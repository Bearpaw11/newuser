import React, {useState} from 'react';
import Card from "../UI/Card";
import classes from "./NewUserInput.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal"


const NewUserInput = (props) => {

const [enteredUserName, setEnteredUserName] = useState('');
const [enteredUserAge, setEnteredUserAge] = useState('');
const [error, setError] = useState()

const formHandler = event => {
  event.preventDefault();
  if (enteredUserName.trim().length === 0 || enteredUserAge.trim().length === 0) {
    setError({
      title: "Invaild input",
      message: "Please enter a valid name and age ----> No Empty Values"
    })
    return; 
  }
  if (+enteredUserAge < 1) {
    setError({
      title: "Invaild age",
      message: "Please enter a valid age...No Negative ages"
    })
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

const errorHandler = () => {
  setError(null);
};

  return (
    <React.Fragment>
      {error && <ErrorModal title={error.title} message={error.message} clearError={errorHandler} />}
      <Card className={classes.input}>
        <form onSubmit={formHandler}>
          <label htmlFor="username">Username:</label>
          <input id="username" type="text" value={enteredUserName} onChange={userNameChangeHandler} />
          <label htmlFor="age">User Age (Years)</label>
          <input id="age" type="number" value={enteredUserAge} onChange={userAgeChangeHandler} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  )
}

export default NewUserInput;