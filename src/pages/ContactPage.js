import React, { Component } from 'react';

import ContactList from '../cmps/ContactList';
import ContactFilter from '../cmps/ContactFilter';
import ContactService from '../services/ContactService';

export default class ContactPage extends Component {
    state = {
        contacts: null,
        contactsToShow: null
    }

    async componentDidMount() {
        this.setState({ contacts: await ContactService.getContacts() })
        this.filterContacts('');
    }

    filterContacts = (stringToFilter) => {
        const filterdContacts = this.state.contacts.filter(contact => {
            return contact.name.toLowerCase().includes(stringToFilter.toLowerCase())
        })
        this.setState({
            contactsToShow: filterdContacts
        })
    }

    render() {
        return (
            <section>
                <h1>Contact Page</h1>

                <ContactFilter onFilter={this.filterContacts}/>

                {this.state.contactsToShow &&
                    <ContactList contacts={this.state.contactsToShow} />
                }
            </section>
        )
    }
}
