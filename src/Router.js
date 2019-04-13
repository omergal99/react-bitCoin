import React, { Component } from 'react';
// import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch, NavLink } from 'react-router-dom';

import UserService from './services/UserService';

import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import StatisticPage from './pages/StatisticPage';
import ContactDetailsPage from './pages/ContactDetailsPage';
import ContactEditPage from './pages/ContactEditPage';
import SignupPage from './pages/SignupPage';
import UserDetailsPage from './pages/UserDetailsPage';


export default class Router extends Component {

  state = {
    isLogin: false,
    userName: 'User'
  }
  componentDidMount() {
    UserService.getUser()
      .then((user) => {
        var isUser = user ? true : false;
        this.setState({ isLogin: isUser, userName: user ? user.name : 'Guest' })
      })
  }
  render() {
    return (
      <HashRouter>
        {/* <BrowserRouter> */}

        <nav className="Nav_menu">
          <ul>
            <NavLink className="Nav_link" to="/"
              activeClassName="activeRoute">Home</NavLink>
            <NavLink className="Nav_link" to="/contact"
              activeClassName="activeRoute">Contacts</NavLink>
            <NavLink className="Nav_link" to="/statistic"
              activeClassName="activeRoute">Statistic</NavLink>
            <NavLink className="Nav_link" to="/signup"
              activeClassName="activeRoute">Sign Up</NavLink>
            <NavLink className="Nav_link" to="/user"
              activeClassName="activeRoute">{this.state.userName}</NavLink>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/statistic" component={StatisticPage} />
          <Route path="/contact/edit/:id?" component={ContactEditPage} />
          <Route path="/contact/:id" component={ContactDetailsPage} />
          <Route path="/user/:name?" component={UserDetailsPage} />
        </Switch>

        {/* </BrowserRouter> */}
      </HashRouter>
    );
  }
}