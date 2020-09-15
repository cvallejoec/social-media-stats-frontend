import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

import Test from './components/Test.jsx';

export const SocialData = createContext();

function App() {
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

  return (
    <SocialData.Provider value={state}>
      <div className="App">
        <h1>Mi primera app con Context</h1>
        <Test />
      </div>
    </SocialData.Provider>
  );
}

export default App;
