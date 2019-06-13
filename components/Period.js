import React from 'react'
import { Button, Wrapper } from '../css/Buttons'

const Period = (props) => {
  return (
    <Wrapper className="period-board">
      <Button className="period" onClick={ () => props.onClick('.')}> . </Button>
    </Wrapper>
  )
}

export default Period