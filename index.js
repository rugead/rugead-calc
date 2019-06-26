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
      cart:[]
    };
  }

  setCurrentUser = (selectedUser) => {
    this.setState( (state) =>   {    
      const currentUser = {
          userName: selectedUser.userName,
          userColor: selectedUser.color,
          userNumber: selectedUser.number
        }

      const newCartUser =  {
          userName: selectedUser.userName,
          userNumber: selectedUser.number,
          id: selectedUser.number + '#' + Date.now() ,
          timeStamp: Date.now(),
          articles: [],
        }

      if (this.state.cart.find(cartUser => cartUser.userNumber === selectedUser.number)){
        const cart = [...state.cart]
      } else {
        const cart = [...state.cart, newCartUser]
      }

      return { cart, currentUser }
    })
  }

  logUserIn = (numberString) => {
    const result = salesPeopleData.find(item => item.number === numberString)
    if (!result) {
      console.log('n: ', numberString, result.number)
      alert('Kein Bediener mit dieser Nummer vorhanden!')
      return
    }
    this.setState( (state) => {
      // console.log('result', result)
      if (result) {
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

 putToCart = (article) => {
    this.setState((state, props) => {
      // console.log('state: ',state, 'props: ', props, 'article: ', article)
      const newCartItem = {
        articleName: article.articleName,
        articleNumber: article.articleNumber,
        articlePrice: article.articlePrice,
        articleQuantity: 1 ,
        articleSum: article.articlePrice,
        userName: this.state.currentUser.userNumber,
        userNumber: this.state.currentUser.userNumber,
        id: this.state.currentUser.userNumber + '#' + Date.now() ,
        timeStamp: Date.now(),
      }
      const cart = state.cart.map((item, index) => {
        // console.log('item.userNumber: ', item.userNumber)
        // console.log('this.state.currentUser.userNumber: ', this.state.currentUser.userNumber)
        if (item.userNumber === this.state.currentUser.userNumber) {
          item.articles = item.articles.concat(newCartItem) 
          // console.log('item1', item.articles, newCartItem)
          return item
        } else {
          // console.log('item2', item)
          return item
        }
      })
      // const cart = [...state.cart, newCartItem]
      return {cart}
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
          <Articles  className="articles" currentUser={this.state.currentUser} cart={this.state.cart} putToCart={this.putToCart}/>
        </Box>    
      </div> 
    );
  }
}

render(<App />, document.getElementById('root'));
