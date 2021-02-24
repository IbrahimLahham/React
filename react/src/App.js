import './App.css';
import React, { useState, useEffect } from "react";
//import Login from './pages/BookSearch/BookSearch';

import Login from './pages/loginRegisteration/loginRegisteration';
import Forgetpassword from './pages/loginRegisteration/forgetpassword';
import Resetpassword from './pages/resetPassword/resetPassword';
import Haver from './pages/haverKnesset/haverKnesset';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  return (
    <Router>
      <div>
        <nav className='all-tabs'>
          <ul>
            
           
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
        <Route path="/haverkneset">
            <Haver />
          </Route>
          <Route path="/resetpassword">

            <Resetpassword />
          </Route>
          <Route path="/forgetpassword">
            <Forgetpassword/>
          </Route>
          <Route path="/main">

            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




