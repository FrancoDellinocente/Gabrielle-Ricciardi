/* eslint-disable react/prop-types */
import './CardVisit.css'


const CardVisit = ({Info}) => {

  return (
    <div className='card'>
        <div className='card__info'>
            <p>{Info.paragraph}</p>
        </div>
        <img className='card__img' src={Info.img} />
    </div>
  )
}

export default CardVisit