import {
  Link
} from 'react-router-dom'
import Nav from '../components/nav'

import './Home.css'

const linkStyle = {
  color : 'white',
  textDecoration : 'none',
  
}

const Home = props => {
  return (
    <div className="Home">
      <Nav dark={true} title="HOME"/>
      {/* <p>welcome to vishalcherian.xyz</p>
      <p>we are currently under construction</p> */}
      {/* <Link to="/about" className="Page-Link">about</Link> */}
      <div className="Content">
        <div className="Link-Container">
          <Link to="/about" className="Page-Link">about</Link>
          <Link to="/projects" className="Page-Link">projects</Link>
          <Link to="/connect" className="Page-Link">connect</Link>
        </div>
      </div>
    </div>
  )
}

export default Home