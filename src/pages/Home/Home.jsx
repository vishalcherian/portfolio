import { useEffect } from 'react'
import {
  Link
} from 'react-router-dom'

import Nav from '../../components/nav'
import ProfilePic from '../../components/profilepic'

import './Home.css'

const linkStyle = {
  color : 'white',
  textDecoration : 'none',
  
}

const Home = props => {
  useEffect( () => {
    const el = document.querySelector('.fader.Content')
    setTimeout(() => {
      el.classList.add('fade-in')
    }, 2500)
  } )
  
  return (
    <div className="Home">
      <Nav dark={true} title="HOME"/>
      {/* <p>welcome to vishalcherian.xyz</p>
      <p>we are currently under construction</p> */}
      {/* <Link to="/about" className="Page-Link">about</Link> */}
      <ProfilePic />
      <div className="fader Content">
        <div className="Link-Container">
          <Link to="/about" className="speciallink Page-Link">about</Link>
          <Link to="/projects" className="speciallink Page-Link">projects</Link>
          <Link to="/connect" className="speciallink Page-Link">connect</Link>
        </div>
      </div>
    </div>
  )
}

export default Home