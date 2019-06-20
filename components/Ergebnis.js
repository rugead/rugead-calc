import React from 'react'
import * as math from  'mathjs' 
import { Button, Wrapper, Box, CurrentUserWrapper, Input, Result } from './../css/Buttons'


function Ergebnis(props) {
  try {
    const ergebnis = 'Ergebnis: ' + math.eval(props.numberString) ? math.eval(props.numberString) : '' 
  }
  catch {
    const regexLastCharacter = RegExp('[+-/*]$')
    const ergebnis = (regexLastCharacter.test(props.numberString)) ? props.numberString : '!hier stimmt was nicht! ' + props.numberString
  }

  return (
    <Result> {ergebnis} </Result>
  )
}

export default Ergebnis
