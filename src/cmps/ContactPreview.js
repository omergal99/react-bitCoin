import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import binImg from '../assets/img/icons/bin.png';
import editImg from '../assets/img/icons/edit.png';


// export default class ContactPreview extends Component {
class ContactPreview extends Component {
    editClicked = (ev) => {
        ev.preventDefault()
        this.props.history.push(`/contact/edit/${this.props.contact._id}`)
    }
    removeClicked = (ev) => {
        ev.preventDefault()
        this.props.onEmitRemove(this.props.contact._id)
    }
    render() {
        var urlImg = `../${this.props.contact.img}`;
        return (
            <Link to={`/contact/${this.props.contact._id}`} >
                <li>
                    {/* <img height="26" src={require('../assets/img/icons/edit.png')}/> */}
                    <div className="flex wrap space-even align-center">
                        <img height="26" src={editImg} onClick={(ev) => this.editClicked(ev)} alt="" />
                        <img height="60" src={urlImg} alt="" />
                        <img height="26" src={binImg} onClick={(ev) => this.removeClicked(ev)} alt="" />
                    </div>
                    <div>{this.props.contact.name}</div>
                </li>
            </Link>
        )
    }
}

ContactPreview.propTypes = {
    contact: PropTypes.object
}

export default withRouter(ContactPreview)