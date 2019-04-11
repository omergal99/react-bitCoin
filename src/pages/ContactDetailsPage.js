import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';

import ContactService from '../services/ContactService';

class ContactDetailsPage extends Component {
    state = {
        contact: null,
    }
    async componentDidMount() {
        const id = this.props.match.params.id;
        this.setState({ contact: await ContactService.getContactById(id) })
    }
    // componentDidMount() {
    //     const id = this.props.match.params.id;
    //     ContactService.getContactById(id)
    //         .then(res => this.setState({ contact: res }))
    // }
    render() {
        return (
            <div>
                <h4>Contact Details Page</h4>

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

                <img height="40" src="https://res.cloudinary.com/dwlinsb9c/image/upload/v1554719488/rzwlwcxenvujyo2gzbju.png" alt="" />
                {this.state.contact &&
                    <div>
                        <div>{this.state.contact.name}</div>
                        <div>{this.state.contact.phone}</div>
                        <div>{this.state.contact.email}</div>
                    </div>
                }
            </div>
        )
    }
}

export default withRouter(ContactDetailsPage)

// ContactDetailsPage.propTypes = {
//     contact: PropTypes.object
// }


