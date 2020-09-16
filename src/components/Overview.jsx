import React, { useContext } from 'react';

import { SocialData } from '../App';
import SmallCard from './SmallCard.jsx';

const Overview = () => {
  const state = useContext(SocialData);

  var facebook = state.data.facebook;
  var twitter = state.data.twitter;
  var instagram = state.data.instagram;
  var youtube = state.data.youtube;

  return (
    <div className="grid">
      <SmallCard
        socialNetwork="facebook"
        title="Page Views"
        number={facebook.pageViews.number}
        stats={facebook.pageViews.stats}
        todayTypeStats={facebook.pageViews.typeStats}
      />
      <SmallCard
        socialNetwork="facebook"
        title="Likes"
        number={facebook.likes.number}
        stats={facebook.likes.stats}
        todayTypeStats={facebook.likes.typeStats}
      />
      <SmallCard
        socialNetwork="instagram"
        title="Likes"
        number={instagram.likes.number}
        stats={instagram.likes.stats}
        todayTypeStats={instagram.likes.typeStats}
      />
      <SmallCard
        socialNetwork="instagram"
        title="Profile Views"
        number={instagram.profileViews.number}
        stats={instagram.profileViews.stats}
        todayTypeStats={instagram.profileViews.typeStats}
      />
      <SmallCard
        socialNetwork="twitter"
        title="Retweets"
        number={twitter.retweets.number}
        stats={twitter.retweets.stats}
        todayTypeStats={twitter.retweets.typeStats}
      />
      <SmallCard
        socialNetwork="twitter"
        title="Likes"
        number={twitter.likes.number}
        stats={twitter.likes.stats}
        todayTypeStats={twitter.likes.typeStats}
      />

      <SmallCard
        socialNetwork="youtube"
        title="Likes"
        number={youtube.likes.number}
        stats={youtube.likes.stats}
        todayTypeStats={youtube.likes.typeStats}
      />
      <SmallCard
        socialNetwork="youtube"
        title="Total Views"
        number={youtube.totalViews.number}
        stats={youtube.totalViews.stats}
        todayTypeStats={youtube.totalViews.typeStats}
      />
    </div>
  );
};

export default Overview;
