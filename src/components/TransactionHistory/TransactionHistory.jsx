import PropTypes, { shape } from 'prop-types'
import style from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => (
    <table className={style.transactionHistory}>
  <thead>
    <tr className={style.tr}>
      <th className={style.th}>Type</th>
      <th className={style.th}>Amount</th>
      <th className={style.th}>Currency</th>
    </tr>
  </thead>

    <tbody>
      
      {items.map(({ id, type, amount, currency }) => (
        <tr key={id}> 
      <td className={style.td}>{type}</td>
      <td className={style.td}>{amount}</td>
      <td className={style.td}>{currency}</td>
    </tr>
      )
        )}
      
   </tbody>
</table>
)

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }))
}

export default TransactionHistory
