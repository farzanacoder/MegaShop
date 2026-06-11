import React from 'react'

const Image = ({className , src , alt}) => {
  return (
    <img src={src} alt={alt} className={`${className} rounded-lg w-full max-w-full`}/>
  )
}

export default Image