import './Wines.css'
import Winx from '../../assets/img/Winx_Club.png';
import CardWine from '../CardWine/CardWine';
import { useState, useEffect } from 'react';
import { getAllWine } from '../FakeAPI/FakeAPI';

const Wines = () => {
    const [listwines, setListWines] = useState([]);
    useEffect(() => {
        setListWines(getAllWine());
      }, []);

  return (
    <div className='wines'>
        <div className='wines__bannerprom'>
            <div className='bannerprom__containerimag'>
                <a href='#'>
                    <img src={Winx} alt="" className='bannerprom__imag'/>
                </a>
            </div>
            <div className='bannerprom__info'>
                <h1 className='bannerprom__text'>Discover the best of our exclusive wine club</h1>
                <a className='bannerprom__link' href='#'>Click here</a>
            </div>
        </div>
        <div className='wines__ourwinessection'>
            <h1 className='ourwinessection__title'>Our Wines</h1>
            <div className='wines__wrapwines'>
                {listwines.map((aux)=>(
                    <div key={aux.id} className='wines__cardwines'>
                        <CardWine Info={aux}/>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
};

export default Wines;