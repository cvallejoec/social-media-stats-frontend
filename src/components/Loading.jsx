import React from 'react';

import IconLoading from '../assets/images/loading.svg';

const Loading = () => {
  return (
    <div className="loading">
      <img src={IconLoading} alt="icon-loading" />
    </div>
  );
};

export default Loading;
