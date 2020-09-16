import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import Toggle from './components/Toggle.jsx';
import Dashboard from './components/Dashboard.jsx';
import BigCard from './components/BigCard.jsx';
import SmallCard from './components/SmallCard.jsx';

export const SocialData = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(
    () => window.matchMedia('(prefers-color-scheme: dark)').matches
  );
  // const [data, setData] = useState({});

  const [state, setState] = useState({
    loading: true,
    data: {},
    error: '',
  });

  useEffect(() => {
    axios
      .get('https://social-media-stats-backend.cvallejoec.vercel.app')
      .then((result) => {
        // setData(result.data);
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

  // var facebook = state.data.facebook;
  // var twitter = state.data.twitter;
  // var instagram = state.data.instagram;
  // var youtube = state.data.youtube;

  return (
    <SocialData.Provider value={state}>
      {state.loading ? (
        <p>Loading</p>
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
              </div>
              <Toggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>
          </header>
          <section className="container">
            <div className="wrapper">
              <Dashboard />
              <div>
                <h2>Overview - Today</h2>
                <div>
                  <SmallCard />
                  <SmallCard />
                  <SmallCard />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </SocialData.Provider>
  );
}

export default App;
