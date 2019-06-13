import React from 'react'
import styled from 'styled-components'
import { Button, Wrapper } from '../css/Buttons'

const OperatorsButton = styled(Button)`
  flex-direction: row;
  color: white;
  background-color: red;
  // flex-wrap: nowrap;
  // flex: 1 1 auto;
  width: 3em;
  height: 3em;
`


const data = ['+','-','*','/']
const Operators = (props) => {
  const o =  data.map( item =>{
      return <OperatorsButton className="operator" key={item} onClick={ () => props.onClick(item)}>{item} </OperatorsButton>
    })
  return <Wrapper className="operator-board"> {o} </Wrapper> 

}

export default Operators