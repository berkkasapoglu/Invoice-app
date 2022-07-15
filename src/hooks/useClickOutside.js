import { useEffect, useRef } from "react"

function useClickOutside(cb) {
  const domRef = useRef()
  useEffect(() => {
    const closeMenu = (e) => {
      if(domRef.current && !domRef.current.contains(e.target)) {
        cb()
      }
    }
    document.addEventListener("mousedown", closeMenu)
    
    return () => {
      document.removeEventListener("mousedown", closeMenu)
    }
  })
  return domRef
}
export default useClickOutside