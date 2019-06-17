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

function putToCart (x, props) {
  console.log('x: ', x, 'props: ', props)

}

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cart:[]
    }
  }
  render () {
    const articleList = articleData.map( x => 
      <Content 
        key={x.articleNumber}
        onClick={() => putToCart(x, this.props.currentUser) }
        img={x.articleImage}
      >
        {x.articleName}
      </Content>
    )
    return <div> <h3>Artikel</h3>{articleList} </div>
  }
}

export default Articles
