import './WineDetail.css'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getWineById } from '../FakeAPI/FakeAPI';

const WineDetail = () => {
    const [wine, setWine] = useState({});
    const { parametro } = useParams();

    const scrollToTop = () => {
        window.scrollTo(0, 0);
      };

    useEffect(() => {
        const wine = getWineById(parametro);
        if (wine) {
          setWine(wine);
        }
      }, [parametro]);

    return (
        <div className='winesdetail'>
            <div className='winesdetail__containerinfo'>
                <div className='winesdetail__containerdescription'>
                    <h1 className='winesdetail__name'>{wine.name}</h1>
                    <h1 className='containerdescription__title'>DESCRIPTION:</h1>
                    <p className='containerdescription__paragraph'>{wine.description}</p>
                    <h1 className='containerdescription__title'>VARIETAL:</h1>
                    <p className='containerdescription__paragraph'>{wine.varietal}</p>
                    <h1 className='containerdescription__title'>TASTING NOTES:</h1>
                    <p className='containerdescription__paragraph'>{wine.notes}</p>
                </div>
                <div className='winesdetail__containerbottle'>
                    <img className='winesdetail__bottle' src={wine.wine} loading="lazy"/> 
                </div> 
            </div>
            <Link to="/wines" className='winesdetail__return' onClick={scrollToTop}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='icon__return' height="32" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M14.5 1.5a.5.5 0 0 1 .5.5v4.8a2.5 2.5 0 0 1-2.5 2.5H2.707l3.347 3.346a.5.5 0 0 1-.708.708l-4.2-4.2a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 8.3H12.5A1.5 1.5 0 0 0 14 6.8V2a.5.5 0 0 1 .5-.5z"/>
                </svg>
            Return
            </Link>

        </div>
    );
};

export default WineDetail;