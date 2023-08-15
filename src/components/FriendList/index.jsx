import css from './FriendList.module.css';
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => (
  <div className={css.friendsListCard}>
    <ul className={css.friendList}>
      {friends.map(el => (
        <FriendListItem
          key={el.id}
          name={el.name}
          isOnline={el.isOnline}
          avatar={el.avatar}
        />
      ))}
    </ul>
  </div>
);

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={css.item}>
    <span
      className={`${css.itemStatus} ${isOnline ? css.online : css.offline}`}
    ></span>
    <div className={css.wrapper}>
      <img className={css.avatar} src={avatar} alt="User avatar" width="75" />
      <p className={css.name}>{name}</p>
    </div>
  </li>
);

FriendList.propTypes = {
  friends: PropTypes.array,
};

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
