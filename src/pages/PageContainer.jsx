import Nav from '../components/nav'
import './PageContainer.css'

const PageContainer = ( { children, title, dark = true, className } ) => {
  return (
    <div className={`Container ${className}`}>
      <Nav title={title} dark={dark} />
      {children}
    </div>
  )
}

export default PageContainer