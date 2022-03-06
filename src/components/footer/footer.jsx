import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import './footer.css'

const linkConfig = [
  {
    title : 'home',
    props : {
      href : '/',
    }
  },
  {
    title : 'about',
    props : {
      href : '/about',
    }
  },
  {
    title : 'linkedin',
    props : {
      target : '_blank',
      href : '/linkedin',

    }
  },
  {
    title : 'github',
    props : {
      target : '_blank',
      href : '/github',
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
const Footer = ( { title, dark = true, root = true } ) => {

  const generateLinks = () => {
    return linkConfig.map( ( item, index )  => {

      const { title, props : { target = "", href } } = item

      return (
        <motion.div className="Footer-Link-Container" variants={footerContentVariants} key={title}>
          <Link className={`Footer-Link ${title}-Footer-Link`} target={target} to={href}>
            {title}
          </Link>
          {index !== linkConfig.length - 1 ? <p className={`Footer-Divider ${title}-Footer-Divider`}>/</p> : <></>}
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
      className={`noselect Footer ${title}-Footer-Container`}>
      <div className={`Footer-Content ${title}-Footer-Content`}>
        {generateLinks()}
      </div>
    </motion.div>
  )
}

export default Footer