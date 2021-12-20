import { Link } from 'react-router-dom'
import Nav from '../../components/nav'
import PageContainer from '../PageContainer'

import './Projects.css'

const Projects = props => {
  return (
    <PageContainer className="Projects" title="PROJECTS" dark={false}>
      <div className="Projects">
        <Link to="/" className="Page-Link">Back</Link>
      </div>
    </PageContainer>
  )
}

export default Projects