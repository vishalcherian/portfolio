import { useEffect } from 'react'

import Logo from './logo'
import PathDescriptor from './pathdescriptor'

import './nav.css'

const Nav = ( { title, dark = true } ) => {

  useEffect( () => {
    const el = document.querySelector('.fader.Nav')
    setTimeout( () => {
      el.classList.add('fade-in')
    }, 1500)
  } )

  return (
    <div className={`fader noselect Nav ${dark ? 'Nav-Dark' : 'Nav-Light'}`}>
      <Logo dark={dark} />
      <PathDescriptor dark={dark} title={title} />
    </div>
  )
}

export default Nav