import css from './Profile.module.css';
import user from './user.json';
import PropTypes from 'prop-types';

console.log(user);

export const Profile = () => {
  return (
    <div className={css.wrapper}>
      Profile test :<div className={css.card}>Karta</div>
    </div>
  );
};
