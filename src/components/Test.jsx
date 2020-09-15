import React, { useContext } from 'react';

import { SocialData } from '../App';

const Test = () => {
  const state = useContext(SocialData);

  return (
    <div>
      {state.loading ? (
        <h2>Loading</h2>
      ) : (
        <h1>{state.data.data.facebook.username}</h1>
      )}
    </div>
  );
};

export default Test;
