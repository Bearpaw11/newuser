import Card from "../UI/Card"
import classes from "./NewUserInput.module.css"

const NewUserInput = () => {

const formHandler = event => {
  event.preventDefault();
}

  return (
    <Card className={classes.input}>
      <form onSubmit={formHandler}>
        <label htmlFor="username">Username:</label>
        <input id="username" type="text" />
        <label htmlFor="age">User Age (Years)</label>
        <input id="age" type="number" />
        <button type="submit">Add New User</button>
      </form>
    </Card>
  )
}

export default NewUserInput;