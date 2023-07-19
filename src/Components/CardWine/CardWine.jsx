/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import './CardWine.css'
import { useState } from 'react';

const CardWine = ({Info}) => {

    const [buttonText, setButtonText] = useState(false);

    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };
  
    const handleMouseEnter = () => {
        setButtonText(true);
      };
    
      const handleMouseLeave = () => {
        setButtonText(false);
      };


    return (
        <div className='cardwine'>
            <div className='cardwine__containerimg'>
                <img className='cardwine__img' src={Info.img} loading="lazy"/>
            </div>
            <Link
            to={'/wineDetail/' + Info.id}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={scrollToTop}
            className='cardwine__button'
            >
                    {buttonText ? 'more info' : Info.name}
            </Link>
        </div>
    )
}

export default CardWine