import React, { useState, useEffect } from 'react'

const placeHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVQIW2MMDQ39z8DAwMAIYwAAKgMD/9AXrvgAAAAASUVORK5CYII='

type LazyImageProps = {
    src: string;
    alt: string;
}

const LazyImage = ({ src, alt }: LazyImageProps) => {
    const [imageSrc, setImageSrc] = useState(placeHolder)
    const [imageRef, setImageRef] = useState()

    const onLoad = event => {
        event.target.classList.add('loaded')
    }

    useEffect(() => {
        let observer
        let didCancel = false

        if (imageRef && imageSrc !== src) {
            if (IntersectionObserver) {
                observer = new IntersectionObserver(
                    entries => {
                        entries.forEach(entry => {
                            if (
                            !didCancel &&
                            (entry.intersectionRatio > 0 || entry.isIntersecting)
                            ) {
                                setImageSrc(src)
                                observer.unobserve(imageRef)
                            }
                        })
                    },
                    {
                        threshold: 0.01,
                        rootMargin: '75%',
                    }
                )
                observer.observe(imageRef)
                } else {
                    setImageSrc(src)
                }
        }
        return () => {
            didCancel = true
            if (observer && observer.unobserve) {
                observer.unobserve(imageRef)
            }
        }
    }, [src, imageSrc, imageRef])
  
    return (
        <img
        ref={setImageRef}
        src={imageSrc}
        alt={alt}
        onLoad={onLoad}
        />
    )
}

export default LazyImage;