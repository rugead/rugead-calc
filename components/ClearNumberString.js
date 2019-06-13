import React from 'react'
import { Button, Wrapper } from '../css/Buttons'

const ClearNumberstring = (props) => {
  return (
    <Wrapper className="clear-number-string-board">
      <Button className="clear" data-clear-number-string="clear" onClick={() => props.onClick('clear')}>C</Button>
    </Wrapper>
  )
}

export default ClearNumberstring