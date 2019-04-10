import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ContactPreview from '../cmps/ContactPreview';

export default class ContactList extends Component {
    render() {
        const contactsList =
            this.props.contacts.map((contact, idx) => (
                <ContactPreview key={idx} contact={contact} />
            ));
        return (
            <section>
                <h3>Contact List</h3>
                <ul>{contactsList}</ul>
            </section>
        )
    }
}

ContactList.propTypes = {
    // contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
    contacts: PropTypes.arrayOf(PropTypes.object),
}
ContactList.defaultProps = {
    contacts: [],
}



