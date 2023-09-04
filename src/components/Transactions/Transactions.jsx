import PropTypes from 'prop-types';
import css from './Transactions.module.css';

export const Transactions = ({ items }) => {
  return (
    <table className={css.transactions}>
      <thead className={css.header}>
        <tr className={css.headerTitle}>
          <th className={css.headerData}>Type</th>
          <th className={css.headerData}>Amount</th>
          <th className={css.headerData}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={css.tableTitle} key={id}>
              <td className={css.tableType}>{type}</td>
              <td className={css.tableAmount}>{amount}</td>
              <td className={css.tableCurrency}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
Transactions.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
