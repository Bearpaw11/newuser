import NewUserInput from './Components/Users/NewUserInput'
import UsersList from './Components/Users/UsersList';


function App() {
  return (
    <div >
      <NewUserInput />
      <UsersList users={[]}/>
    </div>
  );
}

export default App;
