import React from 'react'
import styled from 'styled-components'
import { Button, Wrapper } from '../css/Buttons'

const OperatorsButton = styled(Button)`
  color: white;
  background-color: red;
  width: 3em;
  height: 3em;
`

const OperatorsBoard = styled.div`
  display: flex;
  flex-direction: column;
`;


const data = ['+','-','*','/']
const Operators = (props) => {
  const o =  data.map( item =>{
      return <OperatorsButton className="operator" key={item} onClick={ () => props.onClick(item)}>{item} </OperatorsButton>
    })
  return <OperatorsBoard className="operator-board"> {o} </OperatorsBoard> 

}

export default Operators