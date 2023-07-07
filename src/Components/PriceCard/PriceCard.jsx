/* eslint-disable react/prop-types */
import './PriceCard.css'


const PriceCard = ({Info}) => {

  return (
    <div className='pricecard'>
        <div className='pricecard__sectionpc'>
            <h1 className='sectionpc__name'>{Info.name}</h1>
        </div>
        <div className='pricecard__line'></div>
        <div className='pricecard__sectionpc'>
            <h2 className='sectionpc__number'>{Info.price} USD</h2>
        </div>
        <div className='pricecard__line'></div>
        <div className='pricecard__sectionpc pricecard__sectionpc--info'>
            {Info.paragraph.map((aux)=>(
              <p className='sectionpc__point' key={aux.id}>{aux}</p>
            ))}
        </div>
        <div className='pricecard__line'></div>
        <div className='pricecard__sectionpc'>
          <button className='sectionpc__button'>Contact</button>
        </div>
    </div>
  )
}

export default PriceCard