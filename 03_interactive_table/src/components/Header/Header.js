import React from 'react'

import Column from './Column'
import './styles.css'

const Header = (props) => {
  return (
    <div className='column-row'>{props.items.map((column, idx) => {
      return <Column className='column' key={idx} column={column} setSort={props.setSort} sortOptions={props.sortOptions} />
    })}</div>
  )
}

export default Header
