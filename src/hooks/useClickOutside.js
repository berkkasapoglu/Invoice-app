import { useEffect, useRef } from "react"

function useClickOutside(cb) {
  const domRef = useRef()
  useEffect(() => {
    const closeMenu = (e) => {
      if(domRef.current && !domRef.current.contains(e.target)) {
        cb()
      }
    }
    document.addEventListener("click", closeMenu, true)
    
    return () => {
      document.removeEventListener("click", closeMenu, true)
    }
  })
  return domRef
}
export default useClickOutside