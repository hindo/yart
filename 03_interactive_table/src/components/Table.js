import React from 'react'
import Header from './Header/Header'
import Footer from './Footer/Footer'
import Rows from './Rows/Rows'

import './Table.css'

const Table = (props) => {
  const filterOptions = props.filterOptions
  const sortOptions = props.sortOptions
  let filteredItems = props.items.filter(item => {
    if (filterOptions['name'].length) {
      return item.name.toLowerCase().indexOf(filterOptions['name'].toLowerCase()) > -1
    }
    return item
  })
  .filter(item => {
    return item.price >= parseInt(filterOptions['price'], 10)
  })
  .filter(item => {
    return filterOptions['animals'].indexOf(item.animal) === -1
  }).sort((a, b) => {
    return (
      a[sortOptions.column] === b[sortOptions.column] ? 0 : (
        a[sortOptions.column] > b[sortOptions.column] ? 1 : -1
      )
    ) * sortOptions.direction
  })

  return (<div className='table'>
    <Header items={props.columns} setSort={props.handlers.setSort} sortOptions={sortOptions} />
    <div className='tbody'>{filteredItems.map((row, idx) => {
      return <Rows key={idx} columns={props.columns} item={row} />
    })
    }</div>
    <Footer
      setFilterOption={props.handlers.setFilterOption}
      priceRange={props.additional.priceRange}
      hiddenAnimals={props.filterOptions['animals']}
      animals={props.additional.animals} />
  </div>)
}

export default Table
