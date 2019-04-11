import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import ContactPreview from '../cmps/ContactPreview';

export default class ContactList extends Component {
    emitRemoveContact = (id) => {
        console.log('send to remove - Contact Page', id);
        this.props.onRemove(id)
    }
    render() {
        const contactsList =
            this.props.contacts.map((contact) => (
                <ContactPreview contact={contact} onEmitRemove={this.emitRemoveContact} key={contact._id} />
            ));
        return (
            <section>
                <h3>Contact List</h3>
                <Link to={`/contact/edit`} >
                    <button>Add new contact</button>
                </Link>
                <ul>{contactsList}</ul>
                {/* <ul>
                    {this.props.contacts.map((contact) => (
                        <ContactPreview contact={contact} key={contact._id} />
                    ))}
                </ul> */}
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



