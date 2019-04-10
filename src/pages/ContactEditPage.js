import React, { Component } from 'react';
// import PropTypes from 'prop-types';

import ContactService from '../services/ContactService';

export default class ContactEditPage extends Component {
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
                <h4>Contact Edit Page</h4>
            </div>
        )
    }
}

// ContactEditPage.propTypes = {
//     contact: PropTypes.object
// }


