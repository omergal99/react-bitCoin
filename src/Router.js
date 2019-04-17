import React, { Component } from 'react';
import { observer } from 'mobx-react';
// import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';

// MAIN STORE
import AppStore from './store/AppStore';

// PAGES
import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import StatisticPage from './pages/StatisticPage';
import ContactDetailsPage from './pages/ContactDetailsPage';
import ContactEditPage from './pages/ContactEditPage';
import SignupPage from './pages/SignupPage';
import UserDetailsPage from './pages/UserDetailsPage';

//CMPS
import NavBar from './cmps/NavBar'

class Router extends Component {

  componentDidMount() {
    AppStore.userStore.loadUser()
  }

  render() {
    var currUserName = (AppStore.userStore.getCurrUser) ? AppStore.userStore.getCurrUser.name : '';
    return (
      <HashRouter>
        {/* <BrowserRouter> */}
        <div className="app-nav-route">

          <div className="nav">
            <NavBar currUserName={currUserName} />
          </div>

          <div className="route">
            <Switch>
              {!currUserName &&
                // ...props => send the history of link
                // i can use props.history in the page below
                // <Route path="/"  render={() => <SignupPage {...props} UserStore={AppStore.userStore} />} />
                <Route path="/" render={() => <SignupPage UserStore={AppStore.userStore} />} />
                // {/* <Redirect exact to="/signup" component={SignupPage} /> */}
              }
              <Route exact path="/" render={() => <HomePage store={AppStore} />} />
              {/* <Route exact path="/" component={HomePage} /> */}
              <Route exact path="/signup" render={() => <SignupPage UserStore={AppStore.userStore} />} />
              {/* <Route exact path="/signup" component={SignupPage} /> */}
              <Route exact path="/contact" component={ContactPage} />
              <Route exact path="/statistic" component={StatisticPage} />
              <Route path="/contact/edit/:id?" component={ContactEditPage} store={AppStore} />
              <Route path="/contact/:id" component={ContactDetailsPage} store={AppStore} />
              <Route path="/user/:name?" component={UserDetailsPage} store={AppStore} />
            </Switch>
          </div>
        </div>
        {/* </BrowserRouter> */}
      </HashRouter>
    );
  }
}

export default observer(Router) 