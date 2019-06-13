import React from 'react'
import { Button, Wrapper } from '../css/Buttons'

const Brackets = (props) => {
  return (
      <Wrapper className="bracket-board">
        <Button className="bracket" data-bracket="(" onClick={() => props.onClick('(')}>(</Button>
        <Button className="bracket" data-bracket=")" onClick={() => props.onClick(')')}>)</Button>
      </Wrapper>)
}

export default Brackets