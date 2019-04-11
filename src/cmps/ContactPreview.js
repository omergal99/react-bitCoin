import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import userImg from '../assets/img/profiles/user.png';


// export default class ContactPreview extends Component {
class ContactPreview extends Component {
    
    render() {
        return (
            <Link to={`/contact/${this.props.contact._id}`} >
                <li>
                    <img height="40" src={userImg} alt="" />
                    {this.props.contact.name}

                    <button onClick={(ev) => {
                        ev.preventDefault()
                        this.props.history.push(`/contact/edit/${this.props.contact._id}`)
                    }}>EDIT
                    </button>

                    <button onClick={(ev) => {
                        ev.preventDefault()
                        this.props.onEmitRemove(this.props.contact._id)
                    }}>DELETE CONTACT
                    </button>
                </li>
            </Link>
        )
    }
}

ContactPreview.propTypes = {
    contact: PropTypes.object
}

export default withRouter(ContactPreview)