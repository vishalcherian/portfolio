import { Link } from 'react-router-dom'
import Nav from '../../components/nav'

import './About.css'

const linkStyle = {
  textDecoration : 'none',
  color : 'blue',
}

const About = props => {
  return (
    <div className="About">
      <Nav dark={false} title='ABOUT' />
      <Link to="/" className="Page-Link" style={linkStyle}>Back</Link>
    </div>
  )
}

export default About