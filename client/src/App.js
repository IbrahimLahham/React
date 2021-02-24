import './App.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import parliamentaryTool from './pages/parliamentaryTool';


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
            <li className='active-nav'>
              <Link to="/parliamentaryTool">Search</Link>
            </li>
            <li className='non-active-nav'>
               <Link to="/">Form-create</Link>
            </li>
            <li className='non-active-nav'>
               <Link to="/Forgetpassword">Forgetpassword</Link>
            </li>
            <li className='non-active-nav'>
               <Link to="/Resetpassword">Resetpassword</Link>
            </li>
            <li className='non-active-nav'>
               <Link to="/Haver">Haver</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/parliamentaryTool">
            <FormCreate />
          </Route>
          <Route path="/">

            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




