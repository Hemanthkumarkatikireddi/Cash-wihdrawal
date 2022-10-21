// Write your code here
import './index.css'

const CashWithdraw = props => {
  const {WithdrawAmount, deductMoney} = props
  const {value} = WithdrawAmount

  const buttonClick = () => {
    deductMoney(value)
  }
  return (
    <li className="button-container">
      <button type="button" className="button" onClick={buttonClick}>
        <h1>{value}</h1>
      </button>
    </li>
  )
}
export default CashWithdraw
