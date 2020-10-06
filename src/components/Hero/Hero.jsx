import React from 'react'
import Img from 'gatsby-image'
import classNames from 'classnames'

import styles from './Hero.module.scss'

export default function Hero({
  imageSrc,
  imageAltText,
  videoSrc,
  videoTitle,
  attached = false,
  content,
  aspectRatio = false,
}) {
  const heroContent = content ? (
    <div className={styles.ContentWrapper}>
      <p className={styles.Content}>{content}</p>
    </div>
  ) : null

  const imageMarkup = imageSrc ? (
    <div className={styles.ImageWrapper}>
      <div className={styles.ImageOverlay} />
      <Img className={styles.Image} fluid={imageSrc} alt={imageAltText} />
    </div>
  ) : null

  const videoClassName = classNames(styles.Video)

  const videoMarkup = videoSrc ? (
    <iframe
      title={videoTitle}
      className={videoClassName}
      src={videoSrc}
      frameborder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen
    ></iframe>
  ) : null

  const heroClassName = classNames(
    styles.Hero,
    aspectRatio && styles.aspectRatio
  )

  return (
    <div className={heroClassName}>
      {imageMarkup}
      {videoMarkup}
      {heroContent}
    </div>
  )
}
