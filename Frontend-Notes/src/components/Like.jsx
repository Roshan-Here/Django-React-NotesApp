import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from "@fortawesome/free-solid-svg-icons";

function Like({liked}) {
    // console.log(liked)
  return (
    <div>
        {liked ==false ? (
      <FontAwesomeIcon
      icon={faHeart}
      className="text-red-500 h-6"
    />
        ):(
        <FontAwesomeIcon
        icon={faHeart}
            className="text-blue-500 h-6"
          />
        )}
    </div>
  )
}

export default Like
