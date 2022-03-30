import React from 'react';
import './index.css'

interface IHero {
  name: string;
  status: string;
  image: string;
}
interface IProps {
  setIsModalOpen: () => void,
  hero: IHero
  // children: JSX.Element
}

export const Modal: React.FC<IProps> = ({setIsModalOpen, hero}) => {
  console.log(hero)
  return (
    <div className="modal">
      <div className="modal-pop" >
        <button className='modal-button' onClick={setIsModalOpen}>Close</button>
        <div className='modal-header'>{hero.name}</div>
        <img className='modal-image' src={hero.image} alt='hero'/>
        <div className='modal-status'>Status: {hero.status}</div>
      </div>  
      <div onClick={setIsModalOpen} className="modal-overlay"></div>    
    </div>
  )
}