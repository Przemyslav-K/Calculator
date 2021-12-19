import React from 'react'
import { TextField } from '@material-ui/core'

class Display extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      number: props.number
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState(prevState => {
      return {
        ...prevState,
        number: nextProps.number
      } 
    });  
  }

  render() {
    return (
      <TextField style={{
        width: '16rem'
      }} value={this.state.number}>
        {this.state.number}
      </TextField>
    );
  }
}

export default Display;
