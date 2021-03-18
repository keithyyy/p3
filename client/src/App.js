import React from 'react';
import {HashRouter as Router , Route, Switch} from 'react-router-dom'
import './App.css';
import Homepage from './pages/Homepage/homepage';
import Login from './pages/Login/login';
import NoMatch from './pages/NoMatch/NoMatch';





function App() {
  return (
        <Router>
        <Switch>        
        <Route exact path="/" component={Homepage} />
        <Route exact path="/login" component={Login} />
        <Route exact path='*' component={NoMatch}/>

        </Switch>
      </Router>
        
      
  );
}

export default App;