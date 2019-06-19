import React from 'react'
import { Button, Wrapper, Board } from '../css/Buttons'

const SpecialOperators = (props) => {
  return (
    <Board>
          <Button className="bracket" onClick={() => props.bracket('(')}>(</Button>
          <Button className="bracket" onClick={() => props.bracket(')')}>)</Button>
          <Button className="delete"  onClick={() => props.deleteLastCharacter('del')}>del</Button>
          <Button className="clear"   onClick={() => props.clearNumberstring('clear')}>C</Button>
    </Board>
  )
}
export default SpecialOperators
