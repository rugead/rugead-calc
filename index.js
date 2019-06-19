import React, { Component } from 'react'
import { render } from 'react-dom'
import Calc from './components/Calc'
import LoggedInUsers from './components/LoggedInUsers'
import SalesPeople, {salesPeopleData} from './api/SalesPeople'
import Articles from './api/Articles'
import Colors from './api/Colors'
import './css/style.css';

import { Button, Wrapper, Box } from './css/Buttons'

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      userList: [],
      loggedInUsers: [],
    };
  }

  setCurrentUser = (selectedUser) => {
    console.log('setCurrentUser: ', selectedUser)
     this.setState( (state) =>   {    
       return { currentUser: {
          userName: selectedUser.userName,
          userColor: selectedUser.color,
          userNumber: selectedUser.number
       }}
    })
  }

  logUserIn = (numberString) => {
    this.setState( (state) => {
      const result = salesPeopleData.find(item => item.number === numberString)
      console.log('result', result)
      if (state.loggedInUsers.find( item => item.number === numberString)) {
        const loggedInUsers = [...state.loggedInUsers ]
      } else {
        const loggedInUsers = [...state.loggedInUsers, result]
      }
      return {loggedInUsers}
    })
  }

  setUserColor = (color, userNumber) => {
    if (userNumber === this.state.currentUser.userNumber) {
      return
    }
    this.setState( (state) => {
      const loggedInUsers = state.loggedInUsers.map((item, index) => {
        if (item.number === userNumber ) {
          item.color = color.colorName
          return item
        } else {
          return item
        }
      })
      return loggedInUsers
    })
  }

  render() {
    return (
      <div className="main">
        <Box>
          <LoggedInUsers
            loggedInUsers={this.state.loggedInUsers} 
            setUserColor={this.setUserColor}
            setCurrentUser={this.setCurrentUser}
          />
        </Box>
        <Box>
          <Calc className="calc" logUserIn={this.logUserIn} currentUser={this.state.currentUser} />    
        </Box>
        <Box>
          <Articles  className="articles" currentUser={this.state.currentUser}/>
        </Box>    
      </div> 
    );
  }
}

render(<App />, document.getElementById('root'));
