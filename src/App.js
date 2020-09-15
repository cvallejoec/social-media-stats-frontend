import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import Toggle from './components/Toggle.jsx';
import BigCard from './components/BigCard.jsx';
import SmallCard from './components/SmallCard.jsx';

export const SocialData = createContext();

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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
          data: result.data,
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
      <div
        className={
          isDarkMode ? appClass + 'is-dark-mode' : appClass + 'is-light-mode'
        }
      >
        {/* <div
        className="ais-dark-mode"
      > */}
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
        <div>
          <BigCard />
          <BigCard />
          <BigCard />
        </div>
        <div>
          <h2>Overview - Today</h2>
          <div>
            <SmallCard />
            <SmallCard />
            <SmallCard />
          </div>
        </div>
      </div>
    </SocialData.Provider>
  );
}

export default App;
