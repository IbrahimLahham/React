import './App.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import parliamentaryTool from './pages/parliamentaryTool/parliamentaryTool';
import kenosKnesset from './pages/kenosKnesset/kenosKnesset';
import normalquery from './pages/normalquery/normalquery';
import oneMinuteSpeech from './pages/oneMinuteSpeech/oneMinuteSpeech';
import trackingBoard from './pages/trackingBoard/trackingBoard';


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
              <Link to="/main">Login</Link>
            </li>
            <li className='non-active-nav'>
              <Link to="/haverkneset">Haver</Link>
            </li>
            <li className='non-active-nav'>
              <Link to="/resetpassword">reset</Link>
            </li>
            <li className='non-active-nav'>
              <Link to="/forgetpassword">Forget</Link>
=======
            <li className='active-nav'>
              <Link to="/parliamentaryTool">parliamentaryTools</Link>
            </li>
            <li className='non-active-nav'>
<<<<<<< Updated upstream
               <Link to="/">Form-create</Link>
>>>>>>> main
=======
               <Link to="/normalquery">normalquery</Link>
>>>>>>> Stashed changes
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/parliamentaryTool">
            <FormCreate />
          </Route>
          <Route path="/normalquery">

            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




