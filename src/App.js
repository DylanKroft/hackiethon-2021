import './App.css';
import LogoutButton from './components/LogoutButton'
import Home from './components/Home'
import LoginButton from './components/LoginButton';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const {isAuthenticated} = useAuth0();


   if (isAuthenticated) {
     return(
      <div>
        <LogoutButton />
        <Home />
      </div>
     )
   }
   else{
     return(
     <div>
      <LoginButton />
     </div>
     )
   }
}

export default App;

