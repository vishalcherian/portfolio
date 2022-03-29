import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './footer.css'

const linkConfig = [
  {
    title : 'home',
    type : 'internal',
    props : {
      href : '/',
    }
  },
  {
    title : 'about',
    type : 'internal',
    props : {
      href : '/about',
    }
  },
  {
    title : 'linkedin',
    type : 'external',
    props : {
      target : '_blank',
      href : 'https://www.linkedin.com/in/vishalmathewcherian/',
    }
  },
  {
    title : 'github',
    type : 'external',
    props : {
      target : '_blank',
      href : 'https://github.com/vishalcherian',
    }
  },
  {
    title : 'medium',
    type : 'external',
    props : {
      href : '#',
      disabled : true
    }
  }
]

const footerContainerVariants = {
  initial : { width : 0 },
  animate : { width : '100%', transition : { duration : 1, type : 'spring', delay : 2, when : 'beforeChildren', staggerChildren : .1 } },
  exit : { width : 0, transition : { ease : 'easeInOut', when : 'afterChildren', staggerChildren : .1, staggerDirection : -1 }, }
}

const footerContentVariants = {
  initial : { opacity : 0, y : '100%' },
  animate : { opacity : 1, y : 0, transition : { duration : .3 } },
  exit : { opacity : 0, y : '100%', transition : { ease : 'easeInOut' } }
}
const Footer = ( { pageKey } ) => {
  const generateLinks = () => {
    return linkConfig.map( ( item, index )  => {

      const { title, type, props : { target = "", href } } = item
      if (pageKey.toLowerCase() === title) return <></>
      return (
        <motion.div className={`Footer-Link-Container ${pageKey}-Footer-Container`} variants={footerContentVariants} key={title}>
          { type === 'external' ? 
              <a className={`Footer-Link ${pageKey}-Footer-Link`} href={href} target={target} >
                {title}
              </a> 
              :
              <Link className={`Footer-Link ${pageKey}-Footer-Link`} target={target} to={href}>
                {title}
              </Link>
          }
          {index !== linkConfig.length - 1 ? <p className={`Footer-Divider ${pageKey}-Footer-Divider`}>/</p> : <></>}
        </motion.div>
      )
    })
  }

  return (
    <motion.div
      variants={footerContainerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className={`noselect Footer-Container ${pageKey}-Footer-Container`}>
      <div className={`Footer-Content ${pageKey}-Footer-Content`}>
        {generateLinks()}
      </div>
    </motion.div>
  )
}

export default Footer