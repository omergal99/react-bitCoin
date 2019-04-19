import React, { Component } from 'react';

export default class TransferFund extends Component {
  state = {
    moneyToSend: '',
    wrongMsg: ''
  }
  setCoins = (ev) => {
    this.setState({ moneyToSend: ev.target.value });
  }
  sendMoney = (ev) => {
    ev.preventDefault();
    var num = this.state.moneyToSend;
    if (num && !isNaN(num) && num > 0) {
      this.props.onTransferCoins(this.props.contact, this.state.moneyToSend);
    } else {
      if (num < 0) {
        this.setState({ wrongMsg: 'You can not stell money from a friend..' });
        setTimeout(() => this.setState({ wrongMsg: '' }), 2 * 1000);
      } else {
        this.setState({ wrongMsg: 'Must input numbers' });
        setTimeout(() => this.setState({ wrongMsg: '' }), 2 * 1000);
      }
    }
    // this.setState({ moneyToSend: '' });
  }
  render() {
    return (
      <section className="move-money">
        <p>Give Some Coins to {this.props.contact && this.props.contact.name}</p>
        {/* Amount &nbsp; */}
        <form >
          <input value={this.state.moneyToSend} onChange={this.setCoins} type="number" />
          <button onClick={this.sendMoney}>Send</button>
          <div>{this.state.wrongMsg}</div>
        </form>
      </section>
    )
  }
}

// const TransferFund = ({ contact }) => (
//     <section>
//         <h2>TransferFund cmp</h2>
//         <p>Give Some Coins to {contact && contact.name}</p>
//         Amount <input type="text" />
//         <button>Send</button>
//     </section>
// )

// export default TransferFund;
