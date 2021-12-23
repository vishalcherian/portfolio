import { useEffect } from 'react'
import {
  Link
} from 'react-router-dom'

import PageContainer from '../PageContainer'
import ProfilePic from '../../components/profilepic'

import './Home.css'

const linkStyle = {
  color : 'white',
  textDecoration : 'none',
  
}

const profilePicClasses = {
  containerClasses : [ 'Home-Pic-Container' ],
  imageClasses : []
}

const Home = props => {
  return (
    <PageContainer className="Home" title="HOME" dark root>
      <ProfilePic classes={profilePicClasses} />
      <div className="Content">
        <div className="Link-Container">
          <Link to="/about" className="speciallink Page-Link">about</Link>
          <Link to="/projects" className="speciallink Page-Link">projects</Link>
          <Link to="/connect" className="speciallink Page-Link">connect</Link>
        </div>
      </div>
    </PageContainer>
  )
}

export default Home