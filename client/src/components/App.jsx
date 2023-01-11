import React, { useState, useEffect, Suspense } from 'react';
import Learn from './Learn';
import Login from './Login';
import Main from './Main';

const App = () => {
  // javascript functionality yes
  // I want to use views for Learn and switch between them
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
        return <Login changeView={changeView('Main')} />;
      case 'Main':
        return <Main changeView={changeView('Learn')} />;
      case 'Learn':
        return <Learn changeView={changeView('Main')} />;
    }
  };
  return (
    <>
      <header className="primary-header container group">
        <nav>
          <h1 id="home"> Musico </h1>
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
