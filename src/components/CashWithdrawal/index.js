// Write your code here
import {Component} from 'react'

import CashWithdraw from '../DenominationItem'

import './index.css'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onDebut = value => {
    const {amount} = this.state

    if (amount >= value) {
      this.setState(previous => ({
        amount: previous.amount - value,
      }))
    }
  }

  render() {
    const {amount} = this.state

    const {denominationsList} = this.props
    return (
      <div className="main-container">
        <div className="content-container">
          <div className="card-container">
            <div className="account-box">
              <div className="account-holder">
                <div className="icon">S</div>
                <p className="name">Sarah Williams</p>
              </div>
              <div className="account-balance">
                <p className="balance-name">Your Balance</p>
                <p className="total-amount">{amount}</p>
              </div>
              <div className="desc">
                <p>In Rupees</p>
              </div>
            </div>
            <div className="withdraw-box">
              <div className="withdraw-box-description">
                <p className="withdraw-heading">Withdraw</p>
                <p className="withdraw-desc">CHOOSE SUM (IN RUPEES)</p>
              </div>
              <div className="withdraw-options-con">
                <ul className="withdraw-options">
                  {denominationsList.map(each => (
                    <CashWithdraw
                      WithdrawAmount={each}
                      key={each.id}
                      deductMoney={this.onDebut}
                    />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
