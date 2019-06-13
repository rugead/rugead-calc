import React from 'react'
import { Button, Wrapper } from '../css/Buttons'

const DeleteLastCharacter = (props) => {
  return (
    <Wrapper className="delete-board">
      <Button className="s13 delete" data-deletelastcharacter="del" onClick={() => props.onClick('del')}>del</Button>
    </Wrapper>
  )
}

export default DeleteLastCharacter