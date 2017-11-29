import React from 'react'

import FontAwesome from 'react-fontawesome'

const Column = (props) => {
  const direction = props.sortOptions.column === props.column.name ? props.sortOptions.direction : 0
  const column = props.column.sortable ? (
    <a className='sortable'
      onClick={() => props.setSort(props.column.name)}>
      {props.column.label} { direction ? (
        direction === -1 ? <FontAwesome name='sort-asc' /> : <FontAwesome name='sort-desc' />
      ) : ''}
    </a>
  ) : props.column.label

  return (
    <div className='column'>{column}</div>
  )
}

export default Column
