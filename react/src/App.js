import './App.css';
import React, { useState, useEffect } from "react";
<<<<<<< HEAD
import { useHistory } from "react-router-dom";
import parliamentaryTool from './pages/parliamentaryTool';

=======
//import Login from './pages/BookSearch/BookSearch';
>>>>>>> main

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
<<<<<<< HEAD
            <li className='active-nav'>
              <Link to="/parliamentaryTool">Search</Link>
            </li>
            <li className='non-active-nav'>
               <Link to="/">Form-create</Link>
            </li>
=======
            
           
>>>>>>> main
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
<<<<<<< HEAD
          <Route path="/parliamentaryTool">
            <FormCreate />
=======
        <Route path="/haverkneset">
            <Haver />
          </Route>
          <Route path="/resetpassword">

            <Resetpassword />
          </Route>
          <Route path="/forgetpassword">
            <Forgetpassword/>
>>>>>>> main
          </Route>
          <Route path="/">

            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




