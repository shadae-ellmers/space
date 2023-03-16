import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { FormEvent, useState, ChangeEvent, useEffect } from 'react'

function Space100() {
  const [pic, togglePic] = useState(true)

  const handleClick = () => {
    togglePic(!pic)
  }

  const img = (
    <img
      onClick={handleClick}
      className="red-blue-planet"
      src="./images/planet1.png"
      alt="red-blue-planet"
    />
  )
  const flam = (
    <img
      onClick={handleClick}
      className="flamingo"
      src="./images/flamingo.png"
      alt="flamingo"
    />
  )

  return <div className="click-change">{pic ? img : flam}</div>
}

export default Space100
