/* eslint-disable react/prop-types */
import './CardTimeLine.css'


const CardTimeLine = ({Info}) => {

  return (
    <div className='card'>
        <img className='card__img' src={Info.img} loading="lazy"/>
        <div className='card__info'>
            <h1 className='card__title'>{Info.title}</h1>
            <p className='card__paragraph'>{Info.paragraph}</p>
        </div>
    </div>
  )
}

export default CardTimeLine