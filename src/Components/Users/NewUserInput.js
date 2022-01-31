const NewUserInput = () => {
  return (
    <form>
      <label>Username:</label>
      <input type="text" name="name"/>
      <label>User Age:</label>
      <input type="number" name="name" />
      <button type="submit" value="Submit">Add User</button>
    </form>
  )
}

export default NewUserInput;