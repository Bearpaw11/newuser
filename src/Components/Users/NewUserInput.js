import Card from "../UI/Card"
import classes from "./NewUserInput.module.css"
import Button from "../UI/Button"

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
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  )
}

export default NewUserInput;