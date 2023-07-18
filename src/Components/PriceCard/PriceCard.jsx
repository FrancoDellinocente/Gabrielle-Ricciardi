/* eslint-disable react/prop-types */
import './PriceCard.css'
import { useState} from 'react';

const PriceCard = ({Info}) => {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

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
          <button className='sectionpc__button' onClick={toggleModal}>
            Contact
          </button>
        </div>
      
        <div className={`pricecard__modal ${modal ? 'isActive' : ''}`}>
            <div className="modal__modalcont">
                <h1 className='modalcont__title'>Contact us</h1>
                <div className='modalcont__info'>
                  <p className='modalcont__paragraph'>All our packages must be planned and booked with at least one week´s advance notice.</p>
                  <p className='modalcont__paragraph'>You can talk to us on our WhatsApp:</p>
                  <p className='modalcont__paragraph modalcont__paragraph--highlight'>(+22) 2222222222</p>
                  <p className='modalcont__paragraph'>Or you can write to us by mail.</p>
                  <p className='modalcont__paragraph modalcont__paragraph--highlight'>example@gmail.com</p>
                </div>
                <button className="sectionpc__button" onClick={toggleModal}> Cerrar </button>
            </div>
        </div>
    </div>
  )
}

export default PriceCard