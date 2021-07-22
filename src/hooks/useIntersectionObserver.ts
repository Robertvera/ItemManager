import { useState } from 'react';

const useIntersectionObserver = () => {
    const [isIntersecting, setIsIntersecting] = useState(false);

    const handleObserver =(entries: IntersectionObserverEntry[]) => {
        const target = entries[0];
        setIsIntersecting(target.isIntersecting);
    };

    const observe = (element?: HTMLDivElement | null) => {
        const option = {
        root: null,
        rootMargin: "20px",
        threshold: 0
        };
        const observer = new IntersectionObserver(handleObserver, option);
        if (element) observer.observe(element);
    };

    return { observe, isIntersecting }
}

export default useIntersectionObserver;