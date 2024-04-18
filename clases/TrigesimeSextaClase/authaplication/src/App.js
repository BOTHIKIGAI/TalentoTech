import logo from './logo.svg';
import './App.css';
import LoginButton from './loguearse';
import LogoutButton from './logout';
import Profile from './perfil';

function App() {
  return (
    <div className="App">
      <LoginButton/>
      <LogoutButton/>
      <Profile/>
    </div>
  );
}

export default App;
