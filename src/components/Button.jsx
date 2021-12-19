import React from 'react'
import { Button as UIButton } from '@material-ui/core'

const Button = (props) => (
  <UIButton key={props.key} onClick={e => props.onClick(props.value)}>
    {props.value}
  </UIButton>
);

export default Button;
