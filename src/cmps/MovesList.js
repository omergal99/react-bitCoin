import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class MovesList extends Component {
    editClicked = (ev, move) => {
        ev.preventDefault()
        this.props.history.push(`/contact/${move.toId}`)
    }
    render() {
        const movesList =
            this.props.moves.map((move, idx) => (
                <li onClick={(ev) => this.editClicked(ev, move)} key={idx}>
                    <div className="names-move">
                        <label>{move.fromUser}</label>
                        <label>&nbsp;-->&nbsp;</label>
                        <label>{move.to}</label>
                    </div>
                    <div className="coins-move">
                        <label>${move.amount}</label>
                        <label>&nbsp;|&nbsp;</label>
                        <label>₿{(move.amount * 0.00282302458854417).toFixed(4)}</label>
                    </div>
                    <div className="date-move">
                        <label>{move.at}</label>
                    </div>
                </li>
            ));
        return (
            <div className="moves-list">
                <h3>{this.props.title}</h3>
                <ul>{movesList}</ul>
            </div>
        )
    }
}

export default withRouter(MovesList)
