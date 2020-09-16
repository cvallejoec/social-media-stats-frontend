import React, { useContext } from 'react';

import { SocialData } from '../App';
import BigCard from './BigCard.jsx';

const Dashboard = () => {
  const state = useContext(SocialData);

  var facebook = state.data.facebook;
  var twitter = state.data.twitter;
  var instagram = state.data.instagram;
  var youtube = state.data.youtube;

  return (
    <div className="grid">
      <BigCard
        socialNetwork="facebook"
        username={facebook.username}
        followers={facebook.followers}
        todayStats={facebook.todayStats}
        todayStatsType={facebook.todayStatsType}
      />
      <BigCard
        socialNetwork="twitter"
        username={twitter.username}
        followers={twitter.followers}
        todayStats={twitter.todayStats}
        todayStatsType={twitter.todayStatsType}
      />
      <BigCard
        socialNetwork="instagram"
        username={instagram.username}
        followers={instagram.followers}
        todayStats={instagram.todayStats}
        todayStatsType={instagram.todayStatsType}
      />
      <BigCard
        socialNetwork="youtube"
        username={youtube.username}
        followers={youtube.subscribers}
        todayStats={youtube.todayStats}
        todayStatsType={youtube.todayStatsType}
      />
    </div>
  );
};

export default Dashboard;
