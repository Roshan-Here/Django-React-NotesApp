import React from 'react'


function RandomImage() {
    const ImgUrl = "https://picsum.photos/200"
  return (
    <div>
      <img className='m-8 inline-block rounded-lg' src={ImgUrl} alt="an image"/>
    </div>
  )
}

export default RandomImage
