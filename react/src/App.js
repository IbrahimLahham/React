import './App.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import parliamentaryTool from './pages/parliamentaryTool';


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




