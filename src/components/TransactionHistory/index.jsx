import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  //   console.log(items);
  return (
    <div className={css.transactionCard}>
      <table className={css.transactionHistory}>
        <thead className={css.row}>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          {items.map(el => (
            <tr className={css.table} key={el.id}>
              <td className={css.type}>{el.type}</td>
              <td className={css.amount}>{el.amount}</td>
              <td className={css.currency}>{el.currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// FriendList.propTypes = {
//   friends: PropTypes.array,
// };

// FriendListItem.propTypes = {
//   avatar: PropTypes.string,
//   name: PropTypes.string,
//   isOnline: PropTypes.bool,
// };
