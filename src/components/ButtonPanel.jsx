import React from 'react'
import ButtonRow from './ButtonRow'

const ButtonPanel = (props) => (
  <div style={{
    width: '16rem'
  }}>
    {props.rows.map(row => <ButtonRow buttons={row.buttons} />)}
  </div>
);

export default ButtonPanel;
