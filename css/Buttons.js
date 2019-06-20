import React from 'react'
import styled from 'styled-components'

const Board = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  font-weight: bold;
  background: transparent;
  border-radius: 3px;
  border: 1px solid #a10863;
  color: #a10863;
  margin: 0.5em;
  padding: 0em;
  height: 3em;
  width: 3em;
  cursor: pointer;

  :hover {
    color: white;
    border-radius: 3px;
    background-color: darkblue;
    border: 1px solid white;
  }
`;

const Wrapper = styled.div`
  // padding: 0.5em;
  // border: solid 1px grey;
  background: white;
  display: flex;
  flex-wrap: wrap;
`;

const Box = styled.div`
  padding: 0em;
  border: solid 1px grey;
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-item: stretch;
`;

const CurrentUserWrapper = styled.div(props => ({
  background: props.background,
  'align-content':'stretch',
  'align-item':'stretch',
})) 

const Input = styled.input`
  font-weight: bold;
  padding: 0.5em;
  flex: 1 1 auto;
  font-size: 1.5em;
  border: solid 1px grey;
  background: white;
  align-self: auto;
`;

const Result = styled.div`
  font-weight: bold;
  padding: 0.5em;
  flex: 1 1 auto;
  font-size: 1.5em;
  border: solid 1px grey;
  background: darkorange;
  align-self: auto;
`;
export { Button, Wrapper, Box, CurrentUserWrapper, Board, Input, Result }