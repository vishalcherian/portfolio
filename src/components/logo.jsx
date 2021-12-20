import './logo.css'

const Logo = ( { dark = true } ) => {


  return (
    <div className={`Logo ${dark ? 'Logo-Dark' : 'Logo-Light'}`}>
      <p className="Line">VISHAL</p>
      <p className="Line">CHERIAN</p>
      <p className="Line">XYZ</p>
    </div>
  )
}

export default Logo