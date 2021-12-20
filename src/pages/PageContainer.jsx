import './PageContainer.css'

const PageContainer = ( { children } ) => {
  return (
    <div className="Container">
      {children}
    </div>
  )
}

export default PageContainer