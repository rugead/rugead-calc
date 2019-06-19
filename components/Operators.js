import React from 'react'
import styled from 'styled-components'
import { Button, Wrapper, Board } from '../css/Buttons'

const OperatorsButton = styled(Button)`
  color: white;
  background-color: red;
  width: 3em;
  height: 3em;
`
const data = ['+','-','*','/']

const Operators = (props) => {
  const o =  data.map( item =>{
      return <OperatorsButton className="operator" key={item} onClick={ () => props.onClick(item)}>{item} </OperatorsButton>
    })
  return <Board className="operator-board"> {o} </Board> 

}

export default Operators