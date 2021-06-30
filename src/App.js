
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import Home from './pages';
import SigninPage from './pages/Signin';
import Navbar from './components/Navbar';
function App() {
  return (
    <Router>
           <Navbar />
          <Switch>
            
              <Route extra path ="/signin" component = {SigninPage} />
              <Route extra  path ="/" component = {Home} />
          </Switch>
  </Router>
   
  );
}

export default App;
