import Nav from '../components/nav'
import './PageContainer.css'

const PageContainer = ( { children, title, dark = true, className, root = true } ) => {
  return (
    <div className={`Page-Container ${className}`}>
      <Nav title={title} dark={dark} />
      <div className="Page-Content">
        {children}
      </div>
    </div>
  )
}

export default PageContainer