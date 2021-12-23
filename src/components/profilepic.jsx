import { useEffect } from 'react' 
import { motion } from 'framer-motion'

import sample from '../assets/rdowneyjr.jpeg'

import './profilepic.css'

const transition = { duration : 1, ease : [.43, .13, .23, 0.96] }

const ProfilePic = ( { className, classes } ) => {

  // useEffect( () => {
  //   const el = document.querySelector('.Image')
  //   setTimeout(() => {
  //     el.classList.add(['fade-in'])
  //   })
  // } )

  const { containerClasses, imageClasses } = classes

  return (
    <div className={`${containerClasses.join(' ')}`}>
      <motion.img 
        className={`Image ${imageClasses.join(' ')}`}
        whileHover={{ scale : 1.1 }} 
        transition={transition}
        src={sample} alt="robert downey jr." />
    </div>
  )
}

export default ProfilePic