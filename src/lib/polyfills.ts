/* eslint-disable import/prefer-default-export */
const INTERSECTION_OBSERVER_POLYFILL_URI = 'https://polyfill.io/v3/polyfill.min.js?features=IntersectionObserver'

const loadScript = (src: string) => {
  const scriptElement = document.createElement('script');
  scriptElement.src = src;
  document.head.appendChild(scriptElement);
};

export const polyfills = () => typeof !window.IntersectionObserver === 'function' && loadScript(INTERSECTION_OBSERVER_POLYFILL_URI)

