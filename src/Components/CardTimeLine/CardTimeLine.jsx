/* eslint-disable react/prop-types */
import './CardTimeLine.css'


const CardTimeLine = ({Info}) => {

  return (
    <div className='card'>
        <div className='card__info'>
            <div className='card__conataineryear'>
              <p className='card__year'>{Info.year}</p>
              <div className='card__line'></div>
            </div>
            <h1 className='card__title'>{Info.title}</h1>
            <p className='card__paragraph'>{Info.paragraph}</p>
        </div>
        <div className='card__containerimg'>
          <img className='card__img' src={Info.img} loading="lazy"/>
        </div>
    </div>
  )
}

export default CardTimeLine