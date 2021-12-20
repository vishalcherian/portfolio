import Logo from './logo'
import PathDescriptor from './pathdescriptor'

import './nav.css'

const Nav = ( { title, dark = true } ) => {
  return (
    <div className={`noselect Nav ${dark ? 'Nav-Dark' : 'Nav-Light'}`}>
      <Logo dark={dark} />
      <PathDescriptor dark={dark} title={title} />
    </div>
  )
}

export default Nav