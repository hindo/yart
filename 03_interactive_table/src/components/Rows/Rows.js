import React from 'react'

import Cell from './Cell'
import './styles.css'

const Rows = (props) => {
  return (<div className='row'>{
    props.columns.map((column, idx) => {
      return <Cell key={idx} cell={props.item[column.name]} />
    })
  }</div>)
}

export default Rows
