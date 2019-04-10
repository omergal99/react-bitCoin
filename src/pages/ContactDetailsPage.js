import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ContactService from '../services/ContactService';

export default class ContactDetailsPage extends Component {
    state = {
        contact: null,
    }
    // async componentDidMount() {
    //     this.setState({ contact: await ContactService.getContactById('5a56640269f443a5d64b32ca') })
    // }
    componentDidMount() {
        ContactService.getContactById('5a56640269f443a5d64b32ca')
            .then(res => this.setState({ contact: res }))
    }
    render() {
        return (
            <div>
                <h4>Contact Details Page</h4>
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

// ContactDetailsPage.propTypes = {
//     contact: PropTypes.object
// }


