import React from 'react'
import { GatsbyImage } from "gatsby-plugin-image";
import classnames from 'classnames'

export default function MediaBox({ hero, children, image, altText }) {
  const containerClassName = classnames(
    'MediaBox__Container',
    hero && 'MediaBox__Container--hero'
  )

  const imageClassName = classnames('MediaBox__Image')
  const imageProps = {
    image,
    altText,
  }

  const imageMarkup = image ? (
    <GatsbyImage className={imageClassName} {...imageProps} />
  ) : null

  return (
    <div className={containerClassName}>
      {imageMarkup}
      {children}
    </div>
  )
}
