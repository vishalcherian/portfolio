import { motion } from 'framer-motion'
import './link.css'

const Link = ( { className, href, title, hoverColor } ) => {

  return (
    <motion.a
      whileHover={{ textShadow: `0px 3px 5px ${hoverColor}`}}
      transition={{ duration: .5}}
      href={href}
      className={`${className}`}>
      {title}
    </motion.a>
  )
}

export default Link