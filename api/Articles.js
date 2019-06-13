import React from 'react'
import styled from 'styled-components'

const Content = styled.div(props => ({
  background: props.background,
  height: '1em',
  width: '1em',
  padding: '0.1em'
}))

const articleData = [
  {
    articleName: 'Semmel',
    articleNumber: 1000,
    articlePrice: 0.40,
    articleImage: 'semmel.jpg'
  },
  {
    articleName: 'Torte',
    articleNumber: 2000,
    articlePrice: 2.50,
    articleImage: 'torte.jpg'
  },
  {
    articleName: 'Brezel',
    articleNumber: 3000,
    articlePrice: 0.50,
    articleImage: 'brezel.jpg'
  }
]

const Articles = (props) => {
  const articleList = articleData.map( x => 
    <Content 
      key={x.articleNumber}
      onClick={() => props.onClick(x) }
      img={'../images/' + x.articleImage}
    >
      {'./images/' + x.articleImage}
    </Content>
  )
  return <div> {articleList} </div>
}

export default Articles