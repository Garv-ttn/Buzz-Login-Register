import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import {useSelector} from 'react-redux';
import Home from './Components/Home/Home';

function App() {
  const state = useSelector(state => state.UserReducer)
  return (
    <div className='main'>
      <header>

        <Router>
          
          <Switch>            
            <Route path='/' exact>
              {state.user ? <Home /> : <Login/>}
            </Route>

            <Route path='/register'>
              <Register />
            </Route>          
          </Switch>
        </Router>
      
      </header>
    </div>
  );
}

export default App;
