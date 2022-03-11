import { motion } from 'framer-motion'

import PageContainer from '../PageContainer'
import './About.css'

const aboutTextVariant = {
  initial : {
    y : '100%',
    opacity : 0,
  },
  animate : {
    y : 0,
    opacity : 1,
    transition : {
      duration : 1,
      ease : 'easeInOut',
      when : 'beforeChildren'
    }
  },
  exit : {
    y : '-100%',
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
    color : 'rgb(150, 255, 255)',
    scale : 1.1,
    transition : {
      duration : 1,
      ease : 'easeInOut'
    }
  },
}

const About = props => {
  const classNameConfig = {
    pageContainerClasses : "About About-Color",
    pageContentClasses : ""
  }

  return (
    <PageContainer classNameConfig={classNameConfig} title="ABOUT">
      <motion.h1
        variants={aboutTextVariant}
        whileHover="whileHover" >
        I'm deeply interested in technology and how it shapes our world today. However, I'm just as much a skeptic as
        I am a believer. Software has increased our collective quality of life through easier access to education,
        financial tools, and opportunities. But it has also created massive inequality and has morphed capitalism into something
        that more resembles technofeudalism. Web3 claims to be the answer, but considering the big money investors in the space, 
        time will tell if that really is the case.
      </motion.h1>
      <div className="spacer" />
      <motion.h1
        variants={aboutTextVariant}
        whileHover="whileHover" >
        I work at <motion.span variants={aboutTextSpanVariant} initial="initial" animate="animate">@Salesforce</motion.span> and 
        live in the Bay Area. I'm a Connecticut native, and have spent most of my career bouncing around the east coast, the 
        world, and any place with good WiFi. If you find me interesting at all, shoot me an email!
      </motion.h1>
    </PageContainer>
  )
}

export default About