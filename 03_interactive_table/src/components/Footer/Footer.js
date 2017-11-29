import React from 'react'
import FontAwesome from 'react-fontawesome'

import './styles.css'

const Footer = ({setFilterOption, setRange, priceRange, animals, hiddenAnimals}) => {
  const handleOnChangeText = (e) => {
    setFilterOption(e.target.value, 'name')
  }

  const handleOnChangeRange = (e) => {
    setFilterOption(e.target.value, 'price')
  }

  const handleOnChangeAnimal = (e) => {
    const visibleAnimals = !e.target.checked ? (
      hiddenAnimals.concat([e.target.value])
    ) : (
      hiddenAnimals.filter(animal => animal !== e.target.value)
    )
    setFilterOption(visibleAnimals, 'animals')
  }

  return (<div className='tfooter'>
    <div>
      <span className='filter-field filter-text'>
        <FontAwesome name='search' /> <input type='text' onChange={handleOnChangeText} />
      </span>
      <span className='filter-field filter-range'>
        Price: <input type='range' min={priceRange[0]} max={priceRange[1]} defaultValue={priceRange[0]} onChange={handleOnChangeRange} />
      </span>
      <span className='filter-field filter-range'>
        Animals: {animals.map((animal, idx) => {
          return <label key={idx}>{animal}
            <input type='checkbox' name='animal' value={animal} defaultChecked onChange={handleOnChangeAnimal} />
          </label>
        })}
      </span>
    </div>
  </div>)
}

export default Footer
