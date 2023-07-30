export const storeScrollPosition = () => {
  document.documentElement.dataset.scroll = `${window.scrollY}`;
}

export const animationDebounce = (fn: any) => {
  let frame: any;
  return (...params: any) => {
    if (frame) cancelAnimationFrame(frame);
    frame = requestAnimationFrame(() => {
        fn(...params);
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
