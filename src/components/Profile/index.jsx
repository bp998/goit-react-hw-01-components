import css from './Profile.module.css';
import PropTypes from 'prop-types';

export const Profile = props => {
  const { username, tag, stats, location, avatar } = props;
  console.log(username);

  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt={username} height="200px" />
        <p className={css.name}>{username}</p>
        <p className={css.subtext}>@{tag}</p>
        <p className={css.subtext}>{location}</p>
        <ul className={css.stats}>
          <li className={css.social}>
            <span className={css.statName}>Followers</span>
            <span className={css.statValue}>{stats.followers}</span>
          </li>
          <li className={css.social}>
            <span className={css.statName}>Views</span>
            <span className={css.statValue}>{stats.views}</span>
          </li>
          <li className={css.social}>
            <span className={css.statName}>Likes</span>
            <span className={css.statValue}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
