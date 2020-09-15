import React from 'react';

import IconFacebook from '../assets/images/icon-facebook.svg';

const BigCard = () => {
  return (
    <div>
      <div>
        <img src={IconFacebook} alt="icon-facebook" />
        <span>@nathanf</span>
      </div>
      <div>
        <p>1987</p>
        <p>followers</p>
      </div>
      <div>
        <span>12</span>
        <p>Today</p>
      </div>
    </div>
  );
};

export default BigCard;
