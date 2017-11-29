import React, { Component } from 'react'
import { petService } from '../service'
import Table from '../components/Table'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage'

class TableContainer extends Component {
  state = {
    isLoading: true,
    pets: [],
    filteredPets: [],
    columns: [{
      label: 'Name',
      name: 'name',
    }, {
      label: 'Animal',
      name: 'animal',
    }, {
      label: 'Colour',
      name: 'colour',
    }, {
      label: 'Pattern',
      name: 'pattern',
    }, {
      label: 'Rating',
      name: 'rating',
      sortable: true,
    }, {
      label: 'Price',
      name: 'price',
      sortable: true,
    }],
    sortOptions: {
      direction: 1,
      column: null
    },
    filterOptions: {
      animals: [],
      price: 0,
      name: ''
    },
    priceRange: [],
    animals: [],
    error: {}
  }

  componentDidMount () {
    this.fetchPets()
  }

  fetchPets = () => {
    this.setState({
      isLoading: true
    })
    petService.fetch().then(
      (pets) => {
        const priceRange = this.getMinMaxRange(pets)
        const animals = this.getDistinctItems(pets)
        const error = {state: 0}

        this.setState({
          isLoading: false,
          pets,
          priceRange,
          animals,
          error
        })
      },
      (err) => {
        console.log(err)
        const error = {
          state: 1,
          message: err
        }
        this.setState({
          isLoading: false,
          error
        })
      }
    )
  }

  getDistinctItems = (pets, columnName='animal') => {
    const animals = new Set()
    pets.map(pet => animals.add(pet[columnName]))
    return [...animals]
  }

  getMinMaxRange = (pets, columnName='price') => {
    const values = pets.map(pet => pet[columnName])
    return [Math.min.apply(null, values), Math.max.apply(null, values)]
  }

  setFilterOption = (value, columnName) => {
    const filterOptions = {
      ...this.state.filterOptions,
      [columnName]: value,
    }
    this.setState({filterOptions})
  }

  setSort = (columnName) => {
    const sortOptions = {...this.state.sortOptions}
    if (sortOptions.column !== columnName) {
      sortOptions.column = columnName
      sortOptions.direction = 1
    } else {
      sortOptions.direction *= -1
    }

    this.setState({
      sortOptions,
    })
  }

  render () {
    const handlers = {
      noItems: this.fetchPets,
      setSort: this.setSort,
      setFilterOption: this.setFilterOption,
    }
    const additional = {
      animals: this.state.animals,
      priceRange: this.state.priceRange,
    }
    const connectionError = this.state.error.state
    return (
      <div>
        { connectionError ? <ErrorMessage error={this.state.error} errorHandler={this.fetchPets} /> : (
        <Table
           isLoading={this.state.isLoading}
           columns={this.state.columns}
           items={this.state.pets}
           sortOptions={this.state.sortOptions}
           filterOptions={this.state.filterOptions}
           handlers={handlers}
           additional={additional} />
        )}
      </div>)
  }
}

export default TableContainer
