import React from 'react'
import introImage from '../../img/intro.jpeg';
import './SASS/Intro.scss'
const Intro:React.FC = () => {
  return (
    <div className='intro-container'>
      <img src={introImage} alt='Intro'/>
    </div>
  )
}

export default Intro