import React from 'react'
import * as math from  'mathjs' 

function Ergebnis(props) {
  try {
    const ergebnis = 'Ergebnis: ' + math.eval(props.numberString) ? math.eval(props.numberString) : '' 
  }
  catch {
    const regexLastCharacter = RegExp('[+-/*]$')
    const ergebnis = (regexLastCharacter.test(props.numberString)) ? props.numberString : 'Da was stimmt hier nicht: ' + props.numberString
  }

  return (
    <span> {ergebnis} </span>
  )
}

export default Ergebnis
