import { useEffect } from 'react' 

import sample from '../assets/rdowneyjr.jpeg'

import './profilepic.css'

const ProfilePic = ( { className } ) => {

  useEffect( () => {
    const el = document.querySelector('.Image')
    setTimeout(() => {
      el.classList.add(['fade-in'])
    })
  } )

  return <img className="fader Image" src={sample} alt="robert downey jr."/>
}

export default ProfilePic