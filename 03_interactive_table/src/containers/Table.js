import React, { Component } from 'react'
import { petService } from '../service'
import Table from '../components/Table'

petService.fetch().then(
  console.log.bind(console, 'SUCCESS:'),
  console.error.bind(console, 'ERROR:')
)

class TableContainer extends Component {
  render () {
    return (<h1><Table /></h1>)
  }
}

export default TableContainer
