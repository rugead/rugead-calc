import React from 'react'
import styled from 'styled-components'
import { Button, Wrapper } from '../css/Buttons'

const ColorsWrapper = styled(Wrapper)(props => ({
  'background-color': 'white',
  'align-content': 'stretch',
  'align-item': 'stretch',
  padding: '0em 0em 0.5em 0em',

}))

const ColorBox = styled.div(props => ({
  background: props.background,
  height: '1em',
  width: '1em',
  padding: '0em',
  order: '0',
  flex: '1 1 auto',
  'align-self': 'auto'	
}))

const colorsData = [
  {colorName: 'tomato'},
  {colorName: 'aqua'},
  {colorName: 'darkorange'},
  {colorName: 'deeppink'},
  {colorName: 'Chartreuse'},
  {colorName: 'Turquoise'},
  {colorName: 'Yellow'},
  {colorName: 'Gold'},
]

 
 
 
 
const Colors = (props) => {
  const colorsList = colorsData.map((item, index) =>
      <ColorBox 
        background={item.colorName}
        key={index} 
        onClick={() => props.setUserColor(item, props.userNumber)}
      />
  ) 
  return <ColorsWrapper className="colors"> { colorsList } </ColorsWrapper>
}

export default Colors
