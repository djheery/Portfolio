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

const setbody = (e: MouseEvent) => {
  const x = e.offsetX; 
  const y = e.offsetY;
  const backgroundContainer = document.querySelector("#background-pointer") as HTMLDivElement;
  console.log(backgroundContainer.style.background)
  backgroundContainer!.style.background = `
    radial-gradient(600px at ${x} ${y}, rgba(29, 78, 216, 0.15), transparent 80%)
  `

  backgroundContainer!.style.background = `
  radial-gradient(600px at ${x} ${y}, rgba(29, 78, 216, 0.15), transparent 80%)
  `
}

export const setupRadialGradiantListener = () => {
  window.addEventListener('mousemove', setbody, { passive: true });
}