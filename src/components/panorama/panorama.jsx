import { useState } from 'react'

import './panorama.css'

const Panorama = ( { data, classes = []} ) => {
  
  const [ itemIndex, setItemIndex ] = useState(0)

  const onNext = () => {
    if( itemIndex == data.length - 1 ) {
      setItemIndex( 0 )
    } else {
      setItemIndex( itemIndex + 1 )
    }
  }

  const onBack = () => {
    if( itemIndex == 0 ) {
      setItemIndex( data.length - 1 )
    } else {
      setItemIndex( itemIndex - 1 )
    }
  }

  const {
    imgSrc = '',
    title = 'TITLE',
    description = 'DESCRIPTION'
  } = data[itemIndex]

  const { containerClasses = [], contentClasses = [], titleClasses = [] } = classes

  return (
    <div className={`Panorama ${containerClasses.join(' ')}`}>
      {/* {imgSrc ? <img className="Panorama-Image" src={imgSrc} alt="project image" /> : <></>} */}
      <div className={`Panorama-Content ${contentClasses.join(' ')}`}>
        <h1 className={`pagetitle ${titleClasses.join(' ')}`}>{title}</h1>
        <p>
          {description}
        </p>
      </div>
      <div className="Panorama-Buttons">
        <button type="button" onClick={onBack}>{'< Back'}</button>
        <button type="button" onClick={onNext}>{'Next >'}</button>
      </div>
    </div>
  )
}

export default Panorama