import React, { useState, useEffect, SyntheticEvent } from 'react'

const placeHolder = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAIAAAACCAYAAABytg0kAAAAFElEQVQIW2MMDQ39z8DAwMAIYwAAKgMD/9AXrvgAAAAASUVORK5CYII='

type LazyImageProps = {
    src: string;
    alt: string;
}

const LazyImage = ({ src, alt }: LazyImageProps) => {
    const [imageSrc, setImageSrc] = useState(placeHolder)
    const [imageRef, setImageRef] = useState()

    const onLoad = (event:SyntheticEvent<HTMLElement>) => {
        const target = event.target as HTMLElement
        target.classList.add('loaded')
    }

    useEffect(() => {
        // @ts-expect-error
        let observer;
        let didCancel = false;

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
                                // @ts-expect-error
                                observer.unobserve(imageRef)
                            }
                        })
                    },
                    {
                        threshold: 0.01,
                        rootMargin: '75%',
                    }
                )
                // @ts-expect-error
                observer.observe(imageRef)
                } else {
                    setImageSrc(src)
                }
        }
        return () => {
            didCancel = true
            // @ts-expect-error
            if (observer && observer.unobserve) {
                // @ts-expect-error
                observer.unobserve(imageRef)
            }
        }
    }, [src, imageSrc, imageRef])
  
    return (
        <img
        // @ts-expect-error
        ref={setImageRef}
        src={imageSrc}
        alt={alt}
        onLoad={onLoad}
        />
    )
}

export default LazyImage;