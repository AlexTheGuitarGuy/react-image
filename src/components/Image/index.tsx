import React from 'react'
import image1 from '../../assets/images/resize-image.png'

type Props = {
  alt: string
}

const Image: React.FC<Props> = ({ alt }) => {
  return (
    <div>
      <img src={image1} alt={alt} />
    </div>
  )
}

export default Image
