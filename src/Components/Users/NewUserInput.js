import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./NewUserInput.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const NewUserInput = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  // const [enteredUserName, setEnteredUserName] = useState("");
  // const [enteredUserAge, setEnteredUserAge] = useState("");
  const [error, setError] = useState();

  const formHandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    if (
      enteredName.trim().length === 0 ||
      enteredAge.trim().length === 0
    ) {
      setError({
        title: "Invaild input",
        message: "Please enter a valid name and age ----> No Empty Values",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invaild age",
        message: "Please enter a valid age...No Negative ages",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge);
    nameInputRef.current.value =""
    ageInputRef.current.value = ""
  };

  
  const errorHandler = () => {
    setError(null);
  };

  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          clearError={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={formHandler}>
          <label htmlFor="username"> Username: </label>
          <input
            id="username"
            type="text"
            ref={nameInputRef}
          />
          <label htmlFor="age"> User Age(Years) </label>
          <input
            id="age"
            type="number"
            ref={ageInputRef}
          />
          <Button type="submit"> Add User </Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default NewUserInput;
