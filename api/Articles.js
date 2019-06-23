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
        userName: props.currentUser.userNumber,
        userNumber: props.currentUser.userNumber,

      }
      const result = this.state.cart.find(cartItem => cartItem.articleNumber === article.articleNumber)
      const cart = [...state.cart, obj]
      return {cart}
    })
  }

  render () {
    const cart = this.state.cart.map(x => 
      <div>
        {x.articleName}-{x.articlePrice}
      </div>
    )
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
            {cart}
            <h3>Artikel</h3>
            {articleList}{console.log(this.state.cart)}
          </div>
  }
}

export default Articles
