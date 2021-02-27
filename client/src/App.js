import './App.css';
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ParliamentaryTool from './pages/parliamentaryTool/parliamentaryTool';
import KenosKnesset from './pages/kenosKnesset/kenosKnesset';
import Normalquery from './pages/normalquery/normalquery';
import OneMinuteSpeech from './pages/oneMinuteSpeech/oneMinuteSpeech';
import TrackingBoard from './pages/trackingBoard/trackingBoard';


import Login from './pages/loginRegisteration/loginRegisteration';
import Forgetpassword from './pages/loginRegisteration/forgetpassword';
import Resetpassword from './pages/resetPassword/resetPassword';
import HaverKnesset from './pages/haverKnesset/haverKnesset';

import Header from './components/Header';
import Footer from './components/Footer';

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
                <Link to="/parliamentaryTool">parliamentaryTools</Link>
              </li>
              <li className='non-active-nav'>
                <Link to="/normalquery">normalquery</Link>
              </li>
              <li className='non-active-nav'>
                <Link to="/kenosKnesset">kenosKnesset</Link>
              </li>
              <li className='non-active-nav'>
                <Link to="/oneMinuteSpeech">oneMinuteSpeech</Link>
              </li>
              <li className='non-active-nav'>
                <Link to="/trackingBoard">trackingBoard</Link>
              </li>
              <li className='non-active-nav'>
                <Link to="/loginRegisteration">loginRegisteration</Link>
              </li>
              <li className='non-active-nav'>
                <Link to="/forgetpassword">forgetpassword</Link>
              </li>
              <li className='non-active-nav'>
                <Link to="/resetPassword">resetPassword</Link>
              </li>
              <li className='non-active-nav'>
                <Link to="/haverKnesset">haverKnesset</Link>
              </li>


            </ul>
          </nav>
          <Header />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/parliamentaryTool">
              <ParliamentaryTool />
            </Route>
            <Route path="/normalquery">
              <Normalquery />
            </Route>
            <Route path="/kenosKnesset">
              <KenosKnesset />
            </Route>
            <Route path="/oneMinuteSpeech">
              <OneMinuteSpeech />
            </Route>
            <Route path="/trackingBoard">
              <TrackingBoard />
            </Route>
            <Route path="/loginRegisteration">
              <Login />
            </Route>
            <Route path="/forgetpassword">
              <Forgetpassword />
            </Route>
            <Route path="/resetPassword">
              <Resetpassword />
            </Route>
            <Route path="/haverKnesset">
              <HaverKnesset />
            </Route>

          </Switch>
          <Footer />
        </div>
      </Router>
  );
}




