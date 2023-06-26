/* eslint-disable react/prop-types */
import './CardTimeLine.css'


const CardTimeLine = ({Info}) => {

  return (
    <div className='card'>
        <div className='card__info'>
            <h1>{Info.title}</h1>
            <p>{Info.paragraph}</p>
        </div>
        <img className='card__img' src={Info.img} />
    </div>
  )
}

export default CardTimeLine