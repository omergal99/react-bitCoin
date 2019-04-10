import React, { Component } from 'react';

import UserService from '../services/UserService';
import BitcoinService from '../services/BitcoinService';

export default class HomePage extends Component {
    state = {
        user: null,
        bitcoinRate: null,
    }
    async componentDidMount() { // on load
        this.setState({
            user: await UserService.getUser(),
            bitcoinRate: await BitcoinService.getRate(100),
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
            </section>
        )
    }
}