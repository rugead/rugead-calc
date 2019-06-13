import React, { Component } from 'react';
import { render } from 'react-dom';
import Calc from './Calc';
import LoggedInUsers from './components/LoggedInUsers'
import SalesPeople, {salesPeopleData} from './api/SalesPeople'
import Colors from './api/Colors'
import './style.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      userList: [],
      loggedInUsers: [],
    };
  }

  setCurrentUserName = (item) => {
     this.setState( (state) =>   {    
       return { currentUser: {
          userName: item.userName,
          userColor: state.currentUser.userColor,
       }}
    })
  }

  logUserIn = (item) => {
    this.setState( (state) => {
      const result = salesPeopleData.find(x => x.number === item)
      // const result = inventory.find( fruit => fruit.name === 'cherries' );
      if (state.loggedInUsers.find( item => item.number === item)) {
        const loggedInUsers = [...state.loggedInUsers ]
      } else {
        const loggedInUsers = [...state.loggedInUsers, result]
      }
      // const list = [...state.list, state.value];
      return {loggedInUsers}
    })
  }

  setCurrentUserColor = (color, userNumber) => {
    // console.log('ccc: ', color , userNumber)
    this.setState( (state) => {
      const loggedInUsers = state.loggedInUsers.map((item, index) => {
        if (item.number === userNumber ) {
          item.color = color.colorName
          console.log(item.number)
          return item
        } else {
          return item
        }
      })
      return loggedInUsers
    })
  }

  // onUpdateItem = i => {
  //   this.setState(state => {
  //     const list = state.list.map((item, j) => {
  //       if (j === i) {
  //         return item + 1;
  //       } else {
  //         return item;
  //       }
  //     });

  //     return {
  //       list,
  //     };
  //   });
  // };


  render() {
    return (
      <div>
        <LoggedInUsers 
          loggedInUsers={this.state.loggedInUsers} 
          onClick={this.setCurrentUserColor}
        />
        <Calc onClick={this.logUserIn} currentUserName={this.state.currentUser} />    
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
