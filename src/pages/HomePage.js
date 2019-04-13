import React, { Component } from 'react';

import MovesList from '../cmps/MovesList';

import UserService from '../services/UserService';
import BitcoinService from '../services/BitcoinService';

export default class HomePage extends Component {
    state = {
        user: null,
        bitcoinRate: null,
        threeMoves: []
    }
    async componentDidMount() { // on load
        this.setState({
            user: await UserService.getUser(),
            bitcoinRate: await BitcoinService.getRate(100),
            threeMoves: await UserService.getThreeMoves()
        })
    }
    render() {
        return (
            <section>
                <h1>Home Page</h1>
                {this.state.user && <div>
                    {this.state.user.name}
                </div>}
                {this.state.bitcoinRate && <div>
                    {this.state.bitcoinRate}
                </div>}

                <MovesList moves={this.state.threeMoves}
                title={`Three Recent Transactions In The World`} />
            </section>
        )
    }
}