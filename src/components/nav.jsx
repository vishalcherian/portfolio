import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Logo from './logo'
import PathDescriptor from './pathdescriptor'

import './nav.css'

const Nav = ( { title, dark = true, root = true } ) => {
  return (
    <div className={`noselect Nav ${dark ? 'Nav-Dark' : 'Nav-Light'}`}>
      <Logo dark={dark} />
      <PathDescriptor dark={dark} title={title} />
    </div>
  )
}

export default Nav