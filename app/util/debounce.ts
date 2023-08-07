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

export const inputDebounce = (fn: any, timeout = 300) => {
  let timer: ReturnType<typeof setTimeout>; 
  return (...args: any) => {
    if(timer) clearTimeout(timer); 
    timer = setTimeout(() => fn.apply(this, args), timeout)
  }
}