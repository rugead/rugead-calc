import React from 'react'
import styled from 'styled-components'
import { Button, Wrapper } from '../css/Buttons'

const Content = styled.div`
  background:  url(${props => props.img}) no-repeat;
  background-size: 7em 7em ;
  font-weight: bold;
  height: 7em;
  width: 7em;
`


const articleData = [
  {
    articleName: 'Semmel',
    articleNumber: 1000,
    articlePrice: 0.40,
    articleImage: 'https://cdn.jsdelivr.net/gh/rugead/rugead-calc@master/images/xsemmel.jpg'
  },
  {
    articleName: 'Torte',
    articleNumber: 2000,
    articlePrice: 2.50,
    articleImage: 'https://cdn.jsdelivr.net/gh/rugead/rugead-calc@master/images/xtorte.jpg'
  },
  {
    articleName: 'Brezel',
    articleNumber: 3000,
    articlePrice: 0.50,
    articleImage: 'https://cdn.jsdelivr.net/gh/rugead/rugead-calc@master/images/brezze.jpg'
  }
]

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart:[]
    }
  }
  // props: {userName: "verkäufer eins", userColor: "", userNumber: "1111"}
  // {articleName: "Semmel", articleNumber: 1000, articlePrice: 0.4, articleImage: ttps://cdn.jsdelivr.net/gh/rugead/rugead-calc@master/images/xsemmel.jpg"…}

  putToCart = (article) => {
    this.setState((state, props) => {
    console.log('state: ',state, 'props: ', props, 'article: ', article)
      const obj = {
        articleName: article.articleName,
        articleNumber: article.articleNumber,
        articlePrice: article.articlePrice,
        articleQuantity: '',
        articleSum:'',
        userName: props.currentUser.userNumber,
        userNumber: props.currentUser.userNumber,

      }
      const result = this.state.cart.find(cartItem => cartItem.articleNumber === article.articleNumber)
      console.log('result: ', result)
      
      if (result) {
        const cart = [...state.cart ]
      } else {
        const cart = [...state.cart, obj]
      }
      return {cart}

      // const checkCart = this.state.cart.reduce((acc, curr) => {

      //   if ( cartItem.articleNumber === article.articleNumber) {
      //     cartItem.articleQuantity =  cartItem.articleQuantity +1,
      //     cartItem.articleSum = cartItem.articlePrice * cartItem.articleQuantity
      //     return cartItem
      //   } else {
      //     return cartItem
      //   }
      // })
 
    })
  }

  render () {
    const articleList = articleData.map( article => 
      <Content 
        key={article.articleNumber}
        onClick={() => this.putToCart(article) }
        img={article.articleImage}
      >
        {article.articleName}
      </Content>
    )
    return <div> 
       
            <h3>Artikel</h3>
            {articleList}{console.log(this.state.cart)}
          </div>
  }
}

export default Articles
