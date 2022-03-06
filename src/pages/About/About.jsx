import { useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Link
} from 'react-router-dom'

import PageContainer from '../PageContainer'
import './About.css'

const aboutTextVariant = {
  initial : {
    opacity : 0,
  },
  animate : {
    opacity : 1,
    transition : {
      duration : 1,
      ease : 'easeInOut',
      when : 'beforeChildren'
    }
  },
  exit : {
    opacity : 0,
    transition : {
      duration : .5,
      ease : 'easeInOut'
    }
  },
  whileHover : {}
}

const aboutTextSpanVariant = {
  initial : {
    scale : 1
  },
  animate : {
    color : 'rgb(214, 255, 175)',
    scale : 1.1,
    transition : {
      duration : 1,
      ease : 'easeInOut'
    }
  },
}

const About = props => {
  const classNameConfig = {
    pageContainerClasses : "About",
    pageContentClasses : ""
  }

  return (
    <PageContainer classNameConfig={classNameConfig} title="ABOUT">
      <motion.h1
        variants={aboutTextVariant}
        initial="initial"
        animate="animate"
        exit="exit"
        whileHover="whileHover" >
        I'm currently working <motion.span variants={aboutTextSpanVariant} className="span">@Salesforce </motion.span> 
        as a software engineer. I graduated in 2019 from 
        <motion.span variants={aboutTextSpanVariant} className="span"> UConn</motion.span> with a Bachelor's
        in Computer Science, and I'm deeply interested in how software can shape our world. I'm interested in 
        <motion.span variants={aboutTextSpanVariant} className="span"> AI/ML</motion.span>,
        <motion.span variants={aboutTextSpanVariant} className="span"> blockchain</motion.span>, and 
        <motion.span variants={aboutTextSpanVariant} className="span"> startups</motion.span>. I believe wealth 
        inequality {'&'} climate change will prove to be the 21st century's most pressing problems.
      </motion.h1>
    </PageContainer>
  )
}

export default About