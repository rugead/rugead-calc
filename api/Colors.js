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
        onClick={() => props.onClick(item, props.userNumber)}
      />
  ) 
  return <ColorsWrapper className="colors"> { colorsList } </ColorsWrapper>
}

export default Colors


// // Static object
// const Box = styled.div({
//   background: 'palevioletred',
//   height: '50px',
//   width: '50px'
// });
// // Adapting based on props
// const PropsBox = styled.div(props => ({
//   background: props.background,
//   height: '50px',
//   width: '50px'
// }));
// render(
//   <div>
//     <Box />
//     <PropsBox background="blue" />
//   </div>
// );