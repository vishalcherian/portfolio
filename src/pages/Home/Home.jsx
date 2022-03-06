import { useEffect } from 'react'
import {
  Link
} from 'react-router-dom'
import { motion } from 'framer-motion'

import PageContainer from '../PageContainer'
import './Home.css'

const classNameConfig = {
  pageContainerClasses : "Home",
  pageContentClasses : ""
}

const containerVariants = {
  intial : {
    opacity : 0
  },
  animate : {
    opacity : 1,
    transition : { ease : 'easeInOut', when : 'beforeChildren', staggerChildren : .4 }
  },
  exit : {
    opacity : 0,
    transition : { ease : 'easeInOut', when : 'afterChildren' }
  }
}

const titleVariants = {
  initial : { 
    opacity: 0,
    y: '100%'
  },
  animate : { 
    opacity: 1,
    y: 0,
    transition : { duration : .3, type : 'spring', stiffness : 80, damping : 10 } 
  },
  exit : {
    opacity: 0,
    y: '100%',
    transition : { duration : .3, type : 'spring', stiffness : 80, damping : 10 }
  }
}

const Home = props => {

  return (
    <PageContainer classNameConfig={classNameConfig} title="HOME">
      <motion.div
        variants={containerVariants}
        initial="initial"
        animate="animate"
        exit="exit">
        <div className="TextContainer">
          <motion.h1 variants={titleVariants}>
              My name is Vishal.
          </motion.h1>
        </div>

        <div className="TextContainer">
          <motion.h1 variants={titleVariants}>
            I'm an engineer.
          </motion.h1>
        </div>

        <div className="TextContainer">
          <motion.h1 variants={titleVariants}>
            I live in SF.
          </motion.h1>
        </div>
      </motion.div>
    </PageContainer>    
  )
}

export default Home