import React, { useState, useEffect, Suspense } from 'react';
import axios from 'axios';
import Learn from './Learn';
import Login from './Login';
import Main from './Main';
import Basics from './Learn/Basics';
import Keys from './Learn/Keys';
import Pitch from './Learn/Pitch';
import Play from './Learn/Play';
import Rhythm from './Learn/Rhythm';
import Scales from './Learn/Scales';

const App = () => {
  // views to switch what is rendered
  const [view, setView] = useState({ name: 'Login', viewProps: {} });

  const changeView = (name, someProps = {}) => {
    return (moreProps = {}) => {
      console.log('Changing view to: ' + name);
      setView({ name, viewProps: { ...someProps, ...moreProps } });
    };
  };

  const renderView = () => {
    switch (view.name) {
      case 'Login':
        return (
          <Login
            changeView={changeView('Main')}
            getUserInfo={(u) => getUserInfo(u)}
          />
        );
      case 'Main':
        return (
          <Main
            changeView={changeView('Learn')}
            getAllUsers={getAllUsers}
            leaderboard={leaderboard}
          />
        );
      case 'Learn':
        return <Learn changeView={(v) => changeView(v)} />;
      case 'Basics':
        return (
          <Basics
            changeView={changeView('Learn')}
            updateUserScore={(u) => updateUserScore(u)}
            user={user}
          />
        );
      case 'Keys':
        return <Keys changeView={changeView('Learn')} />;
      case 'Pitch':
        return <Pitch changeView={changeView('Learn')} />;
      case 'Play':
        return <Play changeView={changeView('Learn')} />;
      case 'Rhythm':
        return <Rhythm changeView={changeView('Learn')} />;
      case 'Scales':
        return <Scales changeView={changeView('Learn')} />;
    }
  };
  const [score, setScore] = useState(0);
  const [user, setUser] = useState('Login!');
  const [leaderboard, setLeaderboard] = useState([]);

  const getUserInfo = (u) => {
    axios
      .get(`/users/${u}`, {
        username: u,
      })
      .then((user) => {
        setScore(user.data.score);
        setUser(user.data.username);
      });
  };

  const getAllUsers = () => {
    axios.get('/users/').then((all) => setLeaderboard(all.data));
  };

  const updateUserScore = (u) => {
    axios
      .patch(`/users/${u}`, {
        username: u,
      })
      .then(() => {
        console.log('updated');
        getUserInfo(user);
      });
  };

  const logoutHandler = () => {
    axios
      .get('/logout')
      .then(async () => {
        console.log('logging out!');
        window.location.reload();
      })
      .catch((err) => console.log('error logging out: ', err));
  };
  // getUserInfo('test1');
  return (
    <>
      <header className="primary-header container group">
        <nav>
          <h1 id="home" onClick={changeView('Main')}>
            {' '}
            Triomusico{' '}
          </h1>
          <ul>
            <li>Score: {score} </li>
            <li style={{ fontWeight: 700 }}>{user}</li>
            <button onClick={() => logoutHandler()} className="logout">
              logout
            </button>
          </ul>
        </nav>
      </header>
      <main>
        <Suspense fallback={<p>Loading!</p>}>{renderView()}</Suspense>
      </main>
    </>
  );
};

export default App;
