import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import Loading from './components/Loading.jsx';
import Toggle from './components/Toggle.jsx';
import Dashboard from './components/Dashboard.jsx';
import Overview from './components/Overview.jsx';

export const SocialData = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const [state, setState] = useState({
    loading: true,
    data: {},
    error: '',
  });

  useEffect(() => {
    axios
      .get('https://social-media-stats-backend.cvallejoec.vercel.app')
      .then((result) => {
        setState({
          loading: false,
          data: result.data.data,
          error: '',
        });
      })
      .catch((err) => {
        setState({
          loading: false,
          data: {},
          error: err,
        });
      });
  }, []);

  let appClass = 'App ';

  return (
    <SocialData.Provider value={state}>
      {state.loading ? (
        <Loading />
      ) : (
        <div
          className={
            isDarkMode ? appClass + 'is-dark-mode' : appClass + 'is-light-mode'
          }
        >
          <header className="header">
            <div className="wrapper">
              <div className="header__title-container">
                <h1 className="header__title">Social Media Dashboard</h1>
                <p className="header__description">
                  Total Followers: <span>23.004</span>
                </p>
                {/* <hr className="header__divisor" /> */}
              </div>
              <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>
          </header>
          <section className="container">
            <div className="wrapper">
              <Dashboard />
              <div className="overview">
                <h2 className="overview__title">Overview - Today</h2>
                <Overview />
              </div>
            </div>
          </section>
        </div>
      )}
    </SocialData.Provider>
  );
}

export default App;
