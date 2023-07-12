import { Link } from 'react-router-dom';
import './Wines.css'
import Family_1 from '../../assets/img/Family_1.png';

const Wines = () => {
  
  // eslint-disable-next-line no-unused-vars
  const ListWines = [
    {
        id:1,
        name:'Ruby',
    },    
  ]


  return (
    <div className='wines'>
        <div className='wines__bannerprom'>
            <div className='bannerprom__containerimag'>
                <a href="">
                    <img src={Family_1} alt="" className='bannerprom__imag'/>
                </a>
            </div>
            <div className='bannerprom__info'>
                <h1 className='bannerprom__text'>Discover the best of our exclusive wine club</h1>
                <a className='bannerprom__link' href='#'>Click here</a>
            </div>
        </div>
        <div className='wines__wrapwines'>
            <Link to=""> </Link>
        </div>
    </div>
  );
};

export default Wines;