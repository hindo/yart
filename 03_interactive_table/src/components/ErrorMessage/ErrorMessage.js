import React from 'react'

import './styles.css'

const ErrorMessage = (props) => {
  console.log(props)
  return (
    <div className='error-message'>
      <span>There was and error: {props.error.message}. Please <a className='clickable' onClick={() => props.errorHandler()}>try again clicking here</a>
      </span>
    </div>
  )
}

export default ErrorMessage
