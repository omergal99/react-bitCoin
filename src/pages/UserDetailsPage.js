// BASIC
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

// CMPS
import MovesList from '../cmps/MovesList';

// SERVISES
// import UserService from '../services/UserService';

//STORE
import store from '../store/AppStore';

class UserDetailsPage extends Component {
  // state = {
  //   currUser: null,
  // }
  // async componentDidMount() {
  //   this.setState({ currUser: await UserService.getUser() })
  // }
  render() {
    // if(this.props.store){
      var currUser = store.userStore.getCurrUser;
    // }else{
      // var currUser = '';
    // }
    return (
      <div>
        <h4>User Details Page</h4>

        {currUser &&
          <div>
            <div>{currUser.name}</div>
            <div>{currUser.coins}</div>
            <div>{currUser.coins < 0 &&
              <div>
                <label >We've noticed that you're in a negative account.</label><br />
                <label >We wanted to offer you an affordable loan from the gray market</label>
              </div>
            }</div>
            <div>
              <MovesList moves={currUser.moves}
                title={`${currUser.name} - All Transactions`} />
            </div>
          </div>
        }

        {!currUser &&
          <div>
            <div>Guest</div>
            <div>0 Coins</div>
            <div>No Moves</div>
          </div>
        }

      </div>
    )
  }
}

export default withRouter(UserDetailsPage)
