import React, { FC } from 'react';

const Image: FC<any> = ({ src, alt, ...props }) => {
  return <img src={src} alt={alt} {...props} />;
}

export default Image;
