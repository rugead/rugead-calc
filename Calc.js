import React, {Component} from 'react'
import Numbers from './components/Numbers'
import Operators from './components/Operators'
import Brackets from './components/Brackets'
import DeleteLastCharacter from './components/DeleteLastCharacter'
import ClearNumberString from './components/ClearNumberString'
import ErrorBoundary from './components/ErrorBoundary'
import Period from './components/Period'
import Ergebnis from './components/Ergebnis'

import { Button, Wrapper } from './css/Buttons'

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

  // clickPeriod = (period) => {
  //   (this.state.numberString.length > 0 )
  //   ? 
  //   this.setState( { numberString: this.state.numberString.concat(period) } )
  //   :
  //   this.setState( { numberString: this.state.numberString.concat(0, period) } )
  // }


  render() {
    const {currentUser } = this.props
  
    return (
      <div className="calc">
        <ErrorBoundary>        
          <div>
            <h3>Aktiver Bediener: {currentUser.userName || "kein aktiver Bediener"}</h3>
          </div>
          <Wrapper>

            <Numbers onClick={this.clickNumber}/>
            <Operators onClick={this.clickOperator} />
            <Brackets onClick={this.clickBracket} />
            <DeleteLastCharacter onClick={this.clickDelete} />
            <ClearNumberString onClick={this.clickClearNumberstring} />
          </Wrapper>
            <input type="text"
              value={this.state.numberString}
              placeholder="Eingabe" 
              onChange={this.inputOnChange}
            />
            <Button onClick={ this.logUserIn  } >login</Button>   
            <h3>Ergebnis: <Ergebnis numberString={this.state.numberString} /> </h3>
        
        </ErrorBoundary>         
      </div>
    )
  }
}

export default Calc
