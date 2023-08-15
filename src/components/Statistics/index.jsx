import css from './Statistics.module.css';
import PropTypes from 'prop-types';

export const Statistics = ({ title, stats }) => {
  title = 'Upload Stats';
  return (
    <div className={css.statsCard}>
      <h2 className={css.name}>{title}</h2>
      <ul className={css.stats}>
        {stats.map(el => (
          <li className={css.el} key={el.id}>
            <span className={css.label}>{el.label}</span>
            <span className={css.percentage}>{el.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array,
};
