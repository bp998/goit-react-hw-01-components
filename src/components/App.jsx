import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import { Profile } from './Profile';
import { Statistics } from './Statistics';
import { FriendList } from './FriendList';

export const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title={data.title} stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
