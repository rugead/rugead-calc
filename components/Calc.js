import React, {Component} from 'react'
import Numbers from './Numbers'
import Operators from './Operators'
import SpecialOperators from './SpecialOperators'
import DeleteLastCharacter from './DeleteLastCharacter'
// import ClearNumberString from './ClearNumberString'
import ErrorBoundary from './ErrorBoundary'
import Period from './Period'
import Ergebnis from './Ergebnis'
import styled from 'styled-components'
import { Button, Wrapper, Box, CurrentUserWrapper, Input } from './../css/Buttons'

class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numberString: '',
    };
  }
  
  clickNumber = (ev) => {
    this.setState( {numberString: this.state.numberString.concat(ev) } )
  }
  
  clickBracket = (bracket) => {
    this.setState( { numberString: this.state.numberString.concat(bracket) } )
  }

  clickOperator = (operator) => {
    const numberString = this.state.numberString;
    const regexLastCharacter = RegExp('[+-/*]$')
    
    if (regexLastCharacter.test(numberString)) {
      this.setState({
        numberString: numberString.replace(/[+-/*]$/, operator)
      })
    } else {
      this.setState({
        numberString: numberString.concat(operator)
      })
    }
  }

  inputOnChange = (ev) =>  {
    const val = ev.target.value.replace(/[,]/, '.')
    this.setState( { numberString: val } )   
  }

  clickDelete = () => {
    const len = this.state.numberString.length
    const str = this.state.numberString.slice(0, len - 1)
  
    this.setState( { numberString: str } )
  }

  clickClearNumberstring = () => {
    this.setState( { numberString: '' } )

  }

  logUserIn = () => {
    props.logUserIn(this.state.numberString)
    this.setState( { numberString: '' } )
  }

  render() {
    const {currentUser } = this.props
  
    return (
      <CurrentUserWrapper background={currentUser.userColor}>
        <ErrorBoundary>        
            <h3> {currentUser.userName || "kein aktiver Bediener"}</h3>
          <Wrapper>

            <Numbers onClick={this.clickNumber}/>
            <Operators onClick={this.clickOperator} />
            <SpecialOperators 
              bracket={this.clickBracket}
              clearNumberstring={this.clickClearNumberstring}
              deleteLastCharacter={this.clickDelete}
            />
          </Wrapper>

            <Input type="text"
              value={this.state.numberString}
              placeholder="Eingabe" 
              onChange={this.inputOnChange}
            />
            <Button onClick={ this.logUserIn  } >login</Button>   
            <h3>Ergebnis: <Ergebnis numberString={this.state.numberString} /> </h3>
        
        </ErrorBoundary>         
      </CurrentUserWrapper>
      
    )
  }
}

export default Calc
