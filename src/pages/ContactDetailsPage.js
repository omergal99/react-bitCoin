// BASIC
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// CMPS
import MovesList from '../cmps/MovesList';
import TransferFund from '../cmps/TransferFund';

// SERVISES
import ContactService from '../services/ContactService';
import UserService from '../services/UserService';

class ContactDetailsPage extends Component {
    state = {
        contact: null,
        moves: []
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ 
            contact: await ContactService.getContactById(id),
            moves: await UserService.getMovesByContactId(id)
        })
    }
    // componentDidMount() {
    //     const id = this.props.match.params.id;
    //     ContactService.getContactById(id)
    //         .then(res => this.setState({ contact: res }))
    // }
    addNewMove = (contact, amount) => {
        UserService.addMove(contact, amount)
        .then((newMove)=>{
            var updateMoves = this.state.moves;
            updateMoves.unshift(newMove);
            this.setState({
                moves: updateMoves
            })
        })
      }
    render() {
        var urlImg;
        if(this.state.contact){
            urlImg = `../${this.state.contact.img}`;
        }
        return (
            <div>
                <h3>Contact Details Page</h3>

                <button
                    onClick={(ev) => {
                        ev.preventDefault()
                        this.props.history.go(-1)
                    }}>BACK TO LAST PAGE
                </button>

                <button
                    onClick={(ev) => {
                        ev.preventDefault()
                        this.props.history.push(`/contact`)
                    }}>BACK TO LIST
                </button>

                {this.state.contact &&
                    <Link to={`/contact/edit/${this.state.contact._id}`}>
                        <button>EDIT</button>
                    </Link>
                }

                <img height="70" src={urlImg} alt="" />
                
                {this.state.contact &&
                    <div>
                        <div>{this.state.contact.name}</div>
                        <div>{this.state.contact.phone}</div>
                        <div>{this.state.contact.email}</div>
                    </div>
                }

                <TransferFund contact={this.state.contact} onTransferCoins={this.addNewMove} />
                <MovesList moves={this.state.moves} 
                title={`${this.state.contact && this.state.contact.name} - Transactions`} />

            </div>
        )
    }
}

export default withRouter(ContactDetailsPage)