import './WineDetail.css'
import { Link, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getWineById } from '../FakeAPI/FakeAPI';

const WineDetail = () => {
    const [wine, setWine] = useState({});
    const { parametro } = useParams();

    useEffect(() => {
        const wine = getWineById(parametro);
        console.log(wine);
        if (wine) {
          setWine(wine);
        }
      }, [parametro]);

    return (
        <div className='winesdetail'>
            <div className='winesdetail__containerinfo'>
                <div className='winesdetail__containerdescription'>
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
            <Link to="/wines">back</Link>

        </div>
    );
};

export default WineDetail;