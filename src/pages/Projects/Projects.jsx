import { useState } from 'react'
import { Link } from 'react-router-dom'

import Panorama from '../../components/panorama/panorama'
import PageContainer from '../PageContainer'
import projectsCopy from '../../copy/projectscopy'
import './Projects.css'

const Projects = props => {

  const [ projectIndex, setProjectIndex ] = useState(0)

  const panoramaClasses = {
    container : [ 'Projects-Panorama' ],
    content : [ 'Projects-Content' ],
    title : [],
    description : [],
    buttons : []
  }

  return (
    <PageContainer className="Projects" title="PROJECTS" dark={false} root={false}>
      <div className="Projects-Content">
        {/* <div className="Title-Section">
          <h1 className="pagetitle">projects</h1>
        </div> */}
        <Panorama data={projectsCopy} classes={panoramaClasses}/>
      </div>
    </PageContainer>
  )
}

export default Projects