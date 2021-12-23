import './footer.css'

const Footer = ( { title, dark = true, root = true } ) => {
  return (
    <div className={`noselect Footer ${dark ? 'Footer-Dark' : 'Footer-Light'}`}>
      <p>{'MADE WITH <3'}</p>
    </div>
  )
}

export default Footer