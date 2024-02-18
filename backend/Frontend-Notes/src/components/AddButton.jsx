import React from 'react'
import { Link } from 'react-router-dom'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AddButton() {
  return (
    <Link to={'/note/new'}>
        <FontAwesomeIcon
        icon={faPlus}
        className='h-16 text-yy'
        />
    </Link>
  )
}

export default AddButton