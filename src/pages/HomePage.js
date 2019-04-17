import React, { Component } from 'react';
import { observer } from 'mobx-react';

import MovesList from '../cmps/MovesList';

import BitcoinService from '../services/BitcoinService';

class HomePage extends Component {
  state = {
    bitcoinRate: null,
    threeMoves: [],
    btnText: `Button For Oded! ${this.props.store.todoStore.TodosCount}`
  }
  async componentDidMount() { // on load
    var currUser = this.props.store.userStore.getCurrUser;
    this.setState({
      bitcoinRate: await BitcoinService.getRate(currUser.coins),
      threeMoves: await this.props.store.userStore.getThreeMoves
    })
  }

  addItem = () => this.props.store.todoStore.addToto('lala')

  changeColor = (ev) => {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    var rgb = `rgb(${r}, ${g}, ${b})`
    var color = ((r + g + b) > 400) ? '#111' : '#eee';
    ev.target.style = `background-color: ${rgb}; color: ${color}`;
    if (this.props.store.todoStore.TodosCount > 10) {
      this.setState({ btnText: `${this.props.store.todoStore.TodosCount}` })
    }else{
      this.setState({ 
        btnText: `Button For Oded! ${this.props.store.todoStore.TodosCount}` })
    }
  }

  render() {
    var currUser = this.props.store.userStore.getCurrUser;
    return (
      <section className="home">
        <div>Hello {currUser.name}!</div>

        <div className="header flex wrap space-center">
          <div className="balance">
            <div>Your Current Balance:</div>
            <div className="order">Coins: ₿{currUser.coins}</div>
            {this.state.bitcoinRate &&
              <div className="order">USD: ${this.state.bitcoinRate}</div>
            }
          </div>

          <div className="rate">
            <div>BitCoin Rate:</div>
            <div className="order">Coins: ₿1</div>
            <div className="order">USD: $354.23</div>
          </div>

        </div>

        <MovesList moves={this.state.threeMoves}
          bitGate={this.state.bitcoinRate}
          title={`Three Recent Transactions In The World`}
        />

        <div className="btn-oded">
          <input type="button"
            // style={`background-color: ${this.state.btnColor}`}
            onClick={(ev) => { this.addItem(); this.changeColor(ev) }}
            value={this.state.btnText} />
        </div>
      </section>
    )
  }
}

export default observer(HomePage);
