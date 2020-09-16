import React from 'react';

import UpArrow from '../assets/images/icon-up.svg';
import DownArrow from '../assets/images/icon-down.svg';

const Stats = ({ todayStatsType, description }) => {
  return (
    <div className="">
      <div
        className={
          todayStatsType === 'increase'
            ? 'card__stats card__stats-up'
            : 'card__stats card__stats-down'
        }
      >
        <img src={todayStatsType === 'increase' ? UpArrow : DownArrow} alt="" />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Stats;
