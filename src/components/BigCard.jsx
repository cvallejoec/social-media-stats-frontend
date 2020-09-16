import React from 'react';

import useRoundedValue from '../hooks/useRoundedValue';
import IconFacebook from '../assets/images/icon-facebook.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';
import IconInstagram from '../assets/images/icon-instagram.svg';
import IconYouTube from '../assets/images/icon-youtube.svg';
import Stats from './Stats.jsx';

const BigCard = ({
  socialNetwork,
  username,
  followers,
  todayStats,
  todayStatsType,
}) => {
  return (
    <div className="card">
      <div
        className={
          socialNetwork === 'facebook'
            ? 'card__line card__line-facebook'
            : socialNetwork === 'twitter'
            ? 'card__line card__line-twitter'
            : socialNetwork === 'instagram'
            ? 'card__line card__line-instagram'
            : socialNetwork === 'youtube'
            ? 'card__line card__line-youtube'
            : null
        }
      ></div>
      <div className="card__header">
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
        />
        <span>@{username}</span>
      </div>
      <div className="card__hero">
        <p className="card__hero-number">{useRoundedValue(followers, 0)}</p>
        <p className="card__hero-description">
          {socialNetwork === 'youtube' ? 'subscribers' : 'followers'}
        </p>
      </div>
      <Stats
        todayStatsType={todayStatsType}
        description={`${todayStats} Today`}
      />
    </div>
  );
};

export default BigCard;
