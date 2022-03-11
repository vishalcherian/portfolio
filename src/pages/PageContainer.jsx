import { motion } from 'framer-motion'

import Footer from '../components/footer/footer'
import './PageContainer.css'

const pageContainerVariant = {
  initial : {
    opacity : 0,
  },
  animate : {
    opacity : 1,
    transition : { duration : 1, ease : 'easeInOut', when : 'beforeChildren' }
  },
  exit : {
    opacity : 0,
    transition : { duration : 1, ease : 'easeInOut', when : 'afterChildren' }
  }
}

const PageContainer = ( { children, title, dark = true, classNameConfig = {}, root = true } ) => {
  const {
    pageContainerClasses = "",
    pageContentClasses = "",
    footerClasses = ""
  } = classNameConfig

  return (
    <motion.div
      className={`Page-Container ${pageContainerClasses}`}
      variants={pageContainerVariant}
      initial="initial"
      animate="animate"
      exit="exit" >
      <motion.div className={`Page-Content ${pageContentClasses}`}>
        {children}
      </motion.div>
      <Footer pageKey={title} />
    </motion.div>
  )
}

export default PageContainer