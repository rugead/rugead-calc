import React from 'react'
import styled from 'styled-components'
import { Button, Wrapper } from '../css/Buttons'

const ColorsWrapper = styled(Wrapper)`
  // flex-direction: column;
  background-color: white;
  width: 6em;
`;

const Box = styled.div(props => ({
  background: props.background,
  height: '1em',
  width: '1em',
  padding: '0.1em'
}))

const colorsData = [
  {colorName: 'tomato'},
  {colorName: 'darkblue'},
  {colorName: 'darkorange'},
  {colorName: 'deeppink'}
]

const Colors = (props) => {
  const colorsList = colorsData.map((item, index) =>
      <Box 
        background={item.colorName}
        key={index} 
        onClick={() => props.setUserColor(item, props.userNumber)}
      />
  ) 
  return <ColorsWrapper className="colors"> { colorsList } </ColorsWrapper>
}

export default Colors
