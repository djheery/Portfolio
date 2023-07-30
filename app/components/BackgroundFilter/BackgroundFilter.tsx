"use client"

import { animationDebounce } from '@/app/util/debounce';
import { useEffect, useState } from 'react';
import styles from './BackgroundFilter.module.css';

/**
 * The functional component for the BackgroundFilter
 *
 * @param myParam your params here
*/

const BackgroundFilter: React.FC = () => {
  const [xy, setXY] = useState<number[]>([40, 40]); 
  useEffect(() => {
    window.addEventListener("mousemove", e => {
      if(window.matchMedia("(min-width: 1000px)").matches) {
        const x = e.clientX; 
        const y = e.clientY + window.scrollY; 
        animationDebounce(setXY([x, y]))
      }
    })
  }, [])

  return (
    <div 
      id="background-pointer" 
      className={styles["background-pointer"]}
      style={{
        background: `radial-gradient(600px at ${xy[0]}px ${xy[1]}px, rgba(29, 78, 216, 0.15), transparent 80%)`
      }}></div>
  )
}

export default BackgroundFilter;