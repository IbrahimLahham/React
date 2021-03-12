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
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    console.log("checkConnection");
    fetch('/user/checkConnection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    }).then(r => r.json())
      .then(data => {
        console.log(data);
        setConnected(data.cookie);
      })
  }, []);

  function checkConnection() {
    fetch('/user/checkConnection', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify()
    }).then(r => r.json())
      .then(data => {
        // console.log(data);
        setConnected(data.cookie);
      })
  }

  return (
    <Router onChange={checkConnection}>
      <div>
        <nav className='all-tabs'>
          <ul>
            <li className='active-nav'>
              <Link onClick={checkConnection} to="/parliamentaryTool">parliamentaryTools</Link>
            </li>
            <li className='non-active-nav'>
              <Link onClick={checkConnection} to="/normalquery">normalquery</Link>
            </li>
            <li className='non-active-nav'>
              <Link onClick={checkConnection} to="/kenosKnesset">kenosKnesset</Link>
            </li>
            <li className='non-active-nav'>
              <Link onClick={checkConnection} to="/oneMinuteSpeech">oneMinuteSpeech</Link>
            </li>
            <li className='non-active-nav'>
              <Link onClick={checkConnection} to="/trackingBoard">trackingBoard</Link>
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
              <Link onClick={checkConnection} to="/haverKnesset">haverKnesset</Link>
            </li>


          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/parliamentaryTool">
            <Header show={true} connected={connected} pages={[{ text: "כלים פרלמנטריים", url: "parliamentaryTool" }]} />
            <ParliamentaryTool />
          </Route>
          <Route path="/normalquery">
            <Header show={true} connected={connected} pages={[{ text: "כלים פרלמנטריים", url: "parliamentaryTool" }, { text: "שיאלתה רגילה", url: "normalquery" }]} />
            <Normalquery />
          </Route>
          <Route path="/kenosKnesset">
            <Header show={true} connected={connected} pages={[{ text: "כלים פרלמנטריים", url: "parliamentaryTool" }, { text: "כינוס הכנסת בזמן הפגרה", url: "kenosKnesset" }]} />
            <KenosKnesset />
          </Route>
          <Route path="/oneMinuteSpeech">
            <Header show={true} connected={connected} pages={[{ text: "כלים פרלמנטריים", url: "parliamentaryTool" }, { text: "נאום בן דקה", url: "oneMinuteSpeech" }]} />
            <OneMinuteSpeech />
          </Route>
          <Route path="/trackingBoard">
            <Header show={true} connected={connected} pages={[{ text: "לוח מעקב", url: "trackingBoard" }]} />
            <TrackingBoard />
          </Route>
          <Route path="/loginRegisteration">
            <Header show={false} connected={false} pages={[{ text: "הרשמה והתחברות", url: "loginRegisteration" }]} />
            <Login />
          </Route>
          <Route path="/forgetpassword">
            <Header show={false} connected={false} pages={[{ text: "הרשמה והתחברות", url: "loginRegisteration" }, { text: "שכחתי סיסמה", url: "forgetpassword" }]} />
            <Forgetpassword />
          </Route>
          <Route path="/resetPassword">
            <Header show={false} connected={false} pages={[{ text: "הרשמה והתחברות", url: "loginRegisteration" }, { text: "שינוי סיסמה", url: "resetPassword" }]} />
            <Resetpassword />
          </Route>
          <Route path="/haverKnesset">
            <Header show={true} connected={connected} pages={[{ text: "מערכת ח״כ", url: "haverKnesset" }]} />
            <HaverKnesset />
          </Route>

        </Switch>

        <Footer />
      </div>
    </Router>
  );
}




