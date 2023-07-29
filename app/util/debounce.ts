export const storeScrollPosition = () => {
  document.documentElement.dataset.scroll = `${window.scrollY}`;
}

export const animationDebounce = (fn: () => void) => {
  let frame: any;
  return () => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
        fn();
    });
  }
}

export const setupHeaderListener = () => {
  document.addEventListener(
    'scroll', 
    animationDebounce(storeScrollPosition), 
    { passive: true }
  );

  storeScrollPosition();
}