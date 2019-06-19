import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
  font-weight: bold;
  background: transparent;
  border-radius: 3px;
  border: 1px solid palevioletred;
  color: palevioletred;
  margin: 0.5em;
  padding: 1em;
  cursor: pointer;
  display: flex;
  
  :hover {
    color: white;
    background-color: darkblue;
    border: 1px solid white;
  }
`;

const Wrapper = styled.div`
  padding: 0.5em;
  // border: solid 1px grey;
  background: white;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export { Button, Wrapper }