import React, { Component } from 'react';

// import UserService from '../services/UserService';

export default class MovesList extends Component {
    componentDidMount() {
        
    }
    componentDidUpdate() {
        
    }
    render() {
        const movesList =
            this.props.moves.map((move, idx) => (
                <li key={idx} >
                    {move.to}
                    {move.at}----
                    {move.amount}
                </li>
            ));
        return (
            <section>
                <h2>{this.props.title}</h2>
                <ul>{movesList}</ul>
                {/* <ul>{this.props.moves}</ul> */}
                {/* {this.props.moves && this.props.moves} */}
            </section>
        )
    }
}