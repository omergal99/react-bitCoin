import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ContactPreview extends Component {
    selectcontact = (contact) => {
        console.log('Selecting contact', this, contact);
    }
    render() {
        return (
            <li onClick={() => this.selectcontact(this.props.contact)}>
                <img height="40" src="https://res.cloudinary.com/dwlinsb9c/image/upload/v1554719488/rzwlwcxenvujyo2gzbju.png" alt="" />
                {this.props.contact.name}
            </li>
        )
    }
}

ContactPreview.propTypes = {
    contact: PropTypes.object
}


