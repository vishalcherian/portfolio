import { Link } from 'react-router-dom'
import PageContainer from '../PageContainer'

import './Connect.css'

const Projects = props => {
  return (
    <PageContainer className="Connect" title="CONNECT">
      <div className="Projects">
        <Link to="/" className="Page-Link">Back</Link>
      </div>
    </PageContainer>
  )
}

export default Projects