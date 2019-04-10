import React, { Component } from 'react';
import './assets/css/App.css';
import { BrowserRouter, HashRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

import ContactPage from './pages/ContactPage';
import HomePage from './pages/HomePage';
import StatisticPage from './pages/StatisticPage';
import ContactDetailsPage from './pages/ContactDetailsPage';
import ContactEditPage from './pages/ContactEditPage';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
        {/* <BrowserRouter> */}

          {/* <ContactDetailsPage /> */}
          {/* <ContactEditPage /> */}
          {/* <ContactPage /> */}
          {/* <HomePage/> */}
          {/* <StatisticPage/> */}

          <nav className="Nav_menu">
            <ul>
              <NavLink className="Nav_link" to="/" activeClassName="activeRoute">Home</NavLink>
              <NavLink className="Nav_link" to="/contact" activeClassName="activeRoute">Contacts</NavLink>
              <NavLink className="Nav_link" to="/statistic" activeClassName="activeRoute">Statistic</NavLink>
            </ul>
          </nav>

          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route path="/contact/:id" component={ContactDetailsPage} />
            <Route path="/contact/edit/:id?" component={ContactEditPage} />
            <Route path="/statistic" component={StatisticPage} />
          </Switch>

        {/* </BrowserRouter> */}
        </HashRouter>
      </div>
    );
  }
}

export default App;
