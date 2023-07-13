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
            <div className='winesdetail__containertitle'>
                <h1 className='winesdetail__title'>{wine.name}</h1>
            </div>
            <div className='winesdetail__containerinfo'>
                <div 
                className='winesdetail__containerdescription'
                style={{
                    background: `linear-gradient(rgba(5, 7, 12, 0.75), rgba(5, 7, 12, 0.75)), url(${wine.rock}) no-repeat center center fixed`,
                    backgroundSize: 'cover',
                    }}
                >
                    <h1 className='winesdetail__description'>{wine.description}</h1>
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