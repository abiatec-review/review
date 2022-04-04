import { useEffect, useState } from "react"

export const useMobile = (width: number) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {

    const setWidth = () => {
      if(window.innerWidth < width) {
        setIsMobile(true)
      } else setIsMobile(false)
    }

    window.addEventListener('resize', setWidth)

    return () => window.removeEventListener('resize', setWidth)
  }, [])

  return {isMobile}

}