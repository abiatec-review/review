import { useEffect, useState } from "react"
import {overflowHidden} from "./helpers";

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

export const useCharacterModal = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedHeroId, setSelectedHeroId] = useState<string>('');

  useEffect(() => {
    overflowHidden(isModalOpen)
  }, [isModalOpen])

  const openModal = (id:string) => () => {
    setSelectedHeroId(id)
    setIsModalOpen(true)
  }

  return { openModal, selectedHeroId, isModalOpen, setIsModalOpen }
}

export const useModal = (flag: boolean) => {
  useEffect(() => {
    overflowHidden(flag)
  }, [flag])
}