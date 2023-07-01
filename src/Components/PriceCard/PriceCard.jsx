/* eslint-disable react/prop-types */
import './PriceCard.css'


const PriceCard = ({Info}) => {

  return (
    <div className='pricecard'>
        <div className='pricecard__nameplan'>
            <h1 className='nameplan__name'>{Info.name}</h1>
        </div>
        <div className='pricecard__price'>
            <h2 className='price__number'>{Info.price} USD</h2>
        </div>
        <div className='pricecard__info'>
            {Info.paragraph.map((aux)=>(
              <p className='info__point' key={aux.id}>{aux}</p>
            ))}
        </div>
        <div className='pricecard__buttoncontainer'>
          <button className='pricecard__button'></button>
        </div>
    </div>
  )
}

export default PriceCard