import './pathdescriptor.css'

const Logo = ( { dark = true, title } ) => {
  return (
    <div className={`Path ${dark ? 'Path-Dark' : 'Path-Light'}`}>
      <p className="Line">/</p>
      <div className="Separator"></div>
      <p className="Line">{title || ''}</p>
    </div>
  )
}

export default Logo