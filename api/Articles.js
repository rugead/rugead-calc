import React from 'react'
import styled from 'styled-components'
// import myImage from './xbrezel.jpg';
import { Button, Wrapper } from '../css/Buttons'


// const Content = styled.div(props => ({
//   'background-image': url(${props.img}),
//   height: '5em',
//   width: '5em',
//   padding: '0.1em'
  // background-image: url('https://cdn.jsdelivr.net/gh/rugead/rugead-calc@master/images/xsemmel.jpg');
// }))
const Content = styled.div`
  background:  url(${props => props.img}) no-repeat;
  background-size: 7em 7em ;
  font-weight: bold;
  height: 7em;
  width: 7em;
`
// props => props.img
// `
//   background-image: url(${myImage});
// `;

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
    articleImage: 'https://cdn.jsdelivr.net/gh/rugead/rugead-calc@master/api/brezel.jpg'
  }
]

const Articles = (props) => {
  const articleList = articleData.map( x => 
    <Content 
      key={x.articleNumber}
      onClick={() => props.onClick(x) }
      img={x.articleImage}
    >
      {x.articleName}
    </Content>
  )
  return <div> {articleList} </div>
}

export default Articles