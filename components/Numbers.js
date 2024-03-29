import React from 'react'
import styled from 'styled-components'
import { Button, Wrapper } from '../css/Buttons'

const NummbersWrapper = styled(Wrapper)`
  align-content: center;
  align-item: center;
  width: 10em;
`;


const data = [1,2,3,4,5,6,7,8,9,0,'.']
const Numbers = (props) => {
  const n =  data.map( item =>{
      return <Button className="number" key={item} onClick={ () => props.onClick(item)}> { item } </Button>
    })
  return <NummbersWrapper className="number-board"> {n} </NummbersWrapper> 
}

export default Numbers