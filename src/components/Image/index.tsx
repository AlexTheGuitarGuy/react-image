import React, { FC, HTMLProps } from 'react'
import img from '../../../assets/images/test1.jpeg'

const Image: FC<Omit<HTMLProps<HTMLImageElement>, 'src'>> = ({ alt, ...props }) => {
  return <img src={img} alt={alt} {...props} />
}

export default Image
