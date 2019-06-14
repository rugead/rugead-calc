import React, { Component } from 'react'
import { render } from 'react-dom'
import Calc from './Calc'
import LoggedInUsers from './components/LoggedInUsers'
import SalesPeople, {salesPeopleData} from './api/SalesPeople'
import Articles from './api/Articles'
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

  setCurrentUser = (item) => {
    console.log('ää',item)
     this.setState( (state) =>   {    
       return { currentUser: {
          userName: item.userName,
          userColor: item.userColor,
          userNumber: item.userNumber
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
          setCurrentUserColor={this.setCurrentUserColor}
          setCurrentUser={this.setCurrentUser}
        />
        <Calc onClick={this.logUserIn} currentUserName={this.state.currentUser} />    
        <Articles />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
