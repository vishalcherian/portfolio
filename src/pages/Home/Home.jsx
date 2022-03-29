import { useEffect, useState } from 'react'
import {
  Link
} from 'react-router-dom'
import { motion } from 'framer-motion'

import pic from '../../assets/rdowneyjr.jpeg'
import PageContainer from '../PageContainer'
import './Home.css'
import { render } from '@testing-library/react'

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
    transition : { duration : .3, type : 'spring', stiffness : 80, damping : 15 } 
  },
  exit : {
    opacity: 0,
    y: '-100%',
    transition : { duration : 5, type : 'spring', stiffness : 80, damping : 10 }
  }
}

const spanVariants = JSON.parse( JSON.stringify( titleVariants ) )
console.log( spanVariants )
const occupations = [ 'an engineer', 'a musician', 'a bad dancer', 'a human being', 'hella single']
let interval = null

const Home = ( { document } ) => {

  const [ occi, setOccupation ] = useState( 0 )

  useEffect( () => {
    interval = setInterval( () => {
      setOccupation( (occi + 1) % occupations.length )
    }, 3000)
    return () => {
      clearInterval(interval)
    }
  } )

  const renderSpan = ( index ) => {
    return (
      <motion.span
        className="Home-Span"
        key={index} 
        variants={spanVariants}>
        {occupations[index]}
      </motion.span>
    )
  }

  return (
    <PageContainer classNameConfig={classNameConfig} title="HOME">
      <motion.img
        initial={{ scale : .5 }}
        whileHover={{ scale : .52}}
        transition={{ ease : 'easeInOut' }}
        className="Home-Image"
        src={pic} 
        alt="me cheesin'"/>
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
            I'm {renderSpan( occi )}.
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