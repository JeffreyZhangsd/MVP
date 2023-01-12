import React, { useState, useEffect, Suspense } from 'react';
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
  const [view, setView] = useState({ name: 'Learn', viewProps: {} });

  const changeView = (name, someProps = {}) => {
    return (moreProps = {}) => {
      console.log('Changing view to: ' + name);
      setView({ name, viewProps: { ...someProps, ...moreProps } });
    };
  };

  const renderView = () => {
    switch (view.name) {
      case 'Login':
        return <Login changeView={changeView('Main')} />;
      case 'Main':
        return <Main changeView={changeView('Learn')} />;
      case 'Learn':
        return <Learn changeView={changeView('Main')} />;
      case 'Basics':
        return <Basics changeView={changeView('Learn')} />;
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
  return (
    <>
      <header className="primary-header container group">
        <nav>
          <h1 id="home" onClick={changeView('Main')}>
            {' '}
            Musico{' '}
          </h1>
          <ul>
            <li>Instrument: </li>
            <li>Score: </li>
            <li>User</li>
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
