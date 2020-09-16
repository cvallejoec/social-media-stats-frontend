import React from 'react';

import IconFacebook from '../assets/images/icon-facebook.svg';
import IconTwitter from '../assets/images/icon-twitter.svg';
import IconInstagram from '../assets/images/icon-instagram.svg';
import IconYouTube from '../assets/images/icon-youtube.svg';
import UpArrow from '../assets/images/icon-up.svg';
import DownArrow from '../assets/images/icon-down.svg';

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
          alt="icon-facebook"
        />
        <span>@{username}</span>
      </div>
      <div className="card__hero">
        <p className="card__hero-number">{followers}</p>
        <p className="card__hero-description">
          {socialNetwork === 'youtube' ? 'subscribers' : 'followers'}
        </p>
      </div>
      <div
        className={
          todayStatsType === 'increase'
            ? 'card__stats card__stats-up'
            : 'card__stats card__stats-down'
        }
      >
        <img src={todayStatsType === 'increase' ? UpArrow : DownArrow} alt="" />
        <p>{todayStats} Today</p>
      </div>
    </div>
  );
};

export default BigCard;
