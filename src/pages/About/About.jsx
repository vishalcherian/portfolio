import { motion } from 'framer-motion'

import PageContainer from '../PageContainer'
import './About.css'
import PLACEHOLDER from '../../assets/profile-placeholder.jpg'

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
    pageContentClasses : "About-Content"
  }

  return (
    <PageContainer classNameConfig={classNameConfig} title="ABOUT">
      <motion.div>
        <motion.h1
          variants={aboutTextVariant}
          whileHover="whileHover" >
          I'm deeply interested in technology and how it shapes our world today. 
        </motion.h1>
        <div className="spacer" />
        < motion.p variants={aboutTextVariant} whileHover="whileHover">
        However, I'm just as much a skeptic as I am a believer. Software has increased our collective quality of life through easier 
        access to education, financial tools, and opportunities. But it has also created massive inequality and has morphed capitalism into something
          that more resembles technofeudalism. Web3 claims to be the answer, but considering the big money investors in the space, 
          time will tell if that really is the case.
        </motion.p>

        <div className="spacer-sm" />
        <motion.p
          variants={aboutTextVariant}
          whileHover="whileHover" >
          I work at <motion.span variants={aboutTextSpanVariant} initial="initial" animate="animate">@Salesforce</motion.span> and 
          live in the Bay Area. I'm a Connecticut native, and have spent most of my career bouncing around the east coast, the 
          world, and any place with good WiFi. If you find me interesting at all, shoot me an email!
        </motion.p>
      </motion.div>
    </PageContainer>
  )
}

export default About