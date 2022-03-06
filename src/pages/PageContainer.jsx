import { motion } from 'framer-motion'

import Footer from '../components/footer/footer'
import './PageContainer.css'

const PageContainer = ( { children, title, dark = true, classNameConfig = {}, root = true } ) => {
  const {
    pageContainerClasses = "",
    pageContentClasses = "",
    footerClasses = ""
  } = classNameConfig

  return (
    <motion.div
      className={`Page-Container ${pageContainerClasses}`}
      transition={{duration: 1}}>
      <div className={`Page-Content ${pageContentClasses}`}>
        {children}
      </div>
      <Footer pageKey={title} />
    </motion.div>
  )
}

export default PageContainer