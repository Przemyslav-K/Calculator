import React from 'react'
import Display from './components/Display'
import ButtonPanel from './components/ButtonPanel'
import { v4 as uuid } from 'uuid'
import { Typography } from '@material-ui/core'
import './App.css'
import isNone from './helpers'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      previousNumber: null,
      action: null,
      currentNumber: 0
    }
    this.updateNumberString = this.updateNumberString.bind(this)
    this.addDotToNumberString = this.addDotToNumberString.bind(this)
    this.setAction = this.setAction.bind(this)
    this.calculate = this.calculate.bind(this)
    this.buttonAction = this.buttonAction.bind(this)
    this.clearData = this.clearData.bind(this)
    this.clearAll = this.clearAll.bind(this)
  }

  updateNumberString(n) {
    this.setState(prevState => {
      return {
        ...prevState,
        currentNumber: ((''+prevState.currentNumber) === '0') 
          ? '' + n 
          : '' + prevState.currentNumber + n
      }
    })
  }

  addDotToNumberString() {
    this.setState(prevState => {
      return {
        ...prevState,
        currentNumber: ((typeof prevState.currentNumber === 'undefined') ? 0 : prevState.currentNumber) +
          ((''+prevState.currentNumber).includes('.') ? '' : '.')
      }
    })
  }

  setAction(action) {
    this.setState(prevState => {
      return {
        ...prevState,
        action: action
      }
    })
  }

  calculate() {
    let previousNumber = this.state.previousNumber
    let currentNumber = this.state.currentNumber
    
    if (!isNone(this.state.previousNumber) && 
      !isNone(this.state.action) && 
      !isNone(this.state.currentNumber)
    ) {
      let result
      if (this.state.action === '+') {
        currentNumber = parseFloat(this.state.previousNumber) + parseFloat(this.state.currentNumber)
      }
      else if (this.state.action === '-') {
        currentNumber = parseFloat(this.state.previousNumber) - parseFloat(this.state.currentNumber)
      }
      else if (this.state.action === '*') {
        currentNumber = parseFloat(this.state.previousNumber) * parseFloat(this.state.currentNumber)
      }
      else if (this.state.action === '/') {
        currentNumber = parseFloat(this.state.previousNumber) / parseFloat(this.state.currentNumber)
      }
      previousNumber = (typeof this.state.currentNumber === 'undefined') ? 0 : this.state.currentNumber
    }
    else if (isNone(this.state.previousNumber) && 
      (isNone(this.state.action) || this.state.action === '=') && 
      isNone(this.state.currentNumber)
    ) {
      previousNumber = this.state.currentNumber
      currentNumber = 0
    }
    else if (isNone(this.state.previousNumber)) {
      previousNumber = this.state.currentNumber
      currentNumber = 0
    }
    this.setState(prevState => {
      return {
        ...prevState,
        previousNumber: previousNumber,
        currentNumber: currentNumber
      }
    })
  }

  buttonAction(operation) {
    if (['+', '-', '*', '/'].includes(operation)) {
      this.calculate()
      this.setAction(operation)
    }
    else if (operation === '=') {
      this.calculate()
    }
  }

  clearData() {
    this.setState(prevState => {
      return {
        ...prevState,
        currentNumber: 0
      }
    })
  }

  clearAll() {
    this.setState(prevState => {
      return {
        ...prevState,
        previousNumber: null,
        action: null,
        currentNumber: 0
      }
    })
  }

  render() {
    return (
      <div className="App">
        <Typography variant="h5">
          Calculator
        </Typography>
        <Display number={this.state.currentNumber} />
        <ButtonPanel rows={[
          {
            key: uuid(),
            buttons: [
              {
                key: uuid(),
                value: 7,
                onClick: this.updateNumberString
              },
              {
                key: uuid(),
                value: 8,
                onClick: this.updateNumberString
              },
              {
                key: uuid(),
                value: 9,
                onClick: this.updateNumberString
              },
              {
                key: uuid(),
                value: '/',
                onClick: this.buttonAction
              }
            ]
          },
          {
            key: uuid(),
            buttons: [
              {
                key: uuid(),
                value: 4,
                onClick: this.updateNumberString
              },
              {
                key: uuid(),
                value: 5,
                onClick: this.updateNumberString
              },
              {
                key: uuid(),
                value: 6,
                onClick: this.updateNumberString
              },
              {
                key: uuid(),
                value: '*',
                onClick: this.buttonAction
              }
            ]
          },
          {
            key: uuid(),
            buttons: [
              {
                key: uuid(),
                value: 1,
                onClick: this.updateNumberString
              },
              {
                key: uuid(),
                value: 2,
                onClick: this.updateNumberString
              },
              {
                key: uuid(),
                value: 3,
                onClick: this.updateNumberString
              },
              {
                key: uuid(),
                value: '-',
                onClick: this.buttonAction
              }
            ]
          },
          {
            key: uuid(),
            buttons: [
              {
                key: uuid(),
                value: 0,
                onClick: this.updateNumberString
              },
              {
                key: uuid(),
                value: '.',
                onClick: this.addDotToNumberString
              },
              {
                key: uuid(),
                value: '=',
                onClick: this.buttonAction
              },
              {
                key: uuid(),
                value: '+',
                onClick: this.buttonAction
              }
            ]
          },
          {
            key: uuid(),
            buttons: [
              {
                key: uuid(),
                value: 'C',
                onClick: this.clearData
              },
              {
                key: uuid(),
                value: 'AC',
                onClick: this.clearAll
              }
            ]
          }
        ]} />
      </div>
    );
  }
}

export default App;
