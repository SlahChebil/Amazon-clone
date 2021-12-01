import React, { useEffect } from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Chekout from './Chekout';
import Login from './Login';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { auth } from './firebase';
import { useStateValue } from './StateProvider';


function App() {
  const [state, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when te app component loads
    auth.onAuthStateChanged(authUser => {
      console.log('THE USER iS', authUser);
      if(authUser) {
        //the user logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out
        dispatch({
          type : 'SET_USER',
          user: null
        })
      }
    })

  }, [])
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/chekout">
            <Header />
            <Chekout />
          </Route>
          <Route path='/'>
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
