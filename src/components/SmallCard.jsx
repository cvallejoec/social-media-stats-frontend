import React from 'react';

import useRoundedValue from '../hooks/useRoundedValue';
import IconFacebook from '../assets/images/icon-facebook.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';
import IconInstagram from '../assets/images/icon-instagram.svg';
import IconYouTube from '../assets/images/icon-youtube.svg';
import Stats from './Stats.jsx';

const SmallCard = ({ socialNetwork, title, number, stats, todayTypeStats }) => {
  return (
    <div className="small-card">
      <h3 className="small-card__title small-card__left">{title}</h3>
      <img
        src={
          socialNetwork === 'facebook'
            ? IconFacebook
            : socialNetwork === 'twitter'
            ? IconTwitter
            : socialNetwork === 'instagram'
            ? IconInstagram
            : socialNetwork === 'youtube'
            ? IconYouTube
            : null
        }
        alt="icon"
        className=""
      />
      <p className="small-card__number small-card__left small-card__bottom">
        {useRoundedValue(number)}
      </p>
      <div className="small-card__bottom">
        <Stats todayStatsType={todayTypeStats} description={`${stats}%`} />
      </div>
    </div>
  );
};

export default SmallCard;
