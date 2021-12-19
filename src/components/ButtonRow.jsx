import React from 'react'
import Button from './Button'

const ButtonRow = (props) => (
  <div key={props.key} style={{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%'
  }}>
    {props.buttons.map(button => <Button value={button.value} onClick={button.onClick} />)}
  </div>
);

export default ButtonRow;
